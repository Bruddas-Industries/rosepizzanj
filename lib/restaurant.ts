export type DayHours = {
  open: string; // "HH:MM" 24h format
  close: string; // "HH:MM" 24h format
  closed?: boolean;
};

export const RESTAURANT = {
  name: "Rose's Pizza",
  tagline: "Made fresh. Made with love. Made for you.",
  about:
    "We've been around for over 50 years and have been using the same, fresh ingredients since day 1. Everything we make is made with love and care. Every order is made like it is made for our family.",
  address: {
    street: "73 River Drive",
    city: "Garfield",
    state: "NJ",
    zip: "07026",
    full: "73 River Drive, Garfield, NJ 07026",
  },
  phone: "973-773-9205",
  phoneRaw: "9737739205",
  email: "",
  uberEatsUrl: "https://www.ubereats.com/store/roses-pizza/8Zn4de9tR9mDx4qIoa-m1w",
  doorDashUrl: "https://www.doordash.com/store/rose's-pizza-garfield-1580360",
  grubHubUrl: "https://www.grubhub.com/restaurant/roses-pizzeria-73-river-dr-garfield/5153880",
  googleMapsUrl: "https://maps.google.com/?q=73+River+Drive,+Garfield,+NJ+07026",
  googleMapsEmbed: `https://www.google.com/maps/embed/v1/place?q=73+River+Drive,+Garfield,+NJ+07026&key=${process.env.MAPS_API_KEY ?? ""}`,
  hours: {
    monday: { open: "10:30", close: "22:00", closed: false },
    tuesday: { open: "10:30", close: "22:00", closed: false },
    wednesday: { open: "10:30", close: "22:00", closed: false },
    thursday: { open: "10:30", close: "22:00", closed: false },
    friday: { open: "10:30", close: "22:00", closed: false },
    saturday: { open: "10:30", close: "22:00", closed: false },
    sunday: { open: "11:30", close: "22:00", closed: false },
  } as Record<string, DayHours>,
  hoursDisplay: [
    { days: "Monday – Saturday", hours: "10:30 AM – 10:00 PM" },
    { days: "Sunday", hours: "11:30 AM – 10:00 PM" },
  ],
} as const;

/** Returns true if the restaurant is currently open based on system time. */
export function isOpenNow(): boolean {
  const now = new Date();
  const day = now
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();
  const todayHours = RESTAURANT.hours[day];
  if (!todayHours || todayHours.closed) return false;

  const [openH, openM] = todayHours.open.split(":").map(Number);
  const [closeH, closeM] = todayHours.close.split(":").map(Number);
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}
