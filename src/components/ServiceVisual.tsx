import type { Service } from "@/data/site";
import { cn } from "@/utils/cn";

export function ServiceVisual({ service, className }: { service: Service; className?: string }) {
  if (service.tone === "property" && service.secondaryImage) {
    return (
      <div className={cn("grid h-full min-h-[320px] grid-rows-2 gap-3 sm:grid-cols-2 sm:grid-rows-1", className)}>
        <figure className="relative overflow-hidden bg-steel">
          <img src={service.image} alt={service.imageAlt} className="svc-image h-full w-full object-cover" />
          <figcaption className="absolute bottom-0 left-0 bg-navy/75 px-3 py-2 text-xs text-white">Residential</figcaption>
        </figure>
        <figure className="relative overflow-hidden bg-steel">
          <img src={service.secondaryImage} alt={service.secondaryAlt ?? ""} className="svc-image h-full w-full object-cover" />
          <figcaption className="absolute bottom-0 left-0 bg-navy/75 px-3 py-2 text-xs text-white">Commercial</figcaption>
        </figure>
      </div>
    );
  }

  if (service.tone === "lease") {
    return (
      <div className={cn("relative h-full min-h-[360px] overflow-hidden bg-steel", className)}>
        <img src={service.image} alt={service.imageAlt} className="svc-image h-full w-full object-cover" />
        <div className="absolute inset-6 bg-paper/92 p-6 text-navy shadow-[0_20px_60px_rgba(11,31,58,0.25)] sm:inset-10 sm:p-8">
          <p className="text-xs tracking-[0.08em] text-steel uppercase">Instrument</p>
          <p className="mt-4 font-display text-3xl leading-none">Commercial leases</p>
          <div className="rule-lines mt-5 h-16" aria-hidden="true" />
          <p className="mt-5 font-display text-3xl leading-none">Residential leases</p>
          <div className="rule-lines mt-5 h-10 opacity-70" aria-hidden="true" />
          <p className="mt-6 text-xs leading-relaxed text-steel">A document with a life. Not a catalogue of claims.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative h-full min-h-[360px] overflow-hidden bg-steel", className)}>
      <img src={service.image} alt={service.imageAlt} className="svc-image h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-navy/20" />
      <p className="pointer-events-none absolute top-4 right-5 font-display text-7xl text-white/25 sm:text-8xl" aria-hidden="true">
        {service.journeyNumber ?? service.number}
      </p>
      {service.tone === "calm" ? (
        <ul className="absolute right-0 bottom-0 left-0 grid grid-cols-3 bg-navy/75 text-center text-[0.7rem] tracking-[0.06em] text-mist uppercase sm:text-xs">
          {service.points.map((point) => (
            <li key={point} className="border-l border-white/10 px-2 py-3 first:border-l-0">
              {point}
            </li>
          ))}
        </ul>
      ) : null}
      {service.tone === "lab" && service.fact ? (
        <p className="absolute right-4 bottom-4 left-4 max-w-sm bg-white/92 px-4 py-3 text-sm leading-relaxed text-navy">
          {service.fact}
        </p>
      ) : null}
      {service.tone === "city" ? (
        <ul className="absolute bottom-4 left-4 space-y-1 text-sm text-white">
          {service.points.map((point) => (
            <li key={point} className="bg-navy/70 px-3 py-1.5">
              {point}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
