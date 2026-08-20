import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GraduationCap, ShieldCheck, Zap, Globe, Code2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About KWAS Academy — Free Global Software Engineering Education",
  description:
    "Learn about KWAS Academy's mission to provide 100% free, interactive software engineering and computer science education for learners worldwide.",
  alternates: {
    canonical: "https://academy.kwas.tech/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber mb-4">
            <GraduationCap size={14} />
            <span>Empowering Global Developers</span>
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
            About KWAS Academy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            KWAS Academy is the official educational division of <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong>. Our mission is to make advanced software engineering, backend systems, full-stack frameworks, and mobile operating systems architecture completely free, interactive, and accessible to anyone, anywhere in the world.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-panel2 text-amber border border-line">
                <Code2 size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-fg">Hands-on In-Browser Coding</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Every chapter includes a real-time live code sandbox so students can experiment with concepts immediately without complex local environments.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-panel2 text-emerald-400 border border-line">
                <ShieldCheck size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-fg">Production-Grade Curriculum</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                We go far beyond superficial tutorials to teach deep engine internals: V8 pipelines, CPython memory models, distributed REST APIs, and Linux kernel diagnostics.
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-line bg-panel2 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-lg font-bold text-fg">Ready to begin your engineering journey?</h3>
              <p className="text-xs text-muted mt-1">Explore all 7 master tracks with zero setup required.</p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-amber px-6 py-3 font-mono text-xs font-bold text-ink hover:opacity-90 transition-opacity shrink-0"
            >
              <span>Explore Master Tracks</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
