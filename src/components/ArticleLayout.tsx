import { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import StickyApplyCTA from "@/components/StickyApplyCTA";
import Button from "@/components/Button";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import { SITE } from "@/lib/constants";
import { INSIGHTS } from "@/data/insights";

type ArticleLayoutProps = {
  slug: string;
  takeaways?: string[];
  children: ReactNode;
};

export default function ArticleLayout({ slug, takeaways, children }: ArticleLayoutProps) {
  const article = INSIGHTS.find((a) => a.slug === slug);
  const others = INSIGHTS.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/insights" },
          { name: article?.title || "", href: `/insights/${slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: article?.title,
            description: article?.description,
            datePublished: article?.date,
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              url: SITE.url,
            },
          }),
        }}
      />
      <Header />
      <StickyApplyCTA />

      <article className="bg-cream px-6 pt-32 pb-20 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="text-xs font-semibold uppercase tracking-widest text-red transition-colors hover:text-red-hover"
          >
            Insights
          </Link>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
            {article?.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {article?.readTime} &middot; {article?.date}
          </p>

          {takeaways && takeaways.length > 0 && (
            <div className="mt-10 border border-ink/10 bg-cream-alt p-6 lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Key takeaways
              </p>
              <ul className="mt-4 space-y-3">
                {takeaways.map((t) => (
                  <li key={t} className="flex gap-3 text-ink/80">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 bg-red" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-ink/70 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-ink [&_h2]:tracking-tight">
            {children}
          </div>
        </div>
      </article>

      {/* Next steps */}
      <section className="border-t border-hairline bg-cream px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="border border-hairline p-8 text-center lg:p-12">
              <p className="text-2xl font-extrabold tracking-tight">
                Want this done for you, every day?
              </p>
              <p className="mt-4 text-muted">
                Everything in this article is part of The Sinnyr Method. If
                reading this made you realize you need a team behind you, that
                is the right conclusion.
              </p>
              <div className="mt-6">
                <Button href="/apply">Apply to Sinnyr</Button>
              </div>
              <p className="mt-3 text-xs text-muted">
                Applying is an evaluation, not a signup. We review every application personally.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related articles */}
      <section className="bg-ink px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-cream/40">
            Continue reading
          </p>
          <div className="mt-6 space-y-4">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/insights/${a.slug}`}
                className="group block border-b border-white/10 pb-4 last:border-0"
              >
                <p className="text-lg font-bold tracking-tight text-cream transition-colors group-hover:text-red">
                  {a.title}
                </p>
                <p className="mt-1 text-sm text-cream/40">{a.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
