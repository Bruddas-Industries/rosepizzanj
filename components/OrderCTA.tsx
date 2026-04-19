import { RESTAURANT } from "@/lib/restaurant";

type Variant = "button" | "banner" | "floating";

interface OrderCTAProps {
  variant?: Variant;
  className?: string;
}

function PlatformButtons({ size = "md", dark = false }: { size?: "sm" | "md"; dark?: boolean }) {
  const base =
    size === "sm"
      ? "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full font-semibold text-xs transition-opacity hover:opacity-80 shadow-md"
      : "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-opacity hover:opacity-80 shadow-lg";

  return (
    <>
      {/* Uber Eats */}
      <a
        href={RESTAURANT.uberEatsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on Uber Eats"
        className={`${base} bg-black text-white ring-2 ring-white/20`}
      >
        <span
          className={`font-black tracking-tight leading-none ${size === "sm" ? "text-sm" : "text-base"}`}
          style={{ fontFamily: "'Arial Black', Arial, sans-serif" }}
          aria-label="Uber Eats"
        >
          <span className="text-white">Uber</span>
          <span style={{ color: "#06C167" }}> Eats</span>
        </span>
      </a>

      {/* DoorDash */}
      <a
        href={RESTAURANT.doorDashUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on DoorDash"
        className={`${base} text-white ring-2 ring-white/20`}
        style={{ backgroundColor: "#FF3008" }}
      >
        {/* Delivery car icon */}
        <svg
          className={size === "sm" ? "w-4 h-4 shrink-0" : "w-5 h-5 shrink-0"}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
        </svg>
        <span>DoorDash</span>
      </a>

      {/* Grubhub */}
      <a
        href={RESTAURANT.grubHubUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on Grubhub"
        className={`${base} text-white ring-2 ring-white/20`}
        style={{ backgroundColor: "#F97316" }}
      >
        {/* Fork & knife icon */}
        <svg
          className={size === "sm" ? "w-4 h-4 shrink-0" : "w-5 h-5 shrink-0"}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
        </svg>
        <span>Grubhub</span>
      </a>

      {/* Call to Order */}
      <a
        href={`tel:${RESTAURANT.phoneRaw}`}
        aria-label={`Call us at ${RESTAURANT.phone}`}
        className={`${base} border-2 ${
          dark
            ? "border-charcoal text-charcoal hover:border-rose-red hover:text-rose-red"
            : "border-white text-white hover:bg-white/10"
        }`}
      >
        <svg
          className={size === "sm" ? "w-4 h-4 shrink-0" : "w-5 h-5 shrink-0"}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>Call to Order</span>
      </a>
    </>
  );
}

export default function OrderCTA({
  variant = "button",
  className = "",
}: OrderCTAProps) {
  if (variant === "banner") {
    return (
      <section className={`bg-rose-red text-white py-14 ${className}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-2">Ready to Order?</h2>
          <p className="text-white/80 mb-8 text-lg">
            Choose your favorite platform for pickup or delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PlatformButtons size="md" dark={false} />
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

  // Default: "button" — inline set on light background
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <PlatformButtons size="md" dark={true} />
    </div>
  );
}
