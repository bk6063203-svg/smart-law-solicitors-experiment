import { ArrowUpRight } from "lucide-react";
import { founder } from "@/data/site";
import { useSite } from "@/context/SiteContext";

export function FounderStory() {
  const { navigate } = useSite();

  return (
    <section id="founder" className="border-t border-mist bg-white text-navy">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Left Column: Framed Founder Portrait with corner brackets matching Screenshot 5 */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative framing corners */}
              <div
                className="pointer-events-none absolute -top-3.5 -left-3.5 h-8 w-8 border-t-2 border-l-2 border-navy"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-3.5 -bottom-3.5 h-8 w-8 border-r-2 border-b-2 border-navy"
                aria-hidden="true"
              />

              <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy shadow-[0_20px_50px_rgba(11,31,58,0.08)]">
                <img
                  src={founder.image}
                  alt={founder.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>

              {/* Caption and Monogram matching Screenshot 5 */}
              <div className="mt-4 flex items-end justify-between border-b border-mist pb-3">
                <div>
                  <h3 className="font-display text-2xl font-medium text-navy">
                    {founder.name}
                  </h3>
                  <p className="mt-0.5 text-[0.66rem] font-semibold tracking-[0.18em] text-steel uppercase">
                    {founder.role}
                  </p>
                </div>
                <span className="font-display text-3xl italic text-cool">
                  {founder.initials}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Conviction Narrative matching Screenshot 5 */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-navy" aria-hidden="true" />
              <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-steel uppercase">
                Leadership
              </p>
            </div>

            <h2 className="mt-5 font-display text-[2.5rem] leading-[1.06] font-medium tracking-[-0.025em] text-navy sm:text-5xl lg:text-[3.3rem]">
              Built from a simple conviction:{" "}
              <span className="font-display italic text-steel">the law should move with you.</span>
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-[1.8] text-charcoal sm:text-[0.98rem]">
              <p>
                Smart Law began with a question Ather Ahmed kept returning to: why does engaging
                the law still feel like stepping back in time? The answer became a practice built
                on dual loyalty – to the rigour of the profession, and to the pace of the people it
                serves.
              </p>
              <p>
                Under his direction, senior access is the default rather than the exception:
                clients speak to decision-makers, receive advice in plain English, and watch their
                matters move. Modern systems are treated not as a threat to legal craftsmanship,
                but as its newest instrument – one that returns time and attention to where they
                belong.
              </p>
            </div>

            {/* Quote block */}
            <div className="mt-8 border-l-2 border-navy bg-mist/35 p-5">
              <p className="font-display text-lg italic text-navy sm:text-xl">
                &ldquo;The law should be the steady hand — never the bottleneck.&rdquo;
              </p>
              <p className="mt-2 text-[0.66rem] font-semibold tracking-[0.18em] text-steel uppercase">
                Ather Ahmed — Founder, Smart Law
              </p>
            </div>

            {/* Action CTA */}
            <div className="mt-8">
              <button
                type="button"
                onClick={() => navigate("contact")}
                className="group inline-flex items-center gap-2 border-b-2 border-navy pb-1 text-xs font-semibold tracking-[0.16em] text-navy uppercase transition-colors hover:text-steel"
              >
                <span>Request a Consultation</span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
