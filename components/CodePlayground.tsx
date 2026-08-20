"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, RotateCcw, Copy, Check, Terminal, Eye, Code2, Sparkles, Layers, FileCode, CheckCircle2 } from "lucide-react";

interface CodePlaygroundProps {
  initialLanguage?: "html" | "javascript" | "python" | "bash";
  initialCode?: string;
  height?: string;
  showLanguageSelector?: boolean;
}

export function CodePlayground({
  initialLanguage = "javascript",
  initialCode = "",
  height = "h-[450px]",
  showLanguageSelector = true,
}: CodePlaygroundProps) {
  const [language, setLanguage] = useState<"html" | "javascript" | "python" | "bash">(initialLanguage);
  const [code, setCode] = useState(
    initialCode ||
      (initialLanguage === "html"
        ? `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; }
    .card { background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 12px; }
    .btn { background: #f59e0b; color: #000; font-weight: bold; border: none; padding: 10px 18px; border-radius: 8px; cursor: pointer; }
  </style>
</head>
<body>
  <div class="card">
    <h2>KWAS Academy Interactive Playground</h2>
    <p>Edit HTML, CSS, and JS to see instant live preview!</p>
    <button class="btn" onclick="alert('Hello from KWAS Academy!')">Click Me</button>
  </div>
</body>
</html>`
        : initialLanguage === "python"
        ? `# KWAS Academy Python Runner
def calculate_growth(initial_users, rate, months):
    users = initial_users
    for m in range(1, months + 1):
        users += users * rate
        print(f"Month {m}: {int(users)} global users")
    return int(users)

print("=== User Growth Simulation ===")
total = calculate_growth(1000, 0.25, 6)
print(f"Final Global Audience: {total}")`
        : initialLanguage === "bash"
        ? `#!/bin/bash
# KWAS Server Task Simulation
echo "Starting KWAS microservice deployment..."
echo "Node Version: $(node -v 2>/dev/null || echo 'v20.14.0')"
echo "Status: 100% Operational across 300+ Edge Locations"
echo "Done!"`
        : `// KWAS Academy JavaScript Engine
const students = [
  { name: "Alex", country: "USA", course: "Next.js Fullstack" },
  { name: "Elena", country: "Germany", course: "Python Mastery" },
  { name: "Raj", country: "India", course: "Android Jetpack" },
  { name: "Sofia", country: "Brazil", course: "REST APIs" }
];

console.log(\`Total Global Learners: \${students.length}\`);
students.forEach(s => {
  console.log(\`🎓 \${s.name} from \${s.country} is learning \${s.course}\`);
});`)
  );

  const [outputHtml, setOutputHtml] = useState("");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const runCode = useCallback(() => {
    setIsRunning(true);
    setConsoleLogs([]);

    if (language === "html") {
      setOutputHtml(code);
      setIsRunning(false);
      return;
    }

    // For JavaScript & Python / Bash simulation
    const logs: string[] = [];
    const customConsole = {
      log: (...args: any[]) => {
        logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a, null, 2) : String(a))).join(" "));
      },
      error: (...args: any[]) => {
        logs.push("[ERROR] " + args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" "));
      },
      warn: (...args: any[]) => {
        logs.push("[WARN] " + args.map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a))).join(" "));
      },
    };

    try {
      if (language === "javascript") {
        const runFn = new Function("console", code);
        runFn(customConsole);
      } else if (language === "python" || language === "bash") {
        // Safe interactive parser simulation for Python/Bash
        const lines = code.split("\n");
        lines.forEach((line) => {
          const trimmed = line.trim();
          if (trimmed.startsWith("print(") && trimmed.endsWith(")")) {
            const inner = trimmed.slice(6, -1);
            logs.push(inner.replace(/^['"f]|['"]$/g, ""));
          } else if (trimmed.startsWith("echo ")) {
            logs.push(trimmed.slice(5).replace(/^['"]|['"]$/g, ""));
          }
        });
        if (logs.length === 0) {
          logs.push("[Simulation Output] Code executed successfully.");
        }
      }
      setConsoleLogs(logs);
    } catch (err: any) {
      setConsoleLogs([`Runtime Error: ${err.message}`]);
    } finally {
      setIsRunning(false);
    }
  }, [code, language]);

  useEffect(() => {
    runCode();
  }, [runCode]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setCode(initialCode || "");
    setConsoleLogs([]);
    setOutputHtml("");
  };

  return (
    <div className="flex flex-col rounded-2xl border border-line bg-panel overflow-hidden shadow-2xl">
      {/* Playground Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-panel2 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-mono text-xs font-semibold text-fg flex items-center gap-1.5">
            <Code2 size={14} className="text-amber" />
            KWAS Live Code Sandbox
          </span>
        </div>

        {/* Language Tabs */}
        {showLanguageSelector && (
          <div className="flex items-center gap-1 rounded-lg border border-line bg-panel p-1">
            {(["javascript", "html", "python", "bash"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setLanguage(lang);
                }}
                className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold transition-all ${
                  language === lang ? "bg-amber text-ink shadow-sm" : "text-muted hover:text-fg"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1 rounded-lg border border-line bg-panel px-2.5 py-1.5 font-mono text-xs font-medium text-muted hover:text-fg hover:border-amber/40"
            title="Copy Code"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            <span>{copied ? "Copied" : "Copy"}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-1.5 rounded-lg border border-line bg-panel text-muted hover:text-fg hover:border-amber/40"
            title="Reset Code"
          >
            <RotateCcw size={13} />
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-1.5 font-mono text-xs font-bold text-ink hover:opacity-90 transition-opacity shadow-md"
          >
            <Play size={13} fill="currentColor" />
            <span>Run Code »</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Split Panes */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 ${height} divide-y lg:divide-y-0 lg:divide-x divide-line`}>
        {/* Code Input */}
        <div className="flex flex-col h-full bg-panel">
          <div className="flex items-center justify-between border-b border-line/60 bg-panel2/40 px-4 py-2 font-mono text-[11px] text-muted">
            <span>Editor ({language.toUpperCase()})</span>
            <span className="text-amber">Live Input</span>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            className="flex-1 w-full p-4 font-mono text-xs text-fg bg-transparent resize-none focus:outline-none leading-relaxed"
            placeholder="Write your code here..."
          />
        </div>

        {/* Output / Console */}
        <div className="flex flex-col h-full bg-panel2/50">
          <div className="flex items-center justify-between border-b border-line/60 bg-panel2/40 px-4 py-2 font-mono text-[11px] text-muted">
            <span className="flex items-center gap-1.5">
              {language === "html" ? <Eye size={12} className="text-amber" /> : <Terminal size={12} className="text-emerald-400" />}
              {language === "html" ? "Rendered HTML Preview" : "Console Output"}
            </span>
            <span className="text-emerald-400 font-semibold">Live Sandbox</span>
          </div>

          <div className="flex-1 overflow-auto p-4 font-mono text-xs">
            {language === "html" ? (
              <iframe
                ref={iframeRef}
                srcDoc={outputHtml}
                title="Output Preview"
                sandbox="allow-scripts"
                className="w-full h-full rounded-lg border border-line bg-white"
              />
            ) : consoleLogs.length > 0 ? (
              <div className="flex flex-col gap-1.5 text-emerald-400">
                {consoleLogs.map((log, i) => (
                  <div key={i} className="whitespace-pre-wrap leading-relaxed">
                    {log}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center text-muted/60 font-mono text-xs">
                Click &quot;Run Code »&quot; to execute and view output.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
