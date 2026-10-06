import { Phone } from "lucide-react";
import { business } from "@/config/site";
import { DEFAULT_WHATSAPP_MESSAGE, cn, telUrl, whatsappUrl } from "@/lib/utils";
import { btn } from "@/lib/ui";
import { WhatsAppIcon } from "./icons";

/** Barra fija inferior, solo en móvil: reservar por WhatsApp o llamar. */
export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl gap-2 px-4 py-3">
        <a
          href={whatsappUrl(DEFAULT_WHATSAPP_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(btn.base, btn.primary, "flex-1 px-4")}
        >
          <WhatsAppIcon className="size-5" />
          Reservar hora
        </a>
        <a
          href={telUrl}
          aria-label={`Llamar al ${business.phone.display}`}
          className={cn(btn.base, btn.secondary, "px-5")}
        >
          <Phone className="size-5" aria-hidden="true" />
          Llamar
        </a>
      </div>
    </div>
  );
}
