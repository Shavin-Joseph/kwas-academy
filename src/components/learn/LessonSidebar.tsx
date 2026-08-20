"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Course } from "@/types";
import { ChevronDown, ChevronRight, Search, BookOpen, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface LessonSidebarProps {
  course: Course;
  currentLessonSlug?: string;
  className?: string;
}

export function LessonSidebar({ course, currentLessonSlug, className }: LessonSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(() => {
    const map: Record<string, boolean> = {};
    course.modules.forEach((mod) => {
      map[mod.id] = true;
    });
    return map;
  });

  const toggleModule = (modId: string) => {
    setExpandedModules((prev) => ({
      ...prev,
      [modId]: !prev[modId],
    }));
  };

  const filteredModules = course.modules.map((mod) => {
    const filteredLessons = mod.lessons.filter((l) =>
      l.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...mod, lessons: filteredLessons };
  }).filter((mod) => mod.lessons.length > 0);

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-slate-50 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 select-none overflow-hidden",
        className
      )}
    >
      {/* Course Header */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <Link
          href={`/learn/${course.slug}`}
          className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 hover:underline"
        >
          <BookOpen className="h-3.5 w-3.5" />
          {course.title}
        </Link>
        <div className="text-[11px] text-slate-500 font-mono mt-1">
          Documentation &amp; Syllabus
        </div>
      </div>

      {/* Syllabus Search Bar */}
      <div className="p-3 border-b border-slate-200 dark:border-slate-800">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search syllabus..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 pl-8 pr-3 py-1.5 text-xs text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Modules & Lessons List */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2">
        {filteredModules.map((mod, modIdx) => {
          const isExpanded = !!expandedModules[mod.id];

          return (
            <div key={mod.id} className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60">
              <button
                onClick={() => toggleModule(mod.id)}
                className="w-full flex items-center justify-between p-2.5 text-left text-xs font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-400">0{modIdx + 1}</span>
                  <span className="truncate">{mod.title}</span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                )}
              </button>

              {isExpanded && (
                <div className="border-t border-slate-100 dark:border-slate-800 py-1 pl-2 pr-1 space-y-0.5">
                  {mod.lessons.map((lesson) => {
                    const isActive = lesson.slug === currentLessonSlug;

                    return (
                      <Link
                        key={lesson.id}
                        href={`/learn/${course.slug}/${lesson.slug}`}
                        className={cn(
                          "flex items-center justify-between py-1.5 px-2 rounded-md text-xs transition-colors group",
                          isActive
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 font-semibold"
                            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-200"
                        )}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className={cn("h-3.5 w-3.5 shrink-0", isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400")} />
                          <span className="truncate">{lesson.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100">
                          {lesson.durationMinutes}m
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
