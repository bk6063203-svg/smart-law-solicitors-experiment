import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/utils/cn";

type Variant = "light" | "dark" | "ghost" | "ghost-light";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  icon?: boolean;
};

const variants: Record<Variant, string> = {
  light: "bg-white text-navy hover:bg-mist",
  dark: "bg-navy text-white hover:bg-steel",
  ghost: "border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-white",
  "ghost-light": "border border-white/40 text-white hover:bg-white hover:text-navy",
};

export function Button({
  children,
  onClick,
  variant = "dark",
  className,
  type = "button",
  icon = true,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-medium transition-colors duration-300",
        variants[variant],
        className,
      )}
    >
      <span>{children}</span>
      {icon ? (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      ) : null}
    </button>
  );
}
