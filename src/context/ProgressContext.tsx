"use client";

import React, { createContext, useContext, useState } from "react";
import { UserProgress } from "@/types";

interface ProgressContextType {
  progress: UserProgress;
  markLessonCompleted: (courseSlug: string, lessonSlug: string) => void;
  markLessonIncomplete: (courseSlug: string, lessonSlug: string) => void;
  isLessonCompleted: (courseSlug: string, lessonSlug: string) => boolean;
  toggleBookmark: (path: string) => void;
  isBookmarked: (path: string) => boolean;
  recordQuizScore: (quizId: string, score: number, total: number) => void;
  recordProblemCompleted: (problemId: string) => void;
  isProblemCompleted: (problemId: string) => boolean;
  recordProjectCompleted: (projectSlug: string) => void;
  isProjectCompleted: (projectSlug: string) => boolean;
  getCourseProgress: (courseSlug: string, totalLessonsInCourse?: number) => number;
  resetProgress: () => void;
}

const STORAGE_KEY = "kwas_academy_progress_v1";

const initialProgress: UserProgress = {
  completedLessons: [
    "html/html-introduction",
    "javascript/js-introduction",
    "python/python-introduction",
  ],
  courseProgress: {
    html: 15,
    javascript: 10,
    python: 12,
  },
  quizScores: {
    "quiz-html-intro": { score: 3, total: 3, timestamp: "2026-08-20T00:00:00.000Z" },
    "quiz-js-intro": { score: 3, total: 3, timestamp: "2026-08-20T00:00:00.000Z" },
  },
  completedProblems: ["problem-two-sum", "problem-reverse-string"],
  completedProjects: ["portfolio-website"],
  bookmarks: ["javascript/js-variables", "python/python-functions"],
  streakDays: 4,
  lastActiveDate: "2026-08-20",
  points: 450,
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          const today = new Date().toISOString().split("T")[0];
          const lastActive = parsed.lastActiveDate;
          
          let streak = parsed.streakDays || 1;
          if (lastActive) {
            const lastDate = new Date(lastActive);
            const currDate = new Date(today);
            const diffDays = Math.floor((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
            
            if (diffDays === 1) {
              streak += 1;
            } else if (diffDays > 1) {
              streak = 1;
            }
          }

          return {
            ...parsed,
            streakDays: streak,
            lastActiveDate: today,
          };
        }
      } catch {
        // fallback
      }
    }
    return initialProgress;
  });

  const saveProgress = (newProgress: UserProgress) => {
    setProgress(newProgress);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
      } catch {
        // ignore
      }
    }
  };

  const getLessonKey = (courseSlug: string, lessonSlug: string) => `${courseSlug}/${lessonSlug}`;

  const markLessonCompleted = (courseSlug: string, lessonSlug: string) => {
    const key = getLessonKey(courseSlug, lessonSlug);
    if (!progress.completedLessons.includes(key)) {
      const updatedLessons = [...progress.completedLessons, key];
      const updatedProgress = {
        ...progress,
        completedLessons: updatedLessons,
        points: progress.points + 50,
      };
      saveProgress(updatedProgress);
    }
  };

  const markLessonIncomplete = (courseSlug: string, lessonSlug: string) => {
    const key = getLessonKey(courseSlug, lessonSlug);
    const updatedLessons = progress.completedLessons.filter((l) => l !== key);
    saveProgress({
      ...progress,
      completedLessons: updatedLessons,
    });
  };

  const isLessonCompleted = (courseSlug: string, lessonSlug: string) => {
    const key = getLessonKey(courseSlug, lessonSlug);
    return progress.completedLessons.includes(key);
  };

  const toggleBookmark = (path: string) => {
    const exists = progress.bookmarks.includes(path);
    const updatedBookmarks = exists
      ? progress.bookmarks.filter((b) => b !== path)
      : [...progress.bookmarks, path];
    
    saveProgress({
      ...progress,
      bookmarks: updatedBookmarks,
    });
  };

  const isBookmarked = (path: string) => {
    return progress.bookmarks.includes(path);
  };

  const recordQuizScore = (quizId: string, score: number, total: number) => {
    const pointsGained = Math.round((score / total) * 100);
    const updatedQuizScores = {
      ...progress.quizScores,
      [quizId]: { score, total, timestamp: new Date().toISOString() },
    };
    saveProgress({
      ...progress,
      quizScores: updatedQuizScores,
      points: progress.points + pointsGained,
    });
  };

  const recordProblemCompleted = (problemId: string) => {
    if (!progress.completedProblems.includes(problemId)) {
      saveProgress({
        ...progress,
        completedProblems: [...progress.completedProblems, problemId],
        points: progress.points + 75,
      });
    }
  };

  const isProblemCompleted = (problemId: string) => {
    return progress.completedProblems.includes(problemId);
  };

  const recordProjectCompleted = (projectSlug: string) => {
    if (!progress.completedProjects.includes(projectSlug)) {
      saveProgress({
        ...progress,
        completedProjects: [...progress.completedProjects, projectSlug],
        points: progress.points + 200,
      });
    }
  };

  const isProjectCompleted = (projectSlug: string) => {
    return progress.completedProjects.includes(projectSlug);
  };

  const getCourseProgress = (courseSlug: string, totalLessonsInCourse?: number) => {
    const completedForCourse = progress.completedLessons.filter((l) => l.startsWith(`${courseSlug}/`)).length;
    if (!totalLessonsInCourse || totalLessonsInCourse === 0) {
      return completedForCourse > 0 ? Math.min(100, completedForCourse * 15) : 0;
    }
    return Math.min(100, Math.round((completedForCourse / totalLessonsInCourse) * 100));
  };

  const resetProgress = () => {
    const cleanState: UserProgress = {
      completedLessons: [],
      courseProgress: {},
      quizScores: {},
      completedProblems: [],
      completedProjects: [],
      bookmarks: [],
      streakDays: 1,
      lastActiveDate: new Date().toISOString().split("T")[0],
      points: 0,
    };
    saveProgress(cleanState);
  };

  return (
    <ProgressContext.Provider
      value={{
        progress,
        markLessonCompleted,
        markLessonIncomplete,
        isLessonCompleted,
        toggleBookmark,
        isBookmarked,
        recordQuizScore,
        recordProblemCompleted,
        isProblemCompleted,
        recordProjectCompleted,
        isProjectCompleted,
        getCourseProgress,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
