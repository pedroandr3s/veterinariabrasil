import type { CSSProperties } from "react";

/** Estilos compartidos de botones (objetivo táctil mínimo de 48 px). */
export const btn = {
  base: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition duration-200 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:scale-100",
  primary: "bg-brand text-white hover:bg-brand-deep",
  secondary: "border-2 border-brand text-brand hover:bg-brand hover:text-white",
  dark: "bg-ink text-white hover:bg-brand-deep",
  sun: "bg-sun text-ink hover:bg-white",
} as const;

/** Retraso escalonado para la animación de entrada del hero. */
export const stagger = (index: number) => ({ "--i": index }) as CSSProperties;
