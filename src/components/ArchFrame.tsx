import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * Marco en arco (relación 4:5). Muestra la foto real si existe;
 * si no, una ilustración neutral que la reemplaza sin cambiar el diseño.
 */
export function ArchFrame({
  image,
  fallback,
  sizes,
  priority = false,
  className,
}: {
  image: SiteImage | null;
  fallback: ReactNode;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("arch relative aspect-[4/5] w-full overflow-hidden bg-sage", className)}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        fallback
      )}
    </div>
  );
}

/** Ilustración decorativa provisoria para el hero (reemplazar por una foto real). */
export function HeroArt() {
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
      aria-hidden="true"
    >
      <circle cx="285" cy="165" r="88" fill="var(--color-sun)" />
      <g fill="var(--color-brand-deep)" opacity="0.16">
        <rect x="52" y="96" width="14" height="42" rx="7" />
        <rect x="38" y="110" width="42" height="14" rx="7" />
        <rect x="322" y="372" width="12" height="36" rx="6" />
        <rect x="310" y="384" width="36" height="12" rx="6" />
      </g>
      <g transform="translate(86 196) scale(3.6)" fill="var(--color-brand)">
        <path d="M32 30c-7 0-14 8-14 15 0 5 4 8 8 8 2 0 4-1 6-1s4 1 6 1c4 0 8-3 8-8 0-7-7-15-14-15z" />
        <ellipse cx="14" cy="28" rx="5" ry="7" transform="rotate(-20 14 28)" />
        <ellipse cx="25" cy="17" rx="5.5" ry="8" />
        <ellipse cx="39" cy="17" rx="5.5" ry="8" />
        <ellipse cx="50" cy="28" rx="5" ry="7" transform="rotate(20 50 28)" />
      </g>
    </svg>
  );
}

/** Trama de huellas para la sección "Nosotros" mientras no haya una foto real. */
export function PawPattern() {
  const paws = [
    { x: 70, y: 90, s: 1.1, r: -18 },
    { x: 250, y: 60, s: 0.8, r: 14 },
    { x: 160, y: 190, s: 1.5, r: -6 },
    { x: 40, y: 300, s: 0.9, r: 20 },
    { x: 270, y: 330, s: 1.2, r: -14 },
    { x: 140, y: 410, s: 0.8, r: 10 },
  ];
  return (
    <svg
      viewBox="0 0 400 500"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
      aria-hidden="true"
    >
      <rect width="400" height="500" fill="var(--color-brand)" />
      <g fill="var(--color-sun)">
        {paws.map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.r} 32 32) scale(${p.s})`} opacity={i === 2 ? 1 : 0.55}>
            <path d="M32 30c-7 0-14 8-14 15 0 5 4 8 8 8 2 0 4-1 6-1s4 1 6 1c4 0 8-3 8-8 0-7-7-15-14-15z" />
            <ellipse cx="14" cy="28" rx="5" ry="7" transform="rotate(-20 14 28)" />
            <ellipse cx="25" cy="17" rx="5.5" ry="8" />
            <ellipse cx="39" cy="17" rx="5.5" ry="8" />
            <ellipse cx="50" cy="28" rx="5" ry="7" transform="rotate(20 50 28)" />
          </g>
        ))}
      </g>
    </svg>
  );
}
