import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import { METHOD_STEPS } from "@/data/method";

export const metadata: Metadata = {
  title: "The Sinnyr Method | Creator Management System",
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
    alone: "Growing followers but not subscribers, and not understanding why.",
    managed:
      "A conversion funnel with messaging, DM strategy, and an offer stack designed to turn attention into income.",
  },
  {
    alone: "No idea what is working, what to change, or what to do tomorrow.",
    managed:
      "A daily action plan built from your analytics, delivered to you every morning.",
  },
];

export default function MethodPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Our system</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            The Sinnyr Method
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/60">
            The Sinnyr Method is the operating system behind every creator we
            manage. It is six components, each designed to do work that a creator
            cannot do alone, connected into a single daily operation. There is no
            invented science here. Each component exists because it solves a real
            problem, and each one is explained honestly for what it does and why
            it matters.
          </p>
        </div>
      </section>

      {/* Six components */}
      <Section>
        <div className="space-y-20">
          {METHOD_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`grid items-start gap-12 lg:grid-cols-12 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:col-span-4 ${
                  i % 2 === 1 ? "lg:col-start-9" : ""
                }`}
              >
                <p className="font-display text-6xl font-light text-bordeaux/20">
                  {step.number}
                </p>
              </div>
              <div
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
              >
                <h2 className="font-display text-3xl font-light tracking-tight md:text-4xl">
                  {step.name}
                </h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted">
                  {step.short}
                </p>
                <p className="mt-6 text-lg leading-relaxed text-dark/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Gap and fix */}
      <Section dark>
        <div className="text-center">
          <Eyebrow>The difference</Eyebrow>
          <SectionHeading className="text-ivory">
            Alone versus managed.
          </SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/60">
            These are not hypothetical scenarios. They are the daily reality of
            creators who are trying to build a business without a system behind
            them.
          </p>
        </div>
        <div className="mt-16 space-y-px">
          {GAP_FIX.map((row, i) => (
            <div
              key={i}
              className="grid gap-px bg-white/10 md:grid-cols-2"
            >
              <div className="bg-dark p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-ivory/30">
                  On your own
                </p>
                <p className="mt-3 text-ivory/60">{row.alone}</p>
              </div>
              <div className="bg-dark p-8">
                <p className="text-xs font-medium uppercase tracking-widest text-bordeaux">
                  With Sinnyr
                </p>
                <p className="mt-3 text-ivory/80">{row.managed}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading>
            The method works when the creator is right.
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-dark/70">
            We do not take everyone, because the system requires commitment from
            both sides. If you are serious about treating your content as a
            business, start with an application.
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
