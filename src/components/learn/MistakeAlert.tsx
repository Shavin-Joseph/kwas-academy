import React from "react";
import { CommonMistake } from "@/types";
import { XCircle, CheckCircle2, AlertTriangle } from "lucide-react";

interface MistakeAlertProps {
  mistakes: CommonMistake[];
}

export function MistakeAlert({ mistakes }: MistakeAlertProps) {
  if (!mistakes || mistakes.length === 0) return null;

  return (
    <div className="my-8 space-y-6">
      <div className="flex items-center gap-2 text-base font-semibold text-red-600 dark:text-red-400">
        <AlertTriangle className="h-5 w-5" />
        <h3>Common Mistakes & How to Avoid Them</h3>
      </div>

      <div className="space-y-6">
        {mistakes.map((item, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-red-200 bg-red-50/40 p-5 dark:border-red-900/50 dark:bg-red-950/20"
          >
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
              #{idx + 1}: {item.mistake}
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
              {item.explanation}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Bad Code */}
              <div className="rounded-lg border border-red-300 bg-slate-950 p-3 dark:border-red-800">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-red-400 uppercase tracking-wider mb-1 font-mono">
                  <XCircle className="h-3.5 w-3.5" />
                  <span>Incorrect / Antipattern</span>
                </div>
                <pre className="text-xs font-mono text-red-200 overflow-x-auto p-2">
                  <code>{item.badCode}</code>
                </pre>
              </div>

              {/* Good Code */}
              <div className="rounded-lg border border-emerald-300 bg-slate-950 p-3 dark:border-emerald-800">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1 font-mono">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Correct / Professional Solution</span>
                </div>
                <pre className="text-xs font-mono text-emerald-200 overflow-x-auto p-2">
                  <code>{item.goodCode}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
