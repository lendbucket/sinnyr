import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import PullQuote from "@/components/PullQuote";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import { FEE } from "@/lib/constants";

export const metadata: Metadata = {
  title: { absolute: "Why Sinnyr | OFM Agency That Operates Differently" },
  description:
    "Professionalism, structure, selectivity, real onboarding, and aligned fees. Why Sinnyr operates differently from other OnlyFans management agencies.",
};

const FULL_OPERATION = [
  {
    name: "Content production",
    detail:
      "Not one post a day. Multiple formats, multiple platforms, every single day. Clips, teasers, reels, carousels, captions, hooks. Each platform has different rules, different aspect ratios, and different audiences.",
  },
  {
    name: "Platform-compliant distribution",
    detail:
      "Reddit, X, TikTok, Instagram. Each with its own content guidelines, posting rules, and ban triggers. One wrong move wipes your reach. This has to be managed, not guessed at.",
  },
  {
    name: "Funnel and profile optimization",
    detail:
      "Your bio, your link tree, your pinned content, your pricing tiers, your welcome message. Every touchpoint between a visitor and a subscription needs to be structured to convert. Most creators have never audited this.",
  },
  {
    name: "Chat and pay-per-view sales",
    detail:
      "This is where the majority of real revenue lives. Not subscriptions. The messaging, the PPV strategy, the upsells, the retention sequences. This is a daily, labor-intensive sales operation, and most creators either skip it or burn out on it.",
  },
  {
    name: "Subscriber retention",
    detail:
      "Getting subscribers is one problem. Keeping them is another. Re-engagement campaigns, content calendars, exclusivity tiers, and renewal incentives. Retention is a daily operation, and unmanaged churn is the most common silent cost.",
  },
  {
    name: "Analytics and iteration",
    detail:
      "Knowing what worked, what did not, which content drove subs, which drove cancellations, and adjusting the strategy daily. Not monthly. Not when someone remembers to check. Daily.",
  },
  {
    name: "Platform rule changes",
    detail:
      "Every major platform changes its algorithm, its content rules, or its payout terms regularly. Fall behind on a rule change and you lose reach, get restricted, or get banned. Staying current is a job by itself.",
  },
];

const REASONS = [
  {
    heading: "We are selective, and that is the point.",
    body: "Sinnyr runs a capped roster. Every creator we sign gets the full operation: a dedicated team, daily distribution, managed sales, and a personalized analytics briefing every morning. That is only possible with a limited number of creators at once. We do not expand capacity by lowering the standard. When the roster is full, new applications join a waitlist. Being signed by Sinnyr means you cleared a real bar.",
  },
  {
    heading: "Real onboarding, not a group chat invite.",
    body: "Before any work begins, every creator signs a management agreement, provides identity verification, and goes through a structured intake process. We audit your platforms, build a personalized strategy, and set clear expectations on both sides. This is how professional talent firms operate. If you have worked with an agency that onboarded you in a DM, you know why this matters.",
  },
  {
    heading: "A system, not a person with a phone.",
    body: "The Sinnyr Method is a defined operating system with six components: Selection, Positioning, Content Engine, Distribution, Conversion, and Daily Signal. It runs daily for every creator. Not a single person trying to manage 50 accounts from their phone between errands. The system is what makes the work consistent.",
  },
  {
    heading: "Daily operations, not weekly check-ins.",
    body: "We do not check in once a week to ask how things are going. We run operations daily: content distribution, platform management, conversion monitoring, chat and sales strategy, and analytics. Your Daily Signal arrives every morning with a personalized action plan. You see the system working before the first month is over.",
  },
  {
    heading: "Your fee is aligned with your success.",
    body: `Management is ${FEE.label}. No setup fees. No front-loaded costs before we deliver value. The percentage model means we earn more only when you earn more. There is no incentive for us to collect a flat fee and coast. Our economics push us to do the work well, every day, because that is the only way we get paid.`,
  },
  {
    heading: "Honest about what we do and do not promise.",
    body: "We do not publish invented growth numbers, fabricated testimonials, or guaranteed income figures. Every creator's situation is different, and honest management means being clear about that. What we promise is the work: a defined system, a professional team, daily operations, and full transparency about what we are doing on your behalf. The work speaks for itself.",
  },
];

export default function WhySinnyrPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Why Sinnyr", href: "/why-sinnyr" },
        ]}
      />
      <Header />
      <StickyApplyCTA />

      {/* Hero */}
      <section className="bg-ink px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Trust</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Why Sinnyr
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/60">
            The top of OnlyFans is not luck. It is an operation. Most
            creators are running that operation alone, doing ten jobs, getting
            paid for one, and wondering why growth has stalled. Here is why it
            matters who manages your OnlyFans, and why Sinnyr is built
            differently.
          </p>
        </div>
      </section>

      {/* Key takeaways */}
      <Section>
        <div className="mx-auto max-w-3xl border border-ink/10 bg-cream-alt p-6 lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Key takeaways
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Winning on OnlyFans requires a full daily operation: content, distribution, chat, sales, analytics, and compliance.",
              "Sinnyr runs a capped roster so every creator gets the full operation and a dedicated team.",
              "Real onboarding: signed agreement, identity verification, and a structured intake process.",
              "The Sinnyr Method is a defined six-component system, not a person with a phone.",
              "12% of earnings or $99/month. No upfront fees. The incentive is fully aligned.",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-ink/80">
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-red" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Full stakes: what winning requires */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>The full picture</Eyebrow>
            <SectionHeading>
              What the top of this platform actually requires.
            </SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              This is not a list designed to overwhelm you. It is an honest
              inventory. Every item below is a daily or weekly operation that the
              creators at the top are running, either themselves or through a
              team. Read it carefully, because this is the real competition.
            </p>
          </div>
        </ScrollReveal>
        <div className="mx-auto mt-14 max-w-3xl space-y-10">
          {FULL_OPERATION.map((op, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="border-l-2 border-red/30 pl-8">
                <h3 className="text-xl font-extrabold tracking-tight">
                  {op.name}
                </h3>
                <p className="mt-2 leading-relaxed text-ink/60">
                  {op.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={100}>
          <div className="mx-auto mt-16 max-w-3xl">
            <PullQuote>
              No single person can run all of this at a high level and still
              create. The creators who win have a team behind them. That is not
              opinion. It is how the platform works.
            </PullQuote>
          </div>
        </ScrollReveal>
      </Section>

      {/* Reasons */}
      <Section dark>
        <ScrollReveal>
          <div className="mb-16 text-center">
            <Eyebrow>The difference</Eyebrow>
            <SectionHeading className="text-cream">
              How Sinnyr is built.
            </SectionHeading>
          </div>
        </ScrollReveal>
        <div className="space-y-16">
          {REASONS.map((reason, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <div className="grid items-start gap-8 border-b border-white/10 pb-16 last:border-0 last:pb-0 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <h2 className="text-2xl font-extrabold tracking-tight text-cream md:text-3xl">
                    {reason.heading}
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:col-start-7">
                  <p className="text-lg leading-relaxed text-cream/60">
                    {reason.body}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>
              If this is the kind of management you have been looking for,
              apply.
            </SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              We review every application personally. If there is a fit, we will
              reach out to discuss what working together looks like. No
              pressure. No obligations. Just a real conversation.
            </p>
            <div className="mt-10">
              <Button href="/apply">Submit Your Application</Button>
            </div>
            <p className="mt-4 text-sm text-ink/40">
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
