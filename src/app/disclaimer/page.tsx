import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { AlertTriangle, BookOpen, CheckCircle2, ShieldCheck, Mail } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer & Code Sandbox Warranties | KWAS Academy",
  description:
    "Educational disclaimer and warranties limitation for KWAS Academy (academy.kwas.tech), operated by KWAS Technologies.",
  keywords: [
    "Disclaimer",
    "Educational Disclaimer",
    "KWAS Academy Warranties",
    "KWAS Technologies Legal",
  ],
  openGraph: {
    title: "Disclaimer — KWAS Academy",
    description: "Educational disclaimer regarding tutorials, software examples, and compilers.",
    url: "https://academy.kwas.tech/disclaimer",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Disclaimer" },
          ]}
        />

        {/* Header */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-mono font-semibold">
            <AlertTriangle className="h-3.5 w-3.5" /> LEGAL &amp; EDUCATIONAL NOTICE
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Educational Disclaimer
          </h1>

          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Last Updated: August 20, 2026 • Effective Date: January 1, 2026
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            The information and code provided by <strong>KWAS Academy</strong> (<a href="https://academy.kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">academy.kwas.tech</a>), an educational platform of <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong> (<a href="https://kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">kwas.tech</a>), is for general educational and informational purposes only.
          </p>
        </div>

        {/* Content Body */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              1. Educational Purpose Only
            </h2>
            <p>
              All code snippets, algorithms, system design blueprints, and tutorials published on KWAS Academy are educational examples designed to illustrate computer science fundamentals and modern software engineering concepts.
            </p>
            <p>
              While our engineering team verifies every code example against current language standards (Python 3.12, Java 21, C++20, React 19, Next.js 16, PostgreSQL 16), production deployments require thorough environment-specific security auditing, secret management, and reliability testing.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              2. No Professional Guarantee
            </h2>
            <p>
              Completing courses, challenges, or roadmaps on KWAS Academy does not guarantee employment, certifications, or specific financial outcomes. Software hiring processes are determined by independent third-party employers.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              3. External Links &amp; Third-Party Libraries
            </h2>
            <p>
              KWAS Academy may contain links to external documentation websites, GitHub repositories, or open-source package registries (e.g. npm, PyPI, crates.io). KWAS Technologies is not responsible for the content, privacy policies, or practices of third-party websites.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              4. Contact
            </h2>
            <p>
              For questions regarding this disclaimer, contact us at <a href="mailto:support@kwas.tech" className="text-blue-600 dark:text-blue-400 font-mono hover:underline">support@kwas.tech</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
