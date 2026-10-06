import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { business, copy } from "@/config/site";
import { groupedHours } from "@/lib/hours";
import {
  mapsDirectionsUrl,
  mapsEmbedUrl,
  telUrl,
  whatsappUrl,
} from "@/lib/utils";
import { BookingForm } from "./BookingForm";
import { WhatsAppIcon } from "./icons";

const linkClass =
  "underline decoration-line underline-offset-4 transition-colors hover:text-brand hover:decoration-brand";

export function Contact() {
  const { address, phone, email } = business;
  const hours = groupedHours();

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="bg-paper pb-20 pt-4 md:pb-28 md:pt-4"
    >
      <div className="mx-auto max-w-[88rem] px-5">
        <h2 id="contacto-title" className="text-4xl leading-tight md:text-5xl">
          {copy.contact.title}
        </h2>
        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1fr_40rem] lg:items-start lg:gap-12">
          <div>
            <dl className="space-y-5">
              <div className="flex gap-4">
                <MapPin
                  className="mt-1 size-6 shrink-0 text-brand"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-sm font-semibold text-ink-soft">
                    Dirección
                  </dt>
                  <dd className="mt-1 text-lg">
                    <address className="not-italic">
                      {address.street}, {address.city}, Región de{" "}
                      {address.region}
                    </address>
                    <a
                      href={mapsDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      Cómo llegar
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone
                  className="mt-1 size-6 shrink-0 text-brand"
                  aria-hidden="true"
                />
                <div>
                  <dt className="text-sm font-semibold text-ink-soft">
                    Teléfono
                  </dt>
                  <dd className="mt-1 text-lg">
                    <a href={telUrl} className={linkClass}>
                      {phone.display}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex gap-4">
                <WhatsAppIcon className="mt-1 size-6 shrink-0 text-brand" />
                <div>
                  <dt className="text-sm font-semibold text-ink-soft">
                    WhatsApp
                  </dt>
                  <dd className="mt-1 text-lg">
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      Escribir al {phone.display}
                    </a>
                  </dd>
                </div>
              </div>

              {email && (
                <div className="flex gap-4">
                  <Mail
                    className="mt-1 size-6 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-sm font-semibold text-ink-soft">
                      Correo
                    </dt>
                    <dd className="mt-1 text-lg">
                      <a href={`mailto:${email}`} className={linkClass}>
                        {email}
                      </a>
                    </dd>
                  </div>
                </div>
              )}

              <div className="flex gap-4">
                <Clock
                  className="mt-1 size-6 shrink-0 text-brand"
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <dt className="text-sm font-semibold text-ink-soft">
                    Horario de atención
                  </dt>
                  <dd className="mt-2">
                    <table className="w-full max-w-md text-left text-base">
                      <caption className="sr-only">
                        Horario de atención de {business.name}
                      </caption>
                      <tbody>
                        {hours.map((row) => (
                          <tr
                            key={row.label}
                            className="border-b border-line/70 last:border-0"
                          >
                            <th
                              scope="row"
                              className="py-1.5 pr-4 align-top font-semibold"
                            >
                              {row.label}
                            </th>
                            <td className="py-1.5 text-ink-soft">{row.text}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          <div id="reservar" className="rounded-[1.75rem] bg-sage p-5 md:p-6 lg:-mt-14">
            <h3 className="text-2xl">Reserva tu hora</h3>
            <div className="mt-3">
              <BookingForm />
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-line bg-sage">
          <iframe
            title={`Mapa de ubicación de ${business.name}, ${address.street}, ${address.city}`}
            src={mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-80 w-full border-0 md:h-96"
          />
        </div>
      </div>
    </section>
  );
}
