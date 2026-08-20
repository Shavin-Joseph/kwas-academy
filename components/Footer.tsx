import Link from "next/link";
import { Mail, GraduationCap, ExternalLink } from "lucide-react";
import { COURSES } from "@/lib/coursesData";

export function Footer() {
  return (
    <footer className="border-t border-line/70 bg-panel/60">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Col */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber text-ink font-bold">
                <GraduationCap size={18} />
              </div>
              <span className="font-display text-base font-bold text-fg">
                KWAS Academy
              </span>
            </div>
            <p className="text-xs text-muted leading-relaxed">
              100% Free World-Class Software Engineering Platform by KWAS Technologies. Step-by-step from zero to high-level architecture.
            </p>
            <div className="mt-2 text-xs font-mono text-faint">
              Official Subdomain: <span className="text-amber">academy.kwas.tech</span>
            </div>
          </div>

          {/* Courses Col 1 */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-fg">
              Master Tracks (A–Z)
            </h3>
            {COURSES.slice(0, 4).map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="text-xs text-muted hover:text-amber transition-colors"
              >
                {c.title}
              </Link>
            ))}
          </div>

          {/* Courses Col 2 */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-fg">
              Advanced Topics
            </h3>
            {COURSES.slice(4).map((c) => (
              <Link
                key={c.slug}
                href={`/courses/${c.slug}`}
                className="text-xs text-muted hover:text-amber transition-colors"
              >
                {c.title}
              </Link>
            ))}
            <Link
              href="/playground"
              className="text-xs text-emerald-400 font-mono hover:underline mt-1"
            >
              ⚡ Live Code Sandbox
            </Link>
          </div>

          {/* Legal & KWAS Ecosystem */}
          <div className="flex flex-col gap-2.5">
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-fg">
              Ecosystem &amp; Legal
            </h3>
            <a
              href="https://kwas.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-amber transition-colors flex items-center gap-1"
            >
              <span>KWAS Technologies Main Hub</span>
              <ExternalLink size={11} />
            </a>
            <a
              href="https://kwas.tech/tools"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-amber transition-colors flex items-center gap-1"
            >
              <span>Free Developer Tools</span>
              <ExternalLink size={11} />
            </a>
            <Link href="/privacy" className="text-xs text-muted hover:text-fg transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted hover:text-fg transition-colors">
              Terms &amp; Conditions
            </Link>
            <a
              href="mailto:support@kwas.tech"
              className="text-xs text-amber font-mono hover:underline flex items-center gap-1 mt-1"
            >
              <Mail size={12} />
              support@kwas.tech
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-faint">
          <div>
            © {new Date().getFullYear()} KWAS Technologies (Key Web App Solutions Technologies). All rights reserved.
          </div>
          <div className="text-muted">
            Designed for Learners &amp; Engineers Worldwide 🌍
          </div>
        </div>
      </div>
    </footer>
  );
}
