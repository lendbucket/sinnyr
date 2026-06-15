import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section, { Eyebrow, SectionHeading } from "@/components/Section";
import ScrollReveal from "@/components/ScrollReveal";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import Button from "@/components/Button";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import { INSIGHTS } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights | Creator Management Knowledge",
  description:
    "Real strategy and operations knowledge for adult content creators. Growth, funnels, pricing, retention, and how to spot a fake agency.",
};

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/insights" },
        ]}
      />
      <Header />
      <StickyApplyCTA />

      {/* Hero */}
      <section className="bg-dark px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <Eyebrow>Learn</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            Insights
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ivory/60">
            We teach everything we know, for free. Real strategy, real
            operations knowledge, and real answers to the questions most
            agencies dodge. A firm that can teach the whole game at this level
            is obviously the one to run it for you.
          </p>
        </div>
      </section>

      {/* Start Here */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <Eyebrow>Start here</Eyebrow>
            <SectionHeading>New to Sinnyr? Read these first.</SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-dark/70">
              If you want to understand what professional creator management
              looks like and whether Sinnyr is right for you, follow this path.
              Three steps that give you the full picture.
            </p>
            <ol className="mt-10 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-bordeaux font-display text-sm text-white">
                  1
                </span>
                <div>
                  <Link
                    href="/method"
                    className="font-display text-lg tracking-tight transition-colors hover:text-bordeaux"
                  >
                    The Sinnyr Method
                  </Link>
                  <p className="mt-1 text-sm text-dark/50">
                    The six-component system behind every creator we manage.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-bordeaux font-display text-sm text-white">
                  2
                </span>
                <div>
                  <Link
                    href="/insights/how-onlyfans-growth-works"
                    className="font-display text-lg tracking-tight transition-colors hover:text-bordeaux"
                  >
                    How Growth Actually Works on OnlyFans
                  </Link>
                  <p className="mt-1 text-sm text-dark/50">
                    Why there is no internal discovery and what that means for your strategy.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-bordeaux font-display text-sm text-white">
                  3
                </span>
                <div>
                  <Link
                    href="/apply"
                    className="font-display text-lg tracking-tight transition-colors hover:text-bordeaux"
                  >
                    Apply to Sinnyr
                  </Link>
                  <p className="mt-1 text-sm text-dark/50">
                    If the method and the knowledge make sense, start the conversation.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </ScrollReveal>
      </Section>

      {/* Article grid */}
      <Section dark>
        <ScrollReveal>
          <div className="mb-12">
            <Eyebrow>All articles</Eyebrow>
            <SectionHeading className="text-ivory">
              Deep reads for serious creators.
            </SectionHeading>
          </div>
        </ScrollReveal>
        <div className="grid gap-px bg-white/10 md:grid-cols-2">
          {INSIGHTS.map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 60}>
              <Link
                href={`/insights/${article.slug}`}
                className="group block bg-dark p-8 transition-colors hover:bg-dark/80 lg:p-10"
              >
                <p className="text-xs text-ivory/30">{article.readTime}</p>
                <h2 className="mt-3 font-display text-xl font-light tracking-tight text-ivory transition-colors group-hover:text-bordeaux md:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ivory/50">
                  {article.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading>
              Knowledge is the foundation. Management is the execution.
            </SectionHeading>
            <p className="mt-6 text-lg leading-relaxed text-dark/70">
              Everything we teach here is what we do for our creators, every
              day. If reading this made you realize you need a team behind you,
              that is the right conclusion.
            </p>
            <div className="mt-10">
              <Button href="/apply">Apply to Sinnyr</Button>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      <Footer />
    </>
  );
}
