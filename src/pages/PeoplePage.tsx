import { photo } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { PageHero } from "@/components/PageHero";
import { TeamGrid } from "@/components/TeamGrid";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function PeoplePage() {
  const { navigate } = useSite();

  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="A senior team, directly accessible."
        text="Ather Ahmed, Sarah Chen, David Smith and Emily White lead instructions with senior oversight, plain English, and meticulous process."
        image={photo(30600233, 1800)}
        imageAlt="A quiet reading room with books and daylight."
      />
      <section className="bg-paper">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <TeamGrid layout="grid" />
          <div className="mt-12 max-w-2xl border-t border-cool/60 pt-8">
            <h2 className="font-display text-3xl text-navy">How to reach the team</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal">
              Contact the office and say who you would like to speak with, and what the matter concerns. The firm will say whether that person, or another member of the team, can assist. A message through this demonstration site is not received.
            </p>
            <button type="button" onClick={() => navigate("contact")} className="mt-6 bg-navy px-5 py-3 text-sm text-white">
              Contact the office
            </button>
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
