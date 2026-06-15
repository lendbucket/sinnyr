import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  alt?: boolean;
  id?: string;
};

export default function Section({
  children,
  className = "",
  dark = false,
  alt = false,
  id,
}: SectionProps) {
  const bg = dark
    ? "bg-ink text-cream"
    : alt
      ? "bg-cream-alt text-ink"
      : "bg-cream text-ink";

  return (
    <section
      id={id}
      className={`px-6 py-20 md:py-28 lg:px-8 ${bg} ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
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
      className={`mt-4 text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}
