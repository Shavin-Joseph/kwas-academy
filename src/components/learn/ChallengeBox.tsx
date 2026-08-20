"use client";

import React, { useState } from "react";
import { Challenge } from "@/types";
import { Award, Lightbulb, Eye, EyeOff, Check, ArrowRight } from "lucide-react";
import { CodeBlock } from "../code/CodeBlock";
import { Button } from "../ui/Button";
import { useProgress } from "@/context/ProgressContext";
import confetti from "canvas-confetti";

interface ChallengeBoxProps {
  challenge: Challenge;
  lessonId: string;
}

export function ChallengeBox({ challenge, lessonId }: ChallengeBoxProps) {
  const [showHints, setShowHints] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [userCode, setUserCode] = useState(challenge.starterCode);
  const [isCompleted, setIsCompleted] = useState(false);
  const { recordProblemCompleted } = useProgress();

  const handleComplete = () => {
    setIsCompleted(true);
    recordProblemCompleted(`challenge-${lessonId}`);
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="my-8 rounded-xl border border-blue-200 bg-blue-50/30 p-6 dark:border-blue-900/50 dark:bg-blue-950/20">
      <div className="flex items-center justify-between pb-3 border-b border-blue-100 dark:border-blue-900 mb-4">
        <div className="flex items-center gap-2 text-base font-semibold text-blue-700 dark:text-blue-400">
          <Award className="h-5 w-5" />
          <h3>Coding Challenge: {challenge.title}</h3>
        </div>
        {isCompleted && (
          <span className="inline-flex items-center gap-1 text-xs font-semibold font-mono text-emerald-600 bg-emerald-100 dark:bg-emerald-950 px-2.5 py-1 rounded-full">
            <Check className="h-3.5 w-3.5" /> Solved (+75 XP)
          </span>
        )}
      </div>

      <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed font-sans">
        {challenge.description}
      </p>

      {/* Interactive Starter Editor */}
      <div className="my-4 rounded-lg overflow-hidden border border-slate-700 bg-slate-950">
        <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
          <span>YOUR CODE ({challenge.language})</span>
          <span>Editable</span>
        </div>
        <textarea
          value={userCode}
          onChange={(e) => setUserCode(e.target.value)}
          className="w-full h-40 bg-transparent text-emerald-300 font-mono text-xs sm:text-sm p-3 resize-none focus:outline-none leading-relaxed"
          spellCheck={false}
        />
      </div>

      {/* Hint & Solution Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-2">
          {challenge.hints.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowHints(!showHints)}
              className="text-xs"
            >
              <Lightbulb className="h-3.5 w-3.5 text-amber-500" />
              {showHints ? "Hide Hints" : `View Hints (${challenge.hints.length})`}
            </Button>
          )}

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSolution(!showSolution)}
            className="text-xs"
          >
            {showSolution ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
            {showSolution ? "Hide Solution" : "Reveal Solution"}
          </Button>
        </div>

        <Button
          variant={isCompleted ? "success" : "primary"}
          size="sm"
          onClick={handleComplete}
          disabled={isCompleted}
        >
          {isCompleted ? (
            <>
              <Check className="h-4 w-4" /> Completed
            </>
          ) : (
            <>
              Mark Challenge Solved <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      {/* Expandable Hints */}
      {showHints && (
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4 text-xs dark:border-amber-900/50 dark:bg-amber-950/30">
          <h5 className="font-semibold text-amber-800 dark:text-amber-300 mb-2">Hints:</h5>
          <ul className="list-disc pl-4 space-y-1 text-slate-700 dark:text-slate-300">
            {challenge.hints.map((hint, i) => (
              <li key={i}>{hint}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Expandable Solution */}
      {showSolution && (
        <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950 p-4">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono mb-2">
            Official Solution & Explanation
          </h5>
          <CodeBlock
            code={challenge.solutionCode}
            language={challenge.language}
            showLineNumbers={false}
          />
          <p className="text-xs text-slate-300 mt-2 leading-relaxed">
            {challenge.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
