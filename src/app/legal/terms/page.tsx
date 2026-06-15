import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for ${SITE.url}. Conditions governing your use of this website.`,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-cream px-6 pt-32 pb-20 md:pt-40 lg:px-8">
        <article className="prose-custom mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Terms of Use
          </h1>
          <p className="mt-4 text-sm text-ink/50">
            Last updated: June 2026
          </p>

          <div className="mt-12 space-y-8 text-ink/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Agreement to Terms
              </h2>
              <p className="mt-4">
                By accessing or using {SITE.url} (the "Site"), you agree to
                be bound by these Terms of Use. If you do not agree, do not use
                the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Nature of this Site
              </h2>
              <p className="mt-4">
                This Site is a public informational and recruitment website for
                Sinnyr, a creator management agency. The Site provides
                information about our services and allows prospective creators to
                submit an application for management consideration. The Site does
                not host content, process payments, or provide account access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Application Process
              </h2>
              <p className="mt-4">
                Submitting an application through this Site is an inquiry, not a
                binding agreement and not a signup. Sinnyr reviews all
                applications and selects creators at its sole discretion. An
                application does not guarantee acceptance, representation, or the
                creation of an account. Sinnyr creates accounts by invitation
                only, following a separate onboarding process that includes a
                signed management agreement and identity verification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                No Guarantees
              </h2>
              <p className="mt-4">
                Sinnyr does not guarantee specific financial results, subscriber
                growth, audience growth, or income from its management services.
                Results vary based on each creator's content, audience, niche,
                effort, and market conditions. Any descriptions of our services,
                methods, or processes are informational and do not constitute a
                promise of outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Intellectual Property
              </h2>
              <p className="mt-4">
                All content on this Site, including text, design, logos, and
                graphics, is the property of Sinnyr or its licensors and is
                protected by applicable intellectual property laws. You may not
                reproduce, distribute, or create derivative works from any
                content on this Site without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Limitation of Liability
              </h2>
              <p className="mt-4">
                This Site is provided "as is" without warranties of any kind,
                express or implied. Sinnyr is not liable for any damages arising
                from your use of or inability to use this Site, including but not
                limited to direct, indirect, incidental, or consequential
                damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Third-Party Links
              </h2>
              <p className="mt-4">
                This Site may contain links to third-party websites. We are not
                responsible for the content, privacy practices, or terms of any
                linked sites. Accessing linked sites is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Changes to These Terms
              </h2>
              <p className="mt-4">
                We may modify these Terms at any time. Changes will be posted on
                this page with an updated date. Your continued use of the Site
                after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Contact
              </h2>
              <p className="mt-4">
                For questions about these terms, contact us at{" "}
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-red hover:underline"
                >
                  {SITE.contact.email}
                </a>
                .
              </p>
            </section>

            <p className="mt-8 text-sm text-ink/40">
              These terms should be reviewed by a qualified attorney for your
              specific jurisdiction before relying on them as legal compliance.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
