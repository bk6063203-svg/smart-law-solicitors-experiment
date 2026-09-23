import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { firm, navigation } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { cn } from "@/utils/cn";

export function MobileMenu({ returnFocus }: { returnFocus: HTMLButtonElement | null }) {
  const { menuOpen, setMenuOpen, navigate, route, reducedMotion } = useSite();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      returnFocus?.focus();
    };
  }, [menuOpen, returnFocus, setMenuOpen]);

  return (
    <AnimatePresence>
      {menuOpen ? (
        <motion.div
          id="mobile-menu"
          className="dark-surface fixed inset-0 z-[60] bg-navy text-white lg:hidden"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex h-[4.5rem] items-center justify-end px-5">
            <button
              ref={closeRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <X aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <nav className="flex h-[calc(100svh-4.5rem)] flex-col justify-between px-6 pb-10" aria-label="Mobile">
            <ul className="space-y-2">
              {navigation.map((item, index) => (
                <li key={item.id}>
                  <motion.button
                    type="button"
                    initial={reducedMotion ? false : { y: 18, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: reducedMotion ? 0 : 0.06 * index, duration: 0.45 }}
                    onClick={() => {
                      setMenuOpen(false);
                      navigate(item.id);
                    }}
                    className="flex w-full items-baseline gap-4 py-2 text-left"
                    aria-current={route.page === item.id ? "page" : undefined}
                  >
                    <span className="w-8 text-xs text-cool">0{index + 1}</span>
                    <span
                      className={cn(
                        "font-display text-5xl leading-none",
                        route.page === item.id ? "text-white" : "text-mist",
                      )}
                    >
                      {item.label}
                    </span>
                  </motion.button>
                </li>
              ))}
            </ul>
            <div className="border-t border-white/15 pt-6 text-sm text-mist">
              <a href={firm.phoneHref} className="block py-1 text-white">
                {firm.phoneDisplay}
              </a>
              <a href={firm.emailHref} className="block py-1">
                {firm.email}
              </a>
              <p className="mt-4 max-w-xs leading-relaxed">
                {firm.address.line1}, {firm.address.city}, {firm.address.postcode}
              </p>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("contact");
                }}
                className="mt-6 bg-white px-5 py-3 text-sm font-medium text-navy"
              >
                Speak to an Expert
              </button>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
