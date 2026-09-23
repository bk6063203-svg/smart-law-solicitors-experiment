import type { Insight } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { cn } from "@/utils/cn";

export function InsightCard({
  insight,
  featured = false,
}: {
  insight: Insight;
  featured?: boolean;
}) {
  const { navigate } = useSite();

  return (
    <article className={cn("group flex h-full flex-col", featured && "lg:grid lg:grid-cols-2 lg:gap-8")}>
      <button
        type="button"
        onClick={() => navigate("insights", insight.id)}
        className="block overflow-hidden bg-steel text-left"
      >
        <img
          src={insight.image}
          alt={insight.imageAlt}
          className={cn(
            "w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]",
            featured ? "h-72 lg:h-full lg:min-h-[420px]" : "h-56",
          )}
        />
      </button>
      <div className={cn("flex flex-1 flex-col pt-5", featured && "lg:justify-end lg:py-4")}>
        <p className="text-xs font-medium tracking-[0.08em] text-steel uppercase">
          {insight.category}
          <span className="mx-2 text-steel">/</span>
          {insight.date}
        </p>
        <h3 className={cn("mt-3 font-display text-navy", featured ? "text-4xl leading-tight" : "text-2xl leading-snug")}>
          <button type="button" onClick={() => navigate("insights", insight.id)} className="text-left link-draw">
            {insight.title}
          </button>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal">{insight.excerpt}</p>
        <p className="mt-4 text-xs text-steel">{insight.reading}</p>
      </div>
    </article>
  );
}
