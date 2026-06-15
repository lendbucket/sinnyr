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
      className={`border-l-2 border-bordeaux pl-8 font-display text-2xl font-light italic leading-relaxed tracking-tight md:text-3xl ${
        dark ? "text-ivory/80" : "text-dark/80"
      }`}
    >
      {children}
    </blockquote>
  );
}
