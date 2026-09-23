import { firm, photo } from "@/data/site";
import { useSite } from "@/context/SiteContext";

export function LocationSection() {
  const { navigate } = useSite();

  return (
    <section id="locations" className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.08em] text-steel uppercase">Offices</p>
          <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Manchester and Huddersfield.</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal">
            Two locations in the North of England. London appears in the film at the top of this site because it is a city of consequence. Smart Law does not have a London office, and a Manchester street address has not been published here.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="group relative min-h-[420px] overflow-hidden bg-steel text-white">
            <img
              src={photo(34270834, 1600)}
              alt="Evening view of a busy Manchester street with historic brick architecture."
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7 sm:p-10">
              <p className="text-xs tracking-[0.08em] text-cool uppercase">City</p>
              <h3 className="mt-2 font-display text-5xl">Manchester</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
                Meetings by arrangement. A street address has not been published on this site.
              </p>
            </div>
          </article>
          <article className="group relative min-h-[420px] overflow-hidden bg-steel text-white">
            <img
              src={photo(34568210, 1400)}
              alt="A Victorian stone building facade. Architectural context, not a photograph of the office."
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7 sm:p-10">
              <p className="text-xs tracking-[0.08em] text-cool uppercase">Published address</p>
              <h3 className="mt-2 font-display text-5xl">Huddersfield</h3>
              <address className="mt-4 text-sm leading-relaxed text-mist not-italic">
                {firm.address.line1}
                <br />
                {firm.address.city}
                <br />
                {firm.address.postcode}
              </address>
              <p className="mt-3 max-w-sm text-xs text-mist/80">The photograph is architectural context, not a picture of the premises.</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a href={firm.phoneHref} className="link-draw">
                  {firm.phoneDisplay}
                </a>
                <a href={firm.mapsHref} target="_blank" rel="noreferrer" className="link-draw">
                  Directions
                </a>
                <button type="button" onClick={() => navigate("contact")} className="link-draw">
                  Contact
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
