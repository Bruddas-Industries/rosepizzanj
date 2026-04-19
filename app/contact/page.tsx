import type { Metadata } from "next";
import Image from "next/image";
import { RESTAURANT } from "@/lib/restaurant";
import HoursWidget from "@/components/HoursWidget";

export const metadata: Metadata = {
  title: "Contact | Rose Pizza — Garfield, NJ",
  description:
    "Find Rose Pizza at 73 River Drive, Garfield, NJ. Call us at 973-773-9205. Open 7 days a week.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-28 pb-16 text-white text-center min-h-[320px] flex flex-col justify-center">
        <Image
          src="/images/DSC0393.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <p className="text-warm-tan font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Come Visit Us
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Contact</h1>
          <p className="text-white/80 text-lg max-w-md mx-auto">
            We&apos;re located in Garfield, NJ — come in, call ahead, or order online.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl p-7 border border-warm-tan/15 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-rose-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Address</h3>
                    <address className="not-italic text-charcoal-light text-sm leading-relaxed">
                      <p>{RESTAURANT.address.street}</p>
                      <p>{RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}</p>
                    </address>
                    <a
                      href={RESTAURANT.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-rose-red hover:underline"
                    >
                      Get Directions
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-7 border border-warm-tan/15 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-rose-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                    <a
                      href={`tel:${RESTAURANT.phoneRaw}`}
                      className="text-charcoal-light text-sm hover:text-rose-red transition-colors"
                    >
                      {RESTAURANT.phone}
                    </a>
                    <p className="text-xs text-charcoal-light/60 mt-1">
                      Call to order or for any questions
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-7 border border-warm-tan/15 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-red/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-rose-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-charcoal">Hours</h3>
                      <HoursWidget />
                    </div>
                    <ul className="space-y-2">
                      {RESTAURANT.hoursDisplay.map((row) => (
                        <li key={row.days} className="flex justify-between text-sm">
                          <span className="text-charcoal-light">{row.days}</span>
                          <span className="font-medium text-charcoal">{row.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-warm-tan/15 shadow-sm min-h-[400px]">
              <iframe
                src={RESTAURANT.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rose's Pizza location"
                className="min-h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
