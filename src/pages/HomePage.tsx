import { services } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { ScrollStory } from "@/components/ScrollStory";
import { PracticeAccordion } from "@/components/PracticeAccordion";
import { FounderStory } from "@/components/FounderStory";
import { TeamGrid } from "@/components/TeamGrid";
import { LocationSection } from "@/components/LocationSection";
import { CredentialBlock } from "@/components/CredentialBlock";
import { JournalFeature } from "@/components/JournalFeature";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function HomePage() {
  const { navigate } = useSite();
  const solicitation = services.find((service) => service.id === "solicitation");
  const conveyancing = services.find((service) => service.id === "conveyancing");

  return (
    <>
      <Hero />
      <Introduction />
      {conveyancing ? (
        <section className="dark-surface bg-navy text-white">
          <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-20">
            <div className="overflow-hidden lg:col-span-6">
              <img src={conveyancing.image} alt={conveyancing.imageAlt} className="h-[380px] w-full object-cover transition-transform duration-1000 hover:scale-105 sm:h-[500px]" />
            </div>
            <div className="lg:col-span-6 lg:pl-4">
              <p className="text-xs font-medium tracking-[0.08em] text-cool uppercase">{conveyancing.title}</p>
              <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.96] sm:text-6xl">
                The discipline
                <span className="block text-mist italic">of detail.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-mist sm:text-base">{conveyancing.lede}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { title: "Searches & Enquiries", text: "What the papers and searches reveal before you commit." },
                  { title: "Title & Contracts", text: "The title, the contract, and what each actually obliges." },
                  { title: "Exchange & Completion", text: "Two distinct moments, explained before you sign." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group cursor-default border border-white/25 bg-white p-5 text-navy transition-colors duration-500 ease-out hover:border-white hover:bg-navy hover:text-white"
                  >
                    <span className="block h-px w-6 bg-navy transition-all duration-500 group-hover:w-10 group-hover:bg-white" aria-hidden="true" />
                    <p className="mt-5 font-display text-xl leading-tight">{item.title}</p>
                    <p className="mt-2 text-[0.75rem] leading-[1.65] text-charcoal/75 transition-colors duration-500 group-hover:text-mist">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => navigate("services", "conveyancing")} className="mt-8 border border-white/35 px-4 py-3 text-xs tracking-[0.08em] text-white uppercase transition-colors hover:bg-white hover:text-navy">
                Explore conveyancing
              </button>
            </div>
          </div>
        </section>
      ) : null}
      <ScrollStory />
      <PracticeAccordion />
      {solicitation ? (
        <section className="bg-mist">
          <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-20">
            <div className="max-w-2xl">
              <p className="font-display text-4xl text-steel">{solicitation.number}</p>
              <h2 className="mt-2 font-display text-4xl text-navy">{solicitation.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal">{solicitation.lede}</p>
            </div>
            <button type="button" onClick={() => navigate("contact")} className="text-sm text-navy link-draw">
              Ask whether we can assist
            </button>
          </div>
        </section>
      ) : null}
      <FounderStory />
      <section id="people" className="bg-white">
        <div>
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <p className="text-xs font-medium tracking-[0.08em] text-steel uppercase">Our people</p>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">The confirmed team.</h2>
              <p className="max-w-xs text-right text-xs leading-relaxed text-steel">A deliberately small team. Every client matter has a name, and a senior eye on it.</p>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal">
              Senior solicitors and partners handling instructions directly. Senior access is the default rather than the exception.
            </p>
            <div className="mt-8">
              <TeamGrid layout="grid" />
            </div>
          </div>
        </div>
      </section>
      <LocationSection />
      <CredentialBlock />
      <section id="insights" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <JournalFeature />
        </div>
      </section>
      <CTASection />
      <Footer />
    </>
  );
}
