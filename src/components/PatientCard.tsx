import Image from "next/image";
import type { Patient } from "@/config/site";

export function PatientCard({ patient, sizes }: { patient: Patient; sizes: string }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] bg-sage">
      <div className="relative aspect-[4/5] bg-paper">
        <Image
          src={patient.photo.src}
          alt={patient.photo.alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl">{patient.name}</h3>
        <p className="mt-2 text-ink-soft">{patient.text}</p>
      </div>
    </article>
  );
}
