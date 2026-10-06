import { firm, photo } from "@/data/site";
import { useSite } from "@/context/SiteContext";

export function LocationSection() {
  const { navigate } = useSite();

  return (
    <section id="locations" className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.08em] text-steel uppercase">Our Office</p>
          <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">Huddersfield, West Yorkshire</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal">
            Smart Law Solicitors practises from our head office in Huddersfield, advising clients across England and Wales.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="group relative min-h-[420px] overflow-hidden bg-steel text-white">
            <img
              src={photo(34568210, 1400)}
              alt="Victorian stone architecture in Huddersfield."
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7 sm:p-10">
              <p className="text-xs tracking-[0.08em] text-cool uppercase">Head Office</p>
              <h3 className="mt-2 font-display text-5xl">Huddersfield</h3>
              <address className="mt-4 text-sm leading-relaxed text-mist not-italic">
                {firm.address.line1}
                <br />
                {firm.address.city} {firm.address.postcode}
              </address>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a href={firm.phoneHref} className="link-draw">
                  {firm.phoneDisplay}
                </a>
                <a href={firm.mapsHref} target="_blank" rel="noreferrer" className="link-draw">
                  Get directions
                </a>
                <button type="button" onClick={() => navigate("contact")} className="link-draw">
                  Contact
                </button>
              </div>
            </div>
          </article>
          <article className="group relative min-h-[420px] overflow-hidden bg-steel text-white">
            <img
              src={photo(30797252, 1600)}
              alt="Contemporary architectural facade reflecting the city."
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-end p-7 sm:p-10">
              <p className="text-xs tracking-[0.08em] text-cool uppercase">Jurisdiction</p>
              <h3 className="mt-2 font-display text-5xl">England &amp; Wales</h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist">
                We advise clients nationwide. Consultations are available at our Huddersfield office or remotely by appointment.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a href={firm.phoneHref} className="link-draw">
                  {firm.phoneDisplay}
                </a>
                <button type="button" onClick={() => navigate("contact")} className="link-draw">
                  Enquire online
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
