"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COURSES } from "@/content/courses";
import { Clock, FileCode, Search, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { Badge } from "@/components/ui/Badge";

export default function CoursesCatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Programming Languages",
    "Databases",
    "Data Structures & Algorithms",
    "System Design",
    "DevOps & Cloud",
    "Cybersecurity",
    "AI & Machine Learning",
  ];

  const levels = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];

  const filteredCourses = COURSES.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skillsGained.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || c.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || c.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "KWAS Academy Complete Courses & Documentation Catalog",
    "description": "Free complete programming courses covering Full-Stack Web Development, Systems Programming, Databases, Cloud, DevOps, and AI.",
    "numberOfItems": COURSES.length,
    "itemListElement": COURSES.map((course, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "url": `https://academy.kwas.tech/learn/${course.slug}`,
        "provider": {
          "@type": "Organization",
          "name": "KWAS Academy",
          "sameAs": "https://academy.kwas.tech",
        },
        "educationalLevel": course.level,
        "isAccessibleForFree": true,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      {/* Inject ItemList JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
            <BookOpen className="h-3.5 w-3.5" /> CURRICULUM CATALOG ({COURSES.length} COMPLETE TRACKS)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Explore Free Programming Courses &amp; Technology Documentation
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Master modern programming from zero to senior software engineer. Each course contains 11 structured modules with live code sandboxes, real-world blueprints, and zero paywalls.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-4 shadow-xs">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses by technology (e.g. Python, React 19, Kubernetes, SQL, Rust, System Design)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
              <span className="text-slate-400 mr-1 font-semibold uppercase text-[10px]">
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white font-semibold"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Level Selector */}
            <div className="flex items-center gap-2 text-xs font-mono shrink-0">
              <span className="text-slate-400 font-semibold uppercase text-[10px]">
                Level:
              </span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
              >
                {levels.map((lvl) => (
                  <option key={lvl} value={lvl}>
                    {lvl}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);

            return (
              <div
                key={course.id}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <DifficultyBadge level={course.level} />
                    <Badge variant="outline">{course.category}</Badge>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">
                      {course.tagline}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1">
                    {course.skillsGained.slice(0, 3).map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {course.estimatedHours}h
                    </span>
                    <span className="flex items-center gap-1">
                      <FileCode className="h-3 w-3" /> {totalLessons} Lessons ({course.modules.length} Modules)
                    </span>
                  </div>

                  <Link
                    href={`/learn/${course.slug}`}
                    className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    View Curriculum <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
