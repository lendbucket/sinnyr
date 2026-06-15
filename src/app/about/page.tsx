import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: "About Sinnyr | Creator Management Agency",
  description:
    "Why Sinnyr exists, the standard it holds, and why it operates like a professional talent firm. Learn about our approach to creator management.",
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <Header />

      {/* Hero */}
      <section className="bg-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            Creator Management Agency
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/60">
            Sinnyr exists because most creator agencies are not agencies at all.
            They are loose operations that sign everyone, deliver nothing, and
            disappear when the questions get hard. We built something different.
          </p>
        </div>
      </section>

      {/* Why we exist */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>The reason</Eyebrow>
          <SectionHeading>
            This industry needed a real management firm.
          </SectionHeading>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-dark/70">
            <p>
              The creator economy is large, growing, and largely unprofessional
              behind the scenes. Creators doing serious numbers are managed by
              people who operate out of group chats. There are no contracts, no
              onboarding, no daily operations, and no accountability. The creator
              does most of the work and the agency takes a cut for the privilege
              of existing nearby.
            </p>
            <p>
              Sinnyr was built to operate like a real talent firm. We have a
              defined method. We have a structured onboarding path. We manage
              daily operations for every creator we represent, and every creator
              receives a daily analytics briefing and action plan. The work is
              visible, measurable, and consistent.
            </p>
            <p>
              We are selective because the system demands it. Managing a creator
              properly takes real hours, real strategy, and real attention. We do
              not scale by adding headcount and lowering the standard. We scale
              by doing the work well for the people we have chosen to represent.
            </p>
          </div>
        </div>
      </Section>

      {/* How we operate */}
      <Section dark>
        <div className="mx-auto max-w-3xl">
          <Eyebrow>How we work</Eyebrow>
          <SectionHeading className="text-ivory">
            Managed like professional talent.
          </SectionHeading>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-ivory/60">
            <p>
              Every creator we represent goes through a real onboarding process:
              a signed management agreement, identity verification, a full
              platform audit, and a personalized strategy before any work begins.
              This is not casual. It is a professional relationship with real
              terms, real expectations, and real deliverables.
            </p>
            <p>
              Our system, The Sinnyr Method, covers everything from positioning
              and content production to distribution, conversion, and daily
              analytics. It is not a course. It is not a set of templates. It is
              a daily operation run by our team on behalf of each creator.
            </p>
            <p>
              We charge 12% of your earnings or $99 per month, whichever is
              greater. Our success is tied directly to yours. There is no
              incentive misalignment, no upfront fees designed to extract money
              before delivering value, and no lock-in traps. The fee is simple
              because the relationship should be simple: we do the work, you see
              the results, and we both benefit.
            </p>
          </div>
        </div>
      </Section>

      {/* The standard */}
      <Section>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <Eyebrow>The standard</Eyebrow>
            <SectionHeading>What we hold ourselves to.</SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-dark/70">
              We do not make claims we cannot back up. We do not publish fake
              testimonials or invented numbers. We do not promise specific
              results, because every creator's situation is different. What we do
              promise is the work: a defined system, a professional team, daily
              operations, and full transparency about what we are doing and why.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                label: "Real onboarding",
                text: "Signed agreement, verified identity, full audit before work begins.",
              },
              {
                label: "Daily operations",
                text: "Content, distribution, conversion, and analytics managed every day.",
              },
              {
                label: "Transparent fees",
                text: "12% of earnings or $99 per month. No hidden costs.",
              },
              {
                label: "Honest communication",
                text: "No invented metrics. No vague promises. Clear, direct updates.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-l-2 border-bordeaux pl-6"
              >
                <p className="font-display text-lg">{item.label}</p>
                <p className="mt-1 text-dark/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading className="text-ivory">
            We are looking for creators who want to be taken seriously.
          </SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-ivory/60">
            If you are tired of agencies that over-promise and under-deliver,
            and you want to work with a firm that operates with structure and
            accountability, we should talk.
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
