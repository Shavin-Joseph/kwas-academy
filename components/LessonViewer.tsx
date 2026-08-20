"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CodePlayground } from "./CodePlayground";
import { Course, Lesson } from "@/lib/coursesData";
import {
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  HelpCircle,
  Code2,
  Check,
  AlertCircle,
  Lightbulb,
  GraduationCap,
  Play,
  RotateCcw,
  Menu,
  X,
} from "lucide-react";

interface LessonViewerProps {
  course: Course;
  currentLesson: Lesson;
}

export function LessonViewer({ course, currentLesson }: LessonViewerProps) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [showExerciseSolution, setShowExerciseSolution] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Flatten all lessons in course to find next/prev
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const currentIndex = allLessons.findIndex((l) => l.slug === currentLesson.slug);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  // Load completed lessons from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`kwas_course_${course.slug}`);
      if (saved) {
        setCompletedLessons(JSON.parse(saved));
      }
    } catch (e) {
      console.error(e);
    }
  }, [course.slug]);

  // Mark lesson completed
  const toggleComplete = (slug: string) => {
    let updated: string[];
    if (completedLessons.includes(slug)) {
      updated = completedLessons.filter((s) => s !== slug);
    } else {
      updated = [...completedLessons, slug];
    }
    setCompletedLessons(updated);
    try {
      localStorage.setItem(`kwas_course_${course.slug}`, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const isCurrentCompleted = completedLessons.includes(currentLesson.slug);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-ink text-fg font-body">
        {/* Educational Top Sub-Header */}
        <div className="border-b border-line bg-panel2/80 px-4 py-3 sm:px-8 sticky top-14 z-40 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-muted truncate">
              <Link href="/courses" className="text-amber font-semibold hover:underline">
                Courses
              </Link>
              <span>›</span>
              <Link href={`/courses/${course.slug}`} className="hover:text-fg transition-colors truncate">
                {course.shortTitle}
              </Link>
              <span>›</span>
              <span className="text-fg font-medium truncate">{currentLesson.title}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden flex items-center gap-1.5 rounded-lg border border-line bg-panel px-3 py-1.5 font-mono text-xs text-muted hover:text-fg"
              >
                {sidebarOpen ? <X size={14} /> : <Menu size={14} />}
                <span>Syllabus</span>
              </button>

              <button
                onClick={() => toggleComplete(currentLesson.slug)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-mono text-xs font-semibold transition-all ${
                  isCurrentCompleted
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-panel border border-line text-muted hover:text-fg hover:border-amber/40"
                }`}
              >
                <CheckCircle2 size={14} />
                <span>{isCurrentCompleted ? "Completed ✓" : "Mark as Done"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* W3Schools-Style Dual-Pane Layout */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Fixed Syllabus Sidebar */}
            <aside
              className={`lg:col-span-3 rounded-2xl border border-line bg-panel/80 p-5 h-fit lg:sticky lg:top-28 ${
                sidebarOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <h3 className="font-display text-sm font-bold text-fg">{course.shortTitle}</h3>
                  <p className="font-mono text-xs text-amber mt-0.5">
                    {completedLessons.length} / {allLessons.length} Completed
                  </p>
                </div>
                <GraduationCap size={20} className="text-amber" />
              </div>

              {/* Progress Bar */}
              <div className="mt-3 w-full bg-panel2 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-amber h-full transition-all duration-300"
                  style={{ width: `${(completedLessons.length / allLessons.length) * 100}%` }}
                />
              </div>

              {/* Modules & Lessons List */}
              <div className="mt-5 flex flex-col gap-5 max-h-[70vh] overflow-y-auto pr-1">
                {course.modules.map((mod, mIdx) => (
                  <div key={mod.id} className="flex flex-col gap-1.5">
                    <div className="font-mono text-[11px] font-bold text-faint uppercase tracking-wider">
                      Module {mIdx + 1}: {mod.title}
                    </div>
                    <div className="flex flex-col gap-1">
                      {mod.lessons.map((les) => {
                        const isCurrent = les.slug === currentLesson.slug;
                        const isDone = completedLessons.includes(les.slug);
                        return (
                          <Link
                            key={les.slug}
                            href={`/courses/${course.slug}/${les.slug}`}
                            className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-xs transition-all ${
                              isCurrent
                                ? "bg-amber text-ink font-semibold shadow-md"
                                : "text-muted hover:bg-panel2 hover:text-fg"
                            }`}
                          >
                            <span className="truncate pr-2">{les.title}</span>
                            {isDone && <Check size={14} className={isCurrent ? "text-ink" : "text-emerald-400"} />}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Center Pedagogical Reading Canvas */}
            <article className="lg:col-span-9 flex flex-col gap-8">
              {/* Lesson Hero Header */}
              <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-amber mb-3">
                  <span className="rounded-full bg-amber/10 border border-amber/30 px-3 py-0.5 font-semibold">
                    {currentLesson.level}
                  </span>
                  <span>•</span>
                  <span>{currentLesson.duration} Study Time</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-semibold">Interactive Practice Enabled</span>
                </div>
                <h1 className="font-display text-2xl font-bold tracking-tight text-fg sm:text-3xl lg:text-4xl">
                  {currentLesson.title}
                </h1>
                <p className="mt-2 text-sm font-mono text-muted">{currentLesson.tagline}</p>
              </div>

              {/* Lesson Theoretical Content */}
              <div className="rounded-2xl border border-line bg-panel/60 p-6 sm:p-8 text-sm leading-relaxed text-muted space-y-4">
                <div className="whitespace-pre-wrap font-body text-fg leading-relaxed text-base">
                  {currentLesson.content}
                </div>
              </div>

              {/* W3Schools-Style "Try It Yourself" Code Box */}
              <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8 flex flex-col gap-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-line pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-fg">
                        Example &amp; &quot;Try It Yourself&quot; Code
                      </h3>
                      <p className="font-mono text-xs text-muted">{currentLesson.codeSnippet.description}</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-emerald-400 font-semibold">
                    100% In-Browser Execution
                  </span>
                </div>

                <CodePlayground
                  initialLanguage={currentLesson.codeSnippet.language}
                  initialCode={currentLesson.codeSnippet.code}
                  height="h-[420px]"
                />
              </div>

              {/* Hands-on Exercise Challenge */}
              <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8 flex flex-col gap-4">
                <div className="flex items-center gap-2 font-display text-base font-bold text-fg">
                  <Code2 size={18} className="text-amber" />
                  <h3>Test Your Knowledge: Coding Exercise</h3>
                </div>
                <p className="text-sm text-muted">{currentLesson.exercise.instruction}</p>

                <CodePlayground
                  initialLanguage={currentLesson.exercise.language}
                  initialCode={currentLesson.exercise.initialCode}
                  height="h-[300px]"
                />

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line/60 pt-4">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-amber hover:underline"
                  >
                    <Lightbulb size={14} />
                    <span>{showHint ? "Hide Hint" : "Need a Hint?"}</span>
                  </button>

                  <button
                    onClick={() => setShowExerciseSolution(!showExerciseSolution)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3.5 py-1.5 font-mono text-xs text-fg hover:border-amber/40"
                  >
                    <span>{showExerciseSolution ? "Hide Solution" : "View Solution Code"}</span>
                  </button>
                </div>

                {showHint && (
                  <div className="rounded-xl border border-amber/30 bg-amber/5 p-4 font-mono text-xs text-amber">
                    💡 <strong>Hint:</strong> {currentLesson.exercise.hint}
                  </div>
                )}

                {showExerciseSolution && (
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 flex flex-col gap-2">
                    <span className="font-mono text-xs font-bold text-emerald-400">Solution Code:</span>
                    <pre className="font-mono text-xs text-fg bg-panel2 p-3 rounded-lg overflow-x-auto">
                      {currentLesson.exercise.solutionCode}
                    </pre>
                  </div>
                )}
              </div>

              {/* Knowledge Check Quiz */}
              {currentLesson.quiz.length > 0 && (
                <div className="rounded-2xl border border-line bg-panel p-6 sm:p-8 flex flex-col gap-6">
                  <div className="flex items-center gap-2 font-display text-base font-bold text-fg">
                    <HelpCircle size={18} className="text-amber" />
                    <h3>Chapter Quiz &amp; Concept Check</h3>
                  </div>

                  {currentLesson.quiz.map((q, qIndex) => (
                    <div key={qIndex} className="flex flex-col gap-3">
                      <p className="font-display text-sm font-semibold text-fg">
                        {qIndex + 1}. {q.question}
                      </p>
                      <div className="flex flex-col gap-2">
                        {q.options.map((opt, optIndex) => {
                          const isSelected = selectedAnswers[qIndex] === optIndex;
                          const showResult = quizSubmitted;
                          return (
                            <button
                              key={optIndex}
                              onClick={() => {
                                if (!quizSubmitted) {
                                  setSelectedAnswers({ ...selectedAnswers, [qIndex]: optIndex });
                                }
                              }}
                              className={`text-left p-3.5 rounded-xl border font-mono text-xs transition-all ${
                                isSelected
                                  ? showResult
                                    ? opt.isCorrect
                                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                                      : "border-red-500 bg-red-500/10 text-red-400"
                                    : "border-amber bg-amber/10 text-amber font-semibold"
                                  : showResult && opt.isCorrect
                                  ? "border-emerald-500/50 bg-emerald-500/5 text-emerald-400"
                                  : "border-line bg-panel2 text-muted hover:border-line hover:text-fg"
                              }`}
                            >
                              {opt.text}
                              {showResult && isSelected && (
                                <p className="mt-2 text-[11px] text-muted font-normal">{opt.explanation}</p>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={() => setQuizSubmitted(!quizSubmitted)}
                    className="w-fit rounded-lg bg-amber px-4 py-2 font-mono text-xs font-bold text-ink hover:opacity-90 transition-opacity"
                  >
                    {quizSubmitted ? "Reset Quiz" : "Submit Answers »"}
                  </button>
                </div>
              )}

              {/* Next / Previous Navigation Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                {prevLesson ? (
                  <Link
                    href={`/courses/${course.slug}/${prevLesson.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-4 py-2.5 font-mono text-xs font-medium text-muted hover:text-fg hover:border-amber/40 transition-all"
                  >
                    <ChevronLeft size={16} />
                    <span>« Previous: {prevLesson.title}</span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextLesson ? (
                  <Link
                    href={`/courses/${course.slug}/${nextLesson.slug}`}
                    onClick={() => toggleComplete(currentLesson.slug)}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber px-5 py-2.5 font-mono text-xs font-bold text-ink hover:opacity-90 transition-all shadow-lg"
                  >
                    <span>Next Chapter: {nextLesson.title} »</span>
                    <ChevronRight size={16} />
                  </Link>
                ) : (
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 font-mono text-xs font-bold text-ink hover:opacity-90"
                  >
                    <span>Complete Course 🎉</span>
                  </Link>
                )}
              </div>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
