import { firm } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";

export function CTASection() {
  return (
    <section id="consultation" className="dark-surface border-t border-navy/20 bg-navy text-white">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:items-start lg:gap-16 lg:px-10 lg:py-28">
        {/* Left Column: Direct access & contact info */}
        <div className="lg:col-span-5 lg:pt-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-mist" aria-hidden="true" />
            <p className="text-[0.68rem] font-semibold tracking-[0.22em] text-cool uppercase">
              Direct Counsel
            </p>
          </div>

          <h2 className="mt-5 font-display text-[2.75rem] leading-[0.98] font-medium tracking-[-0.025em] sm:text-6xl lg:text-[4rem]">
            Speak to
            <span className="block font-display italic text-mist">a Solicitor.</span>
          </h2>

          <p className="mt-6 text-sm leading-[1.8] text-mist/90 sm:text-[0.96rem]">
            Please tell us where your matter currently stands. A senior member of the team will respond personally with a clear view of your options and, if you wish, a proposed scope of work.
          </p>

          <div className="mt-10 space-y-5 border-t border-white/15 pt-8 text-sm">
            <div>
              <span className="block text-[0.66rem] font-semibold tracking-[0.16em] text-cool uppercase">
                Telephone
              </span>
              <a
                href={firm.phoneHref}
                className="mt-1 inline-block text-xl font-medium text-white transition-colors hover:text-mist link-draw"
              >
                {firm.phoneDisplay}
              </a>
            </div>

            <div>
              <span className="block text-[0.66rem] font-semibold tracking-[0.16em] text-cool uppercase">
                Email
              </span>
              <a
                href={firm.emailHref}
                className="mt-1 inline-block text-sm text-mist transition-colors hover:text-white link-draw"
              >
                {firm.email}
              </a>
            </div>

            <div className="pt-2">
              <p className="text-[0.66rem] font-medium tracking-[0.18em] text-cool uppercase">
                Monday to Friday, 09:00 to 18:00 · Huddersfield Office
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: High contrast consultation form card */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
