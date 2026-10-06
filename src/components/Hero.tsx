import { useLayoutEffect, useRef } from "react";
import { ArrowDown, Phone } from "lucide-react";
import { firm } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { gsap } from "@/lib/gsap";
import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/HeroVideo";

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { navigate, reducedMotion } = useSite();

  useLayoutEffect(() => {
    if (reducedMotion) return;
    const context = gsap.context(() => {
      gsap.from("[data-hero-item]", {
        y: 28,
        autoAlpha: 0,
        duration: 1.05,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.12,
      });
    }, root);
    return () => context.revert();
  }, [reducedMotion]);

  return (
    <section ref={root} className="dark-surface relative min-h-svh overflow-hidden text-white">
      <HeroVideo />
      <p className="sr-only">Background visual film.</p>
      <div className="relative z-10 mx-auto flex min-h-svh max-w-[1240px] flex-col justify-end px-5 pt-32 pb-16 sm:px-8 lg:justify-center lg:px-10 lg:pt-28 lg:pb-20">
        <div className="max-w-3xl">
          <p data-hero-item className="text-xs font-medium tracking-[0.08em] text-mist uppercase">
            Solicitors · England and Wales
          </p>
          <h1
            data-hero-item
            className="mt-5 max-w-4xl font-display text-[3.1rem] leading-[0.94] font-medium tracking-[-0.03em] text-balance sm:text-7xl lg:text-[5.7rem]"
          >
            <span className="block">Considered legal counsel</span>
            <span className="block font-display">for the decisions</span>
            <span className="block">that matter.</span>
          </h1>
          <p data-hero-item className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            Smart Law Solicitors advises individuals, families and businesses from our office in Huddersfield, providing personal attention and meticulous review of every document.
          </p>
          <div data-hero-item className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="light" onClick={() => navigate("contact")}>
              Speak to a Solicitor
            </Button>
            <Button variant="ghost-light" onClick={() => navigate("services")}>
              Our Services
            </Button>
          </div>
          <div data-hero-item className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mist">
            <a href={firm.phoneHref} className="inline-flex items-center gap-2 link-draw">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {firm.phoneDisplay}
            </a>
            <span className="hidden h-4 w-px bg-white/30 sm:block" aria-hidden="true" />
            <span>Office in Huddersfield · England and Wales</span>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 lg:absolute lg:right-10 lg:bottom-10 lg:mt-0">
          <a
            href="#intro"
            data-hero-item
            className="inline-flex items-center gap-3 text-xs tracking-[0.08em] text-mist uppercase"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("intro")?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
            }}
          >
            <span className="scroll-nudge inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </span>
            <span>Scroll</span>
          </a>
          <div data-hero-item className="hidden flex-col items-end text-right text-xs text-mist/75 sm:flex">
            <span className="font-medium text-white/90">London, at night</span>
            <span className="mt-0.5 text-[0.72rem] text-mist/60">A visual setting. Not an office</span>
          </div>
        </div>
      </div>
    </section>
  );
}
