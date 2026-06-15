"use client";

import { useState, useEffect } from "react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-dark" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-ivory"
          onClick={() => setMenuOpen(false)}
        >
          {SITE.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-ivory/70 transition-colors hover:text-ivory"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/apply"
            className="border border-bordeaux bg-bordeaux px-6 py-2 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-bordeaux"
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
              className={`absolute left-0 block h-px w-6 bg-ivory transition-all duration-300 ${
                menuOpen ? "top-2.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-px w-6 bg-ivory transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-ivory transition-all duration-300 ${
                menuOpen ? "top-2.5 -rotate-45" : "top-5"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Full screen mobile menu */}
      <div
        className={`fixed inset-0 top-0 z-40 bg-dark transition-transform duration-500 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-20">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-5 font-display text-2xl text-ivory transition-colors hover:text-bordeaux"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/apply"
              onClick={() => setMenuOpen(false)}
              className="inline-block w-full border border-bordeaux bg-bordeaux py-4 text-center text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-bordeaux"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
