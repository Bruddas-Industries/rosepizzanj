"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import type { MenuCategory } from "@/lib/menu";

export default function MenuNav({ categories }: { categories: MenuCategory[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    const ro = new ResizeObserver(updateArrows);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      ro.disconnect();
    };
  }, [updateArrows]);

  // Horizontal scroll via mouse wheel
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY * 2, behavior: "smooth" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -200 : 200, behavior: "smooth" });
  };

  return (
    <nav className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-warm-tan/20 shadow-sm">
      <div className="max-w-5xl mx-auto px-0 sm:px-2 lg:px-4 flex items-center">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className={`shrink-0 px-3 py-3 rounded-full transition-all ${
            canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          } text-charcoal-light hover:text-rose-red hover:[background-color:rgba(139,26,26,0.1)] active:[background-color:rgba(139,26,26,0.2)]`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="10 4 6 8 10 12" />
          </svg>
        </button>

        {/* Scrollable pills */}
        <div
          ref={scrollRef}
          className="flex gap-0.5 overflow-x-auto py-2.5 flex-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 px-4 py-1.5 rounded-full text-sm font-medium text-charcoal-light hover:bg-rose-red hover:text-white transition-colors"
            >
              {cat.label}
            </a>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className={`shrink-0 px-3 py-3 rounded-full transition-all ${
            canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
          } text-charcoal-light hover:text-rose-red hover:[background-color:rgba(139,26,26,0.1)] active:[background-color:rgba(139,26,26,0.2)]`}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 4 10 8 6 12" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
