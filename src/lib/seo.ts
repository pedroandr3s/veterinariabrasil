import { business, seo, weeklyHours } from "@/config/site";

const SCHEMA_DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** Schema.org VeterinaryCare. Solo incluye datos presentes en la configuración. */
export function veterinaryJsonLd() {
  const openingHoursSpecification = Object.entries(weeklyHours).flatMap(([day, slots]) =>
    slots.map(([opens, closes]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: SCHEMA_DAYS[Number(day)],
      opens,
      closes,
    })),
  );

  const sameAs = [business.instagram.url, business.facebook].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "VeterinaryCare",
    "@id": `${business.siteUrl}/#veterinaria`,
    name: business.name,
    description: seo.description,
    url: business.siteUrl,
    telephone: business.phone.e164,
    ...(business.email ? { email: business.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    areaServed: { "@type": "City", name: business.address.city },
    openingHoursSpecification,
    sameAs,
  };
}
