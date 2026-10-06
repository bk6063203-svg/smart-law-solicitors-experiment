import { photo, principles } from "@/data/site";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useSite } from "@/context/SiteContext";
import { PageHero } from "@/components/PageHero";
import { FounderStory } from "@/components/FounderStory";
import { LocationSection } from "@/components/LocationSection";
import { CredentialBlock } from "@/components/CredentialBlock";
import { Scene3D } from "@/components/Scene3D";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function AboutPage() {
  const { reducedMotion } = useSite();
  const desktop = useMediaQuery("(min-width: 1280px)");

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A northern practice with a modern standard of clarity."
        text="Smart Law Solicitors advises individuals, families and businesses from Huddersfield, serving clients across England and Wales. Our service is personal, and our advice is given in plain language."
        image={photo(34760017, 1800)}
        imageAlt="Architectural cityscape under an open sky."
      />
      <section className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-28">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.08em] text-steel uppercase">The firm</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-navy sm:text-5xl">
              Strategic counsel, kept close to the person who must decide.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal">
              <p>
                Smart Law was founded to provide legal advice that clients can put to practical use. Our areas of practice are pharmaceutical transactions, wills and probate, commercial and residential conveyancing, business sale and purchase, commercial and residential leases, immigration and solicitation.
              </p>
              <p>
                Information on qualifications, awards and regulatory status is available from the office where it is relevant to an instruction.
              </p>
            </div>
          </div>
          <div className="relative min-h-[360px] bg-mist lg:col-span-5">
            {desktop && !reducedMotion ? <Scene3D /> : (
              <img
                src={photo(38304588, 1200)}
                alt="A classical stone building facade."
                className="h-full min-h-[360px] w-full object-cover"
              />
            )}
          </div>
        </div>
      </section>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10 lg:py-24">
          {principles.map((item) => (
            <article key={item.number} className="border-t border-navy/15 pt-5">
              <p className="font-display text-3xl text-steel">{item.number}</p>
              <h2 className="mt-3 font-display text-3xl text-navy">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <FounderStory />
      <LocationSection />
      <CredentialBlock />
      <CTASection />
      <Footer />
    </>
  );
}
