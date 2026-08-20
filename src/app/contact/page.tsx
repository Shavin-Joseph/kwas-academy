import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Mail,
  Clock,
  ShieldCheck,
  Building,
  HelpCircle,
  CheckCircle2,
  Globe,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact Us | KWAS Academy — Official Support & Inquiries",
  description:
    "Get in touch with KWAS Academy and KWAS Technologies. Official contact via email at support@kwas.tech for technical assistance, course feedback, and partnership inquiries.",
  keywords: [
    "Contact KWAS Academy",
    "KWAS Technologies Support",
    "support@kwas.tech",
    "KWAS Tech inquiries",
    "Course feedback",
  ],
  openGraph: {
    title: "Contact KWAS Academy Support",
    description: "Official contact channels for KWAS Academy and KWAS Technologies via support@kwas.tech.",
    url: "https://academy.kwas.tech/contact",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/contact",
  },
};

export default function ContactPage() {
  const contactGuidelines = [
    {
      title: "Course Corrections & Errata",
      desc: "Found a typo, syntax error, or outdated library API in any of our 198+ lessons? Send us the lesson link and snippet for review.",
    },
    {
      title: "Interactive Sandbox & Compiler Bug Reports",
      desc: "If you encounter unexpected behavior in our live browser or multi-language stdout simulator, let us know your OS and browser version.",
    },
    {
      title: "Partnerships & Educational Inquiries",
      desc: "Schools, universities, and open-source organizations looking to utilize or contribute to our open curriculum.",
    },
    {
      title: "General Feedback & Feature Requests",
      desc: "Suggest new technology courses, playground enhancements, or roadmap additions you would like to see.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Contact Us" },
          ]}
        />

        {/* Header Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-mono font-semibold">
            <Mail className="h-3.5 w-3.5" /> OFFICIAL SUPPORT CHANNEL
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Contact KWAS Academy
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            We value your feedback, questions, and curriculum suggestions. To ensure every message is reviewed by our engineering and editorial staff, all inquiries are handled exclusively via our official support email.
          </p>
        </div>

        {/* Primary Email Contact Card */}
        <div className="rounded-2xl border-2 border-blue-600 dark:border-blue-500 bg-linear-to-b from-blue-50/60 via-white to-blue-50/20 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-950 p-8 sm:p-10 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                DIRECT EMAIL DESK
              </span>
              <div className="text-2xl sm:text-3xl font-mono font-extrabold text-slate-900 dark:text-slate-100">
                support@kwas.tech
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Managed by KWAS Technologies • Average response time: Within 24–48 business hours
              </p>
            </div>

            <a href="mailto:support@kwas.tech">
              <Button size="lg" variant="academic" className="gap-2 font-mono text-sm font-semibold whitespace-nowrap shadow-md">
                <Mail className="h-4 w-4" /> Send Email Now &rarr;
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-blue-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Monday – Friday, UTC</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Encrypted &amp; Privacy-First</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>KWAS Technologies</span>
            </div>
          </div>
        </div>

        {/* Inquiries Types Grid */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              What We Can Help You With
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Please include relevant URLs, code snippets, or error messages in your email for faster triage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactGuidelines.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Parent Brand Notice */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-xs text-slate-500 dark:text-slate-400 space-y-2">
          <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-slate-100">
            <Globe className="h-4 w-4 text-blue-600" />
            <span>KWAS Technologies Network</span>
          </div>
          <p className="leading-relaxed">
            KWAS Academy (<a href="https://academy.kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">academy.kwas.tech</a>) is part of the Key Web App Solutions Technologies network. For enterprise custom software, web app solutions, and tools, visit <a href="https://kwas.tech" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">kwas.tech</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
