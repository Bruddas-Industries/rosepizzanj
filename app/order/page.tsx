import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RESTAURANT } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Order Online | Rose Pizza — Garfield, NJ",
  description:
    "Order Rose Pizza online through Uber Eats, DoorDash, or Grubhub for pickup or delivery. Or call us at 973-773-9205.",
};

const platforms = [
  {
    key: "ubereats",
    name: "Uber Eats",
    href: RESTAURANT.uberEatsUrl,
    iconBg: "#000000",
    buttonBg: "#000000",
    buttonHoverBg: "#1a1a1a",
    buttonTextColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#06C167" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        {/* Circle */}
        <circle cx="12" cy="12" r="10" />
        {/* Left tine — straight down then curves into center handle */}
        <path d="M 9 4.5 L 9 10 Q 9 13 12 13" />
        {/* Center tine + handle — one continuous vertical line */}
        <line x1="12" y1="4.5" x2="12" y2="20" />
        {/* Right tine — straight down then curves into center handle */}
        <path d="M 15 4.5 L 15 10 Q 15 13 12 13" />
      </svg>
    ),
    cardWordmark: (
      <span
        className="font-black tracking-tight leading-none text-lg"
        style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
      >
        <span className="text-black">Uber</span>
        <span style={{ color: "#06C167" }}> Eats</span>
      </span>
    ),
    wordmark: (
      <span
        className="font-black tracking-tight leading-none text-lg"
        style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
      >
        <span className="text-white">Uber</span>
        <span style={{ color: "#06C167" }}> Eats</span>
      </span>
    ),
    description:
      "Browse our full menu, customize your order, and track it in real time — pickup or delivery, your choice.",
    features: ["Real-time order tracking", "Pickup or delivery", "Secure payment online", "Easy reorder"],
    cta: "Order on Uber Eats",
  },
  {
    key: "doordash",
    name: "DoorDash",
    href: RESTAURANT.doorDashUrl || "#",
    iconBg: "#FF3008",
    buttonBg: "#FF3008",
    buttonHoverBg: "#e02a07",
    buttonTextColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
      </svg>
    ),
    cardWordmark: (
      <span
        className="font-black tracking-tight leading-none text-lg"
        style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#FF3008" }}
      >
        DoorDash
      </span>
    ),
    wordmark: (
      <span
        className="font-black tracking-tight leading-none text-lg text-white"
        style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
      >
        DoorDash
      </span>
    ),
    description:
      "Craving Rose's but staying in? DoorDash brings your order straight to your door, fast.",
    features: ["Fast delivery", "Pickup or delivery", "Live delivery tracking", "Easy reorder"],
    cta: "Order on DoorDash",
  },
  {
    key: "grubhub",
    name: "Grubhub",
    href: RESTAURANT.grubHubUrl || "#",
    iconBg: "#F97316",
    buttonBg: "#F97316",
    buttonHoverBg: "#ea6c0a",
    buttonTextColor: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white" aria-hidden="true">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
      </svg>
    ),
    cardWordmark: (
      <span
        className="font-black tracking-tight leading-none text-lg"
        style={{ fontFamily: "'Arial Black', Arial, sans-serif", color: "#F97316" }}
      >
        Grubhub
      </span>
    ),
    wordmark: (
      <span
        className="font-black tracking-tight leading-none text-lg text-white"
        style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
      >
        Grubhub
      </span>
    ),
    description:
      "Another easy way to order Rose's for pickup or delivery — quick, simple, no hassle.",
    features: ["Grubhub+ perks", "Pickup or delivery", "Schedule orders ahead", "Easy reorder"],
    cta: "Order on Grubhub",
  },
];

export default function OrderPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-28 pb-16 text-white text-center min-h-[320px] flex flex-col justify-center">
        <Image
          src="/images/rose_food_display_2.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <p className="text-warm-tan font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Fast &amp; Easy
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Order Online</h1>
          <p className="text-white/80 text-lg max-w-md mx-auto">
            Order ahead for pickup or delivery — ready when you are.
          </p>
        </div>
      </section>

      {/* Delivery Platform Cards */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((p) => (
              <div
                key={p.key}
                className="bg-white rounded-3xl p-8 border border-warm-tan/15 shadow-sm flex flex-col"
              >
                {/* Icon badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shrink-0"
                  style={{ backgroundColor: p.iconBg }}
                >
                  {p.icon}
                </div>

                {/* Wordmark */}
                <div className="mb-2">{p.cardWordmark}</div>

                <p className="text-charcoal-light text-sm mb-6 flex-1">{p.description}</p>

                <ul className="text-sm text-charcoal-light space-y-2 mb-8">
                  {p.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 shrink-0"
                        style={{ color: p.buttonBg === "#000000" ? "#06C167" : p.buttonBg }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold text-base transition-opacity hover:opacity-85"
                  style={{ backgroundColor: p.buttonBg, color: p.buttonTextColor }}
                >
                  {p.wordmark}
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Call to Order */}
          <div className="mt-8 bg-white rounded-3xl p-8 border border-warm-tan/15 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <div className="w-14 h-14 bg-rose-red rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-1">Prefer to call?</h2>
              <p className="text-charcoal-light text-sm">
                Speak directly with us — special requests always welcome, no app needed.
              </p>
            </div>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-charcoal text-charcoal font-bold rounded-full text-lg hover:border-rose-red hover:text-rose-red transition-colors whitespace-nowrap"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {RESTAURANT.phone}
            </a>
          </div>

          {/* Hours reminder */}
          <div className="mt-8 bg-warm-tan/10 rounded-2xl p-6 border border-warm-tan/20 text-center">
            <h3 className="font-display text-xl font-bold text-charcoal mb-4">Our Hours</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm">
              {RESTAURANT.hoursDisplay.map((row) => (
                <div key={row.days}>
                  <span className="text-charcoal-light">{row.days}:</span>{" "}
                  <span className="font-medium text-charcoal">{row.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-charcoal-light">
            Dine-in also available.{" "}
            <Link href="/contact" className="text-rose-red hover:underline">
              Find us here.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
