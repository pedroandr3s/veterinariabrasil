import Link from "next/link";
import { cn } from "@/lib/utils";
import { btn } from "@/lib/ui";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-screen max-w-xl place-items-center px-5 text-center">
      <div>
        <h1 className="text-5xl">Esta página no existe</h1>
        <p className="mt-4 text-lg text-ink-soft">Puede que el enlace esté mal escrito o que ya no esté disponible.</p>
        <Link href="/" className={cn(btn.base, btn.primary, "mt-8")}>
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
