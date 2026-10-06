// Optimiza fotos reales para la web.
//
// Uso:
//   1. Copia las fotos originales (jpg, png, webp) a la carpeta  raw-images/
//   2. Ejecuta:  npm run images
//   3. Las versiones optimizadas quedan en  public/images/gallery/  (WebP, máx. 1600 px de ancho)
//   4. Copia el bloque que se imprime en consola a  src/config/site.ts  y escribe un alt descriptivo real.
//
// Next.js además sirve AVIF/WebP según el navegador, así que no hace falta más.

import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const INPUT = "raw-images";
const OUTPUT = "public/images/gallery";
const MAX_WIDTH = 1600;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"]);

const slug = (name) =>
  name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

let files;
try {
  files = (await readdir(INPUT)).filter((f) => EXTENSIONS.has(path.extname(f).toLowerCase()));
} catch {
  console.error(`No existe la carpeta "${INPUT}". Créala y copia ahí las fotos originales.`);
  process.exit(1);
}

if (files.length === 0) {
  console.error(`No hay imágenes (jpg, png, webp) en "${INPUT}".`);
  process.exit(1);
}

await mkdir(OUTPUT, { recursive: true });
const entries = [];

for (const file of files.sort()) {
  const name = slug(path.parse(file).name);
  const target = path.join(OUTPUT, `${name}.webp`);
  const info = await sharp(path.join(INPUT, file))
    .rotate() // respeta la orientación EXIF del celular
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(target);
  console.log(`✔ ${file} → ${target} (${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB)`);
  entries.push(
    `  { src: "/images/gallery/${name}.webp", alt: "DESCRIBIR LA FOTO", width: ${info.width}, height: ${info.height} },`,
  );
}

console.log("\nPega esto en src/config/site.ts, dentro de `gallery`, y reemplaza cada alt:\n");
console.log(entries.join("\n"));
