"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BreadcrumbSchema } from "@/components/SchemaOrg";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const STEP_LABELS = [
  "Start Here",
  "Your Platforms",
  "Where You Are Now",
  "Your Goals",
  "Why Sinnyr",
];

const CONTACT_METHODS = [
  "Email",
  "Instagram DM",
  "Telegram",
  "WhatsApp",
  "Text message",
];

const CONTENT_PLATFORMS = [
  "Fansly",
  "Fanvue",
  "JustForFans",
  "ManyVids",
  "LoyalFans",
  "None yet",
  "Other",
];

const FOLLOWER_RANGES = [
  "Under 1k",
  "1k to 10k",
  "10k to 50k",
  "50k to 250k",
  "250k or more",
];

const EXPERIENCE_OPTIONS = [
  "Just starting",
  "Under 6 months",
  "6 to 12 months",
  "1 to 2 years",
  "2 or more years",
];

const SUBSCRIBER_OPTIONS = [
  "0",
  "1 to 100",
  "100 to 500",
  "500 to 2,000",
  "2,000 to 10,000",
  "10,000 or more",
];

const EARNINGS_OPTIONS = [
  "Just starting",
  "Under $1k",
  "$1k to $5k",
  "$5k to $15k",
  "$15k to $50k",
  "$50k or more",
];

const CADENCE_OPTIONS = [
  "Daily",
  "A few times a week",
  "Weekly",
  "Occasionally",
];

const CHATTING_OPTIONS = [
  "I do it myself",
  "A chatter or VA",
  "Another agency",
  "No one yet",
];

const GOAL_CHIPS = [
  "Grow subscribers",
  "Increase income",
  "Save time",
  "Go full time",
  "Better content systems",
  "Marketing and traffic",
  "Chatting and sales",
  "Brand building",
];

const COMMITMENT_OPTIONS = ["Full time", "Part time", "Side income for now"];

const HOURS_OPTIONS = ["Under 5", "5 to 15", "15 to 30", "30 or more"];

const AVAILABILITY_OPTIONS = ["This week", "Next week", "Flexible"];

const NICHE_CHIPS = [
  "Fitness",
  "Lifestyle",
  "Cosplay",
  "Glamour",
  "Alternative",
  "Couples",
  "Solo",
  "Custom content",
  "Other",
];

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type FormData = {
  /* Step 1 */
  creatorName: string;
  email: string;
  contactMethod: string;
  contactHandle: string;
  ageConfirm: boolean;
  /* Step 2 */
  onOnlyFans: string;
  onlyFansUrl: string;
  otherPlatforms: string[];
  instagramHandle: string;
  instagramFollowers: string;
  tiktokHandle: string;
  tiktokFollowers: string;
  twitterHandle: string;
  twitterFollowers: string;
  redditUsername: string;
  redditAdultSubs: string;
  otherSocials: string;
  /* Step 3 */
  experience: string;
  subscriberCount: string;
  earnings: string;
  niche: string[];
  postingCadence: string;
  chattingSetup: string;
  /* Step 4 */
  goals: string[];
  biggestChallenge: string;
  commitment: string;
  hoursPerWeek: string;
  priorAgency: string;
  priorAgencyDetail: string;
  /* Step 5 */
  whySinnyr: string;
  ownsAccounts: string;
  readyForSystem: string;
  callAvailability: string;
  invitationAck: boolean;
  privacyConsent: boolean;
};

const INITIAL: FormData = {
  creatorName: "",
  email: "",
  contactMethod: "",
  contactHandle: "",
  ageConfirm: false,
  onOnlyFans: "",
  onlyFansUrl: "",
  otherPlatforms: [],
  instagramHandle: "",
  instagramFollowers: "",
  tiktokHandle: "",
  tiktokFollowers: "",
  twitterHandle: "",
  twitterFollowers: "",
  redditUsername: "",
  redditAdultSubs: "",
  otherSocials: "",
  experience: "",
  subscriberCount: "",
  earnings: "",
  niche: [],
  postingCadence: "",
  chattingSetup: "",
  goals: [],
  biggestChallenge: "",
  commitment: "",
  hoursPerWeek: "",
  priorAgency: "",
  priorAgencyDetail: "",
  whySinnyr: "",
  ownsAccounts: "",
  readyForSystem: "",
  callAvailability: "",
  invitationAck: false,
  privacyConsent: false,
};

/* ------------------------------------------------------------------ */
/*  Shared input styles                                                */
/* ------------------------------------------------------------------ */

const INPUT =
  "mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus:border-red placeholder:text-cream/25";
const LABEL = "block text-sm text-cream/60";
const LABEL_REQ = "block text-sm text-cream/60 after:ml-0.5 after:content-['*'] after:text-red";
const SELECT =
  "mt-2 w-full appearance-none border border-white/20 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus:border-red";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidUrl(v: string) {
  try {
    const url = new URL(v);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

/* ------------------------------------------------------------------ */
/*  Reusable field components                                          */
/* ------------------------------------------------------------------ */

function SelectField({
  label,
  value,
  options,
  onChange,
  required,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className={required ? LABEL_REQ : LABEL}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={SELECT}
      >
        <option value="" className="bg-ink">
          Select
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ChipGroup({
  label,
  options,
  selected,
  onChange,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (v: string[]) => void;
}) {
  const toggle = (v: string) =>
    onChange(
      selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]
    );
  return (
    <div>
      <span className={LABEL}>{label}</span>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((o) => {
          const on = selected.includes(o);
          return (
            <button
              key={o}
              type="button"
              onClick={() => toggle(o)}
              className={`min-h-[44px] border px-4 py-2 text-sm transition-colors ${
                on
                  ? "border-red bg-red text-white"
                  : "border-white/20 text-cream/60 hover:border-cream/40"
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SocialRow({
  platform,
  handle,
  followers,
  onHandle,
  onFollowers,
  placeholder,
}: {
  platform: string;
  handle: string;
  followers: string;
  onHandle: (v: string) => void;
  onFollowers: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div>
      <span className={LABEL}>{platform}</span>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input
          type="text"
          value={handle}
          onChange={(e) => onHandle(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 border border-white/20 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus:border-red placeholder:text-cream/25`}
        />
        <select
          value={followers}
          onChange={(e) => onFollowers(e.target.value)}
          className="min-h-[44px] appearance-none border border-white/20 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus:border-red sm:w-44"
        >
          <option value="" className="bg-ink">
            Followers
          </option>
          {FOLLOWER_RANGES.map((r) => (
            <option key={r} value={r} className="bg-ink">
              {r}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function Checkbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-5 w-5 min-w-[20px] accent-red"
      />
      <span className="text-sm leading-relaxed text-cream/70">{children}</span>
    </label>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ApplyPage() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState<FormData>(INITIAL);

  /* Field updaters */
  const set = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  /* Validation per step */
  const canAdvance = (): boolean => {
    switch (step) {
      case 0:
        return (
          form.creatorName.trim() !== "" &&
          isValidEmail(form.email) &&
          form.ageConfirm
        );
      case 1:
        if (form.onOnlyFans === "Yes" && !isValidUrl(form.onlyFansUrl))
          return false;
        return true;
      case 2:
        return true;
      case 3:
        return true;
      case 4:
        return (
          form.whySinnyr.trim() !== "" &&
          form.invitationAck &&
          form.privacyConsent
        );
      default:
        return true;
    }
  };

  const next = () => {
    if (step < STEP_LABELS.length - 1 && canAdvance()) setStep(step + 1);
  };
  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  const submit = async () => {
    if (!canAdvance()) return;
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
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  /* ---- Success screen ---- */
  if (status === "success") {
    return (
      <>
        <BreadcrumbSchema
          items={[
            { name: "Home", href: "/" },
            { name: "Apply", href: "/apply" },
          ]}
        />
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-red">
            Application received
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl">
            Thank you.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-cream/60">
            Every application is reviewed personally by the Sinnyr team. If
            there is a fit, we will reach out to set up a short intro call.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm text-cream/40">
            This is an evaluation, not a signup. Sinnyr creates accounts by
            invitation only.
          </p>
        </main>
        <Footer />
      </>
    );
  }

  /* ---- Progress fraction ---- */
  const progress = ((step + 1) / STEP_LABELS.length) * 100;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Apply", href: "/apply" },
        ]}
      />
      <Header />
      <main className="min-h-screen bg-ink px-6 pt-32 pb-20 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-2xl">
          {/* Header */}
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Application
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl">
              Apply to Sinnyr
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-cream/50">
              Sinnyr represents a limited number of creators and reviews every
              application personally. This form is an evaluation, not an
              enrollment. Take your time with it.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="mt-12">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-cream/70">
                Step {step + 1} of {STEP_LABELS.length}
              </span>
              <span className="text-xs uppercase tracking-widest text-cream/40">
                {STEP_LABELS[step]}
              </span>
            </div>
            <div className="mt-3 h-1 w-full overflow-hidden bg-white/10">
              <div
                className="h-full bg-red transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Form steps */}
          <div className="mt-12">
            {/* ---- STEP 1: Start Here ---- */}
            {step === 0 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="creatorName" className={LABEL_REQ}>
                    Creator or stage name
                  </label>
                  <input
                    id="creatorName"
                    type="text"
                    value={form.creatorName}
                    onChange={(e) => set("creatorName", e.target.value)}
                    className={INPUT}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={LABEL_REQ}>
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={INPUT}
                  />
                  {form.email.length > 0 && !isValidEmail(form.email) && (
                    <p className="mt-1 text-xs text-red">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>

                <SelectField
                  label="Best way to reach you"
                  value={form.contactMethod}
                  options={CONTACT_METHODS}
                  onChange={(v) => set("contactMethod", v)}
                />

                {form.contactMethod &&
                  form.contactMethod !== "Email" && (
                    <div>
                      <label htmlFor="contactHandle" className={LABEL}>
                        Your{" "}
                        {form.contactMethod === "Text message"
                          ? "phone number"
                          : `${form.contactMethod} handle`}
                      </label>
                      <input
                        id="contactHandle"
                        type="text"
                        value={form.contactHandle}
                        onChange={(e) => set("contactHandle", e.target.value)}
                        className={INPUT}
                      />
                    </div>
                  )}

                <div className="pt-2">
                  <Checkbox
                    checked={form.ageConfirm}
                    onChange={(v) => set("ageConfirm", v)}
                  >
                    I confirm I am 18 years of age or older.
                  </Checkbox>
                </div>
              </div>
            )}

            {/* ---- STEP 2: Your Platforms ---- */}
            {step === 1 && (
              <div className="space-y-6">
                <SelectField
                  label="Are you currently on OnlyFans?"
                  value={form.onOnlyFans}
                  options={["Yes", "Not yet"]}
                  onChange={(v) => set("onOnlyFans", v)}
                />

                {form.onOnlyFans === "Yes" && (
                  <div>
                    <label htmlFor="onlyFansUrl" className={LABEL_REQ}>
                      OnlyFans profile URL
                    </label>
                    <input
                      id="onlyFansUrl"
                      type="url"
                      value={form.onlyFansUrl}
                      onChange={(e) => set("onlyFansUrl", e.target.value)}
                      placeholder="https://onlyfans.com/yourname"
                      className={INPUT}
                    />
                    {form.onlyFansUrl.length > 0 &&
                      !isValidUrl(form.onlyFansUrl) && (
                        <p className="mt-1 text-xs text-red">
                          Please enter a valid URL starting with https://
                        </p>
                      )}
                  </div>
                )}

                <ChipGroup
                  label="Other content platforms you use"
                  options={CONTENT_PLATFORMS}
                  selected={form.otherPlatforms}
                  onChange={(v) => set("otherPlatforms", v)}
                />

                <SocialRow
                  platform="Instagram"
                  handle={form.instagramHandle}
                  followers={form.instagramFollowers}
                  onHandle={(v) => set("instagramHandle", v)}
                  onFollowers={(v) => set("instagramFollowers", v)}
                  placeholder="@handle"
                />

                <SocialRow
                  platform="TikTok"
                  handle={form.tiktokHandle}
                  followers={form.tiktokFollowers}
                  onHandle={(v) => set("tiktokHandle", v)}
                  onFollowers={(v) => set("tiktokFollowers", v)}
                  placeholder="@handle"
                />

                <SocialRow
                  platform="X / Twitter"
                  handle={form.twitterHandle}
                  followers={form.twitterFollowers}
                  onHandle={(v) => set("twitterHandle", v)}
                  onFollowers={(v) => set("twitterFollowers", v)}
                  placeholder="@handle"
                />

                <div>
                  <span className={LABEL}>Reddit</span>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                    <input
                      type="text"
                      value={form.redditUsername}
                      onChange={(e) => set("redditUsername", e.target.value)}
                      placeholder="u/username"
                      className="flex-1 border border-white/20 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus:border-red placeholder:text-cream/25"
                    />
                    <input
                      type="text"
                      value={form.redditAdultSubs}
                      onChange={(e) => set("redditAdultSubs", e.target.value)}
                      placeholder="Post to adult subreddits?"
                      className="flex-1 border border-white/20 bg-transparent px-4 py-3 text-cream outline-none transition-colors focus:border-red placeholder:text-cream/25"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="otherSocials" className={LABEL}>
                    Any other socials
                  </label>
                  <input
                    id="otherSocials"
                    type="text"
                    value={form.otherSocials}
                    onChange={(e) => set("otherSocials", e.target.value)}
                    className={INPUT}
                    placeholder="YouTube, Snapchat, etc."
                  />
                </div>
              </div>
            )}

            {/* ---- STEP 3: Where You Are Now ---- */}
            {step === 2 && (
              <div className="space-y-6">
                <SelectField
                  label="How long have you been creating?"
                  value={form.experience}
                  options={EXPERIENCE_OPTIONS}
                  onChange={(v) => set("experience", v)}
                />

                <SelectField
                  label="Current OnlyFans subscribers"
                  value={form.subscriberCount}
                  options={SUBSCRIBER_OPTIONS}
                  onChange={(v) => set("subscriberCount", v)}
                />

                <SelectField
                  label="Current monthly earnings (optional, ranges only to assess fit)"
                  value={form.earnings}
                  options={EARNINGS_OPTIONS}
                  onChange={(v) => set("earnings", v)}
                />

                <ChipGroup
                  label="Your content niche or style"
                  options={NICHE_CHIPS}
                  selected={form.niche}
                  onChange={(v) => set("niche", v)}
                />

                <SelectField
                  label="How often do you post or produce content?"
                  value={form.postingCadence}
                  options={CADENCE_OPTIONS}
                  onChange={(v) => set("postingCadence", v)}
                />

                <SelectField
                  label="Who handles your chatting and sales now?"
                  value={form.chattingSetup}
                  options={CHATTING_OPTIONS}
                  onChange={(v) => set("chattingSetup", v)}
                />
              </div>
            )}

            {/* ---- STEP 4: Your Goals ---- */}
            {step === 3 && (
              <div className="space-y-6">
                <ChipGroup
                  label="What do you want from management?"
                  options={GOAL_CHIPS}
                  selected={form.goals}
                  onChange={(v) => set("goals", v)}
                />

                <div>
                  <label htmlFor="biggestChallenge" className={LABEL}>
                    Your single biggest challenge right now
                  </label>
                  <textarea
                    id="biggestChallenge"
                    value={form.biggestChallenge}
                    onChange={(e) => set("biggestChallenge", e.target.value)}
                    rows={3}
                    className={INPUT}
                  />
                </div>

                <SelectField
                  label="Is this full time or part time for you?"
                  value={form.commitment}
                  options={COMMITMENT_OPTIONS}
                  onChange={(v) => set("commitment", v)}
                />

                <SelectField
                  label="Roughly how many hours a week do you put in?"
                  value={form.hoursPerWeek}
                  options={HOURS_OPTIONS}
                  onChange={(v) => set("hoursPerWeek", v)}
                />

                <SelectField
                  label="Have you worked with an agency before?"
                  value={form.priorAgency}
                  options={["Yes", "No"]}
                  onChange={(v) => set("priorAgency", v)}
                />

                {form.priorAgency === "Yes" && (
                  <div>
                    <label htmlFor="priorAgencyDetail" className={LABEL}>
                      What happened, and why did it end?
                    </label>
                    <textarea
                      id="priorAgencyDetail"
                      value={form.priorAgencyDetail}
                      onChange={(e) =>
                        set("priorAgencyDetail", e.target.value)
                      }
                      rows={3}
                      className={INPUT}
                    />
                  </div>
                )}
              </div>
            )}

            {/* ---- STEP 5: Why Sinnyr ---- */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="whySinnyr" className={LABEL_REQ}>
                    Why do you want Sinnyr to represent you, and what makes you
                    serious about this?
                  </label>
                  <textarea
                    id="whySinnyr"
                    value={form.whySinnyr}
                    onChange={(e) => set("whySinnyr", e.target.value)}
                    rows={5}
                    className={INPUT}
                  />
                </div>

                <SelectField
                  label="Do you solely own and control your accounts?"
                  value={form.ownsAccounts}
                  options={["Yes", "No"]}
                  onChange={(v) => set("ownsAccounts", v)}
                />

                <SelectField
                  label="Are you ready to follow a structured system?"
                  value={form.readyForSystem}
                  options={["Yes", "No"]}
                  onChange={(v) => set("readyForSystem", v)}
                />

                <SelectField
                  label="Availability for a short intro call"
                  value={form.callAvailability}
                  options={AVAILABILITY_OPTIONS}
                  onChange={(v) => set("callAvailability", v)}
                />

                <div className="space-y-4 pt-2">
                  <Checkbox
                    checked={form.invitationAck}
                    onChange={(v) => set("invitationAck", v)}
                  >
                    I understand that applying is an evaluation, not a signup,
                    and that Sinnyr creates accounts by invitation only.
                  </Checkbox>
                  <Checkbox
                    checked={form.privacyConsent}
                    onChange={(v) => set("privacyConsent", v)}
                  >
                    I agree to the{" "}
                    <a
                      href="/legal/privacy"
                      className="underline hover:text-cream"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      privacy policy
                    </a>
                    .
                  </Checkbox>
                </div>
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div className="mt-6 border border-red/30 bg-red/10 px-4 py-3">
                <p className="text-sm text-red">{errorMsg}</p>
                <p className="mt-1 text-xs text-cream/40">
                  Your data has been preserved. You can try again.
                </p>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={prev}
                  className="min-h-[44px] text-sm uppercase tracking-widest text-cream/50 transition-colors hover:text-cream"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < STEP_LABELS.length - 1 ? (
                <button
                  type="button"
                  onClick={next}
                  disabled={!canAdvance()}
                  className="min-h-[44px] border border-red bg-red px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-red disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-red disabled:hover:text-white"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  disabled={!canAdvance() || status === "loading"}
                  className="min-h-[44px] border border-red bg-red px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-red disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-red disabled:hover:text-white"
                >
                  {status === "loading"
                    ? "Submitting..."
                    : "Submit Application"}
                </button>
              )}
            </div>

            {/* Reassurance microcopy */}
            {step === STEP_LABELS.length - 1 && (
              <p className="mt-6 text-center text-xs text-cream/30">
                Applying is an evaluation, not a signup. Sinnyr creates accounts
                by invitation only.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
