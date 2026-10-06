import Image from "next/image";
import { business, copy, gallery } from "@/config/site";
import { cn } from "@/lib/utils";
import { btn } from "@/lib/ui";
import { InstagramIcon } from "./icons";

export function InstagramSection() {
  const { instagram } = business;
  const preview = gallery.slice(0, 3);

  return (
    <section id="instagram" aria-labelledby="instagram-title" className="bg-paper py-12 md:py-16">
      <div className="mx-auto max-w-[88rem] px-5">
        <div className="grid items-center gap-10 rounded-[2rem] bg-sage p-8 md:grid-cols-2 md:gap-12 md:p-14">
          <div>
            <h2 id="instagram-title" className="text-4xl leading-tight md:text-5xl">
              {copy.instagram.title}
            </h2>
            <p className="mt-4 max-w-md text-lg text-ink-soft">{copy.instagram.text}</p>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btn.base, btn.primary, "mt-7")}
            >
              <InstagramIcon className="size-5" />
              {copy.instagram.cta}
            </a>
          </div>

          {preview.length === 3 ? (
            <ul className="grid grid-cols-3 gap-3">
              {preview.map((photo) => (
                <li key={photo.src} className="relative aspect-square overflow-hidden rounded-2xl bg-paper">
                  <a
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver más en Instagram: ${photo.alt}`}
                    className="block size-full"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 15vw, 30vw"
                      className="object-cover"
                    />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 rounded-[1.75rem] bg-paper p-6 transition-colors hover:bg-white md:p-8"
            >
              <span className="grid size-16 shrink-0 place-items-center rounded-full bg-sun text-ink">
                <InstagramIcon className="size-8" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-2xl leading-tight break-words">
                  @{instagram.handle}
                </span>
                <span className="mt-1 block text-ink-soft">Perfil público de Instagram</span>
              </span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
