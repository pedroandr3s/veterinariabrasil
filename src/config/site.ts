/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  FUENTE ÚNICA DE DATOS DEL SITIO
 * ─────────────────────────────────────────────────────────────────────────────
 *  Todo lo que aparece en la web (contacto, horarios, servicios, textos, fotos)
 *  sale de este archivo. Para ajustar contenido no hay que tocar componentes.
 *
 *  Estado de verificación de cada dato:
 *   [DIRECTORIOS]  Aparece igual en varios directorios públicos (AgendaPro,
 *                  guías de veterinarias, fichas tipo Google Maps), pero NO pudo
 *                  contrastarse con el Instagram: Instagram bloquea el acceso
 *                  automatizado. Confirmar con la clienta antes de publicar.
 *   [POR CONFIRMAR] Dato asumido o redactado como borrador. Validar sí o sí.
 *   [PENDIENTE]    No se encontró. Queda vacío y la web lo oculta sola.
 */

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export const business = {
  name: "Veterinaria Brasil",
  tagline: "Veterinaria en San Carlos, Ñuble",

  // Dato entregado por el cliente.
  instagram: {
    handle: "veterinariabrasil.sc",
    url: "https://www.instagram.com/veterinariabrasil.sc/",
  },

  // [DIRECTORIOS] Coincide en 5 fuentes distintas.
  address: {
    street: "Brasil 358",
    city: "San Carlos",
    region: "Ñuble",
    country: "CL",
    postalCode: "3840976",
    // Texto usado para el mapa incrustado y el enlace "Cómo llegar".
    mapsQuery: "Veterinaria Brasil, Brasil 358, San Carlos, Ñuble, Chile",
  },

  // [DIRECTORIOS] Mismo número en 4 fuentes. Falta confirmar que tenga WhatsApp.
  phone: { display: "+56 9 8452 3473", e164: "+56984523473" },
  whatsapp: { number: "56984523473" },

  // [PENDIENTE] No se encontró correo. Mientras sea null no se muestra.
  email: null as string | null,

  // [PENDIENTE] Facebook: existe una página "Veterinaria Brasil" en San Carlos,
  // pero no se pudo confirmar que sea la oficial. Completar si corresponde.
  facebook: null as string | null,

  siteUrl,
} as const;

/* ───────────────────────────── Horarios ───────────────────────────────────── */
/*  [DIRECTORIOS] 3 fuentes coinciden en este horario partido; AgendaPro muestra
 *  solo 09:00–13:00 de lunes a sábado. CONFIRMAR con la clienta.
 *  Claves: 0 = domingo … 6 = sábado. Vacío = cerrado. */
export type Slot = readonly [open: string, close: string];

export const weeklyHours: Record<number, readonly Slot[]> = {
  0: [],
  1: [["09:00", "13:00"], ["15:00", "18:00"]],
  2: [["09:00", "13:00"], ["15:00", "18:00"]],
  3: [["09:00", "13:00"], ["15:00", "18:00"]],
  4: [["09:00", "13:00"], ["15:00", "18:00"]],
  5: [["09:00", "13:00"], ["15:00", "17:30"]],
  6: [["09:00", "13:00"]],
};

/* ───────────────────────────── Servicios ──────────────────────────────────── */
/*  [POR CONFIRMAR] Lista conservadora basada en la ficha de AgendaPro. Se dejaron
 *  fuera a propósito servicios que aparecen en directorios pero que suenan a
 *  plantilla genérica (urgencias 24/7, acupuntura, rehabilitación, radiología…):
 *  no hay evidencia de que la clínica los ofrezca. Agregarlos solo si ella confirma. */
export type ServiceIcon = "consulta" | "vacunacion" | "desparasitacion" | "cirugia" | "peluqueria";

export type Service = {
  id: string;
  icon: ServiceIcon;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "consulta-general",
    icon: "consulta",
    title: "Consulta general",
    description:
      "Revisión de tu mascota, diagnóstico y recomendaciones de tratamiento y cuidados para el día a día.",
  },
  {
    id: "vacunacion",
    icon: "vacunacion",
    title: "Vacunación",
    description: "Las vacunas que corresponden a la edad y la especie de tu mascota.",
  },
  {
    id: "desparasitacion",
    icon: "desparasitacion",
    title: "Desparasitación",
    description: "Control de parásitos internos y externos.",
  },
  {
    id: "cirugia",
    icon: "cirugia",
    title: "Cirugía",
    description: "Procedimientos quirúrgicos generales. Cuéntanos tu caso y te orientamos.",
  },
  {
    id: "peluqueria",
    icon: "peluqueria",
    title: "Peluquería",
    description: "Cuidado del pelaje y la higiene de perros y gatos.",
  },
];

/* ───────────────────────────── Textos ─────────────────────────────────────── */
/*  [POR CONFIRMAR] Copy redactado como borrador, usando solo datos verificables.
 *  La clienta debería leerlo y aprobarlo. */
export const copy = {
  hero: {
    title: "Cuidado veterinario cercano para tu mascota, en San Carlos",
    subtitle:
      "Consulta, vacunación, desparasitación, cirugía y peluquería en Brasil 358. Reserva tu hora por WhatsApp.",
  },
  services: {
    title: "Servicios para el cuidado de tu mascota",
    intro: "Atención veterinaria en San Carlos. Si no ves lo que buscas, pregúntanos.",
    ctaTitle: "¿Buscas otra atención?",
    ctaText: "Escríbenos y te contamos si podemos ayudarte.",
  },
  about: {
    title: "Una veterinaria cercana para las mascotas de San Carlos",
    paragraphs: [
      "Veterinaria Brasil atiende en Brasil 358, San Carlos, Región de Ñuble. Recibimos a las mascotas de la comuna con un trato cercano y dedicado.",
      "Para reservar una hora, escríbenos por WhatsApp o llámanos en horario de atención. Si tienes dudas sobre un síntoma, un esquema de vacunas o un procedimiento, cuéntanos y te orientamos.",
    ],
  },
  advantages: {
    title: "Qué puedes esperar al visitarnos",
    items: [
      {
        icon: "heart",
        title: "Trato cercano",
        text: "Atención dedicada a cada mascota y a su familia.",
      },
      {
        icon: "calendar",
        title: "Lunes a sábado",
        text: "Atendemos de lunes a sábado. El horario completo está más abajo.",
      },
      {
        icon: "message",
        title: "Reserva por WhatsApp",
        text: "Escríbenos desde tu celular para agendar tu hora.",
      },
    ],
  },
  gallery: {
    title: "Pacientes",
    intro: "Las mascotas que nos visitan y confían en nosotras para cuidar su salud.",
    cta: "Ver todos los pacientes",
  },
  testimonials: {
    title: "Lo que dicen las familias que nos visitan",
  },
  instagram: {
    title: "Síguenos en Instagram",
    text: "Mira el día a día de la veterinaria en nuestro perfil.",
    cta: "Ver perfil en Instagram",
  },
  contact: {
    title: "Reserva tu hora o visítanos",
    intro:
      "Completa el formulario y se abrirá WhatsApp con tu mensaje listo para enviar. La hora queda confirmada cuando la veterinaria te responda.",
  },
} as const;

export type AdvantageIcon = (typeof copy.advantages.items)[number]["icon"];

/* ───────────────────────────── Imágenes ───────────────────────────────────── */
/*  [PENDIENTE] No se pudieron obtener fotos: Instagram exige sesión y bloquea
 *  la descarga automatizada, y no se evadió esa restricción.
 *  Para agregar fotos reales: copiarlas a /public/images, correr `npm run images`
 *  (las optimiza a WebP) y registrarlas aquí. Ver README. */
export type SiteImage = { src: string; alt: string; width: number; height: number };

export const images = {
  /** Foto principal del hero. Si es null se muestra una ilustración neutral. */
  hero: null as SiteImage | null,
  /** Foto de la sección "Nosotros". */
  about: { src: "/nosotros.png", alt: "Fachada de Veterinaria Brasil en San Carlos", width: 682, height: 436 } as SiteImage | null,
  /** Logo real de la veterinaria (PNG/SVG/WebP). Si es null se usa un logotipo provisorio. */
  logo: { src: "/logo.png", alt: "Veterinaria Brasil", width: 416, height: 132 } as SiteImage | null,
};

export type Patient = { name: string; text: string; photo: SiteImage };

const patient = (slug: string, name: string, width: number, height: number, text: string): Patient => ({
  name,
  text,
  photo: {
    src: `/images/gallery/${slug}.jpg`,
    alt: `${name}, paciente de Veterinaria Brasil`,
    width,
    height,
  },
});

/**
 * Pacientes de la página /pacientes, del más antiguo al más reciente: agregar los
 * nuevos al final. Se muestran los más recientes primero (y 3 en el inicio).
 */
export const patients: Patient[] = [
  patient("atom", "Atom", 1080, 1346,
    "Hoy nos visitó Atom para recibir sus vacunas. Un pequeño muy valiente que se portó increíble. Gracias por confiar en nosotras para cuidar su salud. ¡Te esperamos el próximo mes, pequeño gigante!"),
  patient("mimi", "Mimi", 1080, 1346,
    "Hoy recibimos a nuestra querida Mimi, una gatita dulce y tranquila que vino a su control y vacunas. Nos encanta ver cómo crecen sanos y bien cuidados. Gracias por confiar en nosotras para acompañar su bienestar. ¡Te esperamos pronto, Mimi!"),
  patient("lilo", "Lilo", 1080, 1346,
    "Otra bella paciente el día de hoy: la pequeña Lilo, que vino por sus vacunas y por un premio. Eres una hermosura. Tus doctoras te esperan con mucho cariño. ¡Ven a visitarnos cuando quieras!"),
  patient("lulu", "Lulú", 1347, 1679,
    "Lulú vino por su segunda dosis de vacunas y también recibió sus vitaminas para crecer fuerte, sana y llena de energía. Nos encanta verla avanzar en cada etapa de su crecimiento. Recuerda mantener al día las vacunas de tu peludito para una vida larga y feliz."),
  patient("minnie", "Minnie", 1347, 1679,
    "Minnie vino por su chequeo y sus papeles para regresar a su país. Esta pequeña chihuahua se portó increíble, muy tranquila y llena de amor. Ya está lista para emprender su viaje. ¡Buen viaje, Minnie! Siempre tendrás un lugar en nuestros corazones."),
  patient("tsuki", "Tsuki", 1347, 1679,
    "El otro día nos visitó la preciosa Tsuki. Vino por su vacuna antirrábica y se portó increíble. Gracias por confiar en nosotras para cuidar su salud. ¡Te esperamos siempre, Tsuki!"),
  patient("bruno", "Bruno", 1347, 1679,
    "El día martes también nos acompañó este hermoso cachorrito llamado Bruno. Un perrito que se robó el corazón de las doctoras y de todos los que lo conocimos. ¡Te esperamos pronto!"),
  patient("teodoro", "Teodoro", 1347, 1679,
    "Teodoro vino por su castración. Todo salió muy bien y ahora está listo para una recuperación tranquila y llena de cuidados. Gracias por confiar en nosotras para acompañarlo en este proceso."),
  patient("eda", "Eda", 1347, 1679,
    "Gracias por confiar en nosotros."),
  patient("menta-malva", "Menta y Malva", 1080, 1346,
    "Gracias por confiar en nosotros."),
  patient("miau", "Miau", 1080, 1346,
    "Gracias por confiar en nosotros."),
  patient("martin", "Martín", 1347, 1679,
    "Gracias por confiar en nosotros."),
  patient("re-ga", "Re-Ga", 1080, 1346,
    "Gracias por confiar en nosotros."),
  patient("cuchito", "Cuchito", 1080, 1346,
    "Gracias por confiar en nosotros."),
  patient("milo", "Milo", 1347, 1679,
    "Gracias por confiar en nosotros."),
  patient("roma-gato", "Roma", 1347, 1679,
    "Gracias por confiar en nosotros."),
  patient("laika", "Laika", 1347, 1679,
    "Gracias por confiar en nosotros."),
  patient("homero", "Homero", 1080, 1346,
    "Gracias por confiar en nosotros."),
  patient("roma-perro", "Roma", 1080, 1346,
    "Gracias por confiar en nosotros."),
  patient("diana", "Diana", 1347, 1679,
    "Gracias por confiar en nosotros."),
];

export const gallery: SiteImage[] = [
  // { src: "/images/gallery/consulta-01.webp", alt: "Descripción real de la foto", width: 1200, height: 900 },
];

/* ───────────────────── Equipo y testimonios (solo reales) ─────────────────── */
export type TeamMember = { name: string; role: string; photo?: SiteImage };
/** [PENDIENTE] No hay información verificable del equipo. */
export const team: TeamMember[] = [];

export type Testimonial = { quote: string; author: string; source: string; url?: string };
/** [PENDIENTE] Agregar solo opiniones reales, con autorización y fuente. */
export const testimonials: Testimonial[] = [];

/* ───────────────────────────── SEO ────────────────────────────────────────── */
export const seo = {
  title: "Veterinaria Brasil | Veterinaria en San Carlos, Ñuble",
  description:
    "Veterinaria en San Carlos, Ñuble: consulta, vacunación, desparasitación, cirugía y peluquería para perros y gatos. Reserva por WhatsApp. Brasil 358.",
  keywords: [
    "veterinaria San Carlos",
    "veterinario San Carlos Ñuble",
    "clínica veterinaria San Carlos",
    "veterinaria cerca de mí San Carlos",
    "veterinaria perros y gatos San Carlos",
    "Veterinaria Brasil",
  ],
};

/* ───────────────────────────── Navegación ─────────────────────────────────── */
/*  Las secciones sin contenido se ocultan. */

export const visible = {
  patients: patients.length > 0,
  testimonials: testimonials.length > 0,
  team: team.length > 0,
};

export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  ...(visible.patients ? [{ href: "/pacientes", label: "Pacientes" }] : []),
  { href: "#contacto", label: "Contacto" },
];
