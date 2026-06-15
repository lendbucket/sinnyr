"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const STEPS = [
  { label: "Contact", fields: ["name", "email"] },
  { label: "Your Business", fields: ["platforms", "subscriberCount", "revenueRange", "niche"] },
  { label: "Your Work", fields: ["postingCadence", "socialHandles"] },
  { label: "Your Goals", fields: ["goals", "whySinnyr"] },
];

const PLATFORM_OPTIONS = [
  "OnlyFans",
  "Fansly",
  "TikTok",
  "Instagram",
  "X (Twitter)",
  "Reddit",
  "Other",
];

const REVENUE_RANGES = [
  "Under $1,000/month",
  "$1,000 to $5,000/month",
  "$5,000 to $15,000/month",
  "$15,000 to $50,000/month",
  "Over $50,000/month",
  "Prefer not to say",
];

const CADENCE_OPTIONS = [
  "Daily",
  "Several times per week",
  "A few times per month",
  "Inconsistently",
  "Just getting started",
];

type FormData = {
  name: string;
  email: string;
  platforms: string;
  subscriberCount: string;
  revenueRange: string;
  niche: string;
  postingCadence: string;
  socialHandles: string;
  goals: string;
  whySinnyr: string;
};

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    platforms: "",
    subscriberCount: "",
    revenueRange: "",
    niche: "",
    postingCadence: "",
    socialHandles: "",
    goals: "",
    whySinnyr: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canAdvance = () => {
    if (step === 0) return form.name.trim() !== "" && form.email.trim() !== "";
    return true;
  };

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
  };
  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const submit = async () => {
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-dark px-6 text-center">
          <h1 className="font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl">
            Application received.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ivory/60">
            We review every application personally. If there is a fit, we will
            reach out to discuss next steps. This is an application, not a
            signup. Sinnyr creates accounts by invitation only.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark px-6 pt-32 pb-20 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Application
            </p>
            <h1 className="mt-6 font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl">
              Apply to Sinnyr
            </h1>
            <p className="mt-4 max-w-lg mx-auto text-ivory/50">
              This is an application, not a signup. Sinnyr selects creators and
              creates accounts by invitation only. We run a capped roster. Most
              applicants are not a fit. Applying starts a conversation and an
              evaluation, not an enrollment.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mt-12 flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center text-sm ${
                    i <= step
                      ? "bg-bordeaux text-white"
                      : "bg-white/10 text-ivory/40"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`ml-2 hidden text-xs uppercase tracking-widest sm:inline ${
                    i <= step ? "text-ivory/70" : "text-ivory/30"
                  }`}
                >
                  {s.label}
                </span>
                {i < STEPS.length - 1 && (
                  <div
                    className={`mx-2 h-px w-6 sm:w-10 md:w-16 ${
                      i < step ? "bg-bordeaux" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form steps */}
          <div className="mt-12">
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-ivory/60">
                    Full name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-ivory outline-none focus:border-bordeaux"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-ivory/60">
                    Email address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-ivory outline-none focus:border-bordeaux"
                    required
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-ivory/60">
                    Platforms you are currently active on
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PLATFORM_OPTIONS.map((p) => {
                      const selected = form.platforms.includes(p);
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            const current = form.platforms
                              ? form.platforms.split(", ")
                              : [];
                            const next = selected
                              ? current.filter((x) => x !== p)
                              : [...current, p];
                            update("platforms", next.join(", "));
                          }}
                          className={`border px-4 py-2 text-sm transition-colors ${
                            selected
                              ? "border-bordeaux bg-bordeaux text-white"
                              : "border-white/20 text-ivory/60 hover:border-ivory/40"
                          }`}
                        >
                          {p}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <label htmlFor="subscriberCount" className="block text-sm text-ivory/60">
                    Current subscriber/follower count (approximate)
                  </label>
                  <input
                    id="subscriberCount"
                    type="text"
                    value={form.subscriberCount}
                    onChange={(e) => update("subscriberCount", e.target.value)}
                    className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-ivory outline-none focus:border-bordeaux"
                    placeholder="e.g. 500 subscribers, 10k followers on IG"
                  />
                </div>
                <div>
                  <label className="block text-sm text-ivory/60">
                    Current monthly revenue range
                  </label>
                  <div className="mt-3 space-y-2">
                    {REVENUE_RANGES.map((r) => (
                      <label
                        key={r}
                        className="flex cursor-pointer items-center gap-3"
                      >
                        <input
                          type="radio"
                          name="revenueRange"
                          checked={form.revenueRange === r}
                          onChange={() => update("revenueRange", r)}
                          className="h-4 w-4 accent-bordeaux"
                        />
                        <span className="text-sm text-ivory/70">{r}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="niche" className="block text-sm text-ivory/60">
                    Your niche or content focus
                  </label>
                  <input
                    id="niche"
                    type="text"
                    value={form.niche}
                    onChange={(e) => update("niche", e.target.value)}
                    className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-ivory outline-none focus:border-bordeaux"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-ivory/60">
                    How often do you currently post?
                  </label>
                  <div className="mt-3 space-y-2">
                    {CADENCE_OPTIONS.map((c) => (
                      <label
                        key={c}
                        className="flex cursor-pointer items-center gap-3"
                      >
                        <input
                          type="radio"
                          name="postingCadence"
                          checked={form.postingCadence === c}
                          onChange={() => update("postingCadence", c)}
                          className="h-4 w-4 accent-bordeaux"
                        />
                        <span className="text-sm text-ivory/70">{c}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="socialHandles" className="block text-sm text-ivory/60">
                    Social handles and approximate following
                  </label>
                  <textarea
                    id="socialHandles"
                    value={form.socialHandles}
                    onChange={(e) => update("socialHandles", e.target.value)}
                    rows={3}
                    className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-ivory outline-none focus:border-bordeaux"
                    placeholder="e.g. @handle on TikTok (50k), @handle on IG (12k)"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="goals" className="block text-sm text-ivory/60">
                    What are your goals for the next 6 to 12 months?
                  </label>
                  <textarea
                    id="goals"
                    value={form.goals}
                    onChange={(e) => update("goals", e.target.value)}
                    rows={4}
                    className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-ivory outline-none focus:border-bordeaux"
                  />
                </div>
                <div>
                  <label htmlFor="whySinnyr" className="block text-sm text-ivory/60">
                    Why Sinnyr? What are you looking for in a management agency?
                  </label>
                  <textarea
                    id="whySinnyr"
                    value={form.whySinnyr}
                    onChange={(e) => update("whySinnyr", e.target.value)}
                    rows={4}
                    className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-ivory outline-none focus:border-bordeaux"
                  />
                </div>
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
            )}

            {/* Navigation buttons */}
            <div className="mt-10 flex items-center justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="text-sm uppercase tracking-widest text-ivory/50 transition-colors hover:text-ivory"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < STEPS.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canAdvance()}
                  className="border border-bordeaux bg-bordeaux px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-bordeaux disabled:opacity-40 disabled:hover:bg-bordeaux disabled:hover:text-white"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={status === "loading"}
                  className="border border-bordeaux bg-bordeaux px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-bordeaux disabled:opacity-40"
                >
                  {status === "loading" ? "Submitting..." : "Submit Application"}
                </button>
              )}
            </div>

            <p className="mt-8 text-center text-xs text-ivory/30">
              By submitting this application, you agree to our{" "}
              <a href="/legal/privacy" className="underline hover:text-ivory/50">
                Privacy Policy
              </a>
              . Sinnyr creates accounts by invitation only. Applying does not
              create an account or guarantee representation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
