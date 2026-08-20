"use client";

import React, { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
  onRun?: () => void;
}

export function CodeBlock({
  code,
  language = "javascript",
  title,
  showLineNumbers = true,
  className,
  onRun,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Failed to copy code", e);
    }
  };

  const lines = code.trim().split("\n");

  return (
    <div className={cn("my-4 overflow-hidden rounded-lg border border-slate-800 bg-slate-950 text-slate-100 shadow-md", className)}>
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-slate-900/90 text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <Terminal className="h-3.5 w-3.5 text-blue-400" />
          <span className="font-semibold text-slate-300 uppercase tracking-wider">{language}</span>
          {title && <span className="text-slate-500">• {title}</span>}
        </div>
        <div className="flex items-center gap-2">
          {onRun && (
            <button
              onClick={onRun}
              className="px-2 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white font-sans text-xs font-medium transition-colors cursor-pointer"
            >
              Run Code
            </button>
          )}
          <button
            onClick={handleCopy}
            title="Copy code"
            className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-sans">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span className="font-sans">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto scroll-smooth touch-pan-x p-3 sm:p-4 text-xs sm:text-sm font-mono leading-relaxed">
        <pre className="flex min-w-full">
          {showLineNumbers && (
            <div className="select-none pr-3 sm:pr-4 text-right text-slate-600 font-mono text-[11px] sm:text-xs leading-relaxed border-r border-slate-800/80 mr-3 sm:mr-4 shrink-0">
              {lines.map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
          )}
          <code className={`language-${language} flex-1 text-slate-200`}>
            {lines.map((line, idx) => (
              <div key={idx} className="hover:bg-slate-900/50 -mx-2 px-2 rounded">
                {line || " "}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
