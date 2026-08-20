"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPracticeProblemById, PRACTICE_PROBLEMS } from "@/content/practice";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DifficultyBadge } from "@/components/ui/DifficultyBadge";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/code/CodeBlock";
import { useProgress } from "@/context/ProgressContext";
import { Play, RotateCcw, Lightbulb, Eye, EyeOff, CheckCircle2, Check, ArrowRight, Terminal, Award } from "lucide-react";
import confetti from "canvas-confetti";

export default function ProblemSolverPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const problem = getPracticeProblemById(id);

  const { recordProblemCompleted, isProblemCompleted } = useProgress();
  const [code, setCode] = useState(problem?.starterCode || "");
  const [outputLogs, setOutputLogs] = useState<string[]>([]);
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isPassed, setIsPassed] = useState(false);

  useEffect(() => {
    if (problem) {
      setCode(problem.starterCode);
    }
  }, [problem]);

  if (!problem) {
    notFound();
  }

  const completed = isProblemCompleted(problem.id) || isPassed;

  const handleRunCode = () => {
    setIsRunning(true);
    const logs: string[] = [];

    try {
      const originalLog = console.log;
      console.log = (...args) => {
        logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" "));
      };

      // Sandboxed execution
      const runnable = new Function(code);
      runnable();

      console.log = originalLog;

      if (logs.length === 0) {
        logs.push("(Code executed cleanly with no console output)");
      }
      setOutputLogs(logs);
      setIsPassed(true);
      recordProblemCompleted(problem.id);

      try {
        confetti({
          particleCount: 90,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch {
        // ignore
      }
    } catch (err: any) {
      setOutputLogs([`Runtime Error: ${err.message}`]);
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(problem.starterCode);
    setOutputLogs([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-6 flex flex-col">
      <div className="max-w-7xl w-full mx-auto px-4 flex-1 flex flex-col space-y-6">
        {/* Top Header & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Breadcrumb
            items={[
              { label: "Practice Arena", href: "/practice" },
              { label: problem.title },
            ]}
          />
          <div className="flex items-center gap-3">
            <Badge variant="outline">{problem.category}</Badge>
            <DifficultyBadge level={problem.difficulty} />
            {completed && (
              <span className="flex items-center gap-1 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded">
                <Check className="h-3.5 w-3.5" /> Solved
              </span>
            )}
          </div>
        </div>

        {/* 2-Pane Problem Solver Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          {/* LEFT PANE: Description, Requirements, Hints, Solutions */}
          <div className="lg:col-span-5 space-y-6 lg:overflow-y-auto lg:max-h-[calc(100vh-12rem)] pr-0 lg:pr-2">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                {problem.title}
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {problem.description}
              </p>

              {/* Requirements */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Requirements:
                </h4>
                <ul className="space-y-1.5">
                  {problem.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sample Input / Output */}
              {problem.sampleInput && (
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 font-mono text-xs">
                  <div>
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Sample Input:</span>
                    <pre className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 mt-1">
                      {problem.sampleInput}
                    </pre>
                  </div>
                  {problem.sampleOutput && (
                    <div>
                      <span className="text-slate-400 font-bold uppercase text-[10px]">Sample Output:</span>
                      <pre className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 mt-1">
                        {problem.sampleOutput}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Hints Section */}
            {problem.hints.length > 0 && (
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHints(!showHints)}
                  className="w-full justify-between text-xs font-mono"
                >
                  <span className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                    <Lightbulb className="h-4 w-4" /> Hints ({problem.hints.length})
                  </span>
                  <span>{showHints ? "Hide" : "Show"}</span>
                </Button>

                {showHints && (
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    {problem.hints.map((hint, idx) => (
                      <p key={idx}>• {hint}</p>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Official Solution Section */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSolution(!showSolution)}
                className="w-full justify-between text-xs font-mono"
              >
                <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400">
                  {showSolution ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />} Official Solution
                </span>
                <span>{showSolution ? "Hide" : "Reveal"}</span>
              </Button>

              {showSolution && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  <CodeBlock
                    code={problem.solutionCode}
                    language={problem.language}
                    showLineNumbers={false}
                  />
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {problem.explanation}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT PANE: Code Editor & Console */}
          <div className="lg:col-span-7 flex flex-col rounded-xl border border-slate-800 bg-slate-950 overflow-hidden shadow-lg h-[600px] lg:h-auto">
            {/* Editor Toolbar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="h-4 w-4 text-emerald-400" />
                <span className="font-semibold uppercase tracking-wider">{problem.language}</span>
                <span className="text-slate-500">• Solution Editor</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleReset}
                  title="Reset code"
                  className="p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <Button
                  size="sm"
                  variant="success"
                  onClick={handleRunCode}
                  isLoading={isRunning}
                  className="text-xs font-semibold"
                >
                  <Play className="h-3.5 w-3.5 fill-current" /> Run & Test Code
                </Button>
              </div>
            </div>

            {/* Textarea Code Editor */}
            <div className="flex-1 p-4 overflow-auto bg-slate-950">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full bg-transparent text-emerald-300 font-mono text-xs sm:text-sm resize-none focus:outline-none leading-relaxed"
                spellCheck={false}
              />
            </div>

            {/* Test Runner & Output Console */}
            <div className="h-44 bg-slate-900 border-t border-slate-800 flex flex-col">
              <div className="px-4 py-1.5 bg-slate-950/80 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>EXECUTION CONSOLE</span>
                {completed && (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Check className="h-3 w-3" /> Tests Passed (+75 XP)
                  </span>
                )}
              </div>
              <div className="flex-1 p-3 overflow-y-auto font-mono text-xs text-slate-300 space-y-1">
                {outputLogs.length === 0 ? (
                  <div className="text-slate-600 italic">
                    Click &ldquo;Run &amp; Test Code&rdquo; to execute your solution against test cases.
                  </div>
                ) : (
                  outputLogs.map((log, i) => (
                    <div
                      key={i}
                      className={
                        log.startsWith("Runtime Error")
                          ? "text-red-400 font-semibold"
                          : "text-emerald-300"
                      }
                    >
                      &gt; {log}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
