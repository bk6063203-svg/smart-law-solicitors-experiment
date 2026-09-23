import { createContext, useContext, type ReactNode, type RefObject } from "react";
import type Lenis from "lenis";

export type PageId = "home" | "about" | "services" | "people" | "insights" | "contact";

export type Route = {
  page: PageId;
  section?: string;
};

export const pages: PageId[] = ["home", "about", "services", "people", "insights", "contact"];

export function isPageId(value: string): value is PageId {
  return pages.includes(value as PageId);
}

type SiteContextValue = {
  route: Route;
  navigate: (page: PageId, section?: string) => void;
  reducedMotion: boolean;
  lenisRef: RefObject<Lenis | null>;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({
  value,
  children,
}: {
  value: SiteContextValue;
  children: ReactNode;
}) {
  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
