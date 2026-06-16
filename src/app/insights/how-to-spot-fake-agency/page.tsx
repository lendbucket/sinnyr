import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: { absolute: "How to Spot a Fake or Extractive Agency | Sinnyr" },
  description:
    "Before you hand over your account, know the red flags. Here are the questions to ask and the patterns that separate real management from a toll booth.",
};

export default function Article() {
  return (
    <ArticleLayout
      slug="how-to-spot-fake-agency"
      takeaways={[
        "No honest agency guarantees specific income figures or subscriber counts.",
        "If there is no written management agreement, it is not management.",
        "High upfront fees before any work is done signal misaligned incentives.",
        "Ask any agency to describe their daily process. Vague answers mean no system.",
      ]}
    >
      <p>
        Before you hand over access to your accounts, your content, and your
        income to any agency, you should know what to look for. The creator
        management space has a low barrier to entry, and that means a lot of
        operators who are not equipped, not honest, or not structured to deliver
        real value. Here are the patterns that separate real management from a
        toll booth.
      </p>

      <h2 className="mt-10 text-2xl font-extrabold text-ink">
        Red flag: guaranteed income or growth numbers
      </h2>
      <p>
        No honest agency guarantees specific income figures, subscriber counts,
        or growth percentages. Every creator's situation is different. The
        content, the niche, the audience, the effort, and the market conditions
        all affect outcomes. Any agency that leads with a dollar figure or a
        guaranteed multiple is either lying or making a promise they cannot
        control.
      </p>
      <p>
        An honest agency tells you what they do, how they do it, and what the
        process looks like. They describe the work, not the outcome, because
        they know the work is what they control.
      </p>

      <h2 className="mt-10 text-2xl font-extrabold text-ink">
        Red flag: no contract or vague terms
      </h2>
      <p>
        If an agency onboards you through a DM, a Telegram group, or a quick
        verbal agreement, that is not management. That is a handshake you
        cannot enforce. Real management involves a written agreement with clear
        terms: what the agency does, what the creator does, how long the
        agreement lasts, how either party can end it, and how fees are
        calculated and paid.
      </p>
      <p>
        Ask to see the agreement before you sign anything. If there is no
        agreement, walk away.
      </p>

      <h2 className="mt-10 text-2xl font-extrabold text-ink">
        Red flag: they want full account access with no structure
      </h2>
      <p>
        Some agencies ask for your login credentials and then operate your
        account with minimal communication or oversight. Before you give
        anyone access to your accounts, understand what they will do with
        that access, what they will post, how they will communicate with your
        subscribers, and what approval process exists for content and messages
        sent in your name. Account access without structure is a risk, not a
        convenience.
      </p>

      <h2 className="mt-10 text-2xl font-extrabold text-ink">
        Red flag: high upfront fees before any work is done
      </h2>
      <p>
        Agencies that charge large setup fees or require upfront payment
        before delivering any work have their incentives backwards. They get
        paid whether or not the work produces value. A fee structure aligned
        with the creator's success, like a percentage of earnings, means the
        agency only earns when the creator earns. Ask how the agency makes
        money and whether their incentives are aligned with yours.
      </p>

      <h2 className="mt-10 text-2xl font-extrabold text-ink">
        Red flag: no visible system or process
      </h2>
      <p>
        Ask the agency to describe their process. What happens after you sign?
        What is the onboarding? What do they do every day? What does a typical
        week of management look like? If the answers are vague, generic, or
        sound like they are being made up on the spot, you are looking at an
        operation that does not have a system.
      </p>

      <h2 className="mt-10 text-2xl font-extrabold text-ink">
        Questions to ask any agency
      </h2>
      <ul className="mt-4 space-y-3 pl-0">
        <li className="flex gap-3">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-red" />
          <span>
            What does your management agreement look like? Can I review it
            before committing?
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-red" />
          <span>
            How do you make money? What is the fee structure, and when do I pay?
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-red" />
          <span>
            What does a typical day or week of management look like for one of
            your creators?
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-red" />
          <span>
            How many creators do you currently manage, and how many people are
            on your team?
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-red" />
          <span>
            What happens if I want to leave? What does the exit process look
            like?
          </span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-red" />
          <span>
            Can you describe your onboarding process in detail?
          </span>
        </li>
      </ul>

      <p className="mt-8">
        A confident, honest firm will answer every one of these without
        hesitation. If an agency gets defensive, vague, or dismissive when you
        ask these questions, that tells you everything you need to know.
      </p>
      <p>
        We built{" "}
        <Link href="/why-sinnyr" className="text-red hover:underline">
          Sinnyr
        </Link>{" "}
        to be the kind of agency that passes this test. A signed agreement, a
        defined system, aligned fees, a capped roster, and honest communication
        about what we do and what we do not promise. We teach you how to vet
        agencies because we want you to hold every agency, including us, to a
        real standard.
      </p>
    </ArticleLayout>
  );
}
