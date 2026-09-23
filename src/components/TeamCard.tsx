import { ArrowUpRight } from "lucide-react";
import type { Person } from "@/data/site";
import { useSite } from "@/context/SiteContext";
import { cn } from "@/utils/cn";

export function TeamCard({
  person,
  className,
}: {
  person: Person;
  className?: string;
}) {
  const { navigate } = useSite();

  return (
    <div
      onClick={() => navigate("contact")}
      className={cn(
        "group cursor-pointer text-left transition-all duration-300",
        className,
      )}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate("contact");
        }
      }}
      aria-label={`${person.name}, ${person.role}. Speak to the office.`}
    >
      {/* Portrait box */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy">
        <img
          src={person.image}
          alt={person.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle vignette on hover */}
        <div className="pointer-events-none absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/20" />

        {/* Corner diagonal arrow tag matching Screenshot 6 */}
        <div className="absolute top-3.5 right-3.5 flex h-7 w-7 items-center justify-center bg-white/95 text-navy shadow-sm transition-all duration-300 group-hover:bg-navy group-hover:text-white">
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </div>
      </div>

      {/* Name and role underneath */}
      <div className="pt-4">
        <h3 className="font-display text-2xl font-medium text-navy transition-colors duration-300 group-hover:text-steel">
          {person.name}
        </h3>
        <p className="mt-1 text-[0.66rem] font-semibold tracking-[0.18em] text-steel uppercase">
          {person.role}
        </p>
      </div>
    </div>
  );
}
