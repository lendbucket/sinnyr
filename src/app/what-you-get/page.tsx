import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { BreadcrumbSchema, ServiceSchema } from "@/components/SchemaOrg";
import { FEE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "What You Get | Content Creator Management",
  description:
    "The concrete deliverables of Sinnyr creator management: positioning, content production, daily distribution, conversion strategy, analytics, and a dedicated team.",
};

const SERVICES = [
  {
    name: "Platform Audit and Strategy",
    description:
      "A full review of your current platforms, audience, content, pricing, and funnel. We document where you are, identify the biggest gaps, and build a personalized strategy before any work begins. This is not a template. It is specific to you.",
  },
  {
    name: "Profile and Funnel Optimization",
    description:
      "Your bios, profile images, pinned content, welcome messages, and pricing tiers are rebuilt to convert. When traffic arrives, every element is structured to move a visitor from curious to subscribed.",
  },
  {
    name: "Content Engine Management",
    description:
      "We take your content sessions and turn them into a full week of distribution-ready assets: clips, teasers, reels, captions, and hooks. AI-assisted ideation helps with angles and copy. You produce once. We distribute everywhere.",
  },
  {
    name: "Daily Multi-Platform Distribution",
    description:
      "A managed, platform-compliant posting operation across TikTok, Reddit, X, and Instagram. Our team handles the scheduling, formatting, and compliance for each platform. This runs every day, not when someone remembers to post.",
  },
  {
    name: "Conversion and Messaging Strategy",
    description:
      "The free-to-paid funnel, DM sequences, pricing structure, and offer stack are designed and managed to turn followers into paying subscribers. We build the strategy and manage the execution.",
  },
  {
    name: "Daily Signal: Analytics and Action Plan",
    description:
      "Every day, you receive a personalized briefing built from your live data: what is performing, what needs adjustment, and exactly what actions to take. This lives in your private portal and is accessible on any device.",
  },
  {
    name: "Dedicated Management Team",
    description:
      "You are not assigned to a queue or a chatbot. You have a dedicated team that manages your operations daily, communicates directly, and is accountable for the work being done on your behalf.",
  },
  {
    name: "Professional Onboarding",
    description:
      "A signed management agreement, identity verification, and a structured intake process. This is a professional relationship, not a casual arrangement. You know the terms, the expectations, and the deliverables before anything begins.",
  },
];

export default function WhatYouGetPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "What You Get", href: "/what-you-get" },
        ]}
      />
      <ServiceSchema
        name="Creator Management Services"
        description="Full-service creator management including platform audit, content engine, daily distribution, conversion strategy, and personalized analytics."
      />
      <Header />
      <StickyApplyCTA />

      {/* Hero */}
      <section className="bg-ink px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Deliverables</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            What You Get
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/60">
            This is not a list of vague promises. These are the concrete
            deliverables every managed creator receives. Each one represents real
            work done by a real team, every day.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <Section>
        <div className="grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.name} className="bg-cream p-8 lg:p-10">
              <h2 className="text-xl font-extrabold tracking-tight md:text-2xl">
                {service.name}
              </h2>
              <p className="mt-4 leading-relaxed text-ink/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Fee */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <SectionHeading className="text-cream">
            One fee. Fully aligned.
          </SectionHeading>
          <p className="mx-auto mt-8 max-w-xl">
            <span className="block text-4xl font-extrabold text-cream md:text-5xl">
              {FEE.percentage}%
            </span>
            <span className="mt-2 block text-sm text-cream/50">
              of your earnings, or ${FEE.minimumMonthly}/month, whichever is
              greater
            </span>
          </p>
          <p className="mt-8 text-lg leading-relaxed text-cream/60">
            No setup fees. No lock-in contracts with hidden penalties. We earn
            when you earn. The percentage model means our incentive is to grow
            your income, not to collect a flat fee regardless of whether the work
            is producing results.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>
            This is the work. Now see if you qualify.
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            Every deliverable listed above is part of the daily operation for
            every creator we manage. If you want this level of support behind
            your business, the next step is an application.
          </p>
          <div className="mt-10">
            <Button href="/apply">Apply to Sinnyr</Button>
          </div>
        </div>
      </Section>

      <Footer />
    </>
  );
}
