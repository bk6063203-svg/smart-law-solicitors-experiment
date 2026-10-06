import { useCallback, useEffect, useMemo, useState } from "react";
import { getInsight } from "@/data/site";
import { isPageId, SiteProvider, type PageId, type Route } from "@/context/SiteContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { ScrollTrigger } from "@/lib/gsap";
import { Navbar } from "@/components/Navbar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransition } from "@/components/PageTransition";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { InsightsPage } from "@/pages/InsightsPage";
import { ContactPage } from "@/pages/ContactPage";

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#/, "");
  if (!raw) return { page: "home" };
  const [page, section] = raw.split("/");
  if (!isPageId(page)) return { page: "home" };
  return { page, section: section || undefined };
}

function titleFor(route: Route) {
  const names: Record<PageId, string> = {
    home: "Smart Law Solicitors | Solicitors in Huddersfield",
    about: "About | Smart Law Solicitors",
    services: "Services | Smart Law Solicitors",
    insights: "Insights | Smart Law Solicitors",
    contact: "Contact | Smart Law Solicitors",
  };
  if (route.page === "insights" && route.section) {
    const article = getInsight(route.section);
    if (article) return `${article.title} | Smart Law Solicitors`;
  }
  return names[route.page];
}

export default function App() {
  const reducedMotion = usePrefersReducedMotion();
  const lenisRef = useSmoothScroll(reducedMotion);
  const [route, setRoute] = useState<Route>(() =>
    typeof window === "undefined" ? { page: "home" } : parseHash(),
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const apply = () => setRoute(parseHash());
    apply();
    window.addEventListener("hashchange", apply);
    window.addEventListener("popstate", apply);
    return () => {
      window.removeEventListener("hashchange", apply);
      window.removeEventListener("popstate", apply);
    };
  }, []);

  useEffect(() => {
    document.title = titleFor(route);
  }, [route]);

  useEffect(() => {
    if (menuOpen) {
      lenisRef.current?.stop();
    } else {
      lenisRef.current?.start();
    }
  }, [menuOpen, lenisRef]);

  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const timer = window.setTimeout(refresh, 700);
    return () => {
      window.removeEventListener("load", refresh);
      window.clearTimeout(timer);
    };
  }, [route.page]);

  const navigate = useCallback(
    (page: PageId, section?: string) => {
      setMenuOpen(false);
      const desired = section ? `${page}/${section}` : page;
      const current = window.location.hash.replace(/^#/, "") || "home";
      if (current === desired) {
        if (section) {
          const id = page === "services" ? `service-${section}` : section;
          document.getElementById(id)?.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
          });
        } else {
          lenisRef.current?.scrollTo(0, { immediate: true });
          window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
        }
        return;
      }
      window.history.pushState(null, "", `#${desired}`);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    },
    [lenisRef, reducedMotion],
  );

  const value = useMemo(
    () => ({
      route,
      navigate,
      reducedMotion,
      lenisRef,
      menuOpen,
      setMenuOpen,
    }),
    [route, navigate, reducedMotion, lenisRef, menuOpen],
  );

  const page = {
    home: <HomePage />,
    about: <AboutPage />,
    services: <ServicesPage />,
    insights: <InsightsPage />,
    contact: <ContactPage />,
  }[route.page];

  return (
    <SiteProvider value={value}>
      <button
        type="button"
        className="skip-link"
        onClick={() => {
          const main = document.getElementById("main");
          if (!main) return;
          main.tabIndex = -1;
          main.focus();
          main.scrollIntoView();
        }}
      >
        Skip to content
      </button>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main id="main">
        <PageTransition routeKey={`${route.page}/${route.section ?? ""}`}>{page}</PageTransition>
      </main>
    </SiteProvider>
  );
}
