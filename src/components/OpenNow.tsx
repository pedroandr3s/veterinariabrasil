"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { getOpenStatus, type OpenStatus } from "@/lib/hours";

/** Indicador "Abierto ahora" calculado con la hora de Chile (se actualiza cada minuto). */
export function OpenNow({ className }: { className?: string }) {
  const [status, setStatus] = useState<OpenStatus | null>(null);

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <p
      aria-live="polite"
      className={cn(
        "inline-flex min-h-9 items-center gap-2.5 rounded-full bg-sage px-4 text-sm font-medium text-ink",
        className,
      )}
    >
      {status ? (
        <>
          <span className="relative flex size-2.5" aria-hidden="true">
            {status.open && <span className="ping-soft absolute inset-0 rounded-full bg-brand" />}
            <span
              className={cn("relative size-2.5 rounded-full", status.open ? "bg-brand" : "bg-ink-soft")}
            />
          </span>
          {status.text}
        </>
      ) : (
        // Reserva el ancho para evitar saltos de diseño antes de hidratar.
        <span className="invisible">Cerrado ahora, abrimos mañana a las 09:00</span>
      )}
    </p>
  );
}
