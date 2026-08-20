"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COURSES, Course } from "@/lib/coursesData";
import {
  GraduationCap,
  Sparkles,
  Search,
  Code2,
  Globe,
  Layers,
  Smartphone,
  Palette,
  Terminal,
  FileCode,
  ArrowRight,
  CheckCircle2,
  Clock,
  BookOpen,
  Zap,
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Code2,
  Globe,
  Layers,
  Smartphone,
  Palette,
  Terminal,
  FileCode,
};

export function CoursesOverviewClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Languages", "Backend & APIs", "Frameworks", "Mobile Apps", "DevOps & Linux"];

  const filteredCourses = COURSES.filter((course) => {
    const matchesCat = selectedCategory === "All" || course.category === selectedCategory;
    const matchesQuery =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.seoKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <>
      <Navbar />
      <main className="pt-8">
        <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
          {/* Hero Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3.5 py-1 font-mono text-xs font-semibold text-amber">
                <GraduationCap size={14} />
                <span>100% Free Global Engineering Academy</span>
              </div>
              <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-fg sm:text-4xl lg:text-5xl">
                KWAS Academy: 0 to Production
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                Complete A-to-Z courses in JavaScript, TypeScript, Python, REST APIs, Next.js, Android, Kotlin, and Linux with built-in interactive browser sandboxes. Free for students worldwide.
              </p>
            </div>

            {/* Live Playground Quick Launcher */}
            <Link
              href="/playground"
              className="flex items-center gap-3 rounded-2xl border border-amber/30 bg-panel2 p-4 shrink-0 hover:border-amber transition-colors shadow-lg group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber text-ink">
                <Code2 size={24} />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-fg group-hover:text-amber transition-colors">
                  Live Code Playground
                </div>
                <div className="text-xs font-mono text-muted">Run HTML, JS &amp; Python Free →</div>
              </div>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-line bg-panel p-4">
              <div className="font-display text-2xl font-bold text-amber">7 Master Tracks</div>
              <div className="font-mono text-xs text-muted mt-1">From Zero to Advanced</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-4">
              <div className="font-display text-2xl font-bold text-emerald-400">100% Interactive</div>
              <div className="font-mono text-xs text-muted mt-1">Live In-Browser Code Sandboxes</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-4">
              <div className="font-display text-2xl font-bold text-blue-400">100% Free</div>
              <div className="font-mono text-xs text-muted mt-1">Zero Paywalls for Students</div>
            </div>
            <div className="rounded-2xl border border-line bg-panel p-4">
              <div className="font-display text-2xl font-bold text-purple-400">Global Audience</div>
              <div className="font-mono text-xs text-muted mt-1">Worldwide Access (100+ Countries)</div>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-line pb-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-lg px-3.5 py-2 font-mono text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-amber text-ink shadow-md"
                      : "bg-panel2 text-muted hover:bg-panel hover:text-fg border border-line"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-faint" />
              <input
                type="text"
                placeholder="Search courses, topics & APIs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-line bg-panel2 pl-9 pr-4 py-2 text-xs text-fg placeholder:text-faint focus:border-amber focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Courses List */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredCourses.map((course) => {
              const Icon = ICON_MAP[course.iconName] || Code2;
              const firstLesson = course.modules[0]?.lessons[0]?.slug || "";
              return (
                <div
                  key={course.slug}
                  className="group flex flex-col justify-between rounded-2xl border border-line bg-panel/70 p-6 sm:p-8 transition-all hover:border-amber/50 hover:shadow-2xl hover:bg-panel"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-panel2 text-amber shadow-sm group-hover:scale-105 group-hover:border-amber/40 transition-all">
                        <Icon size={28} />
                      </div>
                      <span className={`rounded-full border px-3 py-1 font-mono text-xs font-semibold ${course.badgeColor}`}>
                        {course.category}
                      </span>
                    </div>

                    <h2 className="mt-5 font-display text-xl font-bold text-fg group-hover:text-amber transition-colors">
                      {course.title}
                    </h2>
                    <p className="mt-1 text-xs font-mono text-amber/90 font-medium">{course.tagline}</p>
                    <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">{course.description}</p>

                    {/* Meta stats */}
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-faint border-t border-line/50 pt-4">
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-amber" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BookOpen size={13} className="text-emerald-400" />
                        {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Chapters
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Zap size={13} className="text-blue-400" />
                        Online Sandbox
                      </span>
                    </div>

                    {/* Learning Outcomes */}
                    <div className="mt-5 flex flex-col gap-1.5">
                      {course.learningOutcomes.slice(0, 3).map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-muted">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-400" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="flex-1 rounded-xl border border-line bg-panel2 px-4 py-3 text-center font-mono text-xs font-semibold text-fg hover:border-amber/40 transition-colors"
                    >
                      View Syllabus &amp; Roadmap
                    </Link>
                    <Link
                      href={`/courses/${course.slug}/${firstLesson}`}
                      className="flex-1 rounded-xl bg-amber px-4 py-3 text-center font-mono text-xs font-bold text-ink hover:opacity-90 transition-opacity shadow-md flex items-center justify-center gap-1"
                    >
                      <span>Start Learning</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
