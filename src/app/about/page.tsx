import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  BookOpen,
  ShieldCheck,
  Code2,
  Terminal,
  Zap,
  Globe,
  Award,
  Sparkles,
  Mail,
  ArrowRight,
  CheckCircle2,
  Layers,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "About KWAS Academy & KWAS Technologies | Mission & Philosophy",
  description:
    "Learn about KWAS Academy, an open-access software engineering education platform built by KWAS Technologies (Key Web App Solutions Technologies). Free documentation, interactive code runners, and zero paywalls.",
  keywords: [
    "About KWAS Academy",
    "KWAS Technologies",
    "Key Web App Solutions Technologies",
    "Free Coding Academy",
    "Software Engineering Education",
    "Privacy-First Developer Tools",
  ],
  openGraph: {
    title: "About KWAS Academy — Learn. Build. Master.",
    description: "An educational platform by KWAS Technologies dedicated to open, rigorous, and practical computer science documentation.",
    url: "https://academy.kwas.tech/about",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/about",
  },
};

export default function AboutPage() {
  const pillars = [
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Documentation-First Pedagogy",
      description:
        "Inspired by the straightforward simplicity of W3Schools and MDN, we strip away marketing fluff and deliver clean, academic, 15-section structured lessons that respect your time.",
    },
    {
      icon: <Terminal className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />,
      title: "Interactive Sandboxes & Execution",
      description:
        "Every lesson includes live browsers for HTML/CSS/JS, graphical relational viewers for SQL queries, and sandboxed compilers for Python, Java, C++, Go, and Rust.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: "Zero Paywalls & Open Access",
      description:
        "We believe fundamental and advanced programming education must be freely accessible worldwide without mandatory signup locks or paywalls.",
    },
    {
      icon: <Layers className="h-6 w-6 text-amber-600 dark:text-amber-400" />,
      title: "Zero-to-Hero Progressive Paths",
      description:
        "From writing your first `<h1>` to architecting distributed microservices and LLM RAG pipelines across 20+ complete tracks.",
    },
  ];

  const milestones = [
    { number: "20+", label: "Complete Technology Tracks" },
    { number: "198+", label: "In-Depth Lesson Modules" },
    { number: "12", label: "Interactive Career Roadmaps" },
    { number: "100%", label: "Free Open Documentation" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "About KWAS Academy" },
          ]}
        />

        {/* Hero Section */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> OUR MISSION &amp; HERITAGE
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
            Empowering the Next Generation of Software Engineers.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
            <strong>KWAS Academy</strong> (<a href="https://academy.kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">academy.kwas.tech</a>) is an open-access, documentation-first technology learning platform operated under <a href="https://kwas.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">KWAS Technologies</a> (Key Web App Solutions Technologies).
          </p>
        </div>

        {/* Numerical Impact Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center shadow-xs"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-600 dark:text-blue-400">
                {m.number}
              </div>
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Parent Brand Heritage: KWAS Technologies */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 space-y-6 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-blue-600/10 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                About KWAS Technologies
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Key Web App Solutions Technologies — Engineering for Speed, Privacy &amp; Simplicity
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              Headquartered at <a href="https://kwas.tech" className="text-blue-600 dark:text-blue-400 font-mono hover:underline">kwas.tech</a>, <strong>KWAS Technologies</strong> builds high-performance web applications, developer utilities, and self-hosted tools with a core focus on zero telemetry, speed, and clean software craftsmanship.
            </p>
            <p>
              <strong>KWAS Academy</strong> was created to solve a fundamental problem in online programming education: fragmented tutorials, outdated code examples, and predatory paywalls. We combined the structured reference style of classic documentation with modern interactive sandboxes to provide a seamless learning journey from beginner syntax to senior enterprise architecture.
            </p>
          </div>
        </div>

        {/* Educational Pillars */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              CORE PRINCIPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              How We Engineer Our Curriculum
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-3 shadow-xs"
              >
                <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 w-fit">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Support Section */}
        <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Have Questions, Suggestions or Feedback?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Our engineering and editorial teams are always working to refine our lessons and playgrounds. We handle all inquiries directly via email.
          </p>
          <div className="pt-2">
            <a href="mailto:support@kwas.tech">
              <Button size="lg" variant="academic" className="gap-2 font-mono text-sm font-semibold">
                <Mail className="h-4 w-4" /> Contact Us: support@kwas.tech
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
