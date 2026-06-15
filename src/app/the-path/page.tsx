import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "The Path | Creator Onboarding Journey",
  description:
    "Four stages from application to growth. See exactly what Sinnyr delivers at each step of the creator management onboarding process.",
};

const STAGES = [
  {
    number: "01",
    name: "Intake and Audit",
    duration: "Week 1",
    description:
      "We start by learning everything about where you stand. Your platforms, your content, your audience, your pricing, and your current numbers. Nothing is assumed. We look at what is working, what is leaking, and where the biggest opportunities are. By the end of this stage, we have a clear baseline and a strategy built for your specific situation.",
    deliverables: [
      "Complete platform and content audit",
      "Audience and competitor analysis",
      "Pricing and offer review",
      "Personalized strategy document",
    ],
    milestone: "A documented strategy tailored to your starting point.",
  },
  {
    number: "02",
    name: "Foundation",
    duration: "Weeks 2 to 3",
    description:
      "Before we send a single visitor, we rebuild the foundation. Your profile, your bio, your content structure, your pricing tiers, and your entire funnel are optimized so that when traffic arrives, there is a clear path from curious to subscribed. This is the step most agencies skip. It is the reason most creators leak potential subscribers without realizing it.",
    deliverables: [
      "Profile and bio optimization across all platforms",
      "Content funnel restructure",
      "Pricing tiers and offer stack setup",
      "Welcome sequence and pinned content strategy",
    ],
    milestone:
      "Your platforms are positioned to convert before distribution begins.",
  },
  {
    number: "03",
    name: "Launch",
    duration: "Weeks 3 to 5",
    description:
      "Distribution starts. Your content engine is running, and we begin the managed posting operation across TikTok, Reddit, X, and Instagram. This is not a single push. It is a coordinated, daily operation with content going out on a schedule we build and manage. Your Daily Signal starts arriving every morning. You can see the system working.",
    deliverables: [
      "Content engine activated: one session to a week of distribution",
      "Managed posting across all target platforms",
      "Daily Signal analytics and personalized action plan",
      "Conversion funnel and chat strategy live and monitored",
    ],
    milestone:
      "The full system is operating daily. You feel the momentum before the first month is over.",
  },
  {
    number: "04",
    name: "Growth",
    duration: "Ongoing",
    description:
      "With the system running, we optimize. The Daily Signal tells us what is working and what needs adjustment. We refine your content mix, your distribution timing, your messaging, your pricing, and your offers based on real data. Growth is not a phase that ends. It is the permanent operating mode of a managed creator.",
    deliverables: [
      "Continuous strategy refinement from live analytics",
      "Content and distribution optimization",
      "Chat, PPV, and pricing adjustments based on real data",
      "Ongoing daily management and direct communication",
    ],
    milestone:
      "A creator operating with full management support, with visible daily momentum.",
  },
];

export default function ThePathPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "The Path", href: "/the-path" },
        ]}
      />
      <Header />
      <StickyApplyCTA />

      {/* Hero */}
      <section className="bg-ink px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Onboarding</Eyebrow>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            The Path
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/60">
            You do not get dropped into a queue and forgotten. You move through a
            defined journey with clear stages, real deliverables, and visible
            milestones. Here is exactly what that looks like.
          </p>
        </div>
      </section>

      {/* Stages */}
      {STAGES.map((stage, i) => (
        <Section key={stage.number} dark={i % 2 === 1}>
          <ScrollReveal>
            <div className="grid items-start gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-8xl font-extrabold text-red/15 md:text-9xl">
                  {stage.number}
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">
                  {stage.name}
                </h2>
                <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted">
                  {stage.duration}
                </p>
                <p className="mt-6 text-lg leading-relaxed opacity-70">
                  {stage.description}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <div
                  className={`border p-8 lg:p-10 ${
                    i % 2 === 1 ? "border-white/10" : "border-ink/10"
                  }`}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    What you receive
                  </p>
                  <ul className="mt-6 space-y-4">
                    {stage.deliverables.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-red" />
                        <span className="opacity-80">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 border-l-2 border-red pl-6">
                  <p className="text-xs font-medium uppercase tracking-widest text-muted">
                    Milestone
                  </p>
                  <p className="mt-2 text-lg italic opacity-80">
                    {stage.milestone}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Section>
      ))}

      {/* CTA */}
      <Section dark={STAGES.length % 2 === 1}>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>The first step is the application.</SectionHeading>
            <p className="mt-6 text-lg leading-relaxed opacity-70">
              The Path begins with your application. We review it personally, and
              if there is a fit, we start with the Intake and Audit. No
              obligations, no pressure. Just a conversation about whether Sinnyr
              is right for you.
            </p>
            <div className="mt-10">
              <Button href="/apply">Start Your Application</Button>
            </div>
            <p className="mt-4 text-sm opacity-40">
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
