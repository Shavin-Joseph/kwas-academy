import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions — KWAS Academy",
  description: "Terms and conditions for accessing KWAS Academy educational resources.",
  alternates: {
    canonical: "https://academy.kwas.tech/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
          <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-xs font-mono text-muted">
            Last Updated: August 20, 2026 • KWAS Academy (academy.kwas.tech)
          </p>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
            <h2 className="font-display text-lg font-bold text-fg">1. Free Educational Access</h2>
            <p>
              KWAS Academy grants you a personal, non-exclusive, non-transferable license to access and read our tutorials, run code in our sandboxes, and complete learning tracks for educational purposes.
            </p>

            <h2 className="font-display text-lg font-bold text-fg">2. Code Sandbox Usage</h2>
            <p>
              You agree not to use the code execution sandboxes for malicious purposes, including cryptocurrency mining, DDoS simulation against third parties, or attempting to compromise browser security sandboxes.
            </p>

            <h2 className="font-display text-lg font-bold text-fg">3. Intellectual Property</h2>
            <p>
              Curriculum materials, explanations, diagrams, and educational software are copyright © KWAS Technologies. Code examples provided in tutorials are open-source and free to use in your personal and commercial projects.
            </p>

            <h2 className="font-display text-lg font-bold text-fg">4. Contact</h2>
            <p>
              For legal questions, contact: <a href="mailto:support@kwas.tech" className="text-amber underline">support@kwas.tech</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
