"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-lg border border-line bg-panel2 opacity-50" />
    );
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-line bg-panel2 text-muted transition-colors hover:border-amber/50 hover:text-amber"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
