"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Code2,
  Terminal,
  Sparkles,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Layers,
  Globe,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { COURSES } from "@/lib/coursesData";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCoursesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <Image
            src="/icon.png?v=2"
            alt="KWAS Academy"
            width={30}
            height={30}
            className="h-7 w-7 rounded-md object-cover"
            priority
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-base font-bold tracking-tight text-fg group-hover:text-amber transition-colors leading-none">
                KWAS Academy
              </span>
              <span className="rounded bg-amber/20 px-1.5 py-0.5 font-mono text-[10px] font-bold text-amber leading-none">
                PRO
              </span>
            </div>
            <span className="hidden sm:inline font-mono text-[9px] text-faint tracking-tight mt-1 leading-none">
              Educational Platform • academy.kwas.tech
            </span>
          </div>
        </Link>

        {/* Desktop Main Navigation Links */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* Courses Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <button
              onClick={() => setCoursesOpen((prev) => !prev)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors py-2 ${
                isActive("/courses") ? "text-amber font-bold" : "text-muted hover:text-fg"
              }`}
            >
              <BookOpen size={15} />
              <span>All Courses</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${coursesOpen || isActive("/courses") ? "rotate-180 text-amber" : ""}`}
              />
            </button>

            {/* Courses Mega-Menu */}
            <AnimatePresence>
              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute -left-16 top-full mt-1 w-[600px] rounded-2xl border border-line bg-panel p-5 shadow-2xl z-[100]"
                >
                  <div className="flex items-center justify-between border-b border-line pb-3 px-1">
                    <span className="font-mono text-xs text-amber font-semibold flex items-center gap-1.5">
                      <GraduationCap size={15} />
                      Master Engineering Tracks (A–Z)
                    </span>
                    <Link
                      href="/courses"
                      onClick={() => setCoursesOpen(false)}
                      className="font-mono text-[11px] text-muted hover:text-amber transition-colors flex items-center gap-1"
                    >
                      View All Tracks <ArrowRight size={12} />
                    </Link>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {COURSES.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        onClick={() => setCoursesOpen(false)}
                        className="group flex items-start gap-2.5 rounded-xl bg-panel2 p-3 transition-all border border-line/60 hover:border-amber/50 hover:bg-panel"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-panel text-amber">
                          <Code2 size={16} />
                        </div>
                        <div className="overflow-hidden">
                          <div className="font-display text-xs font-bold text-fg group-hover:text-amber transition-colors truncate">
                            {course.shortTitle}
                          </div>
                          <div className="text-[10px] font-mono text-muted truncate mt-0.5">
                            {course.duration} • {course.category}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Standalone Live Playground */}
          <Link
            href="/playground"
            className={`text-sm font-mono font-semibold transition-colors flex items-center gap-1.5 ${
              isActive("/playground")
                ? "text-emerald-400 font-bold"
                : "text-muted hover:text-emerald-400"
            }`}
          >
            <Terminal size={14} className="text-emerald-400" />
            <span>Code Playground</span>
          </Link>

          {/* Learning Roadmap */}
          <Link
            href="/courses"
            className={`text-sm font-medium transition-colors ${
              isActive("/courses") && !coursesOpen ? "text-amber font-semibold" : "text-muted hover:text-fg"
            }`}
          >
            Roadmaps &amp; Syllabus
          </Link>

          {/* About Academy */}
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors ${
              isActive("/about") ? "text-amber font-semibold" : "text-muted hover:text-fg"
            }`}
          >
            About
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://kwas.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-xs font-medium text-fg transition-colors hover:border-amber/50 hover:text-amber"
          >
            <span>kwas.tech</span>
            <ExternalLink size={12} />
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle mobile menu"
            className="rounded-md p-2 text-fg border border-line bg-panel2"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu with Exact Active Highlight */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line/70 bg-ink lg:hidden"
          >
            <div className="flex flex-col gap-1.5 px-5 py-4">
              <Link
                href="/courses"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive("/courses")
                    ? "bg-amber/15 text-amber font-semibold border border-amber/30"
                    : "text-muted hover:bg-panel hover:text-fg"
                }`}
              >
                <span>All Master Courses (7 Tracks)</span>
                <BookOpen size={15} />
              </Link>

              <Link
                href="/playground"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 text-sm font-mono font-medium transition-colors flex items-center justify-between ${
                  isActive("/playground")
                    ? "bg-emerald-500/15 text-emerald-400 font-bold border border-emerald-500/30"
                    : "text-muted hover:bg-panel hover:text-fg"
                }`}
              >
                <span>⚡ Live Code Playground</span>
                <Terminal size={15} className="text-emerald-400" />
              </Link>

              <div className="ml-2 my-1 border-l border-line/60 pl-3 flex flex-col gap-1">
                <span className="font-mono text-[10px] font-bold text-faint uppercase">Popular Tracks</span>
                {COURSES.slice(0, 4).map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    onClick={() => setOpen(false)}
                    className={`text-xs py-1 transition-colors ${
                      isActive(`/courses/${c.slug}`)
                        ? "text-amber font-bold"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    • {c.shortTitle}
                  </Link>
                ))}
              </div>

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive("/about")
                    ? "bg-amber/15 text-amber font-semibold border border-amber/30"
                    : "text-muted hover:bg-panel hover:text-fg"
                }`}
              >
                About KWAS Academy
              </Link>

              <a
                href="https://kwas.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3.5 py-2.5 text-sm font-medium text-amber hover:bg-panel flex items-center justify-between border border-line/40 mt-2"
              >
                <span>Main Site (kwas.tech)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
