import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { FileText, ShieldAlert, BookOpen, CheckCircle2, Mail, Globe } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service & Educational Use | KWAS Academy",
  description:
    "Terms of Service for KWAS Academy (academy.kwas.tech), operated by KWAS Technologies. Guidelines on educational fair use, code sandbox rules, intellectual property, and disclaimers.",
  keywords: [
    "Terms of Service",
    "KWAS Academy Terms",
    "KWAS Technologies Terms of Use",
    "Educational License",
    "Code Sandbox Fair Use",
  ],
  openGraph: {
    title: "Terms of Service — KWAS Academy",
    description: "Terms governing use of KWAS Academy's tutorials, sandboxes, and documentation.",
    url: "https://academy.kwas.tech/terms",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Terms of Service" },
          ]}
        />

        {/* Header */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
            <FileText className="h-3.5 w-3.5" /> LEGAL AGREEMENT &amp; USER GUIDELINES
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Terms of Service
          </h1>

          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Last Updated: August 20, 2026 • Effective Date: January 1, 2026
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            By accessing or using <strong>KWAS Academy</strong> (<a href="https://academy.kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">academy.kwas.tech</a>), you agree to comply with and be bound by these Terms of Service. KWAS Academy is operated by <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong> (<a href="https://kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">kwas.tech</a>).
          </p>
        </div>

        {/* Terms Content Body */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* 1. Educational Use License */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">1.</span> Educational Fair Use License
            </h2>
            <p>
              All curriculum, tutorials, documentation, and code examples provided on KWAS Academy are made available free of charge for personal educational and professional self-improvement purposes.
            </p>
            <p>
              You are permitted to copy, adapt, modify, and run the provided code snippets in your personal and commercial projects without royalty fees. However, mass automated scraping or unauthorized mirroring of our full written documentation without explicit written consent is prohibited.
            </p>
          </section>

          {/* 2. Interactive Sandbox & Compiler Acceptable Use */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">2.</span> Interactive Sandboxes &amp; Code Runners
            </h2>
            <p>
              Our interactive code runners and web sandboxes execute in safe browser environments or isolated compilers. You agree not to use the sandbox environments to:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Attempt denial-of-service attacks or disrupt platform availability.</li>
              <li>Inject malicious malware, cryptominers, or exploit payloads.</li>
              <li>Attempt unauthorized privilege escalation or server probing.</li>
            </ul>
          </section>

          {/* 3. Intellectual Property */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">3.</span> Intellectual Property &amp; Trademarks
            </h2>
            <p>
              The KWAS Academy brand name, logo, graphic identity, and custom user interface designs are the intellectual property of KWAS Technologies (Key Web App Solutions Technologies). Third-party brand names, framework logos, and programming language trademarks (e.g. Python, React, PostgreSQL, Docker, Rust, Go) mentioned across our courses remain the property of their respective trademark holders and are used strictly for informational and educational purposes.
            </p>
          </section>

          {/* 4. Disclaimer of Warranties */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">4.</span> Disclaimer of Warranties
            </h2>
            <p>
              KWAS Academy is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind, whether express or implied. While we strive to maintain 100% accuracy across our 198+ lessons, technology standards evolve rapidly and we make no guarantees regarding complete error-free execution on all third-party systems.
            </p>
          </section>

          {/* 5. Limitation of Liability */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">5.</span> Limitation of Liability
            </h2>
            <p>
              In no event shall KWAS Technologies, its founders, contributors, or partners be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use the platform or its code examples.
            </p>
          </section>

          {/* 6. Contact */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">6.</span> Inquiries Regarding Terms
            </h2>
            <p>
              For legal inquiries or licensing questions, contact our team exclusively via email at <a href="mailto:support@kwas.tech" className="text-blue-600 dark:text-blue-400 font-mono hover:underline">support@kwas.tech</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
