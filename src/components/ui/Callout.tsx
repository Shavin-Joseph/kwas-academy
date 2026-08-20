import React from "react";
import { cn } from "@/lib/utils";
import { Lightbulb, BookmarkCheck, ShieldAlert, Sparkles } from "lucide-react";

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "tip" | "note" | "important" | "concept";
  title?: string;
}

export function Callout({
  type = "tip",
  title,
  children,
  className,
  ...props
}: CalloutProps) {
  const configs = {
    tip: {
      icon: <Lightbulb className="h-4 w-4 text-amber-500" />,
      border: "border-l-4 border-l-amber-500 bg-amber-50/50 dark:bg-amber-950/20 text-slate-800 dark:text-slate-200",
      defaultTitle: "PRO TIP",
    },
    note: {
      icon: <BookmarkCheck className="h-4 w-4 text-blue-500" />,
      border: "border-l-4 border-l-blue-500 bg-blue-50/50 dark:bg-blue-950/20 text-slate-800 dark:text-slate-200",
      defaultTitle: "NOTE",
    },
    important: {
      icon: <ShieldAlert className="h-4 w-4 text-purple-500" />,
      border: "border-l-4 border-l-purple-500 bg-purple-50/50 dark:bg-purple-950/20 text-slate-800 dark:text-slate-200",
      defaultTitle: "CRITICAL REQUIREMENT",
    },
    concept: {
      icon: <Sparkles className="h-4 w-4 text-emerald-500" />,
      border: "border-l-4 border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20 text-slate-800 dark:text-slate-200",
      defaultTitle: "KEY CONCEPT",
    },
  };

  const config = configs[type];

  return (
    <div
      className={cn(
        "my-4 rounded-r-md border border-slate-200 py-3.5 px-4 dark:border-slate-800",
        config.border,
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-700 dark:text-slate-300 uppercase mb-1.5 font-mono">
        {config.icon}
        <span>{title || config.defaultTitle}</span>
      </div>
      <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
