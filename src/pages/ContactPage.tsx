import { firm, photo } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Contact the office",
    text: "Call, email, or submit the consultation form on this page.",
  },
  {
    number: "02",
    title: "Describe the matter",
    text: "Say, in your own words, what the decision or document concerns. Bring the papers you already have.",
  },
  {
    number: "03",
    title: "Hear whether we can assist",
    text: "The team will say if the firm can help, and what a next conversation would involve. That step is separate from this website.",
  },
];

export function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak to a Solicitor."
        text="Please tell us where your matter currently stands. A senior member of the team will respond personally with a clear view of your options and, if you wish, a proposed scope of work."
        image={photo(34568210, 1800)}
        imageAlt="Victorian stone architecture in Huddersfield."
      />
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl text-navy">The direct routes are the real ones.</h2>
            <dl className="mt-8 space-y-6 text-sm">
              <div>
                <dt className="text-xs tracking-[0.08em] text-steel uppercase">Telephone</dt>
                <dd className="mt-1">
                  <a href={firm.phoneHref} className="text-lg text-navy link-draw">
                    {firm.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.08em] text-steel uppercase">Email</dt>
                <dd className="mt-1">
                  <a href={firm.emailHref} className="text-lg text-navy link-draw">
                    {firm.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.08em] text-steel uppercase">Head Office</dt>
                <dd className="mt-1 text-base leading-relaxed text-charcoal">
                  {firm.address.line1}
                  <br />
                  {firm.address.city}
                  <br />
                  {firm.address.postcode}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.08em] text-steel uppercase">Opening Hours</dt>
                <dd className="mt-1 text-base leading-relaxed text-charcoal">
                  Monday to Friday
                  <br />
                  09:00 to 18:00
                </dd>
              </div>
            </dl>
            <ol className="mt-10 space-y-6">
              {steps.map((step) => (
                <li key={step.number} className="border-t border-cool/50 pt-4">
                  <p className="font-display text-2xl text-steel">{step.number}</p>
                  <h3 className="mt-1 font-medium text-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
      <LocationSection />
      <Footer />
    </>
  );
}
