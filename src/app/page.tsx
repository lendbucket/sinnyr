import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { SITE, FEE } from "@/lib/constants";
import { METHOD_STEPS } from "@/data/method";

export const metadata: Metadata = {
  title: "Sinnyr | OnlyFans Management Agency",
  description:
    "Sinnyr is a selective creator management agency. We manage adult content creators as professional talent through a defined system. Apply to be represented.",
};

export default function Home() {
  return (
    <>
      <Header transparent />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-dark px-6 text-center">
        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Selective Creator Management
          </p>
          <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-ivory sm:text-6xl md:text-7xl lg:text-8xl">
            OnlyFans Management
            <br />
            <span className="text-bordeaux">Agency</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/60">
            Sinnyr manages adult content creators as professional talent. We do
            not take everyone. We take creators who are serious about being
            managed, and we run a system that does the work most agencies talk
            about.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/apply">Apply Now</Button>
            <Button href="/method" variant="outline">
              <span className="text-ivory hover:text-dark">
                The Sinnyr Method
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Stakes */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>The problem</Eyebrow>
          <SectionHeading>
            Most creator agencies are disorganized, extractive, or both.
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-dark/70">
            You have heard the pitch before. Sign up, hand over your account,
            and watch the money roll in. Then weeks pass with no strategy, no
            communication, and no results. You are left doing the same work you
            were doing alone, except now someone is taking a cut. The problem is
            not the model. The problem is that most agencies do not actually have
            a system.
          </p>
        </div>
      </Section>

      {/* Method teaser */}
      <Section dark>
        <div className="text-center">
          <Eyebrow>Our system</Eyebrow>
          <SectionHeading className="text-ivory">
            The Sinnyr Method
          </SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/60">
            Six components, each built to do what a creator cannot do alone. No
            invented science. No fake metrics. A defined system with real
            deliverables at every stage.
          </p>
        </div>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {METHOD_STEPS.map((step) => (
            <div key={step.number} className="bg-dark p-8 lg:p-10">
              <p className="font-display text-sm text-bordeaux">
                {step.number}
              </p>
              <h3 className="mt-3 font-display text-xl text-ivory">
                {step.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/50">
                {step.short}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/method">Explore the Full Method</Button>
        </div>
      </Section>

      {/* Selectivity */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>Selectivity</Eyebrow>
            <SectionHeading>We choose who we work with.</SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-dark/70">
              Sinnyr is not a platform and it is not an open enrollment agency.
              We are a management firm. You apply, we evaluate, and if there is
              a fit, we bring you in. Every creator we manage receives the full
              system, the full team, and the full daily operation. That only
              works if we are selective about who we take on.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-dark/70">
              This is not a tactic. It is how real talent management works.
              Agencies that take everyone serve no one.
            </p>
          </div>
          <div className="border border-dark/10 p-10 lg:p-14">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              What we look for
            </p>
            <ul className="mt-6 space-y-4 text-dark/80">
              <li className="flex gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 bg-bordeaux" />
                <span>Creators who are already producing content consistently</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 bg-bordeaux" />
                <span>A willingness to follow a structured system</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 bg-bordeaux" />
                <span>Professionalism and clear communication</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 bg-bordeaux" />
                <span>A real commitment to treating this as a business</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* The Path teaser */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>The journey</Eyebrow>
          <SectionHeading className="text-ivory">
            Four stages. Clear deliverables. Visible progress.
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-ivory/60">
            When you join Sinnyr, you move through a defined onboarding path:
            Intake and Audit, Foundation, Launch, and Growth. At each stage, you
            know exactly what we are building, what you receive, and what
            milestone you reach before moving forward.
          </p>
          <div className="mt-10">
            <Button href="/the-path">See the Full Path</Button>
          </div>
        </div>
      </Section>

      {/* Fee transparency */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Fees</Eyebrow>
          <SectionHeading>Simple, aligned, transparent.</SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-dark/70">
            Management is {FEE.label}. We earn when you earn. There are no
            setup fees, no lock-in contracts with hidden penalties, and no
            surprises. The fee structure is designed so our incentives stay
            aligned with yours.
          </p>
        </div>
      </Section>

      {/* Final CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading className="text-ivory">
            Ready to be managed like a professional?
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-ivory/60">
            Applying is not signing up. It is the first step in a conversation.
            We review every application personally, and if there is a fit, we
            will reach out to discuss next steps.
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
