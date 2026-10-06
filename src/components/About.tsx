import Image from "next/image";
import { copy, images, team, visible } from "@/config/site";
import { ArchFrame, PawPattern } from "./ArchFrame";

export function About() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="bg-sage pb-20 pt-10 md:pb-28 md:pt-12">
      <div className="mx-auto grid max-w-[88rem] items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
        <div className="mx-auto w-full max-w-sm md:max-w-md">
          <ArchFrame
            image={images.about}
            fallback={<PawPattern />}
            sizes="(min-width: 768px) 28rem, 80vw"
            className="bg-brand"
          />
        </div>

        <div>
          <h2 id="nosotros-title" className="text-4xl leading-tight md:text-5xl">
            {copy.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {visible.team && (
        <div className="mx-auto mt-16 max-w-[88rem] px-5">
          <h3 className="text-2xl">Nuestro equipo</h3>
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {team.map((member) => (
              <li key={member.name}>
                {member.photo && (
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-[1.75rem]">
                    <Image
                      src={member.photo.src}
                      alt={member.photo.alt}
                      fill
                      sizes="(min-width: 768px) 16rem, 50vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <p className="text-lg font-semibold">{member.name}</p>
                <p className="text-ink-soft">{member.role}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
