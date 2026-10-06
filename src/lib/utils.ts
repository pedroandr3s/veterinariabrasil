import { business } from "@/config/site";

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Enlace de WhatsApp con mensaje opcional ya escrito. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${business.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const telUrl = `tel:${business.phone.e164}`;

export const mapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.address.mapsQuery,
)}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  business.address.mapsQuery,
)}&output=embed`;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, quisiera reservar una hora en Veterinaria Brasil.";
