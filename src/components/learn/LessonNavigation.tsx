import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface LessonNavigationProps {
  courseSlug: string;
  lessonSlug: string;
  prevLesson?: { title: string; slug: string; courseSlug: string };
  nextLesson?: { title: string; slug: string; courseSlug: string };
}

export function LessonNavigation({
  prevLesson,
  nextLesson,
}: LessonNavigationProps) {
  return (
    <div className="my-12 pt-8 border-t border-slate-200 dark:border-slate-800">
      {/* Prev / Next Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prevLesson ? (
          <Link
            href={`/learn/${prevLesson.courseSlug}/${prevLesson.slug}`}
            className="flex flex-col p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 transition-all group"
          >
            <span className="flex items-center gap-1.5 text-xs font-mono text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              <ArrowLeft className="h-3.5 w-3.5" /> Previous Lesson
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1 truncate">
              {prevLesson.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextLesson && (
          <Link
            href={`/learn/${nextLesson.courseSlug}/${nextLesson.slug}`}
            className="flex flex-col p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-900 transition-all text-right group sm:col-start-2"
          >
            <span className="flex items-center justify-end gap-1.5 text-xs font-mono text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Next Lesson <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1 truncate">
              {nextLesson.title}
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
