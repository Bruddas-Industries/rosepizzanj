import Link from "next/link";
import { RESTAURANT } from "@/lib/restaurant";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-warm-tan mb-3">
              {RESTAURANT.name}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {RESTAURANT.about}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-warm-tan uppercase tracking-wider text-xs mb-4">
              Hours
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              {RESTAURANT.hoursDisplay.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span className="text-white/60">{row.days}</span>
                  <span className="text-right">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-warm-tan uppercase tracking-wider text-xs mb-4">
              Find Us
            </h4>
            <address className="not-italic text-sm text-white/80 space-y-2">
              <p>{RESTAURANT.address.street}</p>
              <p>
                {RESTAURANT.address.city}, {RESTAURANT.address.state}{" "}
                {RESTAURANT.address.zip}
              </p>
              <a
                href={`tel:${RESTAURANT.phoneRaw}`}
                className="block mt-3 hover:text-warm-tan transition-colors"
              >
                {RESTAURANT.phone}
              </a>
            </address>

            <div className="mt-4 flex gap-3">
              <a
                href={RESTAURANT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/30 text-white text-sm font-semibold rounded-full hover:border-warm-tan hover:text-warm-tan transition-colors"
              >
                Directions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {RESTAURANT.name}. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <Link href="/menu" className="hover:text-white/70 transition-colors">Menu</Link>
            <Link href="/order" className="hover:text-white/70 transition-colors">Order</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
