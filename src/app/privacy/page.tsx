import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, Globe } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy | KWAS Academy & KWAS Technologies",
  description:
    "Privacy Policy for KWAS Academy (academy.kwas.tech), operated by KWAS Technologies. Details on data handling, Google AdSense, GDPR/CCPA compliance, cookies, and user rights.",
  keywords: [
    "Privacy Policy KWAS Academy",
    "AdSense Privacy Policy",
    "GDPR CCPA Compliance",
    "Cookies Policy",
    "KWAS Technologies Privacy",
  ],
  openGraph: {
    title: "Privacy Policy — KWAS Academy",
    description: "Our comprehensive, transparent privacy policy and data governance rules.",
    url: "https://academy.kwas.tech/privacy",
  },
  alternates: {
    canonical: "https://academy.kwas.tech/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-4xl mx-auto px-4 space-y-10">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" },
          ]}
        />

        {/* Header */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-semibold">
            <ShieldCheck className="h-3.5 w-3.5" /> TRANSPARENT DATA GOVERNANCE
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
            Last Updated: August 20, 2026 • Effective Date: January 1, 2026
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            At <strong>KWAS Academy</strong> (<a href="https://academy.kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">academy.kwas.tech</a>), operated under <strong>KWAS Technologies (Key Web App Solutions Technologies)</strong> (<a href="https://kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">kwas.tech</a>), we are committed to respecting and protecting the privacy of our students, developers, and visitors.
          </p>
        </div>

        {/* Content Body */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-10 shadow-xs space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">1.</span> Information We Collect
            </h2>
            <p>
              KWAS Academy is designed with a privacy-first mindset. You can access and read all of our courses, documentation, and roadmaps without creating an account or submitting personal identification.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                <strong>Client-Side Local Storage:</strong> Preferences such as your chosen theme (Light / Dark) and code editor states are saved strictly within your browser&apos;s local storage and are never transmitted to external analytics servers without consent.
              </li>
              <li>
                <strong>Log Files:</strong> Like most standard web servers, our infrastructure may log non-identifiable technical data including internet protocol (IP) addresses, browser type, internet service provider (ISP), referring/exit pages, and operating systems to maintain uptime, security, and performance.
              </li>
              <li>
                <strong>Communications:</strong> If you contact us via email at <code className="font-mono text-blue-600 dark:text-blue-400">support@kwas.tech</code>, we receive your email address and message contents solely to respond to your inquiry.
              </li>
            </ul>
          </section>

          {/* Section 2: Advertising & Google AdSense */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">2.</span> Google AdSense &amp; Third-Party Advertising
            </h2>
            <p>
              We may partner with third-party advertising networks, such as <strong>Google AdSense</strong>, to serve advertisements when you visit our website.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>
                Google, as a third-party vendor, uses cookies to serve ads on KWAS Academy.
              </li>
              <li>
                Google&apos;s use of the <strong>DART cookie</strong> enables it to serve ads to users based on their visits to our site and other sites on the Internet.
              </li>
              <li>
                Users may opt out of the use of the DART cookie by visiting the <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Ad and Content Network Privacy Policy</a>.
              </li>
              <li>
                Third-party ad servers or ad networks use technology in their advertisements and links that appear on KWAS Academy, which are sent directly to your browser. They automatically receive your IP address when this occurs.
              </li>
            </ul>
          </section>

          {/* Section 3: Cookies & Web Beacons */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">3.</span> Cookies and Web Beacons
            </h2>
            <p>
              KWAS Academy uses cookies to store information about visitors&apos; preferences, to record user-specific information on which pages the user accesses or visits, and to customize web page content based on visitors&apos; browser type or other information that the visitor sends via their browser.
            </p>
            <p>
              You can choose to disable cookies through your individual browser options. Detailed information about cookie management with specific web browsers can be found at the browsers&apos; respective websites.
            </p>
          </section>

          {/* Section 4: GDPR Rights */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">4.</span> GDPR Data Protection Rights (European Union)
            </h2>
            <p>
              Under the General Data Protection Regulation (GDPR), users residing in the European Economic Area (EEA) have the following rights:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>The right to access your personal data.</li>
              <li>The right to rectification of any inaccurate information.</li>
              <li>The right to erasure (&quot;the right to be forgotten&quot;).</li>
              <li>The right to restrict or object to processing.</li>
              <li>The right to data portability.</li>
            </ul>
          </section>

          {/* Section 5: CCPA / CPRA Rights */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">5.</span> California Consumer Privacy Act (CCPA/CPRA)
            </h2>
            <p>
              If you are a California resident, you have the right to know what categories of personal data we collect, request deletion, and opt out of the sale or sharing of your personal information. <strong>We do not sell personal data.</strong>
            </p>
          </section>

          {/* Section 6: Children's Online Privacy Protection */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">6.</span> Children&apos;s Information (COPPA)
            </h2>
            <p>
              KWAS Academy does not knowingly collect any Personal Identifiable Information from children under the age of 13. If a parent or guardian believes that KWAS Academy has in its database the personal information of a child under the age of 13, please contact us immediately at <code className="font-mono text-blue-600 dark:text-blue-400">support@kwas.tech</code> and we will use our best efforts to promptly remove such information.
            </p>
          </section>

          {/* Section 7: Contact Us */}
          <section className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <span className="font-mono text-blue-600 dark:text-blue-400">7.</span> Privacy Inquiries &amp; Contact
            </h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or data governance practices, please contact our data team exclusively via email:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-xs space-y-1">
              <div><strong>Organization:</strong> KWAS Technologies (Key Web App Solutions Technologies)</div>
              <div><strong>Platform:</strong> KWAS Academy (academy.kwas.tech)</div>
              <div><strong>Email:</strong> <a href="mailto:support@kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">support@kwas.tech</a></div>
              <div><strong>Parent Domain:</strong> <a href="https://kwas.tech" className="text-blue-600 dark:text-blue-400 hover:underline">https://kwas.tech</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
