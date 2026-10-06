import { HeartPulse, Scissors, ShieldCheck, Stethoscope, Syringe, type LucideIcon } from "lucide-react";
import { copy, services, type ServiceIcon } from "@/config/site";
import { cn, whatsappUrl } from "@/lib/utils";
import { btn } from "@/lib/ui";
import { WhatsAppIcon } from "./icons";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  consulta: Stethoscope,
  vacunacion: Syringe,
  desparasitacion: ShieldCheck,
  cirugia: HeartPulse,
  peluqueria: Scissors,
};

export function Services() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="bg-paper pb-20 pt-8 md:pb-28 md:pt-10">
      <div className="mx-auto max-w-[88rem] px-5">
        <div className="grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12">
          <h2 id="servicios-title" className="text-4xl leading-tight md:text-5xl">
            {copy.services.title}
          </h2>
          <p className="text-lg text-ink-soft">{copy.services.intro}</p>
        </div>

        <ul className="mt-12 grid gap-4 md:grid-cols-6">
          {services.map((service, index) => {
            const Icon = ICONS[service.icon];
            const featured = index === 0;
            return (
              <li
                key={service.id}
                className={cn(
                  "rounded-[1.75rem] p-7",
                  featured
                    ? "on-dark bg-brand text-white md:col-span-4 md:min-h-72 md:p-10"
                    : "bg-sage md:col-span-2",
                )}
              >
                <span
                  className={cn(
                    "grid size-14 place-items-center rounded-full",
                    featured ? "bg-sun text-ink" : "bg-paper text-brand",
                  )}
                >
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className={cn("mt-6", featured ? "text-3xl md:text-4xl" : "text-2xl")}>
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-base leading-relaxed",
                    featured ? "max-w-md text-lg text-white/90" : "text-ink-soft",
                  )}
                >
                  {service.description}
                </p>
              </li>
            );
          })}

          <li className="flex flex-col items-start justify-between gap-5 rounded-[1.75rem] bg-sun p-7 text-ink md:col-span-6 md:flex-row md:items-center md:px-10">
            <div>
              <h3 className="text-2xl">{copy.services.ctaTitle}</h3>
              <p className="mt-1.5 text-base">{copy.services.ctaText}</p>
            </div>
            <a
              href={whatsappUrl(
                "Hola, quisiera consultar por una atención en Veterinaria Brasil.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btn.base, btn.dark, "shrink-0")}
            >
              <WhatsAppIcon className="size-5" />
              Escribir por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
