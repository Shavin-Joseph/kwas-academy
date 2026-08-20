"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useProgress } from "@/context/ProgressContext";
import { COURSES } from "@/content/courses";
import {
  User,
  Flame,
  Award,
  BookOpen,
  CheckCircle2,
  Bookmark,
  Terminal,
  Layers,
  ArrowRight,
  TrendingUp,
  Shield,
  RotateCcw,
} from "lucide-react";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";

export default function UserDashboardPage() {
  const { user } = useAuth();
  const { progress, getCourseProgress, resetProgress } = useProgress();

  const activeCourses = COURSES.map((c) => {
    const totalLessons = c.modules.reduce((acc, m) => acc + m.lessons.length, 0);
    const percentage = getCourseProgress(c.slug, totalLessons);
    return { ...c, percentage, totalLessons };
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* User Profile Header Banner */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-sm font-mono">
              {user ? user.name[0] : "A"}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Welcome back, {user ? user.name : "Alex Developer"}!
                </h1>
                <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                  {user?.role === "admin" ? "Admin" : "Student"}
                </span>
              </div>
              <p className="text-xs text-slate-500 font-mono">
                {user?.email || "alex@kwasacademy.dev"} • Member since {user?.createdAt || "2026-01-15"}
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-4 sm:gap-6 bg-slate-50 dark:bg-slate-950/80 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <div className="text-center px-2">
              <span className="flex items-center justify-center gap-1 text-amber-600 dark:text-amber-400 font-bold text-base">
                <Flame className="h-4 w-4 fill-current" /> {progress.streakDays}
              </span>
              <span className="text-[10px] text-slate-400 uppercase">Day Streak</span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="text-center px-2">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-base block">
                {progress.points} XP
              </span>
              <span className="text-[10px] text-slate-400 uppercase">Score</span>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="text-center px-2">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-base block">
                {progress.completedLessons.length}
              </span>
              <span className="text-[10px] text-slate-400 uppercase">Lessons</span>
            </div>
          </div>
        </div>

        {/* 2-Column Progress & Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (2 Cols): Course Progress & Bookmarks */}
          <div className="lg:col-span-2 space-y-8">
            {/* Courses In Progress */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-6 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  Your Course Progress
                </h2>
                <Link href="/courses" className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline">
                  All Courses &rarr;
                </Link>
              </div>

              <div className="space-y-6">
                {activeCourses.map((c) => (
                  <div key={c.id} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <Link
                        href={`/learn/${c.slug}`}
                        className="font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {c.title}
                      </Link>
                      <span className="font-mono text-xs text-slate-500 font-semibold">
                        {c.percentage}% Complete
                      </span>
                    </div>
                    <ProgressBar value={c.percentage} size="md" />
                  </div>
                ))}
              </div>
            </div>

            {/* Bookmarked Lessons */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Bookmark className="h-4 w-4 text-blue-600" />
                  Saved Bookmarks ({progress.bookmarks.length})
                </h2>
              </div>

              {progress.bookmarks.length === 0 ? (
                <p className="text-xs text-slate-500 italic py-4">
                  No lessons bookmarked yet. Click the bookmark icon in any lesson to save it for quick review.
                </p>
              ) : (
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  {progress.bookmarks.map((bm, i) => {
                    const [cSlug, lSlug] = bm.split("/");
                    return (
                      <Link
                        key={i}
                        href={`/learn/${cSlug}/${lSlug}`}
                        className="py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 px-2 rounded-md transition-colors group"
                      >
                        <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {cSlug.toUpperCase()}: {lSlug.replace(/-/g, " ")}
                        </span>
                        <span className="text-xs font-mono text-slate-400 group-hover:translate-x-1 transition-transform">
                          Open &rarr;
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Achievements, Quiz Scores & Reset */}
          <div className="space-y-8">
            {/* Badges & Achievements */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Award className="h-4 w-4 text-amber-500" />
                Achievements & Badges
              </h2>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <div className="text-2xl">⚡</div>
                  <div className="font-bold text-xs text-slate-800 dark:text-slate-200">First Step</div>
                  <div className="text-[10px] text-slate-500">Completed 1st lesson</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <div className="text-2xl">🔥</div>
                  <div className="font-bold text-xs text-slate-800 dark:text-slate-200">Consistency</div>
                  <div className="text-[10px] text-slate-500">3+ day streak</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <div className="text-2xl">🧠</div>
                  <div className="font-bold text-xs text-slate-800 dark:text-slate-200">Quiz Master</div>
                  <div className="text-[10px] text-slate-500">100% on a quiz</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center space-y-1">
                  <div className="text-2xl">💻</div>
                  <div className="font-bold text-xs text-slate-800 dark:text-slate-200">Code Builder</div>
                  <div className="text-[10px] text-slate-500">Solved 1st problem</div>
                </div>
              </div>
            </div>

            {/* Quiz Performance Card */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-slate-100">
                Recent Quiz Results
              </h2>
              <div className="space-y-2 text-xs font-mono">
                {Object.entries(progress.quizScores).map(([qId, data]) => (
                  <div
                    key={qId}
                    className="flex items-center justify-between p-2.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800"
                  >
                    <span className="truncate max-w-[140px] text-slate-700 dark:text-slate-300 font-semibold">
                      {qId}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                      {data.score} / {data.total} ({Math.round((data.score / data.total) * 100)}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Reset Button */}
            <div className="pt-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={resetProgress}
                className="w-full text-xs font-mono text-slate-400 hover:text-red-500"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reset Local Progress Data
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
