"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RESTAURANT } from "@/lib/restaurant";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;
  const navBg = transparent
    ? "bg-transparent"
    : "bg-white shadow-sm border-b border-warm-tan/20";
  const textColor = transparent ? "text-white" : "text-charcoal";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/Roses_Pizza_final01-1.png"
              alt="Rose's Pizza"
              width={200}
              height={72}
              className="h-20 w-auto object-contain shrink-0"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors hover:text-warm-tan ${
                  pathname === href ? "text-warm-tan" : textColor
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="/order"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-rose-red text-white text-sm font-semibold rounded-full hover:bg-rose-red-dark transition-colors"
            >
              Order Online
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            className={`md:hidden p-2 rounded-md transition-colors ${textColor}`}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-warm-tan/20 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`py-3 px-2 text-base font-medium border-b border-cream transition-colors hover:text-rose-red ${
                  pathname === href ? "text-rose-red" : "text-charcoal"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={RESTAURANT.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 py-3 text-center bg-rose-red text-white font-semibold rounded-full hover:bg-rose-red-dark transition-colors"
            >
              Order Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
