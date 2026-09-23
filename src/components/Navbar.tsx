import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { firm } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { cn } from "@/utils/cn";
import { BrandMark } from "@/components/BrandMark";
import { MobileMenu } from "@/components/MobileMenu";

export function Navbar() {
  const { route, navigate, menuOpen, setMenuOpen } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useState<HTMLButtonElement | null>(null);

  const links = [
    { label: "Home", page: "home" as const, section: undefined, onClick: () => navigate("home") },
    { label: "About", page: "about" as const, section: undefined, onClick: () => navigate("about") },
    { label: "Conveyancing", page: "services" as const, section: "conveyancing", onClick: () => navigate("services", "conveyancing") },
    { label: "Services", page: "services" as const, section: undefined, onClick: () => navigate("services") },
    { label: "People", page: "people" as const, section: undefined, onClick: () => navigate("people") },
    { label: "Journal", page: "insights" as const, section: undefined, onClick: () => navigate("insights") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;
  const isHomeHero = route.page === "home" && !solid;

  const isCurrent = (page: string, section?: string) => {
    if (route.page !== page) return false;
    if (section) return route.section === section;
    return page !== "services" || !route.section || route.section !== "conveyancing";
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          solid
            ? "border-b border-navy/10 bg-white/95 shadow-[0_8px_30px_rgba(11,31,58,0.06)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 transition-all duration-500 sm:px-8 lg:px-10",
            solid ? "h-16" : "h-20 sm:h-24",
          )}
        >
          {/* Logo: crisp white on hero, crisp dark navy when scrolled/on white */}
          <button
            type="button"
            onClick={() => navigate("home")}
            className="group shrink-0 text-left transition-opacity duration-300 hover:opacity-90"
            aria-label="Smart Law Solicitors, home"
          >
            <BrandMark
              tone={isHomeHero ? "light" : "dark"}
              compact={solid}
              className="transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </button>

          {/* Nav links with refined hover animation */}
          <nav className="hidden items-center gap-1 lg:flex xl:gap-2" aria-label="Primary">
            {links.map((item) => {
              const current = isCurrent(item.page, item.section);
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onClick}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "nav-link group relative px-3 py-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-all duration-300 xl:px-4",
                    solid
                      ? current
                        ? "text-navy font-semibold"
                        : "text-steel/80 hover:text-navy"
                      : current
                        ? "text-white font-semibold"
                        : "text-white/75 hover:text-white",
                  )}
                >
                  <span className="nav-link__text inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                    {item.label}
                  </span>
                  <span
                    className={cn(
                      "nav-link__underline absolute bottom-0.5 left-3 right-3 h-[1.5px] transition-all duration-300 xl:left-4 xl:right-4",
                      solid ? "bg-navy" : "bg-white",
                      current
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100",
                    )}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </nav>

          {/* Right CTA & contact */}
          <div className="flex items-center gap-4">
            <a
              href={firm.phoneHref}
              className={cn(
                "hidden items-center gap-2 text-xs tracking-wide transition-colors duration-300 xl:flex",
                solid ? "text-steel hover:text-navy" : "text-white/80 hover:text-white",
              )}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{firm.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => navigate("contact")}
              className={cn(
                "group hidden items-center gap-2 border px-4 py-2.5 text-[0.68rem] font-semibold tracking-[0.14em] uppercase transition-all duration-300 md:inline-flex",
                solid
                  ? "border-navy bg-navy text-white hover:border-steel hover:bg-steel"
                  : "border-white/55 bg-transparent text-white hover:bg-white hover:text-navy",
              )}
            >
              <span>Speak to an Expert</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
            <button
              ref={(node) => menuButton[1](node)}
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center transition-colors duration-500 lg:hidden",
                solid ? "text-navy" : "text-white",
              )}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
              <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu returnFocus={menuButton[0]} />
    </>
  );
}
