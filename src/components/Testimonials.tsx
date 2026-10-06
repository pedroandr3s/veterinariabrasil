import { copy, testimonials, visible } from "@/config/site";

export function Testimonials() {
  if (!visible.testimonials) return null;

  return (
    <section aria-labelledby="testimonios-title" className="bg-sage py-20 md:py-24">
      <div className="mx-auto max-w-[88rem] px-5">
        <h2 id="testimonios-title" className="max-w-2xl text-4xl leading-tight md:text-5xl">
          {copy.testimonials.title}
        </h2>

        {testimonials.length > 0 ? (
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <li key={`${item.author}-${item.source}`}>
                <figure className="h-full rounded-[1.75rem] bg-paper p-7">
                  <blockquote className="text-lg leading-relaxed">“{item.quote}”</blockquote>
                  <figcaption className="mt-5 text-base text-ink-soft">
                    <span className="font-semibold text-ink">{item.author}</span>, vía{" "}
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-brand"
                      >
                        {item.source}
                      </a>
                    ) : (
                      item.source
                    )}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        ) : (
          // Solo visible en desarrollo: en producción la sección se oculta mientras esté vacía.
          <div className="mt-12 rounded-[1.75rem] border-2 border-dashed border-line p-10 text-center text-ink-soft">
            <p className="text-lg font-semibold text-ink">Sección lista para testimonios reales</p>
            <p className="mx-auto mt-2 max-w-md">
              Agrega opiniones verificables (con autorización y fuente) en <code>testimonials</code>, dentro de{" "}
              <code>src/config/site.ts</code>. Este recuadro solo se ve en desarrollo.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
