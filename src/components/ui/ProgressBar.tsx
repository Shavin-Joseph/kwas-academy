import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number; // 0 to 100
  max?: number;
  label?: string;
  showPercent?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "success" | "warning";
  className?: string;
}

export function ProgressBar({
  value,
  max = 100,
  label,
  showPercent = true,
  size = "md",
  variant = "primary",
  className,
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  const sizeClasses = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };

  const fillColors = {
    primary: "bg-blue-600 dark:bg-blue-500",
    success: "bg-emerald-600 dark:bg-emerald-500",
    warning: "bg-amber-500",
  };

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {(label || showPercent) && (
        <div className="flex justify-between items-center text-xs font-mono font-medium text-slate-600 dark:text-slate-400">
          {label && <span>{label}</span>}
          {showPercent && <span className="ml-auto font-semibold">{percentage}%</span>}
        </div>
      )}
      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800",
          sizeClasses[size]
        )}
      >
        <div
          className={cn("h-full transition-all duration-300 rounded-full", fillColors[variant])}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
