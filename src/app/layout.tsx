import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import { ProgressProvider } from "@/context/ProgressContext";
import { Navbar } from "@/components/layout/Navbar";
import { SubNav } from "@/components/layout/SubNav";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.kwas.tech"),
  title: {
    default: "KWAS Academy — Learn. Build. Master.",
    template: "%s | KWAS Academy",
  },
  description:
    "An advanced, documentation-first programming and technology learning platform by KWAS Technologies. Over 20+ complete tracks covering HTML, CSS, JavaScript, TypeScript, React 19, Next.js 16, Node.js, Python 3, SQL, Java 21, C++20, Go, Rust, DSA, System Design, DevOps, Cybersecurity, and AI/ML.",
  keywords: [
    "Learn Programming",
    "KWAS Academy",
    "KWAS Technologies",
    "Key Web App Solutions Technologies",
    "Web Development Stack",
    "HTML5 CSS3 JavaScript",
    "React 19 Next.js 16",
    "Python 3 SQL PostgreSQL",
    "Java 21 C++20 Rust Go",
    "Data Structures & Algorithms",
    "System Design Microservices",
    "DevOps Docker Kubernetes",
    "Cybersecurity OWASP",
    "AI Machine Learning PyTorch",
  ],
  authors: [{ name: "KWAS Technologies Engineering", url: "https://kwas.tech" }],
  creator: "KWAS Technologies",
  publisher: "KWAS Technologies (Key Web App Solutions Technologies)",
  applicationName: "KWAS Academy",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  other: {
    "google-adsense-account": "ca-pub-8249181691893109",
    "brand-name": "KWAS Academy",
    "brand-fullname": "Key Web App Solutions Technologies Academy",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://academy.kwas.tech",
    siteName: "KWAS Academy",
    title: "KWAS Academy — Learn. Build. Master.",
    description:
      "Modern, comprehensive, documentation-first programming education with multi-language interactive sandboxes by KWAS Technologies.",
    images: [
      {
        url: "https://academy.kwas.tech/favicon.svg",
        width: 512,
        height: 512,
        alt: "KWAS Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KWAS Academy — Learn. Build. Master.",
    description:
      "Modern, comprehensive programming platform covering full-stack, systems, cloud, and AI engineering.",
    images: ["https://academy.kwas.tech/favicon.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="alternate" type="application/rss+xml" title="KWAS Academy RSS Feed" href="/feed.xml" />
        <link rel="search" type="application/opensearchdescription+xml" title="KWAS Academy Search" href="/opensearch.xml" />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white"
      >
        <ThemeProvider>
          <AuthProvider>
            <ProgressProvider>
              <Navbar />
              <SubNav />
              <div className="flex-1 flex flex-col">{children}</div>
              <Footer />
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
