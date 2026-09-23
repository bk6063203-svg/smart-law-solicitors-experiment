import type { ReactNode } from "react";
import { useSite } from "@/context/SiteContext";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  const { navigate } = useSite();

  return (
    <section className="dark-surface relative isolate overflow-hidden bg-navy text-white">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/45" />
      <div className="relative mx-auto flex min-h-[68vh] max-w-[1240px] flex-col justify-end px-5 pt-32 pb-14 sm:px-8 lg:px-10">
        <p className="sr-only">{imageAlt}</p>
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-cool">
          <button type="button" onClick={() => navigate("home")} className="link-draw">
            Home
          </button>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="text-mist">{eyebrow}</span>
        </nav>
        <p className="text-xs font-medium tracking-[0.08em] text-cool uppercase">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist">{text}</p>
        {children}
      </div>
    </section>
  );
}
