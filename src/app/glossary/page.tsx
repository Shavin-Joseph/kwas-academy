"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GLOSSARY_TERMS } from "@/content/glossary";
import { Search, BookA, Tag, BookOpen, ArrowRight, Code2, BookMarked } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/code/CodeBlock";

export default function GlossaryPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Architecture & Protocols",
    "Networking & Security",
    "Web Development",
    "Databases & Backend",
    "Security & Auth",
    "System Design",
    "AI & Machine Learning",
  ];

  const filteredTerms = GLOSSARY_TERMS.filter((t) => {
    const matchesSearch =
      t.term.toLowerCase().includes(query.toLowerCase()) ||
      t.shortDefinition.toLowerCase().includes(query.toLowerCase()) ||
      t.technicalDefinition.toLowerCase().includes(query.toLowerCase()) ||
      t.relatedConcepts.some((c) => c.toLowerCase().includes(query.toLowerCase()));

    const matchesCategory =
      selectedCategory === "All" || t.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "KWAS Academy Computer Science & Technology Glossary",
    "description": "Authoritative technical dictionary providing simple explanations and rigorous architectural definitions for software engineering terms.",
    "hasDefinedTerm": GLOSSARY_TERMS.map((t) => ({
      "@type": "DefinedTerm",
      "name": t.term,
      "description": t.shortDefinition,
      "inDefinedTermSet": "https://academy.kwas.tech/glossary",
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      {/* Inject DefinedTermSet JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
      />

      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
            <BookMarked className="h-3.5 w-3.5" /> DEVELOPER ENCYCLOPEDIA &amp; DEFINED TERMS
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Technology &amp; Software Engineering Glossary
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Clear beginner-friendly explanations and rigorous technical definitions for essential computer science, web development, cloud computing, and AI terms.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search terms (e.g. API, HTTP, ACID, Closure, Docker, RAG, Big-O)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs font-mono">
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
        </div>

        {/* Terms List */}
        <div className="space-y-6">
          {filteredTerms.map((term) => (
            <div
              key={term.id}
              id={term.slug}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 font-mono">
                  {term.term}
                </h2>
                <Badge variant="outline">{term.category}</Badge>
              </div>

              {/* Simple & Technical Definitions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/50 space-y-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                    Simple Definition (AEO / AIO)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                    {term.shortDefinition}
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    Technical Definition (GEO)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {term.technicalDefinition}
                  </p>
                </div>
              </div>

              {/* Code Snippet if applicable */}
              {term.codeSnippet && (
                <div className="pt-2">
                  <CodeBlock
                    code={term.codeSnippet.code}
                    language={term.codeSnippet.language}
                    showLineNumbers={false}
                  />
                </div>
              )}

              {/* Related concepts & Courses */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-slate-400 font-semibold uppercase text-[10px]">
                    Related Keywords:
                  </span>
                  {term.relatedConcepts.map((c, i) => (
                    <span
                      key={i}
                      className="font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {term.relatedCourses.map((rc, i) => (
                    <Link
                      key={i}
                      href={`/learn/${rc.slug}`}
                      className="font-mono font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                    >
                      <BookOpen className="h-3 w-3" /> {rc.name} Course &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
