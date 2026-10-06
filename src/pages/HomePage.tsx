import { principles, services } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { ScrollStory } from "@/components/ScrollStory";
import { PracticeAccordion } from "@/components/PracticeAccordion";
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
              <p className="text-xs font-medium tracking-[0.08em] text-cool uppercase">Commercial and Residential Conveyancing</p>
              <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.02] sm:text-5xl lg:text-5xl">
                Commercial and Residential Conveyancing: precision in every detail.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-mist sm:text-base">
                Buying, selling or transferring property involves a sequence of documents and decisions. Residential and commercial conveyancing are distinct areas of practice, and we treat them as such. A commercial property is not approached as a larger version of a home.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { title: "Searches and Enquiries", text: "A careful review of what the documents and searches reveal before you commit." },
                  { title: "Title and Contracts", text: "Examination of the title and the contract, and of the obligations each creates." },
                  { title: "Exchange and Completion", text: "Two distinct stages, each explained to you before you sign." },
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
                Read more about our conveyancing services
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
              <p className="mt-1 text-xs font-semibold tracking-[0.16em] text-steel uppercase">Scope to be confirmed</p>
              <p className="mt-4 text-base leading-relaxed text-charcoal">
                Solicitation is a service area of Smart Law Solicitors. If you would like to know whether the firm can assist with your particular requirements, please contact the office and we will advise you directly.
              </p>
            </div>
            <button type="button" onClick={() => navigate("contact")} className="text-sm font-semibold text-navy link-draw">
              Enquire About This Service
            </button>
          </div>
        </section>
      ) : null}
      <section id="about" className="bg-white">
        <div>
          <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <p className="text-xs font-medium tracking-[0.08em] text-steel uppercase">About Us</p>
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">How We Practise</h2>
              <p className="max-w-xs text-left sm:text-right text-xs leading-relaxed text-steel">
                Clear, considered legal advice from our Huddersfield office to individuals and businesses across England and Wales.
              </p>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-charcoal">
              Smart Law Solicitors was founded on straightforward legal principles: direct access to the solicitor managing your case, thorough document scrutiny, and clear guidance every step of the way.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <div
                  key={principle.number}
                  className="group border border-smoke bg-mist/30 p-6 transition-all duration-300 hover:border-navy hover:bg-white"
                >
                  <span className="font-display text-2xl text-steel/60 transition-colors duration-300 group-hover:text-navy">
                    {principle.number}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-navy">{principle.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-charcoal/80">{principle.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate("about")}
                className="border border-navy bg-navy px-6 py-3 text-xs tracking-[0.08em] text-white uppercase transition-colors hover:bg-white hover:text-navy"
              >
                Learn More About Our Practice
              </button>
              <button
                type="button"
                onClick={() => navigate("contact")}
                className="text-xs font-semibold tracking-[0.08em] text-navy uppercase link-draw"
              >
                Get in Touch
              </button>
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
