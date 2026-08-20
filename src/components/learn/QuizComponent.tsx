"use client";

import React, { useState } from "react";
import { QuizQuestion } from "@/types";
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Award } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";
import { useProgress } from "@/context/ProgressContext";
import confetti from "canvas-confetti";

interface QuizComponentProps {
  quizId: string;
  questions: QuizQuestion[];
}

export function QuizComponent({ quizId, questions }: QuizComponentProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const { recordQuizScore } = useProgress();

  if (!questions || questions.length === 0) return null;

  const handleSelect = (qIdx: number, oIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qIdx]: oIdx,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    recordQuizScore(quizId, score, questions.length);

    if (score === questions.length) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {
        // ignore
      }
    }
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  const score = calculateScore();
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    <div className="my-10 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
        <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-slate-100">
          <HelpCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <h3>Lesson Knowledge Check & Quiz</h3>
        </div>
        <span className="text-xs font-mono text-slate-500">
          {questions.length} Questions
        </span>
      </div>

      <div className="space-y-8">
        {questions.map((q, qIdx) => {
          const userAnswer = selectedAnswers[qIdx];
          const isCorrect = submitted && userAnswer === q.correctIndex;

          return (
            <div key={q.id} className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                  Q{qIdx + 1}
                </span>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {q.question}
                </p>
              </div>

              <div className="space-y-2 pl-7">
                {q.options.map((option, oIdx) => {
                  const isSelected = userAnswer === oIdx;
                  const isThisCorrect = submitted && oIdx === q.correctIndex;
                  const isThisWrongSelected = submitted && isSelected && oIdx !== q.correctIndex;

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelect(qIdx, oIdx)}
                      disabled={submitted}
                      className={cn(
                        "w-full text-left p-3 rounded-lg border text-sm transition-all flex items-center justify-between cursor-pointer",
                        !submitted && isSelected && "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-200 font-medium",
                        !submitted && !isSelected && "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300",
                        submitted && isThisCorrect && "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-medium",
                        submitted && isThisWrongSelected && "border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200",
                        submitted && !isThisCorrect && !isThisWrongSelected && "border-slate-200 dark:border-slate-800 opacity-50"
                      )}
                    >
                      <span>{option}</span>
                      {submitted && isThisCorrect && (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      )}
                      {submitted && isThisWrongSelected && (
                        <XCircle className="h-4 w-4 text-red-600 dark:text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div
                  className={cn(
                    "ml-7 p-3 rounded-lg text-xs leading-relaxed border",
                    isCorrect
                      ? "bg-emerald-50/70 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-300"
                      : "bg-amber-50/70 border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-300"
                  )}
                >
                  <span className="font-semibold">{isCorrect ? "Correct!" : "Explanation:"}</span>{" "}
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Quiz Footer & Action Bar */}
      <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
        {!submitted ? (
          <Button
            onClick={handleSubmit}
            disabled={!allAnswered}
            variant="primary"
          >
            Submit Answers ({Object.keys(selectedAnswers).length}/{questions.length})
          </Button>
        ) : (
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className={cn("h-5 w-5", score === questions.length ? "text-emerald-500" : "text-blue-500")} />
              <span className="text-sm font-semibold font-mono">
                Score: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
              </span>
            </div>
            <Button
              onClick={handleRetry}
              variant="outline"
              size="sm"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Retry Quiz
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
