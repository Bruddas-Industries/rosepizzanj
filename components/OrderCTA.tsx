import Image from "next/image";
import { RESTAURANT } from "@/lib/restaurant";

type Variant = "button" | "banner" | "floating";

interface OrderCTAProps {
  variant?: Variant;
  className?: string;
}

export default function OrderCTA({
  variant = "button",
  className = "",
}: OrderCTAProps) {
  if (variant === "banner") {
    return (
      <section className={`bg-rose-red text-white py-12 ${className}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-2">
            Ready to Order?
          </h2>
          <p className="text-white/80 mb-6 text-lg">
            Order online through Uber Eats for pickup or delivery.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={RESTAURANT.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on Uber Eats"
              className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              <Image src="/images/uber_eats_icon_white_on_black_horizontal_transparent.png" alt="Order on Uber Eats" width={160} height={48} className="h-15 w-auto shrink-0 rounded-full border-2 border-white" />
            </a>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white font-bold rounded-full text-base hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call to Order
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (variant === "floating") {
    return (
      <a
        href={RESTAURANT.uberEatsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-rose-red text-white font-bold rounded-full shadow-lg hover:bg-rose-red-dark transition-colors ${className}`}
      >
        Order Online
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    );
  }

  // Default: "button"
  return (
    <a
      href={RESTAURANT.uberEatsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 bg-rose-red text-white font-semibold rounded-full hover:bg-rose-red-dark transition-colors ${className}`}
    >
      Order Online
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  );
}
