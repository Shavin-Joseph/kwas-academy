import React from "react";
import Link from "next/link";
import { Mail, Globe, ShieldCheck, Heart, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs select-none">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              An advanced, documentation-first programming and technology learning platform. From complete beginner syntax to distributed system design, DevOps, cybersecurity, and AI engineering.
            </p>
            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 space-y-1">
              <div>
                Platform: <span className="font-semibold text-slate-700 dark:text-slate-300">academy.kwas.tech</span>
              </div>
              <div className="flex items-center gap-1.5 pt-1">
                <Globe className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>A project by </span>
                <a
                  href="https://kwas.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-0.5"
                >
                  KWAS Technologies <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Learn Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono text-[11px]">
              Curriculum
            </h4>
            <ul className="space-y-2">
              <li><Link href="/courses" className="hover:text-blue-600 dark:hover:text-blue-400">All 20+ Courses</Link></li>
              <li><Link href="/learn/html" className="hover:text-blue-600 dark:hover:text-blue-400">HTML5 Docs</Link></li>
              <li><Link href="/learn/css" className="hover:text-blue-600 dark:hover:text-blue-400">CSS3 & Layouts</Link></li>
              <li><Link href="/learn/javascript" className="hover:text-blue-600 dark:hover:text-blue-400">JavaScript ES6+</Link></li>
              <li><Link href="/learn/python" className="hover:text-blue-600 dark:hover:text-blue-400">Python 3 Core</Link></li>
              <li><Link href="/learn/sql" className="hover:text-blue-600 dark:hover:text-blue-400">SQL & PostgreSQL</Link></li>
              <li><Link href="/learn/rust" className="hover:text-blue-600 dark:hover:text-blue-400">Rust Systems</Link></li>
            </ul>
          </div>

          {/* Paths Column */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono text-[11px]">
              Roadmaps & Tools
            </h4>
            <ul className="space-y-2">
              <li><Link href="/roadmaps" className="hover:text-blue-600 dark:hover:text-blue-400">All 12 Roadmaps</Link></li>
              <li><Link href="/roadmaps/frontend" className="hover:text-blue-600 dark:hover:text-blue-400">Frontend Engineer</Link></li>
              <li><Link href="/roadmaps/backend" className="hover:text-blue-600 dark:hover:text-blue-400">Backend Engineer</Link></li>
              <li><Link href="/roadmaps/full-stack" className="hover:text-blue-600 dark:hover:text-blue-400">Full-Stack Architect</Link></li>
              <li><Link href="/playground" className="hover:text-blue-600 dark:hover:text-blue-400">Cloud Studio Playground</Link></li>
              <li><Link href="/practice" className="hover:text-blue-600 dark:hover:text-blue-400">Practice Arena</Link></li>
              <li><Link href="/glossary" className="hover:text-blue-600 dark:hover:text-blue-400">Tech Glossary</Link></li>
            </ul>
          </div>

          {/* Company & Legal Column (AdSense Required) */}
          <div className="space-y-3">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 uppercase tracking-wider font-mono text-[11px]">
              Company &amp; Legal
            </h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About KWAS Academy</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-blue-600 dark:hover:text-blue-400">Disclaimer</Link></li>
              <li>
                <a
                  href="mailto:support@kwas.tech"
                  className="text-blue-600 dark:text-blue-400 font-mono hover:underline flex items-center gap-1 mt-2"
                >
                  <Mail className="h-3 w-3" /> support@kwas.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <div>
            &copy; 2026 KWAS Academy (academy.kwas.tech) — Key Web App Solutions Technologies.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <span>•</span>
            <Link href="/cookies" className="hover:underline">Cookies</Link>
            <span>•</span>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <span>•</span>
            <a
              href="mailto:support@kwas.tech"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              support@kwas.tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
