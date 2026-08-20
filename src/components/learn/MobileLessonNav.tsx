"use client";

import React, { useState } from "react";
import { Course, Lesson } from "@/types";
import { LessonSidebar } from "./LessonSidebar";
import { RightToc } from "./RightToc";
import { BookOpen, ListOrdered, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileLessonNavProps {
  course: Course;
  currentLesson: Lesson;
  currentModuleName: string;
}

export function MobileLessonNav({ course, currentLesson, currentModuleName }: MobileLessonNavProps) {
  const [activeDrawer, setActiveDrawer] = useState<"syllabus" | "toc" | null>(null);

  return (
    <>
      {/* Mobile Sticky Quick Action Bar for Lessons (< md screen sizes) */}
      <div className="md:hidden sticky top-16 z-30 w-full bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-md px-3 py-2 flex items-center justify-between gap-2 shadow-xs">
        {/* Open Syllabus Drawer */}
        <button
          onClick={() => setActiveDrawer("syllabus")}
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-semibold cursor-pointer truncate"
        >
          <BookOpen className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
          <span className="truncate">Syllabus ({course.modules.length} Modules)</span>
        </button>

        {/* Open Table of Contents Drawer */}
        <button
          onClick={() => setActiveDrawer("toc")}
          className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-mono text-[11px] font-semibold cursor-pointer shrink-0"
        >
          <ListOrdered className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
          <span>On This Page</span>
        </button>
      </div>

      {/* Full-Screen / Bottom Drawer Modal */}
      {activeDrawer && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end bg-slate-950/70 backdrop-blur-xs md:hidden">
          {/* Backdrop click to close */}
          <div className="flex-1" onClick={() => setActiveDrawer(null)} />

          {/* Drawer Sheet */}
          <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 rounded-t-2xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-200">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <div className="flex items-center gap-2">
                {activeDrawer === "syllabus" ? (
                  <>
                    <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-mono text-xs font-bold uppercase text-slate-900 dark:text-slate-100">
                      {course.title} Syllabus
                    </span>
                  </>
                ) : (
                  <>
                    <ListOrdered className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="font-mono text-xs font-bold uppercase text-slate-900 dark:text-slate-100">
                      On This Page (Table of Contents)
                    </span>
                  </>
                )}
              </div>

              <button
                onClick={() => setActiveDrawer(null)}
                className="p-1 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-4">
              {activeDrawer === "syllabus" ? (
                <LessonSidebar
                  course={course}
                  currentLessonSlug={currentLesson.slug}
                  className="border-0 bg-transparent h-auto"
                />
              ) : (
                <div onClick={() => setActiveDrawer(null)}>
                  <RightToc lesson={currentLesson} />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
