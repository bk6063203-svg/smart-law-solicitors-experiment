import { useEffect, useState } from "react";
import type { Service } from "@/data/site";
import { adviceDisclaimer } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { ServiceVisual } from "@/components/ServiceVisual";

export function ServiceDetail({ service }: { service: Service }) {
  if (service.id === "leases") return <LeaseDetail service={service} />;
  return <StandardDetail service={service} />;
}

function StandardDetail({ service }: { service: Service }) {
  const { navigate } = useSite();

  return (
    <article id={`service-${service.id}`} className="scroll-mt-28 border-t border-mist py-16 lg:py-24">
      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-5xl text-steel">{service.number}</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-navy sm:text-5xl">{service.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal">{service.lede}</p>
          {service.fact ? (
            <p className="mt-6 border-l-2 border-navy pl-4 text-sm leading-relaxed text-navy">{service.fact}</p>
          ) : null}
          {service.disclaimer ? <p className="mt-4 text-sm leading-relaxed text-steel">{service.disclaimer}</p> : null}
          <button type="button" onClick={() => navigate("contact")} className="mt-7 bg-navy px-5 py-3 text-sm text-white">
            Speak to an Expert
          </button>
        </div>
        <div className="lg:col-span-7">
          <ServiceVisual service={service} className="min-h-[380px]" />
        </div>
      </div>
      {service.subs?.length ? (
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {service.subs.map((sub) => (
            <article key={sub.title} className="border-t border-navy/15 pt-5">
              <h3 className="font-display text-3xl text-navy">{sub.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">{sub.text}</p>
            </article>
          ))}
        </div>
      ) : null}
      <p className="mt-8 text-xs leading-relaxed text-steel">{adviceDisclaimer}</p>
    </article>
  );
}

function LeaseDetail({ service }: { service: Service }) {
  const { navigate } = useSite();
  const [active, setActive] = useState(0);
  const chapters = service.subs ?? [];

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-lease-chapter]");
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).at(-1);
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.index);
        if (!Number.isNaN(index)) setActive(index);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: 0.3 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <article id={`service-${service.id}`} className="scroll-mt-28 border-t border-mist py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:sticky lg:top-28 lg:h-[calc(100svh-8rem)]">
          <div className="relative h-full min-h-[420px] overflow-hidden bg-steel">
            <img src={service.image} alt={service.imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-5 bg-paper/94 p-6 text-navy sm:inset-8 sm:p-8">
              <p className="text-xs tracking-[0.08em] text-steel uppercase">Lease instrument</p>
              <p className="mt-6 font-display text-3xl">{chapters[active]?.title ?? "Leases"}</p>
              <div className="rule-lines mt-6 h-24" aria-hidden="true" />
              <ul className="mt-6 space-y-2 text-sm">
                {chapters.map((chapter, index) => (
                  <li key={chapter.title} className={index === active ? "text-navy" : "text-steel"}>
                    {chapter.title}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-steel">Decorative lines only. No invented clauses.</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-display text-5xl text-steel">{service.number}</p>
          <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">{service.title}</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal">{service.lede}</p>
          <div className="mt-12 space-y-16">
            {chapters.map((chapter, index) => (
              <section key={chapter.title} data-lease-chapter data-index={index}>
                <h3 className="font-display text-3xl text-navy">{chapter.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-charcoal">{chapter.text}</p>
              </section>
            ))}
          </div>
          <button type="button" onClick={() => navigate("contact")} className="mt-12 bg-navy px-5 py-3 text-sm text-white">
            Speak to an Expert
          </button>
          <p className="mt-6 text-xs leading-relaxed text-steel">{adviceDisclaimer}</p>
        </div>
      </div>
    </article>
  );
}
