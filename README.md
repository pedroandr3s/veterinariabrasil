# Veterinaria Brasil — sitio web

Landing page en **Next.js 16 + TypeScript + Tailwind CSS 4** para Veterinaria Brasil (Brasil 358, San Carlos, Ñuble).
Mobile first, sin dependencias de animación, fuentes autoalojadas y SEO local listo.

## Ejecutar

```bash
npm install
npm run dev          # http://localhost:3000
```

Producción:

```bash
cp .env.example .env.local        # y poner la URL real en NEXT_PUBLIC_SITE_URL
npm run build && npm start
npm run typecheck                 # revisión de tipos
```

> En desarrollo, las secciones **Galería** y **Testimonios** muestran un recuadro punteado que indica dónde van los
> contenidos. En producción esas secciones **se ocultan solas** mientras estén vacías.

## Dónde se cambia cada cosa

Todo el contenido vive en **`src/config/site.ts`**: contacto, horarios, servicios, textos, fotos, equipo, testimonios y SEO.
Cada dato indica si viene de directorios, está por confirmar o está pendiente.

| Quiero… | Dónde |
|---|---|
| Cambiar teléfono, dirección, horarios | `business`, `weeklyHours` en `site.ts` |
| Agregar o quitar servicios | `services` en `site.ts` (icono: `ServiceIcon`) |
| Editar textos | `copy` en `site.ts` |
| Cambiar la paleta | `@theme` en `src/app/globals.css` (solo 8 valores) |
| Cambiar tipografías | `layout.tsx` (imports de `@fontsource`) y `--font-*` en `globals.css` |
| Poner el logo real | `images.logo` en `site.ts` (PNG/SVG/WebP) |
| Poner la foto del hero / de Nosotros | `images.hero`, `images.about` |

### Fotos reales

1. Copia las fotos originales a `raw-images/` (carpeta nueva en la raíz).
2. `npm run images` → las convierte a WebP (máx. 1600 px) en `public/images/gallery/` e imprime el bloque para pegar.
3. Pega el bloque en `gallery` (`site.ts`) y **escribe un `alt` descriptivo real** de cada foto.

Next.js entrega AVIF/WebP según el navegador, con `srcset` y carga diferida. La foto del hero se precarga.

No se enlazan imágenes del CDN de Instagram: esas URLs caducan y requieren sesión. Usa fotos que la clienta entregue o autorice.

## Antes de publicar

- [ ] Definir `NEXT_PUBLIC_SITE_URL` (canonical, Open Graph, sitemap y schema.org lo usan).
- [ ] Confirmar con la clienta todo lo marcado como `[DIRECTORIOS]` y `[POR CONFIRMAR]` en `site.ts`.
- [ ] Reemplazar logo, paleta y fotos provisorios por los reales.
- [ ] Revisar `seo.description` y el texto de "Nosotros".
- [ ] Probar el formulario de reserva y los botones de WhatsApp y llamada desde un celular real.
- [ ] Reemplazar `src/app/opengraph-image.tsx` por una imagen con logo y foto reales (opcional).

## Estructura

```
src/
  app/            layout, página, estilos, sitemap, robots, imagen Open Graph, favicon
  components/     Header, Hero, Services, About, Advantages, Gallery, Testimonials,
                  InstagramSection, Contact, BookingForm, Footer, MobileCTA, ...
  config/site.ts  datos y textos
  lib/            utilidades, horarios (abierto/cerrado en hora de Chile), schema.org
scripts/optimize-images.mjs
```

## Notas técnicas

- **Reserva:** el formulario no tiene backend; arma un mensaje y abre WhatsApp. La hora queda confirmada cuando la veterinaria responde.
- **"Abierto ahora":** se calcula en el navegador con la zona horaria `America/Santiago` a partir de `weeklyHours`.
- **Accesibilidad:** enlace "Saltar al contenido", foco visible, objetivos táctiles de 48 px, etiquetas en todos los campos,
  `prefers-reduced-motion` respetado. Contrastes de la paleta medidos (mínimo 5,3:1 en texto).
- **Rendimiento:** sin librerías de animación, fuentes autoalojadas (sin peticiones a Google Fonts), mapa con carga diferida.
