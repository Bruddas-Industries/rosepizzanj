import Image from "next/image";
import Link from "next/link";
import { RESTAURANT } from "@/lib/restaurant";
import { FEATURED_ITEMS } from "@/lib/menu";
import HoursWidget from "@/components/HoursWidget";
import OrderCTA from "@/components/OrderCTA";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/DSC0301.jpg"
          alt="Rose's Pizza storefront in Garfield, NJ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <p className="text-warm-tan font-semibold uppercase tracking-[0.2em] text-sm mb-4">
            Garfield, New Jersey · Since 1976
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src="/images/Roses_Pizza_final01-1.png"
              alt="Rose's Pizza"
              width={320}
              height={110}
              className="w-64 sm:w-80 h-auto drop-shadow-2xl"
              priority
            />
          </div>
          <p className="text-xl sm:text-2xl text-white/85 mb-4 font-display italic">
            {RESTAURANT.tagline}
          </p>
          <div className="flex justify-center mb-8">
            <HoursWidget className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RESTAURANT.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-rose-red text-white font-bold rounded-full text-lg hover:bg-rose-red-dark transition-colors shadow-lg"
            >
              Order Online
            </a>
            <Link
              href="/menu"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── Quick Info Bar ────────────────────────────────────────── */}
      <section className="bg-white border-b border-warm-tan/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm">
            <a
              href={RESTAURANT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-charcoal-light hover:text-rose-red transition-colors"
            >
              <svg className="w-4 h-4 text-rose-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {RESTAURANT.address.full}
            </a>
            <span className="hidden sm:block text-warm-tan">|</span>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="flex items-center gap-2 text-charcoal-light hover:text-rose-red transition-colors"
            >
              <svg className="w-4 h-4 text-rose-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {RESTAURANT.phone}
            </a>
            <span className="hidden sm:block text-warm-tan">|</span>
            <div className="flex items-center gap-2 text-charcoal-light">
              <svg className="w-4 h-4 text-rose-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <HoursWidget />
            </div>
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-warm-tan font-semibold uppercase tracking-[0.15em] text-sm mb-3">
                Our Story
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal leading-tight mb-6">
                Family Recipe. <br />Since 1976.
              </h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                {RESTAURANT.about}
              </p>
              <div className="flex gap-4">
                <Link
                  href="/menu"
                  className="px-6 py-3 bg-rose-red text-white font-semibold rounded-full hover:bg-rose-red-dark transition-colors"
                >
                  See Our Menu
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border-2 border-warm-tan text-charcoal font-semibold rounded-full hover:border-rose-red hover:text-rose-red transition-colors"
                >
                  Find Us
                </Link>
              </div>
            </div>

            {/* Kitchen photo */}
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/DSC0377.jpg"
                alt="Fresh dough being made at Rose's Pizza"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {[
                  { num: "Since", label: "1976" },
                  { num: "100%", label: "Fresh Daily" },
                ].map(({ num, label }) => (
                  <div key={label} className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
                    <p className="font-display text-xl font-bold text-rose-red">{num}</p>
                    <p className="text-xs text-charcoal-light">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Items ────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-warm-tan font-semibold uppercase tracking-[0.15em] text-sm mb-3">
              Crowd Pleasers
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal">
              Customer Favorites
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_ITEMS.map((item) => (
              <div
                key={item.name}
                className="bg-cream rounded-2xl overflow-hidden border border-warm-tan/15 hover:shadow-md transition-shadow"
              >
                <div className="relative h-40 w-full">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-charcoal mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-charcoal-light mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="font-semibold text-rose-red">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-rose-red text-rose-red font-semibold rounded-full hover:bg-rose-red hover:text-white transition-colors"
            >
              View Full Menu
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Photo Strip ───────────────────────────────────────────── */}
      <section className="grid grid-cols-3 h-48 sm:h-64">
        {[
          { src: "/images/DSC0354.jpg", alt: "Rose's Pizza dining room" },
          { src: "/images/DSC0322.jpg", alt: "Pizza preparation at Rose's Pizza" },
          { src: "/images/DSC0343.jpg", alt: "Antipasto salad at Rose's Pizza" },
        ].map(({ src, alt }) => (
          <div key={src} className="relative overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </section>

      {/* ── Order CTA Banner ──────────────────────────────────────── */}
      <OrderCTA variant="banner" />

      {/* ── Hours & Location ─────────────────────────────────────── */}
      <section className="py-16 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-tan/15">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-rose-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Hours
              </h3>
              <ul className="space-y-3">
                {RESTAURANT.hoursDisplay.map((row) => (
                  <li
                    key={row.days}
                    className={`flex justify-between text-sm ${
                      row.hours === "Closed" ? "opacity-50" : ""
                    }`}
                  >
                    <span className="text-charcoal-light">{row.days}</span>
                    <span className={`font-medium ${row.hours === "Closed" ? "text-red-500" : "text-charcoal"}`}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-cream">
                <HoursWidget />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-warm-tan/15">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-rose-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </h3>
              <address className="not-italic text-charcoal-light space-y-1 mb-5">
                <p className="font-medium text-charcoal">{RESTAURANT.address.street}</p>
                <p>{RESTAURANT.address.city}, {RESTAURANT.address.state} {RESTAURANT.address.zip}</p>
                <a href={`tel:${RESTAURANT.phoneRaw}`} className="block mt-3 text-rose-red font-semibold hover:underline">
                  {RESTAURANT.phone}
                </a>
              </address>
              <div className="flex gap-3">
                <a
                  href={RESTAURANT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-rose-red text-white text-sm font-semibold rounded-full hover:bg-rose-red-dark transition-colors"
                >
                  Get Directions
                </a>
                <Link
                  href="/contact"
                  className="px-4 py-2 border border-warm-tan text-charcoal text-sm font-semibold rounded-full hover:border-rose-red hover:text-rose-red transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating order button (mobile only) */}
      <OrderCTA variant="floating" className="md:hidden" />
    </>
  );
}
