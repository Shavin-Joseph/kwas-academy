"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRACTICE_PROBLEMS } from "@/content/practice";
import { Terminal, CheckCircle2, Circle, Search, ArrowRight, Award, Zap } from "lucide-react";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useProgress } from "@/context/ProgressContext";

export default function PracticeArenaPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("All");
  const { isProblemCompleted } = useProgress();

  const categories = ["All", "Algorithm", "Data Structures", "SQL", "Output Prediction"];
  const difficulties = ["All", "Beginner", "Easy", "Medium", "Hard", "Advanced"];

  const filteredProblems = PRACTICE_PROBLEMS.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesDiff = selectedDifficulty === "All" || p.difficulty === selectedDifficulty;
    return matchesSearch && matchesCategory && matchesDiff;
  });

  const practiceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "KWAS Academy Interactive Coding Practice Arena",
    "description": "Solve algorithms, data structures, SQL queries, and software engineering problems with live test runners.",
    "numberOfItems": PRACTICE_PROBLEMS.length,
    "itemListElement": PRACTICE_PROBLEMS.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": p.title,
      "item": `https://academy.kwas.tech/practice/${p.id}`,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      {/* Inject ItemList JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
            <Zap className="h-3.5 w-3.5" /> INTERACTIVE CODING ARENA ({PRACTICE_PROBLEMS.length} PROBLEMS)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Practice &amp; Coding Challenges
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Hone your skills with algorithmic problems, SQL queries, debugging exercises, and output predictions with live test runners and step-by-step explanations.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search problems by title, algorithm, or data structure..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono">
            {/* Category pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-slate-400 font-semibold uppercase text-[10px] mr-1">
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

            {/* Difficulty select */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400 font-semibold uppercase text-[10px]">
                Difficulty:
              </span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Problems List Table */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {filteredProblems.map((problem, idx) => {
              const completed = isProblemCompleted(problem.id);

              return (
                <Link
                  key={problem.id}
                  href={`/practice/${problem.id}`}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      {completed ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Circle className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-400">
                          #{idx + 1}
                        </span>
                        <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {problem.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 max-w-xl">
                        {problem.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0 ml-7 sm:ml-0">
                    <Badge variant="outline">{problem.category}</Badge>
                    <DifficultyBadge level={problem.difficulty} />
                    <span className="text-xs font-mono font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                      Solve &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
