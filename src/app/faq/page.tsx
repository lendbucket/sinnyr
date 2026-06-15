"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { FAQ_ITEMS } from "@/data/faq";

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-lg font-extrabold tracking-tight md:text-xl">
          {question}
        </span>
        <span
          className="mt-1 shrink-0 text-xl text-muted transition-transform duration-300"
          style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="leading-relaxed text-ink/60">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <Header />

      <section className="bg-ink px-6 pt-32 pb-20 md:pt-40 md:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            Questions
          </p>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream/60">
            Honest answers about how Sinnyr works, what it costs, and what to
            expect. No vague language, no hidden details.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-cream md:text-4xl">
            Still have questions?
          </h2>
          <p className="mt-6 text-lg text-cream/60">
            Start with an application. We will answer everything in the
            conversation that follows.
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
