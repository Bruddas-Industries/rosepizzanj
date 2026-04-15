import type { Metadata } from "next";
import Link from "next/link";
import { RESTAURANT } from "@/lib/restaurant";

export const metadata: Metadata = {
  title: "Order Online | Rose Pizza — Garfield, NJ",
  description:
    "Order Rose Pizza online through Uber Eats for pickup or delivery. Or call us at 973-773-9205.",
};

export default function OrderPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-charcoal pt-28 pb-16 text-white text-center">
        <p className="text-warm-tan font-semibold uppercase tracking-[0.2em] text-sm mb-3">
          Fast &amp; Easy
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Order Online</h1>
        <p className="text-white/70 text-lg max-w-md mx-auto">
          Order ahead for pickup or delivery — ready when you are.
        </p>
      </section>

      {/* Order Options */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Uber Eats */}
            <div className="bg-white rounded-3xl p-8 border border-warm-tan/15 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
                {/* Uber Eats brand mark substitute */}
                <span className="text-white font-bold text-xl tracking-tight">Ue</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
                Order on Uber Eats
              </h2>
              <p className="text-charcoal-light mb-6 flex-1">
                Browse our full menu, customize your order, and choose pickup or
                delivery — all through Uber Eats.
              </p>
              <ul className="text-sm text-charcoal-light space-y-2 mb-8">
                {["Real-time order tracking", "Pickup or delivery", "Secure payment online", "Easy reorder"].map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={RESTAURANT.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-rose-red text-white font-bold rounded-full text-lg hover:bg-rose-red-dark transition-colors"
              >
                Open Uber Eats
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            {/* Call to Order */}
            <div className="bg-white rounded-3xl p-8 border border-warm-tan/15 shadow-sm flex flex-col">
              <div className="w-14 h-14 bg-rose-red rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h2 className="font-display text-2xl font-bold text-charcoal mb-2">
                Call to Order
              </h2>
              <p className="text-charcoal-light mb-6 flex-1">
                Prefer to order by phone? Give us a call and we&apos;ll take care of you
                the old-fashioned way.
              </p>
              <ul className="text-sm text-charcoal-light space-y-2 mb-8">
                {["Speak directly with us", "Special requests welcome", "Pickup ready in minutes", "No app needed"].map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-charcoal text-charcoal font-bold rounded-full text-lg hover:border-rose-red hover:text-rose-red transition-colors"
              >
                {RESTAURANT.phone}
              </a>
            </div>
          </div>

          {/* Hours reminder */}
          <div className="mt-12 bg-warm-tan/10 rounded-2xl p-6 border border-warm-tan/20 text-center">
            <h3 className="font-display text-xl font-bold text-charcoal mb-4">
              Our Hours
            </h3>
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
