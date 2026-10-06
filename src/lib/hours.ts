import { weeklyHours, type Slot } from "@/config/site";

const DAY_NAMES = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
const WEEK_ORDER = [1, 2, 3, 4, 5, 6, 0];
const TIME_ZONE = "America/Santiago";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
const slotsKey = (slots: readonly Slot[]) => JSON.stringify(slots);

export function formatSlots(slots: readonly Slot[]): string {
  if (slots.length === 0) return "Cerrado";
  return slots.map(([a, b]) => `${a} a ${b}`).join(" y ");
}

export type HoursRow = { label: string; slots: readonly Slot[]; text: string };

/** Agrupa días consecutivos con el mismo horario: "Lunes a jueves". */
export function groupedHours(): HoursRow[] {
  const rows: { days: number[]; slots: readonly Slot[] }[] = [];
  for (const day of WEEK_ORDER) {
    const slots = weeklyHours[day] ?? [];
    const last = rows[rows.length - 1];
    if (last && slotsKey(last.slots) === slotsKey(slots)) last.days.push(day);
    else rows.push({ days: [day], slots });
  }
  return rows.map(({ days, slots }) => {
    const first = capitalize(DAY_NAMES[days[0]]);
    const label = days.length === 1 ? first : `${first} a ${DAY_NAMES[days[days.length - 1]]}`;
    return { label, slots, text: formatSlots(slots) };
  });
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** Día de la semana (0=domingo) y minutos del día en la hora de Chile. */
function santiagoNow(date: Date): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export type OpenStatus = { open: boolean; text: string };

export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const { day, minutes } = santiagoNow(date);
  const today = weeklyHours[day] ?? [];

  for (const [open, close] of today) {
    if (minutes >= toMinutes(open) && minutes < toMinutes(close)) {
      return { open: true, text: `Abierto ahora, hasta las ${close}` };
    }
  }

  const laterToday = today.find(([open]) => toMinutes(open) > minutes);
  if (laterToday) {
    return { open: false, text: `Cerrado ahora, abrimos hoy a las ${laterToday[0]}` };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const nextDay = (day + offset) % 7;
    const slots = weeklyHours[nextDay] ?? [];
    if (slots.length > 0) {
      const when = offset === 1 ? "mañana" : `el ${DAY_NAMES[nextDay]}`;
      return { open: false, text: `Cerrado ahora, abrimos ${when} a las ${slots[0][0]}` };
    }
  }
  return { open: false, text: "Cerrado ahora" };
}
