import Image from "next/image";

type CinematicBackgroundProps = {
  /** Path under /public (e.g. "/bg-hero.png") */
  src: string;
  /** Extra classes applied to the <Image/> for positioning */
  imageClassName?: string;
  /** Overlay opacity strength (0..1). Higher = more readable text. */
  overlay?: number;
  /** Overlay style preset */
  overlayVariant?: "default" | "hero";
  /** Prioritize loading (use for hero) */
  priority?: boolean;
};

export default function CinematicBackground({
  src,
  imageClassName = "object-cover object-top",
  overlay = 0.72,
  overlayVariant = "default",
  priority = false,
}: CinematicBackgroundProps) {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={[
          "zact-bg-pan-slow select-none",
          imageClassName,
        ].join(" ")}
      />

      {/* Atmospheric tint + readability gradient */}
      <div
        className={[
          "absolute inset-0",
          overlayVariant === "hero" ? "zact-bg-overlay-hero" : "zact-bg-overlay",
        ].join(" ")}
        style={{ opacity: overlay }}
      />

      {/* Subtle pixel/dither texture */}
      <div className="absolute inset-0 zact-bg-dither opacity-[0.18]" />
    </div>
  );
}


