"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const IMAGES = [
    { src: "/images/DSC0305.jpg", alt: "Delicious Italian hero with spicy peppers" },
    { src: "/images/DSC0311.jpg", alt: "Delicious Italian hero with spicy peppers smothered with mozzarella cheese" },
    { src: "/images/DSC0318.jpg", alt: "Fresh handmade personal pizzas" },
    { src: "/images/DSC0343.jpg", alt: "Fresh antipasto salad" },
    { src: "/images/DSC0362.jpg", alt: "Fresh Chicken cutlet salad with spicy peppers" },
    { src: "/images/DSC0366.jpg", alt: "Hot and delicious meatball parmigiana hero smothered with mozzarella cheese" },
    { src: "/images/DSC0373.jpg", alt: "Hot and delicious stuffed shells" },
    { src: "/images/DSC0378.jpg", alt: "Fresh dough being made at the pizzeria" },
    { src: "/images/IMG_3845.jpg", alt: "Hot and fresh garlic knots" },
    { src: "/images/IMG_3860.jpg", alt: "Delicious spaghetti and chicken cutlet dinner" },
    { src: "/images/IMG_3895.jpg", alt: "Fresh out of the oven Sicilian pizza with sausage" },
    { src: "/images/IMG_3940.jpg", alt: "Fresh out of the oven Sicilian pizza with pepperoni and olives" },
];

export default function AboutCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % IMAGES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 10000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg group">
      {IMAGES.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              i === current ? "bg-white w-3" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Stat badges */}
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
  );
}
