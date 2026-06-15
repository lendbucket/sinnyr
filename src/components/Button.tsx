import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block rounded px-8 py-3.5 text-sm font-semibold uppercase tracking-widest transition-all text-center";
  const variants = {
    primary:
      "bg-red text-white hover:bg-red-hover shadow-sm hover:shadow-md active:bg-red-hover",
    outline:
      "border border-ink text-ink hover:bg-ink hover:text-cream",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
