import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Apply to Sinnyr | OnlyFans Agency Application" },
  description:
    "Submit your application to Sinnyr. We review every application personally and represent a limited number of creators by invitation only.",
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
