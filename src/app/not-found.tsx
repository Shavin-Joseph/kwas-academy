import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { BookOpen, Home, Search } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-900 text-blue-600 font-mono font-bold text-2xl">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
            Lesson or Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-mono">
            The documentation topic or course module you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-2">
          <Link href="/">
            <Button size="sm" variant="academic" className="text-xs">
              <Home className="h-3.5 w-3.5" /> Return Home
            </Button>
          </Link>
          <Link href="/courses">
            <Button size="sm" variant="outline" className="text-xs">
              <BookOpen className="h-3.5 w-3.5" /> Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
