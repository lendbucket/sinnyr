import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
};

export default function Section({
  children,
  className = "",
  dark = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`px-6 py-20 md:py-28 lg:px-8 ${
        dark ? "bg-dark text-ivory" : "bg-ivory text-dark"
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mt-4 font-display text-3xl font-light tracking-tight md:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}
