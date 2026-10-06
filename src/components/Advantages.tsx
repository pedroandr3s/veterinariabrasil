import { CalendarDays, Heart, MessageCircle, type LucideIcon } from "lucide-react";
import { copy, type AdvantageIcon } from "@/config/site";

const ICONS: Record<AdvantageIcon, LucideIcon> = {
  heart: Heart,
  calendar: CalendarDays,
  message: MessageCircle,
};

export function Advantages() {
  return (
    <section
      aria-labelledby="ventajas-title"
      className="on-dark bg-brand py-16 text-white md:py-20"
    >
      <div className="mx-auto max-w-[88rem] px-5">
        <h2 id="ventajas-title" className="max-w-xl text-3xl leading-tight md:text-4xl">
          {copy.advantages.title}
        </h2>
        <ul className="mt-10 grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/25">
          {copy.advantages.items.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <Icon className="size-9 text-sun" aria-hidden="true" />
                <h3 className="mt-4 text-2xl">{item.title}</h3>
                <p className="mt-2 max-w-xs text-lg text-white/90">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
