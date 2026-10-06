import Link from "next/link";
import { copy, patients, visible } from "@/config/site";
import { cn } from "@/lib/utils";
import { btn } from "@/lib/ui";
import { PatientCard } from "./PatientCard";

export function Patients() {
  if (!visible.patients) return null;

  return (
    <section id="pacientes" aria-labelledby="pacientes-title" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[88rem] px-5">
        <div className="grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-12">
          <h2 id="pacientes-title" className="text-4xl leading-tight md:text-5xl">
            {copy.gallery.title}
          </h2>
          <p className="text-lg text-ink-soft">{copy.gallery.intro}</p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...patients].reverse().slice(0, 4).map((patient, index) => (
            <li key={patient.photo.src} className={index === 3 ? "hidden xl:block" : undefined}>
              <PatientCard patient={patient} sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw" />
            </li>
          ))}
        </ul>

        <Link href="/pacientes" className={cn(btn.base, btn.primary, "mt-10")}>
          {copy.gallery.cta}
        </Link>
      </div>
    </section>
  );
}
