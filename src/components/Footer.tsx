import { firm, navigation, services } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { BrandMark } from "@/components/BrandMark";

export function Footer() {
  const { navigate } = useSite();

  return (
    <footer className="dark-surface border-t border-white/10 bg-[#06080C] text-mist">
      {/* Main Footer Links & Info */}
      <div className="mx-auto max-w-[1240px] px-5 pt-20 pb-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-14">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-5">
            <button
              type="button"
              onClick={() => navigate("home")}
              className="group block text-left transition-opacity duration-300 hover:opacity-90"
              aria-label="Smart Law Solicitors, home"
            >
              {/* Clean white typography logo with NO background box */}
              <BrandMark tone="light" className="w-[170px]" />
            </button>

            <p className="mt-6 max-w-sm text-sm leading-[1.8] text-mist/80">
              A modern solicitors&apos; practice. Senior judgement, engineered process and straight
              answers — from Manchester and Huddersfield to wherever you are.
            </p>

            <div className="mt-8 flex flex-col gap-1.5 text-xs text-cool">
              <span className="font-semibold tracking-[0.14em] text-white uppercase">Head Office</span>
              <address className="not-italic leading-relaxed text-mist/80">
                {firm.address.line1}, {firm.address.city}, {firm.address.postcode}
              </address>
              <span className="text-mist/60">Manchester Chambers by appointment.</span>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div className="lg:col-span-3">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-white uppercase">
              Practice
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-mist/75">
              {services.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => navigate("services", service.id)}
                    className="text-left transition-colors duration-200 hover:text-white"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Firm Links */}
          <div className="lg:col-span-2">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-white uppercase">
              Firm
            </p>
            <ul className="mt-5 space-y-2.5 text-xs text-mist/75">
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => navigate(item.id)}
                    className="text-left transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => navigate("about")}
                  className="text-left transition-colors duration-200 hover:text-white"
                >
                  Legacy &amp; Future
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="lg:col-span-2">
            <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-white uppercase">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-xs">
              <div>
                <span className="block text-[0.66rem] font-medium tracking-[0.14em] text-cool uppercase">
                  Telephone
                </span>
                <a
                  href={firm.phoneHref}
                  className="mt-1 block text-sm font-medium text-white transition-colors hover:text-mist"
                >
                  {firm.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="block text-[0.66rem] font-medium tracking-[0.14em] text-cool uppercase">
                  Enquiries
                </span>
                <a
                  href={firm.emailHref}
                  className="mt-1 block text-xs text-mist transition-colors hover:text-white"
                >
                  {firm.email}
                </a>
              </div>
              <div className="pt-2">
                <span className="block text-[0.66rem] font-medium tracking-[0.14em] text-cool uppercase">
                  Hours
                </span>
                <p className="mt-1 text-xs text-mist/70">
                  Monday – Friday
                  <br />
                  09:00 – 18:00 GMT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory, Complaints & Data Notices matching Screenshot 8 */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid gap-8 text-[0.72rem] leading-relaxed text-cool/90 sm:grid-cols-3">
            <div>
              <p className="font-semibold tracking-[0.16em] text-white uppercase">
                Regulation
              </p>
              <p className="mt-2 text-mist/75">
                Smart Law Solicitors is authorised and regulated by the Solicitors Regulation
                Authority. England &amp; Wales. Legal services provided subject to SRA Standards &amp;
                Regulations.
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.16em] text-white uppercase">
                Complaints
              </p>
              <p className="mt-2 text-mist/75">
                Our complaints handling procedure is available on request. If we cannot resolve your
                concern within eight weeks, you may refer it to the Legal Ombudsman.
              </p>
            </div>
            <div>
              <p className="font-semibold tracking-[0.16em] text-white uppercase">
                Data &amp; Funds
              </p>
              <p className="mt-2 text-mist/75">
                Personal data is processed strictly under UK GDPR. Client money is held in designated
                client bank accounts, and all matters are protected by professional indemnity cover.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/5 pt-6 text-[0.68rem] text-cool/70 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Smart Law Solicitors. All rights reserved.</p>
          <p className="text-cool/60">
            Frontend demonstration interface. No backend or server transmission.
          </p>
        </div>
      </div>
    </footer>
  );
}
