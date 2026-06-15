import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";

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
      "We start with a full audit of where you stand today: your platforms, your content, your audience, your pricing, and your current numbers. Nothing is assumed. We look at what is working, what is not, and where the biggest opportunities are. By the end of this stage, we have a clear baseline and a plan built specifically for you.",
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
      "Before we send any traffic, we rebuild the foundation. Your profile, your bio, your content structure, and your funnel are optimized so that when visitors arrive, they have a clear reason to subscribe. This is the step most agencies skip, and it is the reason most creators leak potential subscribers without realizing it.",
    deliverables: [
      "Profile and bio optimization across all platforms",
      "Content funnel restructure",
      "Pricing and tier setup",
      "Welcome sequence and pinned content",
    ],
    milestone:
      "Your platforms are positioned to convert before distribution begins.",
  },
  {
    number: "03",
    name: "Launch",
    duration: "Weeks 3 to 5",
    description:
      "Distribution starts. Your content engine is running, and we begin the managed posting operation across TikTok, Reddit, X, and Instagram. This is not a single push. It is a coordinated, daily operation with content going out on a schedule we build and manage. Your Daily Signal starts arriving, and you can see the system working in real time.",
    deliverables: [
      "Content engine activated: one session to a week of distribution",
      "Managed posting across all target platforms",
      "Daily Signal analytics and action plan",
      "Conversion funnel live and monitored",
    ],
    milestone:
      "The full system is operating daily. You see your first managed growth cycle.",
  },
  {
    number: "04",
    name: "Growth",
    duration: "Ongoing",
    description:
      "With the system running, we optimize. The Daily Signal tells us what is working and what needs adjustment. We refine your content mix, your distribution timing, your messaging, and your offers based on real data, not guesses. Growth is not a phase that ends. It is the operating mode of a managed creator.",
    deliverables: [
      "Continuous strategy refinement from live analytics",
      "Content and distribution optimization",
      "Offer and pricing adjustments based on data",
      "Ongoing daily management and communication",
    ],
    milestone:
      "A creator operating with full management support, with visible daily momentum.",
  },
];

export default function ThePathPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Onboarding</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            The Path
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/60">
            When you join Sinnyr, you do not get dropped into a queue. You move
            through a defined journey with clear stages, real deliverables, and
            visible milestones. Here is exactly what that looks like.
          </p>
        </div>
      </section>

      {/* Stages */}
      {STAGES.map((stage, i) => (
        <Section key={stage.number} dark={i % 2 === 1}>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-display text-7xl font-light text-bordeaux/20">
                {stage.number}
              </p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-tight md:text-4xl">
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
              <div className={`border p-8 lg:p-10 ${i % 2 === 1 ? "border-white/10" : "border-dark/10"}`}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                  What you receive
                </p>
                <ul className="mt-6 space-y-4">
                  {stage.deliverables.map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-bordeaux" />
                      <span className="opacity-80">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`mt-6 border-l-2 border-bordeaux pl-6 ${i % 2 === 1 ? "" : ""}`}>
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  Milestone
                </p>
                <p className="mt-2 font-display text-lg italic opacity-80">
                  {stage.milestone}
                </p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section dark={STAGES.length % 2 === 1}>
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
        </div>
      </Section>

      <Footer />
    </>
  );
}
