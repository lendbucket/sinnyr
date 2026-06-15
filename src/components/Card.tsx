import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border border-hairline bg-cream p-8 transition-shadow hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
