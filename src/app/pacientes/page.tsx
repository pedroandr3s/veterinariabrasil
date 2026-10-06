import type { Metadata } from "next";
import Link from "next/link";
import { copy, navItems, patients } from "@/config/site";
import { cn } from "@/lib/utils";
import { btn } from "@/lib/ui";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { PatientCard } from "@/components/PatientCard";

export const metadata: Metadata = {
  title: "Pacientes | Veterinaria Brasil",
  description: copy.gallery.intro,
  alternates: { canonical: "/pacientes" },
};

// En esta página los enlaces internos del menú apuntan al inicio.
const items = navItems.map((item) => (item.href.startsWith("#") ? { ...item, href: `/${item.href}` } : item));

export default function PacientesPage() {
  return (
    <>
      <Header items={items} />
      <main id="contenido" className="bg-paper py-14 md:py-20">
        <div className="mx-auto max-w-[88rem] px-5">
          <h1 className="text-4xl leading-tight md:text-5xl">{copy.gallery.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{copy.gallery.intro}</p>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...patients].reverse().map((patient) => (
              <li key={patient.photo.src}>
                <PatientCard patient={patient} sizes="(min-width: 1280px) 22rem, (min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw" />
              </li>
            ))}
          </ul>

          <Link href="/" className={cn(btn.base, btn.secondary, "mt-12")}>
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
