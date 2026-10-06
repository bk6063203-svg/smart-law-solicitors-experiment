import { useLayoutEffect, useRef } from "react";
import { journeyServices } from "@/data/site";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSite } from "@/context/SiteContext";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceVisual } from "@/components/ServiceVisual";

export function ServiceScroller() {
  const root = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const { reducedMotion, navigate, lenisRef } = useSite();
  const desktop = useMediaQuery("(min-width: 1024px)");
  const cinematic = desktop && !reducedMotion;

  useLayoutEffect(() => {
    if (!cinematic) return;
    const pinNode = pin.current;
    if (!pinNode) return;
    const panels = gsap.utils.toArray<HTMLElement>("[data-service-panel]", pinNode);
    const numbers = gsap.utils.toArray<HTMLElement>("[data-service-index]", pinNode);
    const live = pinNode.querySelector<HTMLElement>("[data-service-live]");
    const bar = pinNode.querySelector<HTMLElement>("[data-service-bar]");
    let last = -1;

    const context = gsap.context(() => {
      gsap.set(panels, { autoAlpha: 0, y: 28 });
      gsap.set(panels[0], { autoAlpha: 1, y: 0 });
      numbers[0]?.classList.add("is-active");

      const timeline = gsap.timeline({
        scrollTrigger: {
          id: "service-journey",
          trigger: pinNode,
          start: "top top",
          end: `+=${(journeyServices.length - 1) * 95}%`,
          pin: true,
          scrub: 0.65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(journeyServices.length - 1, Math.floor(self.progress * journeyServices.length));
            if (bar) bar.style.transform = `scaleY(${self.progress})`;
            numbers.forEach((node, itemIndex) => {
              node.classList.toggle("is-active", itemIndex === index);
            });
            if (live && index !== last) {
              last = index;
              const service = journeyServices[index];
              live.textContent = `${service.journeyNumber ?? service.number} ${service.title}`;
            }
          },
        },
      });

      panels.forEach((panel, index) => {
        if (index === 0) return;
        const image = panel.querySelector(".svc-image");
        timeline.to(panels[index - 1], { autoAlpha: 0, y: -24, duration: 0.38 }, index);
        timeline.fromTo(panel, { autoAlpha: 0, y: 32 }, { autoAlpha: 1, y: 0, duration: 0.42 }, index);
        if (image) {
          timeline.fromTo(image, { scale: 1.08 }, { scale: 1, duration: 0.7 }, index);
        }
      });
    }, pinNode);

    return () => context.revert();
  }, [cinematic]);

  const jump = (index: number) => {
    if (!cinematic) {
      document.getElementById(`journey-${journeyServices[index].id}`)?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
      return;
    }
    const trigger = ScrollTrigger.getById("service-journey");
    if (!trigger) return;
    const span = trigger.end - trigger.start;
    const target = trigger.start + (span * index) / Math.max(1, journeyServices.length - 1);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { duration: 1.05 });
    } else {
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  return (
    <section id="services" ref={root} className="dark-surface bg-navy text-white">
      <div className="mx-auto max-w-[1240px] px-5 pt-24 pb-10 sm:px-8 lg:px-10 lg:pt-28">
        <SectionHeader
          light
          eyebrow="Practice areas"
          index="01–06"
          title="Our Practice Areas"
          text="We act on commercial and private matters, applying senior legal judgement to each. Every instruction is assessed on its own facts and documents."
        />
      </div>

      {cinematic ? (
        <div ref={pin} className="relative h-svh overflow-hidden">
          <div className="sr-only" data-service-live aria-live="polite" />
          <div className="absolute top-0 bottom-0 left-0 z-10 hidden w-20 flex-col justify-center gap-3 pl-6 xl:flex">
            <div className="absolute top-1/2 left-[1.65rem] h-40 w-px -translate-y-1/2 bg-white/15" aria-hidden="true">
              <span data-service-bar className="absolute inset-0 origin-top bg-mist" style={{ transform: "scaleY(0)" }} />
            </div>
            {journeyServices.map((service, index) => (
              <button
                key={service.id}
                type="button"
                data-service-index
                onClick={() => jump(index)}
                className="relative z-10 text-left text-xs text-cool transition-colors [&.is-active]:text-white"
                aria-label={`Show ${service.title}`}
              >
                {service.journeyNumber ?? service.number}
              </button>
            ))}
          </div>
          {journeyServices.map((service) => (
            <article
              key={service.id}
              data-service-panel
              className="absolute inset-0 grid lg:grid-cols-2"
            >
              <div className="flex flex-col justify-center px-6 py-20 sm:px-12 lg:px-16 xl:pl-28">
                <p className="font-display text-5xl text-mist">{service.journeyNumber ?? service.number}</p>
                <h3 className="mt-3 max-w-md font-display text-4xl leading-[1.02] text-white xl:text-5xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs tracking-[0.08em] text-cool uppercase">Practice index {service.number}</p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-mist sm:text-base">{service.summary}</p>
                {service.fact ? <p className="mt-4 max-w-md text-sm leading-relaxed text-white">{service.fact}</p> : null}
                {service.points.length ? (
                  <ul className="mt-4 hidden max-w-md space-y-1.5 text-sm text-mist xl:block">
                    {service.points.slice(0, 4).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
                {service.disclaimer ? (
                  <p className="mt-4 max-w-md text-xs leading-relaxed text-mist">{service.disclaimer}</p>
                ) : null}
                <button
                  type="button"
                  onClick={() => navigate("services", service.id)}
                  className="mt-7 w-fit border border-white/30 px-4 py-3 text-sm hover:bg-white hover:text-navy"
                >
                  Discuss this area
                </button>
              </div>
              <div className="relative hidden h-full lg:block">
                <ServiceVisual service={service} className="h-full min-h-0" />
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="space-y-6 px-5 pb-16 sm:px-8">
          <div className="sticky top-[4.5rem] z-20 -mx-5 flex gap-2 overflow-x-auto bg-navy/95 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8">
            {journeyServices.map((service, index) => (
              <button
                key={service.id}
                type="button"
                onClick={() => jump(index)}
                className="shrink-0 border border-white/20 px-3 py-2 text-xs text-mist"
              >
                {service.journeyNumber ?? service.number} {service.title}
              </button>
            ))}
          </div>
          {journeyServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </section>
  );
}
