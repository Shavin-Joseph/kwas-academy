import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export function Logo({ className, size = "md", showTagline = true }: LogoProps) {
  const iconSizes = {
    sm: "h-7 w-7",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  const titleSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group shrink-0 select-none", className)}>
      {/* High-Quality Vector Emblem inspired by KWAS Technologies */}
      <div className={cn("relative flex items-center justify-center rounded-lg bg-linear-to-br from-blue-600 via-blue-700 to-indigo-900 p-0.5 shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all", iconSizes[size])}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          <rect width="40" height="40" rx="8" fill="url(#kwasGrad)" />
          {/* Circuit / Code brackets geometry */}
          <path
            d="M12 14L7 20L12 26"
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M28 14L33 20L28 26"
            stroke="#E0A63E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Central K geometry */}
          <path
            d="M17 12V28M17 20L24 12M19 18L25 28"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Glowing pulse dot */}
          <circle cx="20" cy="20" r="1.5" fill="#4FE3B0" />
          <defs>
            <linearGradient id="kwasGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0F172A" />
              <stop offset="0.5" stopColor="#1E3A8A" />
              <stop offset="1" stopColor="#0284C7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center leading-none">
          <span className={cn("font-extrabold tracking-tight text-slate-900 dark:text-slate-100", titleSizes[size])}>
            KWAS <span className="text-blue-600 dark:text-blue-400">Academy</span>
          </span>
        </div>
        {showTagline && (
          <span className="text-[9px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider leading-tight mt-0.5">
            Learn. Build. Master.
          </span>
        )}
      </div>
    </Link>
  );
}
