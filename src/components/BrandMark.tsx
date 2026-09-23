import { cn } from "@/utils/cn";

/**
 * Smart Law Solicitors wordmark
 * Renders crisp SVG vector typography matching the official logo:
 * - SMART LAW (serif, tracked)
 * - SOLICITORS (spaced sans-serif)
 * - Precise dividing underline
 * Supports 'light' (white on dark), 'dark' (navy on light), and 'blue' (#1B3F7A)
 * NO awkward background box!
 */
export function BrandMark({
  className,
  tone = "light",
  compact = false,
}: {
  className?: string;
  tone?: "light" | "dark" | "blue";
  compact?: boolean;
}) {
  const color =
    tone === "light"
      ? "text-white"
      : tone === "blue"
        ? "text-[#1B3F7A]"
        : "text-navy";

  return (
    <span
      className={cn(
        "inline-flex items-center transition-all duration-300",
        color,
        compact ? "w-[128px]" : "w-[150px] sm:w-[164px]",
        className,
      )}
    >
      <svg
        viewBox="0 0 420 126"
        className="h-auto w-full"
        role="img"
        aria-labelledby="smart-law-logo-title"
      >
        <title id="smart-law-logo-title">Smart Law Solicitors</title>
        <text
          x="210"
          y="62"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="'Cormorant Garamond', Georgia, 'Times New Roman', serif"
          fontSize="72"
          fontWeight="600"
          letterSpacing="1.8"
        >
          SMART LAW
        </text>
        <text
          x="210"
          y="99"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="Manrope, -apple-system, BlinkMacSystemFont, Arial, sans-serif"
          fontSize="20"
          fontWeight="600"
          letterSpacing="12.5"
        >
          SOLICITORS
        </text>
        <line
          x1="16"
          y1="116"
          x2="404"
          y2="116"
          stroke="currentColor"
          strokeWidth="2.8"
        />
      </svg>
    </span>
  );
}
