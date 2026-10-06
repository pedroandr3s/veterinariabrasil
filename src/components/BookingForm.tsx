"use client";

import { useId, useState, type FormEvent } from "react";
import { business, services } from "@/config/site";
import { cn, whatsappUrl } from "@/lib/utils";
import { btn } from "@/lib/ui";
import { WhatsAppIcon } from "./icons";

const SPECIES = ["Perro", "Gato", "Otro"];
const OTHER_REASON = "Otro motivo";

const field =
  "min-h-11 w-full rounded-xl border border-line bg-white px-4 text-base text-ink placeholder:text-ink-soft";
const label = "mb-1 block text-sm font-semibold text-ink";

/**
 * Arma un mensaje de WhatsApp con los datos de la reserva.
 * No hay backend: la hora queda confirmada cuando la veterinaria responde.
 */
export function BookingForm() {
  const uid = useId();
  const [opened, setOpened] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const lines = [`Hola, soy ${get("nombre")}. Quisiera reservar una hora en ${business.name}.`];
    const pet = [get("mascota"), get("especie") && `(${get("especie")})`].filter(Boolean).join(" ");
    if (pet) lines.push(`Mascota: ${pet}`);
    if (get("motivo")) lines.push(`Motivo: ${get("motivo")}`);
    if (get("preferencia")) lines.push(`Día u horario preferido: ${get("preferencia")}`);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-nombre`} className={label}>
          Tu nombre
        </label>
        <input
          id={`${uid}-nombre`}
          name="nombre"
          type="text"
          required
          autoComplete="name"
          className={field}
        />
      </div>

        <div>
          <label htmlFor={`${uid}-mascota`} className={label}>
            Nombre de tu mascota
          </label>
          <input id={`${uid}-mascota`} name="mascota" type="text" className={field} />
        </div>
        <div>
          <label htmlFor={`${uid}-especie`} className={label}>
            Tipo de mascota
          </label>
          <select id={`${uid}-especie`} name="especie" defaultValue="" className={field}>
            <option value="">Selecciona</option>
            {SPECIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-motivo`} className={label}>
          Motivo de la consulta
        </label>
        <select id={`${uid}-motivo`} name="motivo" defaultValue="" className={field}>
          <option value="">Selecciona</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value={OTHER_REASON}>{OTHER_REASON}</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`${uid}-preferencia`} className={label}>
          Día u horario preferido
        </label>
        <input
          id={`${uid}-preferencia`}
          name="preferencia"
          type="text"
          placeholder="Ej: martes por la mañana"
          className={field}
        />
      </div>

      <button type="submit" className={cn(btn.base, btn.primary, "w-full sm:col-span-2")}>
        <WhatsAppIcon className="size-5" />
        Enviar por WhatsApp
      </button>

      <p role="status" className="min-h-5 text-sm text-ink-soft sm:col-span-2">
        {opened && (
          <>
            Se abrió WhatsApp en otra pestaña. Si no se abrió, escríbenos al{" "}
            <a href={whatsappUrl()} className="font-semibold underline underline-offset-4">
              {business.phone.display}
            </a>
            .
          </>
        )}
      </p>
    </form>
  );
}
