import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CodePlayground } from "@/components/CodePlayground";
import { Sparkles, Terminal, Code2, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Interactive Online Code Playground — HTML, JS, Python & Bash | KWAS Academy",
  description:
    "Free online coding playground and sandbox. Write, test, and execute HTML, CSS, JavaScript, Python, and Bash scripts directly in your browser with instant live rendering.",
  keywords: [
    "Online Code Playground",
    "HTML CSS JS Live Editor",
    "Python Online Compiler Sandbox",
    "JavaScript In-Browser Runner",
    "Free Code Sandbox Online",
    "Editor de codigo online gratis",
    "Compiler online gratis",
  ],
  alternates: {
    canonical: "https://academy.kwas.tech/playground",
  },
  openGraph: {
    title: "Interactive Code Playground — KWAS Academy",
    description: "Write and run HTML, CSS, JavaScript, and Python code instantly in your browser with zero setup.",
    url: "https://academy.kwas.tech/playground",
    type: "website",
  },
};

export default function PlaygroundPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://academy.kwas.tech" },
          { "@type": "ListItem", position: 2, name: "Playground", item: "https://academy.kwas.tech/playground" },
        ],
      },
      {
        "@type": "WebApplication",
        name: "KWAS Live Interactive Code Playground",
        url: "https://academy.kwas.tech/playground",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript",
        offers: {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          {/* Header */}
          <div className="flex flex-col gap-3 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber w-fit">
              <Sparkles size={14} />
              <span>Multi-Language Live Code Sandbox</span>
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
              Universal Online Code Playground
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-muted">
              Write, experiment, and run HTML, CSS, JavaScript, Python, and Bash scripts live in your browser. Complete client-side sandbox with instant DOM rendering, console output, and zero server storage.
            </p>
          </div>

          {/* Playground Tool */}
          <CodePlayground height="h-[550px]" showLanguageSelector={true} />

          {/* Feature highlights */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-panel2 text-amber border border-line">
                <Code2 size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-fg">Multi-Language Sandbox</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Switch effortlessly between HTML/CSS/JS web rendering and interactive script execution with console logs.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-panel2 text-emerald-400 border border-line">
                <ShieldCheck size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-fg">100% Client-Side Privacy</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                All code runs in local browser memory inside a secure sandbox without transmitting code to any server.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-panel p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-panel2 text-blue-400 border border-line">
                <Zap size={20} />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-fg">Zero Setup Required</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                No installations, no account required. Learn and experiment with code anywhere on mobile or desktop.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
