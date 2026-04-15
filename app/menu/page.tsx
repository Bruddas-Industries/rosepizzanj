import type { Metadata } from "next";
import { MENU } from "@/lib/menu";
import { RESTAURANT } from "@/lib/restaurant";
import OrderCTA from "@/components/OrderCTA";

export const metadata: Metadata = {
  title: "Menu | Rose Pizza — Garfield, NJ",
  description:
    "Browse our full menu: pizza, subs, pasta, sides, and drinks. Made fresh daily in Garfield, NJ.",
};

export default function MenuPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-charcoal pt-28 pb-16 text-white text-center">
        <p className="text-warm-tan font-semibold uppercase tracking-[0.2em] text-sm mb-3">
          Fresh &amp; Delicious
        </p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Our Menu</h1>
        <p className="text-white/70 text-lg max-w-md mx-auto">
          Everything made fresh, every day. Just the way it has been for 40 years.
        </p>
      </section>

      {/* Sticky Category Nav */}
      <nav className="sticky top-16 z-30 bg-white border-b border-warm-tan/20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {MENU.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-medium text-charcoal-light hover:bg-cream hover:text-rose-red transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Sections */}
      <div className="bg-cream min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          {MENU.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-28">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                  {category.label}
                </h2>
                <div className="flex-1 h-px bg-warm-tan/30" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl p-5 border border-warm-tan/15 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-charcoal text-base leading-tight mb-1">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-sm text-charcoal-light leading-relaxed mb-2">
                            {item.description}
                          </p>
                        )}
                        {item.note && (
                          <p className="text-xs text-warm-tan italic">{item.note}</p>
                        )}
                      </div>
                      <span className="shrink-0 font-bold text-rose-red text-sm whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Order reminder at bottom of menu */}
        <div className="pb-16 text-center px-4">
          <p className="text-charcoal-light mb-4">Ready to order?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={RESTAURANT.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-rose-red text-white font-bold rounded-full hover:bg-rose-red-dark transition-colors"
            >
              Order on Uber Eats
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href={`tel:${RESTAURANT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-charcoal text-charcoal font-bold rounded-full hover:border-rose-red hover:text-rose-red transition-colors"
            >
              Call: {RESTAURANT.phone}
            </a>
          </div>
        </div>
      </div>

      <OrderCTA variant="floating" className="md:hidden" />
    </>
  );
}
