import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import PullQuote from "@/components/PullQuote";
import { BreadcrumbSchema, ServiceSchema } from "@/components/SchemaOrg";
import { METHOD_STEPS } from "@/data/method";

export const metadata: Metadata = {
  title: { absolute: "The Sinnyr Method | Creator Management System" },
  description:
    "Six components that define how Sinnyr manages creators as professional talent. Selection, positioning, content, distribution, conversion, and daily analytics.",
};

const GAP_FIX = [
  {
    alone: "Posting without a strategy and hoping something goes viral.",
    managed:
      "A positioning audit and funnel structure built before any traffic is sent.",
  },
  {
    alone: "Spending hours on a single post that reaches a few hundred people.",
    managed:
      "One content session turned into a full week of distribution assets across every platform.",
  },
  {
    alone: "Guessing which platform matters and spreading yourself too thin.",
    managed:
      "An orchestrated, platform-compliant distribution operation managed by a dedicated team.",
  },
  {
    alone:
      "Growing followers but not subscribers, and not understanding where the revenue is leaking.",
    managed:
      "A conversion funnel with messaging, DM strategy, PPV sequencing, and an offer stack designed to turn attention into income.",
  },
  {
    alone: "No idea what is working, what to change, or what to do tomorrow.",
    managed:
      "A daily action plan built from your analytics, delivered to you every morning through your private portal.",
  },
];

export default function MethodPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "The Sinnyr Method", href: "/method" },
        ]}
      />
      <ServiceSchema
        name="The Sinnyr Method - Creator Management System"
        description="Six-component creator management system: Selection, Positioning, Content Engine, Distribution, Conversion, and Daily Signal analytics."
      />
      <Header />
      <StickyApplyCTA />

      {/* Hero */}
      <section className="bg-ink px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Our system</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            The Sinnyr Method
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/60">
            The Sinnyr Method is the operating system behind every creator we
            manage. Six components, each designed to do work that a creator
            cannot do alone, connected into a single daily operation. There is
            no invented science. Each component exists because it solves a real
            problem, and each one is explained honestly below.
          </p>
        </div>
      </section>

      {/* Six components */}
      <Section>
        <div className="space-y-24">
          {METHOD_STEPS.map((step, i) => (
            <ScrollReveal key={step.number}>
              <div
                className={`grid items-start gap-12 lg:grid-cols-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`lg:col-span-3 ${
                    i % 2 === 1 ? "lg:col-start-10" : ""
                  }`}
                >
                  <p className="text-8xl font-extrabold text-red/15 md:text-9xl">
                    {step.number}
                  </p>
                </div>
                <div
                  className={`lg:col-span-8 ${
                    i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                    {step.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted">
                    {step.short}
                  </p>
                  <p className="mt-6 text-lg leading-relaxed text-ink/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Pull quote divider */}
      <Section dark>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <PullQuote dark>
              The agencies you tried were never built for you to win. They were
              built to take a cut of whatever happened to come in.
            </PullQuote>
          </div>
        </ScrollReveal>
      </Section>

      {/* Gap and fix */}
      <Section>
        <ScrollReveal>
          <div className="text-center">
            <Eyebrow>The difference</Eyebrow>
            <SectionHeading>Alone versus managed.</SectionHeading>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink/70">
              These are not hypothetical scenarios. They are the daily reality of
              creators who are trying to build a business without a system behind
              them.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-16 space-y-6">
          {GAP_FIX.map((row, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-2">
                <div className="bg-cream p-8">
                  <p className="text-xs font-medium uppercase tracking-widest text-ink/30">
                    On your own
                  </p>
                  <p className="mt-3 text-ink/60">{row.alone}</p>
                </div>
                <div className="bg-ink p-8">
                  <p className="text-xs font-medium uppercase tracking-widest text-red">
                    With Sinnyr
                  </p>
                  <p className="mt-3 text-cream/80">{row.managed}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading className="text-cream">
              The method works when the creator is right.
            </SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-cream/60">
              We do not take everyone, because the system requires commitment
              from both sides. If you are serious about treating your content as
              a business, start with an application.
            </p>
            <div className="mt-10">
              <Button href="/apply">Apply to Sinnyr</Button>
            </div>
            <p className="mt-4 text-sm text-cream/40">
              Sinnyr creates accounts by invitation only. Most applicants are
              not a fit.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Footer />
    </>
  );
}
