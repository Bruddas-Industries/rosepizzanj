import type { Metadata } from "next";
import Image from "next/image";
import { MENU } from "@/lib/menu";
import OrderCTA from "@/components/OrderCTA";
import MenuNav from "@/components/MenuNav";

export const metadata: Metadata = {
  title: "Menu | Rose Pizza — Garfield, NJ",
  description:
    "Browse our full menu: pizza, subs, pasta, sides, and drinks. Made fresh daily in Garfield, NJ.",
};

export default function MenuPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative overflow-hidden pt-28 pb-16 text-white text-center min-h-[320px] flex flex-col justify-center">
        <Image
          src="/images/rose_food_display.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10">
          <p className="text-warm-tan font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Fresh &amp; Delicious
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-white/80 text-lg max-w-md mx-auto mb-6">
            Everything made fresh, every day. Just the way it has been for 40 years.
          </p>
          <a
            href="/images/rose_menu_4-19-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/40 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors backdrop-blur-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            View PDF Menu
          </a>
        </div>
      </section>

      <MenuNav categories={MENU} />

      {/* Menu Sections */}
      {MENU.map((category, idx) => (
        <section
          key={category.id}
          id={category.id}
          className={`scroll-mt-28 py-14 ${idx % 2 === 0 ? "bg-cream" : "bg-white"}`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="flex items-stretch gap-5 mb-8">
              <div className="w-1 rounded-full bg-rose-red shrink-0" />
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
                  {category.label}
                </h2>
                {category.description && (
                  <p className="text-charcoal-light text-sm mt-1 max-w-xl">
                    {category.description}
                  </p>
                )}
              </div>
            </div>

            {/* Size key row (pizza) */}
            {category.sizes && (
              <div className="flex justify-end gap-6 mb-3 pr-0.5">
                {category.sizes.map((size) => (
                  <span
                    key={size}
                    className="text-[11px] font-bold uppercase tracking-widest text-charcoal-light/60 min-w-[72px] text-center"
                  >
                    {size}
                  </span>
                ))}
              </div>
            )}

            {/* Item list */}
            <div className="divide-y divide-warm-tan/20">
              {category.items.map((item) => {
                const priceParts =
                  category.sizes && item.price?.includes(" / ")
                    ? item.price.split(" / ")
                    : null;

                return (
                  <div key={item.name} className="py-4 group">
                    {priceParts ? (
                      /* ── Sized item (e.g. pizza) ── */
                      <div className="flex items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-charcoal text-base group-hover:text-rose-red transition-colors">
                            {item.name}
                          </span>
                          {item.description && (
                            <p className="text-sm text-charcoal-light mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                          {item.note && (
                            <p className="text-xs text-charcoal-light/60 italic mt-1">
                              {item.note}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-6 shrink-0">
                          {priceParts.map((p, i) => (
                            <span
                              key={i}
                              className="font-bold text-rose-red text-sm min-w-[72px] text-center tabular-nums"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : item.variants ? (
                      /* ── Variant item (e.g. garlic knots, extra filling) ── */
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <span className="font-semibold text-charcoal text-base group-hover:text-rose-red transition-colors">
                            {item.name}
                          </span>
                          {item.description && (
                            <p className="text-sm text-charcoal-light mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <div className="flex gap-6 shrink-0">
                          {item.variants.map((v) => (
                            <div key={v.label} className="text-center min-w-[52px]">
                              <div className="text-[11px] font-bold uppercase tracking-widest text-charcoal-light/60">{v.label}</div>
                              <div className="font-bold text-rose-red text-sm tabular-nums">{v.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      /* ── Standard item ── */
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-semibold text-charcoal text-base group-hover:text-rose-red transition-colors whitespace-nowrap">
                            {item.name}
                          </span>
                          <span className="flex-1 border-b border-dashed border-warm-tan/50 mb-1 min-w-4" />
                          <span className="font-bold text-rose-red text-sm whitespace-nowrap tabular-nums shrink-0">
                            {item.price}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-charcoal-light mt-0.5 leading-relaxed pl-0">
                            {item.description}
                          </p>
                        )}
                        {item.note && (
                          <p className="text-xs text-charcoal-light/60 italic mt-1">
                            {item.note}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Order CTA */}
      <OrderCTA variant="banner" />

      <OrderCTA variant="floating" className="md:hidden" />
    </>
  );
}
