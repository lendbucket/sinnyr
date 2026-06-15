import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center bg-dark px-6 text-center">
        <h1 className="font-display text-4xl font-light tracking-tight text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
          {SITE.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          A selective creator management agency.
        </p>
        <Link
          href="/apply"
          className="mt-10 inline-block rounded-none border border-bordeaux bg-bordeaux px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-transparent hover:text-bordeaux"
        >
          Apply Now
        </Link>
      </section>
    </main>
  );
}
