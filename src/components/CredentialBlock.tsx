import { FileCheck, Landmark, ShieldCheck, Users } from "lucide-react";

const items = [
  {
    icon: Landmark,
    title: "Practising in the United Kingdom",
    text: "Smart Law Solicitors practises from our office in Huddersfield, and provides legal services across England and Wales.",
  },
  {
    icon: Users,
    title: "Client-focused service",
    text: "Our matters are handled by a small team in close contact with the client. An initial conversation does not create a solicitor-client relationship.",
  },
  {
    icon: FileCheck,
    title: "Clear process",
    text: "Documents are reviewed with care, the scope of work is confirmed in writing, and the next step in every matter is made clear.",
  },
  {
    icon: ShieldCheck,
    title: "Accurate information",
    text: "We publish only information that can be verified. Details of our regulatory status and qualifications are available on request.",
  },
];

export function CredentialBlock() {
  return (
    <section id="credentials" className="dark-surface bg-navy text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.16em] text-cool uppercase">About Our Practice</p>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">A professional practice, transparently stated.</h2>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-mist/80 sm:text-right">
            Smart Law Solicitors practises from our office in Huddersfield, and provides legal services across England and Wales.
          </p>
        </div>

        <div className="grid border border-white/25 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group cursor-default border-b border-white/25 p-6 transition-colors duration-500 ease-out last:border-b-0 hover:bg-white sm:border-r sm:p-7 sm:last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:border-b-0"
              >
                <Icon
                  className="h-5 w-5 text-cool transition-colors duration-500 group-hover:text-steel"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-display text-2xl leading-tight text-white transition-colors duration-500 group-hover:text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.8rem] leading-[1.7] text-mist transition-colors duration-500 group-hover:text-charcoal/80">
                  {item.text}
                </p>
                <span
                  className="mt-6 block h-px w-8 bg-white/40 transition-all duration-500 group-hover:w-12 group-hover:bg-navy"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
