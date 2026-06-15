import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import { FEE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Sinnyr | OFM Agency That Operates Differently",
  description:
    "Professionalism, structure, selectivity, real onboarding, and aligned fees. Why Sinnyr operates differently from other OnlyFans management agencies.",
};

const REASONS = [
  {
    heading: "We are selective, and that is the point.",
    body: "Sinnyr does not accept every application. We evaluate each creator for commitment, consistency, and fit before we invest our resources. This is not artificial scarcity. It is the only way to deliver real management. Agencies that sign everyone cannot manage anyone well. We would rather represent fewer creators and do the work properly than scale by lowering the standard.",
  },
  {
    heading: "Real onboarding, not a group chat invite.",
    body: "Before any work begins, every creator signs a management agreement, provides identity verification, and goes through a structured intake process. We audit your platforms, build a personalized strategy, and set clear expectations. This is how professional talent firms operate. If you have worked with an agency that onboarded you in a DM, you know why this matters.",
  },
  {
    heading: "A system, not a person with a phone.",
    body: "The Sinnyr Method is a defined operating system with six components: Selection, Positioning, Content Engine, Distribution, Conversion, and Daily Signal. It runs daily. Every creator receives the same level of structured operations, not a single person trying to manage 50 accounts from their phone. The system is what makes the results repeatable.",
  },
  {
    heading: "Daily operations, not weekly check-ins.",
    body: "We do not check in once a week to ask how things are going. We run operations daily: content distribution, platform management, conversion monitoring, and analytics. Your Daily Signal arrives every morning with a personalized action plan. The work is visible and consistent because the system requires it.",
  },
  {
    heading: "Your fee is aligned with your success.",
    body: `Management is ${FEE.label}. We do not charge setup fees. We do not front-load costs before delivering value. The percentage model means we earn more only when you earn more. There is no incentive for us to collect a flat fee and coast. Our economics push us to do the work well, every day.`,
  },
  {
    heading: "Transparent about what we do and do not promise.",
    body: "We do not publish invented growth numbers, fabricated testimonials, or guaranteed income figures. Every creator's situation is different, and honest management means being clear about that. What we promise is the work: a defined system, a professional team, daily operations, and full transparency about what we are doing on your behalf.",
  },
];

export default function WhySinnyrPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Trust</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            Why Sinnyr
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/60">
            There are a lot of agencies. Most of them are interchangeable. Here
            is what makes Sinnyr different, and why it matters to the creators we
            represent.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <Section>
        <div className="space-y-16">
          {REASONS.map((reason, i) => (
            <div
              key={i}
              className="grid items-start gap-8 border-b border-dark/10 pb-16 last:border-0 last:pb-0 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <h2 className="font-display text-2xl font-light tracking-tight md:text-3xl">
                  {reason.heading}
                </h2>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <p className="text-lg leading-relaxed text-dark/70">
                  {reason.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading className="text-ivory">
            If this is the kind of management you have been looking for, apply.
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-ivory/60">
            We review every application personally. If there is a fit, we will
            reach out to discuss next steps. No pressure. No obligations.
          </p>
          <div className="mt-10">
            <Button href="/apply">Submit Your Application</Button>
          </div>
          <p className="mt-4 text-sm text-ivory/40">
            Sinnyr creates accounts by invitation only.
          </p>
        </div>
      </Section>

      <Footer />
    </>
  );
}
