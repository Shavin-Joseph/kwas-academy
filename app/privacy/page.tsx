import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — KWAS Academy",
  description: "Privacy policy and data protection practices for KWAS Academy.",
  alternates: {
    canonical: "https://academy.kwas.tech/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-mono text-muted">
            Last Updated: August 20, 2026 • KWAS Academy (academy.kwas.tech)
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
            <h2 className="font-display text-lg font-bold text-fg">1. Zero Server-Side Code Collection</h2>
            <p>
              KWAS Academy processes and runs all code snippets and exercises directly in your local browser using client-side execution environments (Web Workers, sandboxed iframes, and local execution). Your code is never transmitted to or stored on our servers.
            </p>

            <h2 className="font-display text-lg font-bold text-fg">2. Local Storage Progress</h2>
            <p>
              Course completion status and quiz answers are saved strictly in your browser&apos;s <code>localStorage</code> under your own device control. We do not track individual personal learning profiles.
            </p>

            <h2 className="font-display text-lg font-bold text-fg">3. Google AdSense &amp; Analytics</h2>
            <p>
              We use Google AdSense to fund our free educational platform. Google uses cookies (including the DoubleClick DART cookie) to serve ads based on prior visits. Users may opt out of personalized advertising by visiting Google Ad Settings.
            </p>

            <h2 className="font-display text-lg font-bold text-fg">4. Contact Information</h2>
            <p>
              For privacy inquiries regarding KWAS Academy, please contact: <a href="mailto:support@kwas.tech" className="text-amber underline">support@kwas.tech</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
