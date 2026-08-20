import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Cookie, ShieldCheck, CheckCircle2, Mail } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Cookie Policy | KWAS Academy & KWAS Technologies",
  description:
    "Cookie Policy for KWAS Academy (academy.kwas.tech). Understand what cookies we use, local storage preferences, Google AdSense cookies, and how to manage your privacy settings.",
  keywords: [
    "Cookie Policy",
    "KWAS Academy Cookies",
    "AdSense Cookie Disclosure",
    "Local Storage Preferences",
  ],
  openGraph: {
    title: "Cookie Policy — KWAS Academy",
    description: "Detailed breakdown of cookie types and storage policies.",
    url: "https://academy.kwas.tech/cookies",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Cookie Policy" },
          ]}
        />

        {/* Header */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 text-xs font-mono font-semibold">
            <Cookie className="h-3.5 w-3.5" /> COOKIE USAGE DISCLOSURE
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Cookie Policy
          </h1>

          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Last Updated: August 20, 2026 • Effective Date: January 1, 2026
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            This Cookie Policy explains what cookies and client storage technologies are used on <strong>KWAS Academy</strong> (<a href="https://academy.kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">academy.kwas.tech</a>), operated under <strong>KWAS Technologies</strong> (<a href="https://kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">kwas.tech</a>).
          </p>
        </div>

        {/* Cookie Categories */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              1. What Are Cookies &amp; Local Storage?
            </h2>
            <p>
              Cookies are small text files placed on your computer or mobile device when you browse websites. Local storage (such as HTML5 `localStorage`) is a modern web standard that allows websites to remember user preferences directly on your local device without sending that data to the server on every request.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              2. Categories of Storage We Use
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-xs uppercase text-blue-600 dark:text-blue-400">
                  A. Strictly Essential Preferences (Local Storage)
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Stores your theme preference (Light or Dark mode) and temporary unsaved code snippets in the interactive playground so your work is not lost when refreshing the page.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-xs uppercase text-emerald-600 dark:text-emerald-400">
                  B. Analytics &amp; Performance Cookies
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Collects anonymous, aggregated statistics on page traffic, most viewed lessons, and compiler error rates to help our team optimize server latency and fix broken links.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1.5">
                <span className="font-bold text-slate-900 dark:text-slate-100 font-mono text-xs uppercase text-amber-600 dark:text-amber-400">
                  C. Third-Party Advertising Cookies (Google AdSense)
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  Third-party vendors, including Google, use cookies to serve ads based on prior visits to this website. You can opt out of personalized advertising by visiting Google Ads Settings.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              3. How You Can Control or Delete Cookies
            </h2>
            <p>
              Most web browsers allow you to manage or block cookies through browser settings. To learn more about how to manage and remove cookies on popular browsers, consult the official documentation for Chrome, Firefox, Safari, or Edge.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              4. Contact Us
            </h2>
            <p>
              For questions regarding our cookie practices, reach out via email to <a href="mailto:support@kwas.tech" className="text-blue-600 dark:text-blue-400 font-mono hover:underline">support@kwas.tech</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
