import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://academy.kwas.tech"),
  title: {
    default: "KWAS Academy — Free Coding Courses & Interactive In-Browser Practice (A-Z)",
    template: "%s | KWAS Academy",
  },
  description:
    "Master Full-Stack Web Development, JavaScript, TypeScript, Python, REST APIs, Next.js, Android, Kotlin, and Linux with free in-browser interactive code sandboxes.",
  keywords: [
    "Free Coding Courses Online",
    "Learn JavaScript A to Z",
    "Python Programming Tutorial Free",
    "Build REST APIs From Scratch",
    "Learn Next.js 14 Course",
    "Android Kotlin Jetpack Compose Course",
    "Linux Terminal Bash Scripting",
    "Interactive Code Sandbox Free",
    "Cursos de programacion gratis online",
    "Aprender a programar desde cero",
  ],
  authors: [{ name: "KWAS Technologies", url: "https://kwas.tech" }],
  creator: "KWAS Technologies",
  publisher: "KWAS Technologies (Key Web App Solutions Technologies)",
  alternates: {
    canonical: "https://academy.kwas.tech",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://academy.kwas.tech",
    siteName: "KWAS Academy",
    title: "KWAS Academy — Free Coding Courses & Live Practice",
    description:
      "Master modern software engineering: JavaScript, Python, REST APIs, React, Next.js, Android, and Linux with free interactive browser sandboxes.",
  },
  other: {
    "google-adsense-account": "ca-pub-8249181691893109",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8249181691893109"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-ink text-fg antialiased selection:bg-amber selection:text-ink font-body">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
