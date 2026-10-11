import { cn } from "@/lib/utils";
import Image from "next/image";

export function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

// App icon or company logo. Falls back to a colored tile with initials.
export function AppIcon({
  name,
  src,
  accent = "#525252",
  size = 48,
  rounded = "rounded-2xl",
  className,
}: {
  name: string;
  src?: string;
  accent?: string;
  size?: number;
  rounded?: string;
  className?: string;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={`${name} logo`}
        width={size}
        height={size}
        className={cn("shrink-0 border object-cover", rounded, className)}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={cn(
        "flex shrink-0 items-center justify-center font-semibold text-white shadow-sm",
        rounded,
        className
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
      }}
    >
      {initials(name)}
    </div>
  );
}
