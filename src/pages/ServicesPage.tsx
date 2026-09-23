import { useLayoutEffect } from "react";
import { photo, services } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { PageHero } from "@/components/PageHero";
import { ServiceDetail } from "@/components/ServiceDetail";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export function ServicesPage() {
  const { route, navigate, reducedMotion } = useSite();

  useLayoutEffect(() => {
    if (!route.section) return;
    const target = document.getElementById(`service-${route.section}`);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "auto" });
  }, [route.section, reducedMotion]);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="The work, named carefully."
        text="Seven directions. Six with a published shape. Solicitation is confirmed, and its detailed scope is not invented here."
        image={photo(10964647, 1800)}
        imageAlt="A modern commercial building photographed from below."
      />
      <div className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-10 lg:px-10">
          <aside className="lg:col-span-3">
            <nav aria-label="Services" className="flex gap-2 overflow-x-auto py-6 lg:sticky lg:top-28 lg:block lg:space-y-1 lg:overflow-visible lg:py-24">
              {services.map((service) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => navigate("services", service.id)}
                  className="shrink-0 px-3 py-2 text-left text-sm text-steel hover:text-navy lg:block lg:w-full lg:px-0"
                >
                  <span className="mr-2 text-steel">{service.number}</span>
                  {service.title}
                </button>
              ))}
            </nav>
          </aside>
          <div className="lg:col-span-9">
            {services.map((service) => (
              <ServiceDetail key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
      <CTASection />
      <Footer />
    </>
  );
}
