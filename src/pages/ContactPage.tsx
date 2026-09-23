import { firm, photo } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

const steps = [
  {
    number: "01",
    title: "Contact the office",
    text: "Call, email, or use the demonstration form on this page. The form does not send anything.",
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
        title="Speak to the office."
        text="Huddersfield has a published address. Manchester meetings are by arrangement. There is no London office."
        image={photo(34568210, 1800)}
        imageAlt="Victorian stone architecture, used as context rather than a picture of the office."
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
                <dt className="text-xs tracking-[0.08em] text-steel uppercase">Huddersfield</dt>
                <dd className="mt-1 text-base leading-relaxed text-charcoal">
                  {firm.address.line1}
                  <br />
                  {firm.address.city}
                  <br />
                  {firm.address.postcode}
                </dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.08em] text-steel uppercase">Manchester</dt>
                <dd className="mt-1 text-base text-charcoal">By appointment. Street address not published.</dd>
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
