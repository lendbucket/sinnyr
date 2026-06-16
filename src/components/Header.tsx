"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV, SITE } from "@/lib/constants";

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [transparent]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-cream shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center px-6 py-4 lg:justify-between lg:px-8 lg:py-3">
        {/* Mobile: invisible spacer to balance the menu button so logo centers */}
        <div className="w-11 lg:hidden" aria-hidden="true" />

        {/* Logo - centered on mobile, left on desktop */}
        <Link
          href="/"
          className="mx-auto flex items-center lg:mx-0"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src={solid ? "/sinnyr-logo.png" : "/sinnyr-logo-cream.png"}
            alt={`${SITE.name} logo`}
            width={280}
            height={168}
            priority
            className="h-10 w-auto lg:h-14"
          />
          <noscript>
            <span className="text-xl font-extrabold tracking-tight">
              {SITE.name}
            </span>
          </noscript>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                solid
                  ? "text-ink/70 hover:text-ink"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="rounded bg-red px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-red-hover"
          >
            Apply
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 transition-all duration-300 ${
                solid ? "bg-ink" : "bg-cream"
              } ${menuOpen ? "top-2.5 rotate-45 !bg-cream" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-6 transition-opacity duration-300 ${
                solid ? "bg-ink" : "bg-cream"
              } ${menuOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 transition-all duration-300 ${
                solid ? "bg-ink" : "bg-cream"
              } ${menuOpen ? "top-2.5 -rotate-45 !bg-cream" : "top-5"}`}
            />
          </div>
        </button>
      </nav>

      {/* Full screen mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-ink transition-transform duration-500 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-24">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-5 text-2xl font-bold text-cream transition-colors hover:text-red"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/apply"
              onClick={() => setMenuOpen(false)}
              className="inline-block w-full rounded bg-red py-4 text-center text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-red-hover"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
