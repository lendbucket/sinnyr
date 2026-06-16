import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.url}. How we collect, use, and protect your information.`,
};

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/legal/privacy" },
        ]}
      />
      <Header />
      <main className="bg-cream px-6 pt-32 pb-20 md:pt-40 lg:px-8">
        <article className="prose-custom mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Legal
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-ink/50">
            Last updated: June 2026
          </p>

          <div className="mt-12 space-y-8 text-ink/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Information We Collect
              </h2>
              <p className="mt-4">
                When you submit the application form on this site, we collect:
                your creator or stage name, email address, preferred contact
                method and handle, age confirmation, whether you are on
                OnlyFans (and your profile URL if so), other content platforms
                you use, social media handles and follower ranges for
                Instagram, TikTok, X/Twitter, and Reddit, how long you have
                been creating, current subscriber count, current monthly
                earnings range, content niche or style, posting frequency,
                who handles your chatting and sales, what you want from
                management, your biggest challenge, whether this is full time
                or part time, hours per week, prior agency experience and
                details, why you want Sinnyr to represent you, whether you
                own and control your accounts, your readiness to follow a
                structured system, and your availability for an intro call.
                Most fields beyond creator name and email are optional.
              </p>
              <p className="mt-4">
                We also automatically collect standard technical data when you
                visit this site: IP address, browser type, device type, pages
                visited, and referring URL. This data is collected through our
                hosting provider (Vercel) and is used for site performance and
                security purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                How We Use Your Information
              </h2>
              <p className="mt-4">
                Application data is used to evaluate your application for
                creator management services. It is delivered via email to our
                team and is not stored in a database on this site. We use your
                email address to respond to your application. We do not sell,
                rent, or share your personal information with third parties for
                marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Service Providers
              </h2>
              <p className="mt-4">
                We use the following third-party services to operate this site:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <strong>Vercel</strong> for hosting and serving this website.
                </li>
                <li>
                  <strong>Resend</strong> for delivering application form
                  submissions via email.
                </li>
              </ul>
              <p className="mt-4">
                These providers process data only as necessary to provide their
                services and are subject to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Cookies
              </h2>
              <p className="mt-4">
                This site does not use tracking cookies or third-party analytics.
                Essential cookies may be set by our hosting provider for site
                functionality and security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Data Retention
              </h2>
              <p className="mt-4">
                Application data delivered via email is retained in our email
                systems for as long as necessary to evaluate your application and
                for legitimate business purposes. You may request deletion of
                your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Your Rights
              </h2>
              <p className="mt-4">
                Depending on your location, you may have the right to access,
                correct, delete, or port your personal data. California
                residents have rights under the CCPA, including the right to know
                what data is collected, to request deletion, and to opt out of
                the sale of personal information (we do not sell personal
                information). Residents of the European Economic Area have rights
                under the GDPR, including the right to access, rectification,
                erasure, and data portability.
              </p>
              <p className="mt-4">
                To exercise any of these rights, contact us at{" "}
                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="text-red hover:underline"
                >
                  {SITE.contact.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Children's Privacy
              </h2>
              <p className="mt-4">
                This site is not directed to individuals under the age of 18. We
                do not knowingly collect personal information from anyone under
                18. If you believe we have collected information from a minor,
                contact us and we will promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Changes to This Policy
              </h2>
              <p className="mt-4">
                We may update this policy from time to time. Changes will be
                posted on this page with an updated date. Continued use of the
                site after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-extrabold text-ink">
                Contact
              </h2>
              <p className="mt-4">
                For questions about this privacy policy or your data, contact us
                at{" "}
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
              This privacy policy should be reviewed by a qualified attorney for
              your specific jurisdiction before relying on it as legal
              compliance.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
