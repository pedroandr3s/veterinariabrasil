import { MapPin, Phone } from "lucide-react";
import { business, copy } from "@/config/site";
import { DEFAULT_WHATSAPP_MESSAGE, cn, telUrl, whatsappUrl } from "@/lib/utils";
import { btn, stagger } from "@/lib/ui";
import { OpenNow } from "./OpenNow";
import { WhatsAppIcon } from "./icons";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-[88rem] items-center gap-10 px-5 pb-16 pt-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12 md:pb-24 md:pt-14">
        <div>
          <OpenNow className="rise" />

          <h1
            id="hero-title"
            className="rise mt-5 text-[2.5rem] leading-[1.06] sm:text-5xl lg:text-[3.6rem]"
            style={stagger(1)}
          >
            {copy.hero.title}
          </h1>

          <p
            className="rise mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
            style={stagger(2)}
          >
            {copy.hero.subtitle}
          </p>

          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={stagger(3)}>
            <a href="#reservar" className={cn(btn.base, btn.primary)}>
              Reservar hora
            </a>
            <a
              href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(btn.base, btn.secondary)}
            >
              <WhatsAppIcon className="size-5" />
              Escribir por WhatsApp
            </a>
          </div>

          <address
            className="rise mt-8 flex flex-col gap-2.5 text-base not-italic text-ink-soft"
            style={stagger(4)}
          >
            <span className="flex items-center gap-2.5">
              <MapPin className="size-5 shrink-0 text-brand" aria-hidden="true" />
              {business.address.street}, {business.address.city}, {business.address.region}
            </span>
            <a href={telUrl} className="flex items-center gap-2.5 hover:text-brand">
              <Phone className="size-5 shrink-0 text-brand" aria-hidden="true" />
              {business.phone.display}
            </a>
          </address>
        </div>

        <div className="rise mx-auto w-full max-w-sm md:max-w-none" style={stagger(2)}>
          <video
            className="h-auto w-full md:scale-125 lg:scale-[1.15]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/hero-web.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
}
