export const langs = ["pl", "en", "ru"] as const;
export type Lang = (typeof langs)[number];

export const clinic = {
  name: "Aurelia",
  fullName: "Aurelia Stomatologia",
  street: "ul. Mokotowska 48",
  postal: "00-543",
  city: "Warszawa",
  phone: "+48 22 416 08 20",
  phoneHref: "tel:+48224160820",
  email: "recepcja@aurelia.waw.pl",
  instagram: "@aurelia.stomatologia",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=21.012%2C52.222%2C21.032%2C52.233&layer=mapnik&marker=52.2278%2C21.022",
  mapLink: "https://www.openstreetmap.org/?mlat=52.2278&mlon=21.022#map=17/52.2278/21.022",
};

export const serviceIds = [
  "consult",
  "hygiene",
  "conservative",
  "aesthetic",
  "implants",
  "ortho",
  "prosthetics",
  "surgery",
  "pediatric",
] as const;
export type ServiceId = (typeof serviceIds)[number];

export const doctorIds = ["anna", "marek", "zofia", "piotr"] as const;
export type DoctorId = (typeof doctorIds)[number];

export const doctors = [
  {
    id: "anna" as const,
    image: "/images/doctor-anna.jpg",
    years: 16,
    langs: ["PL", "EN"] as const,
  },
  {
    id: "marek" as const,
    image: "/images/doctor-marek.jpg",
    years: 22,
    langs: ["PL", "EN"] as const,
  },
  {
    id: "zofia" as const,
    image: "/images/doctor-zofia.jpg",
    years: 11,
    langs: ["PL", "EN", "RU"] as const,
  },
  {
    id: "piotr" as const,
    image: "/images/doctor-piotr.jpg",
    years: 14,
    langs: ["PL", "EN"] as const,
  },
];

export const serviceImages: Record<ServiceId, string> = {
  consult: "/images/lounge.jpg",
  hygiene: "/images/instruments.jpg",
  conservative: "/images/room.jpg",
  aesthetic: "/images/basin.jpg",
  implants: "/images/room.jpg",
  ortho: "/images/lounge.jpg",
  prosthetics: "/images/instruments.jpg",
  surgery: "/images/room.jpg",
  pediatric: "/images/lounge.jpg",
};

export const weekdayHours = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
];

export const saturdayHours = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
];

export function slotsForDate(isoDate: string): string[] {
  if (!isoDate) return [];
  const day = new Date(`${isoDate}T12:00:00`).getDay();
  if (day === 0) return [];
  if (day === 6) return saturdayHours;
  return weekdayHours;
}

export function isSlotTaken(date: string, time: string): boolean {
  let h = 0;
  const s = `${date}|${time}`;
  for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0;
  return h % 6 === 0;
}

export type Appointment = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: ServiceId;
  doctor: DoctorId | "any";
  date: string;
  time: string;
  message: string;
  createdAt: string;
};

export const APPOINTMENTS_KEY = "aurelia-appointments";
export const LANG_KEY = "aurelia-lang";
