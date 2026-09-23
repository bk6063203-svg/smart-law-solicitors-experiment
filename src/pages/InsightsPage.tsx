import { adviceDisclaimer, getInsight, insights, photo } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { PageHero } from "@/components/PageHero";
import { InsightGrid } from "@/components/InsightGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function InsightsPage() {
  const { route, navigate } = useSite();
  const article = route.section ? getInsight(route.section) : undefined;

  if (article) {
    const related = insights.filter((item) => item.id !== article.id).slice(0, 2);
    return (
      <>
        <article className="bg-white">
          <header className="dark-surface relative isolate min-h-[62vh] overflow-hidden bg-navy text-white">
            <img src={article.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/35" />
            <div className="relative mx-auto flex min-h-[62vh] max-w-[860px] flex-col justify-end px-5 pt-32 pb-12 sm:px-8">
              <button type="button" onClick={() => navigate("insights")} className="mb-6 w-fit text-sm text-mist link-draw">
                All notes
              </button>
              <p className="text-xs tracking-[0.08em] text-cool uppercase">
                {article.category} · {article.date} · {article.reading}
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">{article.title}</h1>
            </div>
          </header>
          <div className="mx-auto max-w-[760px] px-5 py-14 sm:px-8">
            <p className="border-l-2 border-navy pl-4 text-sm leading-relaxed text-steel">{adviceDisclaimer}</p>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-charcoal">
              {article.body.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <p className="sr-only">{article.imageAlt}</p>
          </div>
          <div className="mx-auto max-w-[1240px] px-5 pb-20 sm:px-8">
            <h2 className="font-display text-3xl text-navy">Further notes</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigate("insights", item.id)}
                  className="border-t border-mist pt-4 text-left"
                >
                  <p className="text-xs tracking-[0.08em] text-steel uppercase">{item.category}</p>
                  <p className="mt-2 font-display text-2xl text-navy">{item.title}</p>
                </button>
              ))}
            </div>
          </div>
        </article>
        <CTASection />
        <Footer />
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes, not news of your matter."
        text="Short pieces of general information across the firm’s published practice. They are not advice, and they do not describe how an individual instruction will be handled."
        image={photo(28463480, 1800)}
        imageAlt="A library interior with shelves of books."
      />
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <InsightGrid showHeader={false} />
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
