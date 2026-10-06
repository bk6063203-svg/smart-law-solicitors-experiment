import { ArrowUpRight } from "lucide-react";
import { insights } from "@/data/site";
import { useSite } from "@/context/SiteContext";

export function JournalFeature() {
  const { navigate } = useSite();
  const [featured, ...related] = insights;

  if (!featured) return null;

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <h2 className="font-display text-4xl text-navy sm:text-5xl">From the Journal</h2>
        <button type="button" onClick={() => navigate("insights")} className="text-xs tracking-[0.08em] text-navy uppercase link-draw">
          View all articles <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
      <div className="grid border border-mist lg:grid-cols-[1.15fr_0.85fr]">
        <article className="bg-navy p-7 text-white sm:p-10">
          <p className="text-xs tracking-[0.08em] text-cool uppercase">{featured.category}</p>
          <h3 className="mt-8 max-w-xl font-display text-4xl leading-tight sm:text-5xl">{featured.title}</h3>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-mist">{featured.excerpt}</p>
          <button type="button" onClick={() => navigate("insights", featured.id)} className="group mt-10 inline-flex items-center gap-2 border-b border-white/40 pb-2 text-xs tracking-[0.08em] uppercase">
            Read the article
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </button>
        </article>
        <div className="grid bg-white">
          <img src={featured.image} alt={featured.imageAlt} className="h-56 w-full object-cover lg:h-full" />
          <div className="border-t border-mist p-7 sm:p-10 lg:hidden">
            <p className="text-xs text-steel">{featured.date} · {featured.reading}</p>
          </div>
        </div>
      </div>
      {related[0] ? (
        <button
          type="button"
          onClick={() => navigate("insights", related[0].id)}
          className="group mt-2 flex w-full items-center justify-between gap-4 border-b border-mist px-2 py-5 text-left transition-colors duration-300 hover:bg-mist/50 sm:px-4"
        >
          <span className="font-display text-2xl text-navy transition-colors duration-300 group-hover:text-steel">
            {related[0].title}
          </span>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-steel transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      ) : null}
    </div>
  );
}