import { ReactNode } from "react";

export default function PullQuote({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <blockquote
      className={`border-l-2 border-red pl-8 text-2xl font-bold leading-snug tracking-tight md:text-3xl ${
        dark ? "text-cream/80" : "text-ink/80"
      }`}
    >
      {children}
    </blockquote>
  );
}
