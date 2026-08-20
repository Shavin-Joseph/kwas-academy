"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  ArrowRight,
  Code2,
  Terminal,
  Map,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Cpu,
  Server,
  Flame,
  FolderKanban,
  Check,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { COURSES } from "@/content/courses";
import { ROADMAPS } from "@/content/roadmaps";
import { PROJECTS } from "@/content/projects";
import { CodeBlock } from "@/components/code/CodeBlock";

export default function HomePage() {
  const [activeCodeTab, setActiveCodeTab] = useState<"js" | "py" | "sql" | "html">("js");

  const heroCodeSnippets = {
    js: `// Asynchronous API Fetch with Modern JavaScript
async function loadCourseCurriculum(courseId) {
  try {
    const response = await fetch(\`/api/courses/\${courseId}\`);
    if (!response.ok) throw new Error("Curriculum request failed");
    const data = await response.json();
    return data.modules.map(m => m.title);
  } catch (error) {
    console.error("Failed to load course:", error.message);
  }
}

// Execute call
loadCourseCurriculum("javascript-pro");`,
    py: `# Python 3.12 Class Architecture with Type Hints
from dataclasses import dataclass
from typing import List

@dataclass
class Engineer:
    name: str
    skills: List[str]
    level: str = "Senior"

    def can_architect_system(self) -> bool:
        return "System Design" in self.skills and "Distributed Systems" in self.skills

lead = Engineer("Kenneth", ["Python", "System Design", "Distributed Systems"])
print(f"Eligible for Lead Architecture: {lead.can_architect_system()}")`,
    sql: `-- High-Performance CTE with Window Functions
WITH RankedStudentProgress AS (
    SELECT 
        user_id,
        course_id,
        completion_percentage,
        DENSE_RANK() OVER (PARTITION BY course_id ORDER BY completion_percentage DESC) as rank
    FROM user_course_progress
    WHERE updated_at >= NOW() - INTERVAL '30 days'
)
SELECT * FROM RankedStudentProgress WHERE rank <= 3;`,
    html: `<!-- Modern Accessible Semantic Document -->
<article class="lesson-card" role="region" aria-labelledby="lesson-title">
  <header>
    <span class="badge">Level: Beginner</span>
    <h2 id="lesson-title">Mastering Flexbox & Grid</h2>
  </header>
  <p>Learn 2-dimensional CSS layout mechanics.</p>
  <a href="/learn/css" class="btn-primary">Start Lesson &rarr;</a>
</article>`,
  };

  const popularTechnologies = [
    { name: "HTML5", desc: "Document Structure & Web APIs", tag: "Frontend", href: "/learn/html" },
    { name: "CSS3", desc: "Flexbox, Grid & Modern Styling", tag: "Frontend", href: "/learn/css" },
    { name: "JavaScript", desc: "ES6+, Async, DOM & Event Loop", tag: "Language", href: "/learn/javascript" },
    { name: "TypeScript", desc: "Static Types & Generics", tag: "Language", href: "/learn/typescript" },
    { name: "Python", desc: "Automation, Backend & AI Stack", tag: "Language", href: "/learn/python" },
    { name: "SQL", desc: "PostgreSQL, Queries & Joins", tag: "Database", href: "/learn/sql" },
    { name: "React", desc: "Component Architecture & Hooks", tag: "Frontend", href: "/learn/react" },
    { name: "Next.js", desc: "Full Stack App Router & RSC", tag: "Full Stack", href: "/learn/nextjs" },
    { name: "Node.js", desc: "Server Runtimes & REST APIs", tag: "Backend", href: "/learn/nodejs" },
    { name: "Java", desc: "Enterprise Architecture & Spring", tag: "Language", href: "/learn/java" },
    { name: "C++", desc: "High Performance & Systems", tag: "Language", href: "/learn/cpp" },
    { name: "Go", desc: "Microservices & Concurrency", tag: "Language", href: "/learn/go" },
    { name: "Rust", desc: "Memory Safety & Low-level", tag: "Language", href: "/learn/rust" },
    { name: "Docker & DevOps", desc: "Containers & Orchestration", tag: "DevOps", href: "/learn/devops" },
    { name: "Cybersecurity", desc: "OWASP & Defensive Security", tag: "Security", href: "/learn/cybersecurity" },
    { name: "AI / ML & RAG", desc: "Neural Networks, LLMs & RAG", tag: "AI", href: "/learn/ai-ml" },
  ];

  const levels = [
    {
      level: "Level 1: Beginner",
      badge: "Start from Zero",
      title: "Foundations & First Line of Code",
      desc: "Syntax, variables, conditionals, loops, functions, basic DOM manipulation, and fundamental data structures. No prior experience required.",
      color: "border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/30 dark:bg-emerald-950/20",
    },
    {
      level: "Level 2: Intermediate",
      badge: "Build Practical Apps",
      title: "Frameworks, APIs & Databases",
      desc: "Component hierarchies, asynchronous I/O, REST APIs, SQL joins, relational schemas, state management, and modern developer tooling.",
      color: "border-blue-200 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20",
    },
    {
      level: "Level 3: Advanced",
      badge: "Professional Mastery",
      title: "Full-Stack Architecture & Testing",
      desc: "Authentication systems, Server Components, CI/CD automation, unit & E2E testing, Docker containerization, and cloud deployment.",
      color: "border-purple-200 dark:border-purple-900/60 bg-purple-50/30 dark:bg-purple-950/20",
    },
    {
      level: "Level 4: Expert",
      badge: "Enterprise Engineering",
      title: "System Design, Scale & AI",
      desc: "Distributed systems, database sharding, CAP theorem, message queues, rate limiting, LLM embeddings, RAG pipelines, and microservices.",
      color: "border-amber-200 dark:border-amber-900/60 bg-amber-50/30 dark:bg-amber-950/20",
    },
  ];

  const faqs = [
    {
      q: "What is KWAS Academy?",
      a: "KWAS Academy is a comprehensive, 100% free, documentation-first programming education platform designed to take learners from complete zero to senior software engineering across 20+ technologies including full-stack, cloud, DevOps, systems programming, and artificial intelligence.",
    },
    {
      q: "Is KWAS Academy completely free to use without login barriers?",
      a: "Yes. All courses, 198+ interactive lessons, multi-language playgrounds, and roadmap guides are completely free and open to explore without mandatory signup or subscription paywalls.",
    },
    {
      q: "Which programming languages and technologies can I learn?",
      a: "You can master HTML5, CSS3, JavaScript ES6+, TypeScript, React 19, Next.js 16, Node.js, Python 3, SQL, Java 21, C++20, Go, Rust, Data Structures & Algorithms, Distributed System Design, DevOps (Docker, K8s, CI/CD, Terraform), Cybersecurity, and AI/Machine Learning.",
    },
    {
      q: "Does KWAS Academy include interactive code execution and sandboxes?",
      a: "Yes. KWAS Academy features interactive code runners with instant live browser previews for web applications, a real-time Graphic Relational Table viewer for SQL, and sandboxed stdout simulators for Python, Java, C++, Go, and Rust.",
    },
    {
      q: "How does the curriculum guide complete beginners into enterprise software engineering?",
      a: "The curriculum is structured into 4 distinct progression tiers: Level 1 (Foundations), Level 2 (Frameworks & Databases), Level 3 (Full-Stack Architecture & Cloud), and Level 4 (Enterprise Systems Design, Scale, and AI).",
    },
  ];

  // Comprehensive JSON-LD Schema for SEO / AEO / GEO / AIO
  const structuredSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://academy.kwas.tech/#website",
        "url": "https://academy.kwas.tech",
        "name": "KWAS Academy",
        "description": "Learn. Build. Master. Free comprehensive documentation, interactive sandboxes, and enterprise software engineering courses.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://academy.kwas.tech/courses?search={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://academy.kwas.tech/#organization",
        "name": "KWAS Academy",
        "url": "https://academy.kwas.tech",
        "logo": "https://academy.kwas.tech/favicon.svg",
        "description": "Premier open-access programming learning platform by KWAS Technologies, inspired by the clarity of W3Schools.",
        "sameAs": [
          "https://kwas.tech",
          "https://github.com/kwas-tech",
          "https://twitter.com/kwas_tech",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://academy.kwas.tech/#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Inject Structured JSON-LD Graph for Search & AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative border-b border-slate-200 dark:border-slate-800 bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50/80 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              KWAS Academy • Learn. Build. Master.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
              Learn Programming. <br />
              <span className="text-blue-600 dark:text-blue-400">Build Real Software.</span>
            </h1>

            {/* AEO/AIO Definition Snippet */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              <strong>KWAS Academy</strong> is a free, modern, documentation-first technology learning platform. Master Python, JavaScript, TypeScript, React, Next.js, SQL, Java, C++, Go, Rust, System Design, DevOps, and AI through structured curriculum and interactive sandboxes.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/learn/html/html-introduction">
                <Button size="lg" variant="academic" className="font-semibold text-sm">
                  Start Learning Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="font-semibold text-sm">
                  Explore 20+ Courses
                </Button>
              </Link>
              <Link href="/roadmaps">
                <Button size="lg" variant="ghost" className="font-semibold text-sm font-mono text-blue-600 dark:text-blue-400">
                  <Map className="h-4 w-4" /> View Roadmaps
                </Button>
              </Link>
            </div>

            {/* Micro stats banner */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div>
                <span className="block text-lg font-bold text-slate-900 dark:text-slate-100 font-sans">100% Free</span>
                Open Documentation
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900 dark:text-slate-100 font-sans">Interactive</span>
                Multi-Language Sandboxes
              </div>
              <div>
                <span className="block text-lg font-bold text-slate-900 dark:text-slate-100 font-sans">Zero → Expert</span>
                198+ Guided Lessons
              </div>
            </div>
          </div>

          {/* Right Hero Code Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
              {/* Code Tab Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 bg-slate-950 p-0.5 rounded border border-slate-800">
                  {(["js", "py", "sql", "html"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveCodeTab(tab)}
                      className={`px-2.5 py-1 rounded text-[11px] font-semibold uppercase transition-colors ${
                        activeCodeTab === tab
                          ? "bg-blue-600 text-white"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code Editor body */}
              <div className="p-4 text-xs font-mono overflow-x-auto text-slate-200 leading-relaxed max-h-[360px]">
                <pre className="text-slate-200">
                  <code>{heroCodeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* Bottom footer status */}
              <div className="px-4 py-2 bg-slate-900/80 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Compiler Sandbox
                </span>
                <Link href="/playground" className="text-blue-400 hover:underline">
                  Open Cloud Playground &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR TECHNOLOGIES CATALOG */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                TECHNOLOGY CATALOG & KEYWORDS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                Explore Core Software Engineering Technologies
              </h2>
            </div>
            <Link
              href="/technologies"
              className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Browse All 30+ Technologies <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {popularTechnologies.map((tech) => (
              <Link
                key={tech.name}
                href={tech.href}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-slate-50/50 dark:bg-slate-900/50 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {tech.name}
                  </span>
                  <Badge variant="outline" size="sm">
                    {tech.tag}
                  </Badge>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug line-clamp-2">
                  {tech.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LEARN BY LEVEL */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              STRUCTURED PROGRESSION (SXO)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Learn by Level: From Beginner to Principal Engineer
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Structured progressive curriculum designed to take you step-by-step from zero background to senior engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((lvl) => (
              <div
                key={lvl.level}
                className={`rounded-xl border p-6 flex flex-col justify-between ${lvl.color}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      {lvl.level}
                    </span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 font-semibold">
                      {lvl.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {lvl.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {lvl.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800/60">
                  <Link
                    href="/courses"
                    className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    View Courses for {lvl.level.split(":")[1]} &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEARNING PATHS & ROADMAPS */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                STRUCTURED CAREER PATHS (GEO)
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                Developer Career Roadmaps
              </h2>
            </div>
            <Link
              href="/roadmaps"
              className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Explore All 12 Roadmaps <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ROADMAPS.slice(0, 6).map((roadmap) => (
              <Link
                key={roadmap.id}
                href={`/roadmaps/${roadmap.slug}`}
                className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:border-blue-400 dark:hover:border-blue-600 bg-white dark:bg-slate-900 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      {roadmap.targetRole}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {roadmap.estimatedDuration}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-2">
                    {roadmap.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                    {roadmap.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>{roadmap.sections.length} Milestone Modules</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AEO & GEO FAQ SECTION */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              FREQUENTLY ASKED QUESTIONS (AEO & GEO)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Everything You Need to Know About KWAS Academy
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Direct, concise answers to common questions regarding our free learning curriculum, sandboxes, and developer tracks.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-xs"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REAL PROJECTS SHOWCASE */}
      <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                PROJECT-BASED MASTERY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 mt-1">
                Real Projects You Will Build
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Browse All Projects <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-950/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold uppercase text-slate-500">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400">
                      ~{project.estimatedHours} Hours
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/projects/${project.slug}`}>
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    View Project Blueprint &rarr;
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALL TO ACTION */}
      <section className="py-20 bg-linear-to-b from-blue-600 to-blue-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Start Your Software Engineering Journey Today.
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Begin with the fundamentals and advance all the way to enterprise software architecture, system design, and AI.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link href="/learn/html/html-introduction">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold text-sm shadow-md">
                Start from HTML Introduction &rarr;
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10 font-bold text-sm">
                Explore All 20+ Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
