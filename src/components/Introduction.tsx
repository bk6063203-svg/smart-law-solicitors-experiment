import { useLayoutEffect, useRef } from "react";
import { photo } from "@/data/site";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSite } from "@/context/SiteContext";
import { gsap } from "@/lib/gsap";
import { Scene3D } from "@/components/Scene3D";

const lines = [
  { text: "The traditional firm was built around the lawyer.", muted: false },
  { text: "Smart Law is built around the client.", muted: true },
];

export function Introduction() {
  const root = useRef<HTMLElement>(null);
  const { reducedMotion } = useSite();
  const desktop = useMediaQuery("(min-width: 1280px)");
  const showScene = desktop && !reducedMotion;

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const context = gsap.context(() => {
      gsap.from("[data-intro-line]", {
        y: 36,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root.current,
          start: "top 72%",
        },
      });
      gsap.from("[data-intro-copy]", {
        y: 24,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        delay: 0.15,
        scrollTrigger: {
          trigger: "[data-intro-copy]",
          start: "top 80%",
        },
      });
      const frame = root.current?.querySelector("[data-intro-frame]");
      if (frame) {
        gsap.from(frame, {
          clipPath: "inset(10% 10% 10% 10%)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: frame,
            start: "top 75%",
          },
        });
      }
    }, root);
    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section id="intro" ref={root} className="light-surface relative bg-paper text-charcoal">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-7">
          <h2 className="mt-5 max-w-4xl font-display text-[2.55rem] leading-[1.04] font-medium tracking-[-0.025em] text-navy sm:text-6xl">
            {lines.map((line) => (
              <span
                key={line.text}
                data-intro-line
                className={`block overflow-hidden ${line.muted ? "text-steel/70" : ""}`}
              >
                <span className="block">{line.text}</span>
              </span>
            ))}
          </h2>
          <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed sm:text-[1.05rem]">
            <p data-intro-copy>
              Smart Law Solicitors is a Huddersfield practice for clients who value advice that is clearly explained. Every matter begins with a straightforward agreement on scope: clarity before complexity, and candour before caution.
            </p>
            <p data-intro-copy>
              Our service is personal, our language is plain, and the next step in your matter is always made clear before it is taken.
            </p>
          </div>
          <dl className="mt-12 grid border border-mist bg-white sm:grid-cols-3">
            {[
              ["Senior oversight of every detail", "Every matter is led by an experienced solicitor and receives senior attention throughout."],
              ["Efficient, well-structured processes", "Well-designed workflows reduce delay and keep each matter progressing."],
              ["Clear, practical advice", "Advice is given in plain English, so that you can act on it with confidence."],
            ].map(([title, text]) => (
              <div
                key={title}
                data-intro-copy
                className="group cursor-default border-b border-mist p-6 transition-colors duration-500 ease-out last:border-b-0 sm:border-b-0 sm:border-r sm:p-7 sm:last:border-r-0 hover:bg-navy"
              >
                <dt className="font-display text-[1.4rem] leading-tight text-navy transition-colors duration-500 group-hover:text-white">
                  {title}
                </dt>
                <dd className="mt-4 text-[0.8rem] leading-[1.7] text-charcoal/75 transition-colors duration-500 group-hover:text-mist">
                  {text}
                </dd>
                <span
                  className="mt-6 block h-px w-8 bg-steel/50 transition-all duration-500 group-hover:w-12 group-hover:bg-white/70"
                  aria-hidden="true"
                />
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-5">
          <div data-intro-frame className="relative min-h-[420px] overflow-hidden bg-steel sm:min-h-[520px]">
            <img
              src={photo(34760017, 1600)}
              alt="Architectural city buildings under a clear sky."
              className="h-full min-h-[420px] w-full object-cover sm:min-h-[520px]"
            />
          </div>
          {showScene ? (
            <div className="pointer-events-none absolute -top-8 -left-10 hidden h-[78%] w-[62%] lg:block">
              <Scene3D />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
