import Link from "next/link";
import { NAV, SITE } from "@/lib/constants";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Why Sinnyr", href: "/why-sinnyr" },
      { label: "Insights", href: "/insights" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    heading: "The Work",
    links: [
      { label: "The Sinnyr Method", href: "/method" },
      { label: "The Path", href: "/the-path" },
      { label: "What You Get", href: "/what-you-get" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Use", href: "/legal/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <Link href="/" className="font-display text-2xl tracking-tight">
              {SITE.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-ivory/50">
              A selective creator management agency. We manage talent, not
              accounts.
            </p>
            <p className="mt-6 text-sm text-ivory/40">
              <a
                href={`mailto:${SITE.contact.email}`}
                className="transition-colors hover:text-ivory/70"
              >
                {SITE.contact.email}
              </a>
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-medium uppercase tracking-widest text-ivory/40">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/60 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs text-ivory/30">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
