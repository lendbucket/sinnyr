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
    "inline-block px-8 py-3.5 text-sm font-medium uppercase tracking-widest transition-colors text-center";
  const variants = {
    primary:
      "border border-bordeaux bg-bordeaux text-white hover:bg-transparent hover:text-bordeaux",
    outline:
      "border border-dark text-dark hover:bg-dark hover:text-ivory",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
