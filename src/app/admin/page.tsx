"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COURSES } from "@/content/courses";
import {
  Shield,
  Users,
  BookOpen,
  TrendingUp,
  Settings,
  Plus,
  Edit,
  Search,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "courses" | "users" | "announcements">("overview");
  const [courseSearch, setCourseSearch] = useState("");

  const totalLessons = COURSES.reduce(
    (acc, c) => acc + c.modules.reduce((mAcc, m) => mAcc + m.lessons.length, 0),
    0
  );

  const mockUsers = [
    { id: "usr_1", name: "Alex Developer", email: "alex@kwasacademy.dev", role: "Student", progress: "45%", joined: "2026-01-15" },
    { id: "usr_2", name: "Sarah Connor", email: "sarah@cyberdyne.io", role: "Student", progress: "78%", joined: "2026-02-01" },
    { id: "usr_3", name: "Kenneth Kwas", email: "admin@kwasacademy.dev", role: "Admin", progress: "100%", joined: "2025-11-01" },
    { id: "usr_4", name: "Michael Chen", email: "m.chen@stanford.edu", role: "Student", progress: "30%", joined: "2026-02-10" },
    { id: "usr_5", name: "Elena Rostova", email: "elena@devops.org", role: "Student", progress: "62%", joined: "2026-02-18" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">
                Admin Control Center
              </h1>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-1">
              Platform Analytics, Content Management, Course Authoring &amp; User Registry
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            <Badge variant="success">System Healthy • v1.0.0</Badge>
            <Link href="/learn/html/html-introduction">
              <Button size="sm" variant="outline">
                <Eye className="h-3.5 w-3.5" /> View Public Site
              </Button>
            </Link>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-4 text-xs font-mono">
          {[
            { id: "overview", label: "Analytics Overview", icon: <TrendingUp className="h-4 w-4" /> },
            { id: "courses", label: "Course & Curriculum Manager", icon: <BookOpen className="h-4 w-4" /> },
            { id: "users", label: "User Management", icon: <Users className="h-4 w-4" /> },
            { id: "announcements", label: "System Announcements", icon: <Settings className="h-4 w-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as "overview" | "courses" | "users" | "announcements")}
              className={`flex items-center gap-2 py-3 px-2 border-b-2 font-semibold transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* 1. OVERVIEW TAB */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* KPI Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-1">
                <span className="text-xs font-mono text-slate-500 uppercase">Total Registered Users</span>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 font-mono">
                  12,480
                </div>
                <span className="text-[11px] font-mono text-emerald-600 flex items-center gap-1">
                  +14% this month
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-1">
                <span className="text-xs font-mono text-slate-500 uppercase">Published Courses</span>
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                  {COURSES.length}
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {totalLessons} Active Lessons
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-1">
                <span className="text-xs font-mono text-slate-500 uppercase">Completed Lessons</span>
                <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
                  84,920
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Avg completion rate: 68%
                </span>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-1">
                <span className="text-xs font-mono text-slate-500 uppercase">Average Quiz Score</span>
                <div className="text-3xl font-extrabold text-amber-500 font-mono">
                  91.4%
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  Across 18,200 submissions
                </span>
              </div>
            </div>

            {/* Popular Courses & Engagement Table */}
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 shadow-xs">
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-mono">
                Most Popular Courses & Enrollment
              </h3>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {COURSES.map((course, idx) => (
                  <div
                    key={course.id}
                    className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-slate-400 font-bold">0{idx + 1}</span>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                          {course.title}
                        </div>
                        <div className="text-slate-500 text-[11px] font-mono">
                          Category: {course.category} • Level: {course.level}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 font-mono text-slate-600 dark:text-slate-400">
                      <span>{1200 * (5 - idx)} Enrollments</span>
                      <Badge variant="success">Active</Badge>
                      <Link href={`/learn/${course.slug}`}>
                        <Button size="sm" variant="outline" className="text-xs font-mono">
                          Manage &rarr;
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 2. COURSES TAB */}
        {activeTab === "courses" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Filter curriculum..."
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                />
              </div>

              <Button size="sm" variant="primary" className="text-xs font-mono">
                <Plus className="h-4 w-4" /> Create New Course
              </Button>
            </div>

            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {COURSES.filter((c) => c.title.toLowerCase().includes(courseSearch.toLowerCase())).map((course) => (
                  <div key={course.id} className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{course.category}</Badge>
                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                          {course.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 max-w-2xl">
                        {course.description}
                      </p>
                      <div className="text-[11px] font-mono text-slate-400">
                        {course.modules.length} Modules • {course.modules.reduce((a, m) => a + m.lessons.length, 0)} Lessons
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link href={`/learn/${course.slug}`}>
                        <Button size="sm" variant="outline" className="text-xs font-mono">
                          <Edit className="h-3.5 w-3.5" /> Edit Syllabus
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. USERS TAB */}
        {activeTab === "users" && (
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-50 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 text-slate-500 uppercase">
                  <tr>
                    <th className="p-3.5">User</th>
                    <th className="p-3.5">Role</th>
                    <th className="p-3.5">Progress</th>
                    <th className="p-3.5">Joined Date</th>
                    <th className="p-3.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {mockUsers.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3.5">
                        <div className="font-semibold text-slate-900 dark:text-slate-100 font-sans">{u.name}</div>
                        <div className="text-slate-400 text-[11px]">{u.email}</div>
                      </td>
                      <td className="p-3.5">
                        <Badge variant={u.role === "Admin" ? "primary" : "secondary"}>
                          {u.role}
                        </Badge>
                      </td>
                      <td className="p-3.5 text-emerald-600 dark:text-emerald-400 font-bold">
                        {u.progress}
                      </td>
                      <td className="p-3.5 text-slate-500">{u.joined}</td>
                      <td className="p-3.5 text-right">
                        <Button size="sm" variant="ghost" className="text-xs font-mono">
                          Inspect
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. ANNOUNCEMENTS TAB */}
        {activeTab === "announcements" && (
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 font-mono">
              Global Platform Announcements
            </h3>
            <p className="text-xs text-slate-500">
              Broadcast banner updates across the entire KWAS Academy learning network.
            </p>
            <textarea
              placeholder="e.g. Next.js 15 & System Design courses are now live! Start learning today."
              className="w-full h-24 p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-mono text-slate-800 dark:text-slate-200"
            />
            <Button size="sm" variant="primary" className="text-xs font-mono">
              Publish Banner
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
