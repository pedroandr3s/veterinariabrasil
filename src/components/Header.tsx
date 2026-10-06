"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { business } from "@/config/site";
import { DEFAULT_WHATSAPP_MESSAGE, cn, whatsappUrl } from "@/lib/utils";
import { btn } from "@/lib/ui";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons";

type NavItem = { href: string; label: string };

export function Header({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const whatsapp = whatsappUrl(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-4 px-5 md:h-20">
        <a href={items[0]?.href.startsWith("/") ? "/" : "#inicio"} aria-label={`${business.name}, ir al inicio`} className="rounded-full">
          <Logo />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="py-2 text-base font-medium text-ink-soft transition-colors hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(btn.base, btn.primary, "max-md:hidden")}
          >
            <WhatsAppIcon className="size-5" />
            Reservar por WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid size-12 place-items-center rounded-full text-ink transition-colors hover:bg-sage md:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movil" className="rise border-t border-line bg-paper px-5 pb-6 pt-2 md:hidden">
          <ul>
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center border-b border-line/60 text-lg font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(btn.base, btn.primary, "mt-5 w-full")}
          >
            <WhatsAppIcon className="size-5" />
            Reservar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
