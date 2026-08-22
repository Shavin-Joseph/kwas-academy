import React from "react";
import Link from "next/link";

export function SubNav() {
  const quickLinks = [
    { name: "HTML", href: "/learn/html" },
    { name: "CSS", href: "/learn/css" },
    { name: "JavaScript", href: "/learn/javascript" },
    { name: "TypeScript", href: "/learn/typescript" },
    { name: "Python", href: "/learn/python" },
    { name: "SQL", href: "/learn/sql" },
    { name: "React", href: "/learn/react" },
    { name: "Next.js", href: "/learn/nextjs" },
    { name: "Node.js", href: "/learn/nodejs" },
    { name: "Linux & Ubuntu", href: "/learn/linux" },
    { name: "Kotlin", href: "/learn/kotlin" },
    { name: "Swift", href: "/learn/swift" },
    { name: "C# / .NET", href: "/learn/csharp" },
    { name: "Java", href: "/learn/java" },
    { name: "Go", href: "/learn/go" },
    { name: "Rust", href: "/learn/rust" },
    { name: "C++", href: "/learn/cpp" },
    { name: "DSA", href: "/learn/dsa" },
    { name: "System Design", href: "/learn/system-design" },
    { name: "DevOps", href: "/learn/devops" },
    { name: "Cybersecurity", href: "/learn/cybersecurity" },
    { name: "AI / ML", href: "/learn/ai-ml" },
  ];

  return (
    <div className="border-b border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-200 text-xs font-mono select-none overflow-x-auto scroll-smooth touch-pan-x">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 flex items-center gap-1 py-1.5 min-w-max">
        <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider mr-2 shrink-0">
          QUICK START:
        </span>
        {quickLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="px-2.5 py-1 rounded hover:bg-slate-800 hover:text-white transition-colors shrink-0"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
