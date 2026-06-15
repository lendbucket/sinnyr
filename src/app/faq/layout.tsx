import type { Metadata } from "next";
import { BreadcrumbSchema, FAQPageSchema } from "@/components/SchemaOrg";
import { FAQ_ITEMS } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | OnlyFans Agency",
  description:
    "Honest answers about Sinnyr creator management: fees, onboarding, platforms, deliverables, and how results are measured. No vague language.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />
      <FAQPageSchema items={[...FAQ_ITEMS]} />
      {children}
    </>
  );
}
