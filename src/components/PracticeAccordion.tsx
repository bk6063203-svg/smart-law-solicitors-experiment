import { useState } from "react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { services, type Service } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { cn } from "@/utils/cn";

const practiceServices = services.filter((service) => service.id !== "solicitation");

export function PracticeAccordion() {
  // Default to first open (Pharmaceutical Transactions), user can toggle any open/close
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { navigate } = useSite();

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="services-overview" className="border-t border-mist bg-white text-navy">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-mist pb-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-navy" aria-hidden="true" />
              <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-steel uppercase">
                Practice Areas
              </p>
            </div>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1.04] font-medium tracking-[-0.02em] text-navy sm:text-5xl lg:text-[3.4rem]">
              Our Practice Areas
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-steel md:text-right">
            We act on commercial and private matters, applying senior legal judgement to each. Every instruction is assessed on its own facts and documents.
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="divide-y divide-mist">
          {practiceServices.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <ServiceAccordionRow
                key={service.id}
                service={service}
                isOpen={isOpen}
                onToggle={() => toggle(index)}
                onNavigateService={() => navigate("services", service.id)}
                onNavigateContact={() => navigate("contact")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceAccordionRow({
  service,
  isOpen,
  onToggle,
  onNavigateService,
  onNavigateContact,
}: {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
  onNavigateService: () => void;
  onNavigateContact: () => void;
}) {
  const subtitleMap: Record<string, string> = {
    pharmaceutical: "SPECIALIST COMMERCIAL PRACTICE",
    wills: "WILLS · PROBATE · ESTATE ADMINISTRATION",
    conveyancing: "PROPERTY SALES, PURCHASES AND FINANCE",
    business: "ADVICE FOR OWNERS BUYING OR SELLING A BUSINESS",
    leases: "LEASEHOLD PROPERTY, HANDLED WITH PRECISION",
    immigration: "VISIT · STUDY · REMAIN · SETTLE",
  };

  const subtitle = subtitleMap[service.id] || "LEGAL PRACTICE";

  return (
    <article className="transition-colors duration-300">
      {/* Header bar button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "group flex w-full items-center justify-between gap-4 py-6 text-left transition-all duration-300 sm:py-8",
          isOpen ? "bg-mist/30 px-3 sm:px-5" : "hover:bg-paper px-0 sm:px-2",
        )}
      >
        <div className="flex items-baseline gap-4 sm:gap-6">
          <span className="font-display text-base italic text-steel sm:text-lg">
            {service.number}
          </span>
          <div>
            <h3
              className={cn(
                "font-display text-2xl font-medium tracking-tight transition-colors duration-300 sm:text-3xl lg:text-[2.2rem]",
                isOpen ? "text-navy" : "text-navy/90 group-hover:text-navy",
              )}
            >
              {service.title}
            </h3>
            <p className="mt-1 text-[0.66rem] font-semibold tracking-[0.18em] text-steel uppercase">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Toggle icon button [+] / [-] */}
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center border transition-all duration-300 sm:h-10 sm:w-10",
            isOpen
              ? "border-navy bg-navy text-white"
              : "border-steel/30 bg-transparent text-navy group-hover:border-navy group-hover:bg-navy group-hover:text-white",
          )}
          aria-hidden="true"
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      {/* Accordion Content Panel */}
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <div className="grid gap-8 pb-10 pt-4 sm:px-5 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Authentic Service Photo */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-steel sm:aspect-[16/11]">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 bg-navy/90 px-3 py-1.5 text-[0.62rem] font-medium tracking-[0.16em] text-white uppercase backdrop-blur-sm">
                  {service.title}
                </span>
              </div>
            </div>

            {/* Right Column: Narrative, Quote, Sub-points, CTAs */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-sm leading-[1.75] text-charcoal sm:text-[0.96rem]">
                  {service.lede}
                </p>

                {/* Approved Quote / Fact Callout if available */}
                {service.fact ? (
                  <div className="mt-5 border-l-2 border-navy bg-mist/40 p-4">
                    <p className="font-display text-sm italic text-navy sm:text-base">
                      &ldquo;{service.fact}&rdquo;
                    </p>
                  </div>
                ) : null}

                {/* Instruction assurance box */}
                <div className="mt-4 border border-mist bg-white p-3.5 text-xs text-charcoal/85 sm:p-4">
                  <span className="font-semibold text-navy">Scope of instruction:</span> The precise
                  scope of our support in any transaction is confirmed in writing, on instruction and before work begins.
                </div>

                {/* Sub-services pills / checklist */}
                {service.subs && service.subs.length > 0 ? (
                  <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {service.subs.map((sub) => (
                      <div
                        key={sub.title}
                        className="border-t border-mist/80 pt-2.5 text-xs text-charcoal"
                      >
                        <p className="font-medium text-navy">{sub.title}</p>
                        <p className="mt-0.5 text-[0.76rem] text-charcoal/70 line-clamp-2">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {service.points.map((pt) => (
                      <div key={pt} className="border-t border-mist/80 pt-2 text-xs text-navy font-medium">
                        {pt}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons matching Screenshot 4 */}
              <div className="mt-7 flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onNavigateContact}
                  className="group inline-flex items-center gap-2 bg-navy px-5 py-3 text-[0.68rem] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-steel"
                >
                  <span>Discuss This Service</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>

                <button
                  type="button"
                  onClick={onNavigateService}
                  className="group inline-flex items-center gap-2 border border-navy/30 px-5 py-3 text-[0.68rem] font-semibold tracking-[0.14em] text-navy uppercase transition-all duration-300 hover:border-navy hover:bg-navy hover:text-white"
                >
                  <span>View Full Details</span>
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
