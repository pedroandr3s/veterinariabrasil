import { Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/config/site";
import { DEFAULT_WHATSAPP_MESSAGE, telUrl, whatsappUrl } from "@/lib/utils";
import { Logo } from "./Logo";
import { InstagramIcon, WhatsAppIcon } from "./icons";

const iconLink =
  "grid size-12 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-sun hover:text-ink";

export function Footer() {
  const { address, phone, email, instagram } = business;

  return (
    <footer className="on-dark bg-ink pb-28 pt-14 text-white md:pb-12">
      <div className="mx-auto max-w-[88rem] px-5">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 max-w-xs text-white/80">{business.tagline}.</p>
          </div>

          <div>
            <p className="font-display text-lg">Contacto</p>
            <ul className="mt-4 space-y-3 text-white/85">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-sun" aria-hidden="true" />
                <address className="not-italic">
                  {address.street}, {address.city}, {address.region}
                </address>
              </li>
              <li>
                <a href={telUrl} className="flex gap-3 hover:text-sun">
                  <Phone className="mt-0.5 size-5 shrink-0 text-sun" aria-hidden="true" />
                  {phone.display}
                </a>
              </li>
              {email && (
                <li>
                  <a href={`mailto:${email}`} className="flex gap-3 hover:text-sun">
                    <Mail className="mt-0.5 size-5 shrink-0 text-sun" aria-hidden="true" />
                    {email}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg">Síguenos</p>
            <ul className="mt-4 flex gap-3">
              <li>
                <a
                  href={instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram de ${business.name}, @${instagram.handle}`}
                  className={iconLink}
                >
                  <InstagramIcon className="size-6" />
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp de ${business.name}`}
                  className={iconLink}
                >
                  <WhatsAppIcon className="size-6" />
                </a>
              </li>
            </ul>
            <p className="mt-3 text-sm text-white/75">@{instagram.handle}</p>
          </div>
        </div>

        <p className="mt-12 border-t border-white/15 pt-6 text-sm text-white/75">
          © {new Date().getFullYear()} {business.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
