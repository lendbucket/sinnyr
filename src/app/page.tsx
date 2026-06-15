import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import PullQuote from "@/components/PullQuote";
import { SITE, FEE } from "@/lib/constants";
import { METHOD_STEPS } from "@/data/method";

export const metadata: Metadata = {
  title: "Sinnyr | OnlyFans Management Agency",
  description:
    "Sinnyr is a selective creator management agency. We manage adult content creators as professional talent through a defined system. Apply to be represented.",
};

const OPERATIONS = [
  "Consistent, high-quality content production across multiple formats",
  "Platform-compliant distribution on Reddit, X, TikTok, and Instagram, every single day",
  "Funnel and link-in-bio optimization so traffic actually converts",
  "The relentless chat and pay-per-view sales work where most of the real revenue lives",
  "Subscriber retention and re-engagement so your audience does not churn",
  "Analytics, iteration, and strategy shifts based on real data",
  "Keeping up with constant platform rule changes that can wipe your reach overnight",
];

export default function Home() {
  return (
    <>
      <Header transparent />
      <StickyApplyCTA />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-dark px-6 text-center">
        <div className="relative z-10 max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-bordeaux">
            Application Only
          </p>
          <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.05] tracking-tight text-ivory">
            OnlyFans Management
            <br />
            <span className="text-bordeaux">Agency</span>
          </h1>
          <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-ivory/60 md:text-xl">
            Most creators are doing ten jobs and getting paid for one. You were
            never supposed to run all of this alone. Sinnyr is a selective
            management agency that runs the full operation behind you, so you can
            focus on the one thing that actually matters: creating.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/apply">Apply Now</Button>
            <Button href="/method" variant="outline">
              <span className="text-ivory hover:text-dark">
                The Sinnyr Method
              </span>
            </Button>
          </div>
          <p className="mt-6 text-xs text-ivory/30">
            We accept a limited number of creators. Most applicants are not a fit.
          </p>
        </div>
      </section>

      {/* Stakes: what winning actually requires */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>The honest truth</Eyebrow>
            <SectionHeading>
              Here is what winning on this platform actually requires.
            </SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-dark/70">
              The creators at the top are not just better at making content. They
              are running a full business operation, every single day. Here is the
              real list of what it takes to compete:
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="mx-auto mt-12 max-w-3xl">
            <ol className="space-y-5">
              {OPERATIONS.map((op, i) => (
                <li key={i} className="flex gap-4 text-lg text-dark/80">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center font-display text-sm text-bordeaux">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{op}</span>
                </li>
              ))}
            </ol>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mx-auto mt-16 max-w-3xl">
            <PullQuote>
              No single person can run all of this at a high level and still
              create. The creators who win have a team behind them.
            </PullQuote>
            <p className="mt-8 text-lg leading-relaxed text-dark/70">
              The real choice is not agency or no agency. It is a real system or a
              plateau and burnout. The agencies that signed you up, collected a
              cut, and checked in once a week were never built for you to win.
              They were built to take a percentage of whatever happened to come
              in.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Method teaser */}
      <Section dark>
        <ScrollReveal>
          <div className="text-center">
            <Eyebrow>Our system</Eyebrow>
            <SectionHeading className="text-ivory">
              The Sinnyr Method
            </SectionHeading>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ivory/60">
              Six components. Each one does real work that a creator cannot run
              alone. No invented science. No fake metrics. A defined operating
              system with deliverables at every stage.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-16 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {METHOD_STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 80}>
              <div className="bg-dark p-8 lg:p-10">
                <p className="font-display text-3xl font-light text-bordeaux/30">
                  {step.number}
                </p>
                <h3 className="mt-3 font-display text-xl text-ivory">
                  {step.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/50">
                  {step.short}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/method">Explore the Full Method</Button>
        </div>
      </Section>

      {/* Selectivity and exclusivity */}
      <Section>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <Eyebrow>By invitation</Eyebrow>
              <SectionHeading>
                We run a capped roster. Here is why.
              </SectionHeading>
              <p className="mt-6 text-lg leading-relaxed text-dark/70">
                Every creator Sinnyr signs gets the full operation: a dedicated
                team, daily distribution, managed sales and messaging, and a
                personalized analytics briefing every morning. That level of
                hands-on work is only possible with a limited number of creators
                at once.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-dark/70">
                When our roster is full, new applications join a waitlist. We do
                not expand capacity by lowering the standard. Being signed by
                Sinnyr means you cleared a real bar, and the system behind you is
                undivided.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-dark/70">
                This is not artificial scarcity. It is the structural reality of
                doing this work properly.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="border border-dark/10 p-10 lg:p-14">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                What we evaluate
              </p>
              <ul className="mt-6 space-y-5 text-dark/80">
                {[
                  "You are already producing content consistently, not planning to start",
                  "You are willing to follow a structured system, not freelance within one",
                  "You communicate professionally and show up for the work",
                  "You treat this as a business, because that is what it is",
                  "You are coachable, because the system works when both sides commit",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-bordeaux" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* The Path teaser */}
      <Section dark>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>The journey</Eyebrow>
            <SectionHeading className="text-ivory">
              Four stages. Clear deliverables. Visible progress from day one.
            </SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-ivory/60">
              You do not get dropped into a queue and forgotten. You move through
              a defined onboarding path: Intake and Audit, Foundation, Launch, and
              Growth. At each stage, you know exactly what we are building, what
              you receive, and what milestone comes next. You feel the system
              working before the first month is over.
            </p>
            <div className="mt-10">
              <Button href="/the-path">See the Full Path</Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Education teaser */}
      <Section>
        <ScrollReveal>
          <div className="grid items-start gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Eyebrow>Learn the craft</Eyebrow>
              <SectionHeading>
                We teach everything we know. For free.
              </SectionHeading>
              <p className="mt-6 text-lg leading-relaxed text-dark/70">
                A firm that can teach the whole game at a deep level is obviously
                the one to run it for you. We publish real strategy, real
                operations knowledge, and real answers to the questions most
                agencies dodge.
              </p>
              <div className="mt-8">
                <Button href="/insights" variant="outline">
                  Read the Insights
                </Button>
              </div>
            </div>
            <div className="space-y-4 lg:col-span-6 lg:col-start-7">
              {[
                {
                  title: "How discovery and growth actually work on OnlyFans",
                  href: "/insights/how-onlyfans-growth-works",
                },
                {
                  title: "The funnel from free follower to paying subscriber",
                  href: "/insights/follower-to-subscriber-funnel",
                },
                {
                  title: "How to spot a fake or extractive agency",
                  href: "/insights/how-to-spot-fake-agency",
                },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group block border border-dark/10 p-6 transition-shadow hover:shadow-lg"
                >
                  <p className="font-display text-lg font-light tracking-tight transition-colors group-hover:text-bordeaux">
                    {article.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">Read article</p>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Fee transparency */}
      <Section dark>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Fees</Eyebrow>
            <SectionHeading className="text-ivory">
              Simple, aligned, transparent.
            </SectionHeading>
            <p className="mx-auto mt-8 max-w-xl">
              <span className="block font-display text-5xl font-light text-ivory md:text-6xl">
                {FEE.percentage}%
              </span>
              <span className="mt-3 block text-sm text-ivory/50">
                of your earnings, or ${FEE.minimumMonthly}/month, whichever is
                greater
              </span>
            </p>
            <p className="mt-8 text-lg leading-relaxed text-ivory/60">
              We earn when you earn. No setup fees, no hidden costs, no lock-in
              contracts. The percentage model means our only incentive is to grow
              your business. If we do not do the work, we do not get paid. That
              is how it should be.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Final CTA */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>
              You know whether this is what you have been looking for.
            </SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-dark/70">
              Applying is not signing up. It is the first step in a conversation.
              We review every application personally, and if there is a fit, we
              will reach out to discuss what working together looks like.
            </p>
            <div className="mt-10">
              <Button href="/apply">Submit Your Application</Button>
            </div>
            <p className="mt-4 text-sm text-dark/40">
              Sinnyr creates accounts by invitation only. Most applicants are not
              a fit.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <Footer />
    </>
  );
}
