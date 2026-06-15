import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import Button from "@/components/Button";
import ScrollReveal from "@/components/ScrollReveal";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import PullQuote from "@/components/PullQuote";
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
      <StickyApplyCTA />

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
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>The reason</Eyebrow>
            <SectionHeading>
              This industry needed a real management firm.
            </SectionHeading>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-dark/70">
              <p>
                The creator economy is large, growing, and largely unprofessional
                behind the scenes. Creators doing serious work are managed by
                people who operate out of group chats. There are no contracts, no
                onboarding, no daily operations, and no accountability. The
                creator does most of the work. The agency takes a cut for the
                privilege of existing nearby.
              </p>
              <p>
                That is not management. That is a toll booth.
              </p>
              <p>
                Sinnyr was built to operate like a real talent firm. We have a
                defined method. We have a structured onboarding path. We manage
                daily operations for every creator we represent. Every creator
                receives a daily analytics briefing and action plan. The work is
                visible, measurable, and consistent.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* Selectivity and roster cap */}
      <Section dark>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Selectivity</Eyebrow>
            <SectionHeading className="text-ivory">
              A capped roster, and a real reason for it.
            </SectionHeading>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ivory/60">
              <p>
                We are selective because the system demands it. Managing a
                creator properly takes real hours, real strategy, and real
                attention every day. Content production, distribution across
                four platforms, chat and sales management, analytics, and daily
                communication. That workload does not scale by adding headcount
                and lowering the bar.
              </p>
              <p>
                We run a capped roster. Every creator we sign gets the full
                operation and the full team. When the roster is full, new
                applications join a waitlist rather than an open door. We do not
                expand by diluting what we deliver.
              </p>
            </div>
            <div className="mt-10">
              <PullQuote dark>
                Being signed by Sinnyr is not a purchase. It is an acceptance.
                You clear a bar, and in return you get a team that is fully
                committed to the work.
              </PullQuote>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* How we operate */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>How we work</Eyebrow>
            <SectionHeading>
              Managed like professional talent.
            </SectionHeading>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-dark/70">
              <p>
                Every creator we represent goes through a real onboarding
                process: a signed management agreement, identity verification, a
                full platform audit, and a personalized strategy before any work
                begins. This is not casual. It is a professional relationship
                with real terms, real expectations, and real deliverables.
              </p>
              <p>
                Our system, The Sinnyr Method, covers everything from positioning
                and content production to distribution, conversion, chat and
                sales, and daily analytics. It is not a course. It is not a set
                of templates. It is a daily operation run by our team on behalf
                of each creator.
              </p>
              <p>
                We charge 12% of your earnings or $99 per month, whichever is
                greater. Our success is tied directly to yours. There is no
                incentive misalignment, no upfront fees designed to extract money
                before delivering value, and no lock-in traps. The fee is simple
                because the relationship should be simple: we do the work, the
                work speaks, and we both benefit.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* The standard */}
      <Section dark>
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <Eyebrow>The standard</Eyebrow>
              <SectionHeading className="text-ivory">
                What we hold ourselves to.
              </SectionHeading>
              <p className="mt-6 text-lg leading-relaxed text-ivory/60">
                We do not make claims we cannot back up. We do not publish fake
                testimonials or invented numbers. We do not promise specific
                results, because every creator's situation is different. What we
                do promise is the work: a defined system, a professional team,
                daily operations, and full transparency about what we are doing
                and why.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className="space-y-6">
              {[
                {
                  label: "Real onboarding",
                  text: "Signed agreement, verified identity, full audit before work begins.",
                },
                {
                  label: "Daily operations",
                  text: "Content, distribution, conversion, chat, and analytics managed every day.",
                },
                {
                  label: "Transparent fees",
                  text: "12% of earnings or $99 per month. No hidden costs. No setup fees.",
                },
                {
                  label: "Honest communication",
                  text: "No invented metrics. No vague promises. Clear, direct updates on the work.",
                },
                {
                  label: "Capped roster",
                  text: "A limited number of creators so every one gets the full operation.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-bordeaux pl-6"
                >
                  <p className="font-display text-lg text-ivory">
                    {item.label}
                  </p>
                  <p className="mt-1 text-ivory/50">{item.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>
              We are looking for creators who want to be taken seriously.
            </SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-dark/70">
              If you are tired of agencies that over-promise and under-deliver,
              and you want to work with a firm that operates with structure and
              accountability, we should talk.
            </p>
            <div className="mt-10">
              <Button href="/apply">Apply to Sinnyr</Button>
            </div>
            <p className="mt-4 text-sm text-dark/40">
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
