import { cn } from "@/utils/cn";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  light?: boolean;
  index?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, text, light = false, index, className }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow || index ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.08em]",
            light ? "text-cool" : "text-steel",
          )}
        >
          {index ? <span className="font-display text-lg normal-case tracking-normal">{index}</span> : null}
          {eyebrow ? <span>{eyebrow}</span> : null}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-[2.15rem] leading-[1.08] font-medium tracking-[-0.02em] text-balance sm:text-5xl",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {text ? (
        <p className={cn("mt-5 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg", light ? "text-mist" : "text-charcoal")}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
