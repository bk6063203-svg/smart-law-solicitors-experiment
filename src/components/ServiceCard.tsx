import type { Service } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { ServiceVisual } from "@/components/ServiceVisual";

export function ServiceCard({ service }: { service: Service }) {
  const { navigate } = useSite();

  return (
    <article id={`journey-${service.id}`} className="dark-surface overflow-hidden bg-navy text-white">
      <ServiceVisual service={service} className="min-h-[280px]" />
      <div className="px-5 py-8 sm:px-8">
        <p className="font-display text-4xl text-mist">{service.journeyNumber ?? service.number}</p>
        <h3 className="mt-3 font-display text-4xl leading-none text-white">{service.title}</h3>
        <p className="mt-2 text-xs tracking-[0.08em] text-mist uppercase">Practice index {service.number}</p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist sm:text-base">{service.lede}</p>
        {service.fact ? <p className="mt-4 text-sm text-white">{service.fact}</p> : null}
        {service.disclaimer ? <p className="mt-4 text-sm text-mist">{service.disclaimer}</p> : null}
        <button
          type="button"
          onClick={() => navigate("services", service.id)}
          className="mt-6 text-sm text-white link-draw"
        >
          Discuss this area
        </button>
      </div>
    </article>
  );
}
