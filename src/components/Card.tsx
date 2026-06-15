import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border border-dark/10 bg-ivory p-8 transition-shadow hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
