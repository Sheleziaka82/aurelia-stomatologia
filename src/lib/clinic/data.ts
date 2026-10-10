export const langs = ["pl", "en", "ru"] as const;
export type Lang = (typeof langs)[number];

export const clinic = {
  name: "MiDental",
  fullName: "MiDental Stomatologia",
  street: "ul. Tukanów 12 lok. U3",
  postal: "05-500",
  city: "Stara Iwiczna",
  phone: "+48 578 302 502",
  phoneHref: "tel:+48578302502",
  email: "midentalstomatologia@gmail.com",
  whatsapp: "WhatsApp",
  whatsappHref: "https://wa.me/48578302502",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=21.006%2C52.078%2C21.016%2C52.084&layer=mapnik&marker=52.080883%2C21.010779",
  mapLink: "https://maps.app.goo.gl/vhe7yemzuvmgjt6ba",
};

export const serviceIds = [
  "consult",
  "hygiene",
  "conservative",
  "endo",
  "aesthetic",
  "implants",
  "prosthetics",
  "surgery",
  "pediatric",
] as const;
export type ServiceId = (typeof serviceIds)[number];

export const doctorIds = ["lekarz"] as const;
export type DoctorId = (typeof doctorIds)[number];

export const doctors = [
  {
    id: "lekarz" as const,
    image: "/images/doctor.jpg",
    langs: ["PL"] as const,
  },
];

export const serviceImages: Record<ServiceId, string> = {
  consult: "/images/lounge.jpg",
  hygiene: "/images/prevent.jpg",
  conservative: "/images/room.jpg",
  endo: "/images/room.jpg",
  aesthetic: "/images/smile.jpg",
  implants: "/images/room.jpg",
  prosthetics: "/images/smile.jpg",
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
  "14:00",
  "14:30",
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

export const APPOINTMENTS_KEY = "midental-appointments";
export const LANG_KEY = "midental-lang";
