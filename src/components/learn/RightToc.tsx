"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Lesson } from "@/types";
import { Clock, ListOrdered, Share2, Check } from "lucide-react";
import { DifficultyBadge } from "../ui/DifficultyBadge";

interface RightTocProps {
  lesson: Lesson;
  sections?: { id: string; title: string }[];
}

export function RightToc({ lesson, sections }: RightTocProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState(false);

  const defaultSections = useMemo(() => sections || [
    { id: "what-you-will-learn", title: "What You'll Learn" },
    { id: "introduction", title: "Introduction" },
    { id: "why-it-matters", title: "Why Does This Matter?" },
    ...(lesson.syntax ? [{ id: "syntax", title: "Syntax" }] : []),
    { id: "code-example", title: "Working Code Example" },
    { id: "explanation", title: "Line-by-Line Breakdown" },
    { id: "try-it-yourself", title: "Try It Yourself" },
    ...(lesson.commonMistakes.length > 0 ? [{ id: "common-mistakes", title: "Common Mistakes" }] : []),
    ...(lesson.bestPractices.length > 0 ? [{ id: "best-practices", title: "Best Practices" }] : []),
    { id: "real-world-example", title: "Real-World Application" },
    ...(lesson.challenge ? [{ id: "challenge", title: "Coding Challenge" }] : []),
    ...(lesson.quiz && lesson.quiz.length > 0 ? [{ id: "quiz", title: "Knowledge Check Quiz" }] : []),
    { id: "summary", title: "Summary & Takeaways" },
  ], [sections, lesson.syntax, lesson.commonMistakes.length, lesson.bestPractices.length, lesson.challenge, lesson.quiz]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    defaultSections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [defaultSections]);

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="space-y-6 text-xs text-slate-600 dark:text-slate-400 select-none">
      {/* Lesson Metadata Card */}
      <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <DifficultyBadge level={lesson.difficulty} />
          <div className="flex items-center gap-1 text-slate-500 font-mono text-[11px]">
            <Clock className="h-3.5 w-3.5" />
            <span>{lesson.durationMinutes} min read</span>
          </div>
        </div>

        <button
          onClick={handleShare}
          className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium transition-colors cursor-pointer"
        >
          {copiedLink ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-500" />
              <span>Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="h-3.5 w-3.5" />
              <span>Share Documentation</span>
            </>
          )}
        </button>
      </div>

      {/* On this page Table of Contents */}
      <div className="space-y-2">
        <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 font-mono text-[11px]">
          <ListOrdered className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>ON THIS PAGE</span>
        </div>

        <nav className="border-l border-slate-200 dark:border-slate-800 pl-3 space-y-1.5 font-sans">
          {defaultSections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className={`block py-0.5 text-xs transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400 font-semibold -ml-[13px] border-l-2 border-blue-600 pl-2.5"
                    : "text-slate-500 dark:text-slate-400"
                }`}
              >
                {sec.title}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
