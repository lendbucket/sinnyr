"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyApplyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 md:bottom-8 md:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href="/apply"
        className="flex h-14 items-center gap-3 border border-bordeaux bg-bordeaux px-6 text-sm font-medium uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-dark hover:border-dark"
      >
        Apply
      </Link>
    </div>
  );
}
