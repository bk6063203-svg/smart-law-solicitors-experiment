import { insights } from "@/data/site";
import { InsightCard } from "@/components/InsightCard";
import { SectionHeader } from "@/components/SectionHeader";
import { useSite } from "@/context/SiteContext";

export function InsightGrid({
  limit,
  showHeader = true,
}: {
  limit?: number;
  showHeader?: boolean;
}) {
  const items = typeof limit === "number" ? insights.slice(0, limit) : insights;
  const [featured, ...rest] = items;
  const { navigate } = useSite();

  return (
    <div>
      {showHeader ? (
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Insights"
            title="Insights: general information, not advice on your matter."
            text="These short articles provide general information on the firm's areas of practice. They do not constitute legal advice and do not describe how any individual instruction will be handled."
          />
          {limit ? (
            <button type="button" onClick={() => navigate("insights")} className="text-sm text-navy link-draw">
              View all articles
            </button>
          ) : null}
        </div>
      ) : null}
      {featured ? <InsightCard insight={featured} featured /> : null}
      {rest.length ? (
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((insight) => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
