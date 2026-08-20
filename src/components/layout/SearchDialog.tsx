"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, BookOpen, Map, Terminal, FolderKanban, BookA, X, ArrowRight } from "lucide-react";
import { COURSES } from "@/content/courses";
import { ROADMAPS } from "@/content/roadmaps";
import { PRACTICE_PROBLEMS } from "@/content/practice";
import { PROJECTS } from "@/content/projects";
import { GLOSSARY_TERMS } from "@/content/glossary";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
      }
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const lessonMatches = q
    ? COURSES.flatMap((c) =>
        c.modules.flatMap((m) =>
          m.lessons
            .filter(
              (l) =>
                l.title.toLowerCase().includes(q) ||
                l.description.toLowerCase().includes(q) ||
                c.title.toLowerCase().includes(q)
            )
            .map((l) => ({
              type: "Lesson",
              title: l.title,
              sub: `${c.title} • ${l.durationMinutes}m`,
              href: `/learn/${c.slug}/${l.slug}`,
              icon: <BookOpen className="h-4 w-4 text-blue-500" />,
            }))
        )
      ).slice(0, 5)
    : [];

  const roadmapMatches = q
    ? ROADMAPS.filter(
        (r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q)
      ).map((r) => ({
        type: "Roadmap",
        title: r.title,
        sub: r.targetRole,
        href: `/roadmaps/${r.slug}`,
        icon: <Map className="h-4 w-4 text-emerald-500" />,
      }))
    : [];

  const practiceMatches = q
    ? PRACTICE_PROBLEMS.filter(
        (p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      ).map((p) => ({
        type: "Practice",
        title: p.title,
        sub: `${p.category} • ${p.difficulty}`,
        href: `/practice/${p.id}`,
        icon: <Terminal className="h-4 w-4 text-amber-500" />,
      }))
    : [];

  const projectMatches = q
    ? PROJECTS.filter(
        (p) => p.title.toLowerCase().includes(q) || p.overview.toLowerCase().includes(q)
      ).map((p) => ({
        type: "Project",
        title: p.title,
        sub: `${p.category} • ${p.difficulty}`,
        href: `/projects/${p.slug}`,
        icon: <FolderKanban className="h-4 w-4 text-purple-500" />,
      }))
    : [];

  const glossaryMatches = q
    ? GLOSSARY_TERMS.filter(
        (g) => g.term.toLowerCase().includes(q) || g.shortDefinition.toLowerCase().includes(q)
      ).map((g) => ({
        type: "Glossary",
        title: g.term,
        sub: g.category,
        href: `/glossary#${g.slug}`,
        icon: <BookA className="h-4 w-4 text-slate-500" />,
      }))
    : [];

  const allResults = [
    ...lessonMatches,
    ...roadmapMatches,
    ...practiceMatches,
    ...projectMatches,
    ...glossaryMatches,
  ];

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={onClose} />
      <div className="relative z-10 w-full max-w-2xl rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <Search className="h-5 w-5 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Search lessons, courses, roadmaps, practice problems, or glossary..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 ml-2 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
          {q.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 space-y-2">
              <p>Type keywords to search across the entire KWAS Academy curriculum.</p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                  HTML
                </span>
                <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                  Flexbox
                </span>
                <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                  Async/Await
                </span>
                <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                  SQL JOIN
                </span>
                <span className="font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                  Docker
                </span>
              </div>
            </div>
          ) : allResults.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-500">
              No results found for &ldquo;<span className="font-semibold">{query}</span>&rdquo;.
            </div>
          ) : (
            <div className="space-y-1">
              {allResults.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(item.href)}
                  className="w-full flex items-center justify-between p-3 rounded-lg text-left hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
                        {item.title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        <span className="font-mono font-semibold uppercase text-[10px] text-blue-600 dark:text-blue-400 mr-1.5">
                          [{item.type}]
                        </span>
                        {item.sub}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
