"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Moon,
  Sun,
  Menu,
  X,
  BookOpen,
  Map,
  Terminal,
  FolderKanban,
  Zap,
  HelpCircle,
  Mail,
  Layers,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { SearchDialog } from "./SearchDialog";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Learn Docs", href: "/learn/html/html-introduction", icon: <BookOpen className="h-4 w-4" /> },
    { label: "Courses", href: "/courses", icon: <Layers className="h-4 w-4" /> },
    { label: "Technologies", href: "/technologies", icon: <Zap className="h-4 w-4" /> },
    { label: "Roadmaps", href: "/roadmaps", icon: <Map className="h-4 w-4" /> },
    { label: "Practice", href: "/practice", icon: <Zap className="h-4 w-4" /> },
    { label: "Projects", href: "/projects", icon: <FolderKanban className="h-4 w-4" /> },
    { label: "Playground", href: "/playground", icon: <Terminal className="h-4 w-4" /> },
    { label: "Glossary", href: "/glossary", icon: <HelpCircle className="h-4 w-4" /> },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs select-none">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <div className="flex items-center shrink-0">
            <Logo size="md" />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 text-xs font-medium font-mono text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-2.5 py-1.5 rounded-md transition-colors",
                    isActive
                      ? "bg-slate-100 text-blue-600 dark:bg-slate-800 dark:text-blue-400 font-semibold"
                      : "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Search Trigger Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Documentation"
              className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs transition-colors cursor-pointer"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-slate-400">
                Ctrl K
              </kbd>
            </button>

            {/* Theme Toggle (Light Default -> Dark on Click) */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer text-xs font-mono"
            >
              {theme === "light" ? (
                <>
                  <Moon className="h-4 w-4 text-slate-600" />
                  <span className="hidden sm:inline text-[11px] font-semibold text-slate-600">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="h-4 w-4 text-amber-400" />
                  <span className="hidden sm:inline text-[11px] font-semibold text-amber-400">Light</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="xl:hidden p-2 rounded-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer bg-slate-50 dark:bg-slate-800/80"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5 text-blue-600 dark:text-blue-400" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Seamless Mobile Navigation Drawer (Renders directly below navbar bar) */}
        {isMobileMenuOpen && (
          <div className="xl:hidden w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-y-auto max-h-[calc(100vh-4rem)] p-4 space-y-4">
            {/* Quick Search inside Mobile Drawer */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="w-full text-left pl-3 pr-4 py-2.5 text-xs font-mono rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 flex items-center justify-between cursor-pointer hover:border-blue-400"
            >
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4 text-slate-400" />
                <span>Search 198+ lessons &amp; docs...</span>
              </div>
              <span className="text-[10px] bg-slate-200 dark:bg-slate-800 px-2 py-0.5 rounded font-bold">
                Open
              </span>
            </button>

            {/* Main Navigation Links Grid */}
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 p-3 rounded-lg text-xs font-mono transition-colors border",
                      isActive
                        ? "bg-blue-50 border-blue-300 text-blue-700 dark:bg-blue-950/80 dark:border-blue-700 dark:text-blue-300 font-bold"
                        : "border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    <span className={cn(isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400")}>
                      {link.icon}
                    </span>
                    <span className="font-semibold">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Company & Support Direct Links */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <div className="text-[11px] font-mono font-bold uppercase text-slate-400 mb-2">
                Company &amp; Legal
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-center hover:bg-slate-200"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-center hover:bg-slate-200"
                >
                  Contact
                </Link>
                <Link
                  href="/privacy"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-center hover:bg-slate-200"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-center hover:bg-slate-200"
                >
                  Terms
                </Link>
              </div>
            </div>

            {/* Direct Support Email Desk */}
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>Official Support:</span>
              <a
                href="mailto:support@kwas.tech"
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-1"
              >
                <Mail className="h-3.5 w-3.5" /> support@kwas.tech
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchDialog isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
