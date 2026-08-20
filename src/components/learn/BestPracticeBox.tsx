import React from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";

interface BestPracticeBoxProps {
  practices: string[];
}

export function BestPracticeBox({ practices }: BestPracticeBoxProps) {
  if (!practices || practices.length === 0) return null;

  return (
    <div className="my-8 rounded-xl border border-emerald-200 bg-emerald-50/40 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/20">
      <div className="flex items-center gap-2 text-base font-semibold text-emerald-700 dark:text-emerald-400 mb-4">
        <ShieldCheck className="h-5 w-5" />
        <h3>Industry Best Practices & Professional Standards</h3>
      </div>

      <ul className="space-y-3">
        {practices.map((practice, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
            <CheckCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">{practice}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
