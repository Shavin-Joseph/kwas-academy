import { Course } from "@/types";
import { htmlCourse } from "./html";
import { cssCourse } from "./css";
import { javascriptCourse } from "./javascript";
import { typescriptCourse } from "./typescript";
import { reactCourse } from "./react";
import { nextjsCourse } from "./nextjs";
import { nodejsCourse } from "./nodejs";
import { pythonCourse } from "./python";
import { sqlCourse } from "./sql";
import { javaCourse } from "./java";
import { cppCourse } from "./cpp";
import { goCourse } from "./go";
import { rustCourse } from "./rust";
import { dsaCourse } from "./dsa";
import { systemDesignCourse } from "./systemDesign";
import { devopsCourse } from "./devops";
import { cybersecurityCourse } from "./cybersecurity";
import { aiMlCourse } from "./aiMl";

export const COURSES: Course[] = [
  htmlCourse,
  cssCourse,
  javascriptCourse,
  typescriptCourse,
  reactCourse,
  nextjsCourse,
  nodejsCourse,
  pythonCourse,
  sqlCourse,
  javaCourse,
  cppCourse,
  goCourse,
  rustCourse,
  dsaCourse,
  systemDesignCourse,
  devopsCourse,
  cybersecurityCourse,
  aiMlCourse,
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getLessonBySlug(courseSlug: string, lessonSlug: string) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return undefined;
  for (const mod of course.modules) {
    const lesson = mod.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return { course, module: mod, lesson };
  }
  return undefined;
}
