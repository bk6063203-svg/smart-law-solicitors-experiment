import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { photo } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { cn } from "@/utils/cn";

type Stage = {
  index: string;
  label: string;
  text: string;
  note: string;
  image: string;
  imageAlt: string;
};

const stages: Stage[] = [
  {
    index: "01",
    label: "Precedent",
    text: "Founded on precedent.",
    note: "The law is a profession built on heritage, and we respect its rigour, its discipline and its duty of care. We combine these with the systems, efficiency and candour that clients rightly expect today.",
    image: "/images/library-heritage.jpg",
    imageAlt:
      "Interior of a grand British legal library with classical fluted columns, ornate ceiling mouldings and bookshelves.",
  },
  {
    index: "02",
    label: "Discipline",
    text: "Refined by discipline.",
    note: "Documents are reviewed for their practical effect. The scope of our support in any transaction is agreed in writing before work begins. Attention to detail is not an administrative formality; it is the substance of our work.",
    image: photo(5511124, 1400),
    imageAlt:
      "A quiet executive boardroom with a long conference table and corporate glass architecture.",
  },
  {
    index: "03",
    label: "Momentum",
    text: "Driven by momentum.",
    note: "Advice delivered late is of limited value. Efficient processes reduce delay, so that senior legal judgement reaches you when it is needed most.",
    image: photo(30797252, 1400),
    imageAlt: "Modern glass office building reflecting the city skyline.",
  },
  {
    index: "04",
    label: "Your future",
    text: "Focused on your future.",
    note: "Our heritage is our foundation, not our limit. We provide clear legal advice on the decisions that matter, from property transactions and business acquisitions to private client and estate matters.",
    image: photo(30683445, 1400),
    imageAlt: "A row of classic British townhouses with ornate balconies and a tree-lined street.",
  },
];

const TOTAL = stages.length;

export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const { reducedMotion } = useSite();

  /* Desktop / motion-enabled: tall section + sticky stage. Scrolling drives everything. */
  useLayoutEffect(() => {
    if (reducedMotion) return;
    if (window.matchMedia("(min-width: 1024px)").matches) setPinned(true);
  }, [reducedMotion]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const raw = travel > 0 ? -rect.top / travel : rect.top <= 0 ? 1 : 0;
      const progress = Math.min(1, Math.max(0, raw));

      // Continuous rail
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }

      // Stage index, one line at a time
      const idx = Math.min(TOTAL - 1, Math.floor(progress * TOTAL * 0.999));
      setActive(idx);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pinned]);

  /* Jump to a stage by scrolling to its slot inside the pinned travel. */
  const goTo = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const travel = rect.height - window.innerHeight;
    if (travel <= 0) {
      setActive(index);
      return;
    }
    const target = window.scrollY + rect.top + ((index + 0.5) / TOTAL) * travel;
    window.scrollTo({ top: target, behavior: reducedMotion ? "auto" : "smooth" });
    setActive(index);
  };

  const panel = (
    <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
        {/* ── Left: statement stack + live note ── */}
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-navy" aria-hidden="true" />
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-steel uppercase">
              The Point of View
            </p>
          </div>

          <div className="mt-8 sm:mt-10">
            {stages.map((stage, i) => {
              const isOn = active === i;
              return (
                <button
                  key={stage.label}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={isOn ? "true" : undefined}
                  className="block w-full text-left"
                >
                  <span
                    className={cn(
                      "block font-display text-[2.25rem] leading-[1.1] font-medium tracking-[-0.025em] transition-[color,transform] duration-500 ease-out sm:text-[2.85rem] lg:text-[3.4rem]",
                      isOn
                        ? "translate-x-1 text-navy sm:translate-x-2"
                        : "translate-x-0 text-[#BCC4D0] hover:text-navy/60",
                    )}
                  >
                    {stage.text}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 border-t border-mist pt-6 sm:mt-12 sm:pt-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-steel uppercase">
                Stage {stages[active].index} of 04 — {stages[active].label}
              </p>
              <span className="font-display text-2xl leading-none text-navy tabular-nums">
                {stages[active].index}
                <span className="text-cool">/04</span>
              </span>
            </div>

            <div className="relative mt-3 min-h-[5.5rem] sm:min-h-[4.75rem]">
              {stages.map((stage, i) => (
                <p
                  key={stage.label}
                  aria-hidden={active !== i}
                  className={cn(
                    "absolute inset-0 text-[0.88rem] leading-[1.75] text-charcoal transition-all duration-500 ease-out",
                    active === i
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0",
                  )}
                >
                  {stage.note}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: framed image that swaps with each line ── */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div
              className="pointer-events-none absolute -top-3.5 -left-3.5 h-8 w-8 border-t-2 border-l-2 border-navy"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-3.5 -bottom-3.5 h-8 w-8 border-r-2 border-b-2 border-navy"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy shadow-[0_20px_50px_rgba(11,31,58,0.08)]">
              {stages.map((stage, i) => (
                <img
                  key={stage.label}
                  src={stage.image}
                  alt={stage.imageAlt}
                  aria-hidden={active !== i}
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover grayscale contrast-[1.08] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]",
                    active === i
                      ? "scale-100 opacity-100"
                      : "pointer-events-none scale-[1.05] opacity-0",
                  )}
                />
              ))}

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/15"
                aria-hidden="true"
              />

              <div className="absolute right-3.5 bottom-3.5 left-3.5 flex items-center justify-between bg-navy/95 px-4 py-2.5 text-white backdrop-blur-sm sm:right-5 sm:bottom-5 sm:left-5 sm:px-5 sm:py-3">
                <span className="flex items-center gap-2 text-[0.66rem] font-semibold tracking-[0.2em] uppercase">
                  <span className="text-[0.6rem] text-mist">◆</span>
                  <span>{stages[active].label} — Horizon</span>
                </span>
                <span className="font-display text-sm tracking-wider text-mist">
                  {stages[active].index} / 04
                </span>
              </div>
            </div>

            {/* Continuous scroll rail + clickable stage marker */}
            <div className="relative mt-4 h-1 w-full bg-mist">
              <span
                ref={barRef}
                className="absolute inset-y-0 left-0 w-full origin-left bg-navy transition-transform duration-200 ease-out"
                style={{ transform: "scaleX(0.25)" }}
              />
              <div className="absolute inset-0 flex" aria-hidden="true">
                {stages.map((stage, i) => (
                  <button
                    key={stage.label}
                    type="button"
                    onClick={() => goTo(i)}
                    className="h-full flex-1 border-r border-white/70 last:border-r-0"
                    aria-label={`Show stage ${stage.index}: ${stage.label}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="point-of-view"
      ref={sectionRef}
      className="relative bg-white text-navy"
      style={pinned ? { height: `${TOTAL * 100}vh` } : undefined}
    >
      {pinned ? (
        <div className="sticky top-0 flex h-svh w-full items-center overflow-hidden">{panel}</div>
      ) : (
        <div className="space-y-16 py-20 sm:space-y-24 sm:py-24">{panel}</div>
      )}
    </section>
  );
}
