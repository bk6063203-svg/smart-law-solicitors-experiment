import { useLayoutEffect, useRef } from "react";
import { team } from "@/data/site";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSite } from "@/context/SiteContext";
import { gsap } from "@/lib/gsap";
import { TeamCard } from "@/components/TeamCard";

export function TeamGrid({ layout = "grid" }: { layout?: "grid" | "rail" }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useSite();
  const desktop = useMediaQuery("(min-width: 1024px)");
  const rail = layout === "rail" && desktop && !reducedMotion;

  useLayoutEffect(() => {
    if (!rail || !wrap.current || !track.current) return;
    const trackNode = track.current;
    const context = gsap.context(() => {
      gsap.to(trackNode, {
        x: () => -(trackNode.scrollWidth - window.innerWidth + 48),
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top top",
          end: () => `+=${trackNode.scrollWidth}`,
          pin: true,
          scrub: 0.75,
          invalidateOnRefresh: true,
        },
      });
    }, wrap);
    return () => context.revert();
  }, [rail]);

  if (rail) {
    return (
      <div ref={wrap} className="relative h-svh overflow-hidden bg-mist">
        <div className="flex h-full flex-col pt-24">
          <div className="px-8 pb-6 lg:px-12">
            <p className="text-xs font-medium tracking-[0.08em] text-steel uppercase">Our people</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl text-navy sm:text-5xl">
              The confirmed team. No invented biographies.
            </h2>
          </div>
          <div ref={track} className="flex h-full min-h-0 gap-5 px-8 pb-10 lg:px-12">
            {team.map((person) => (
              <div key={person.id} className="h-full w-[32vw] min-w-[320px] shrink-0">
                <TeamCard person={person} className="h-full min-h-0" />
              </div>
            ))}
            <div className="flex w-[28vw] min-w-[280px] shrink-0 items-end pb-4">
              <p className="max-w-xs text-sm leading-relaxed text-charcoal">
                Senior access is the default. Every instruction is led by an experienced practitioner.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {team.map((person) => (
        <TeamCard key={person.id} person={person} className="aspect-[3/4] min-h-0" />
      ))}
    </div>
  );
}
