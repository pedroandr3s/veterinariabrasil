import Image from "next/image";
import { business, images } from "@/config/site";
import { cn } from "@/lib/utils";
import { PawIcon } from "./icons";

/**
 * Si existe `images.logo` se usa el logo real sin modificarlo.
 * Si no, se muestra un logotipo PROVISORIO (huella + nombre).
 */
export function Logo({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  if (images.logo) {
    return (
      <Image
        src={images.logo.src}
        alt={business.name}
        width={images.logo.width}
        height={images.logo.height}
        className={cn("h-12 w-auto md:h-14", className)}
        priority
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sun text-ink">
        <PawIcon className="size-6" />
      </span>
      <span
        className={cn("font-display text-xl leading-none", tone === "dark" ? "text-white" : "text-ink")}
      >
        {business.name}
      </span>
    </span>
  );
}
