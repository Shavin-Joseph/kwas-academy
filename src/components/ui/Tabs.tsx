"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  className?: string;
  tabListClassName?: string;
}

export function Tabs({
  tabs,
  defaultTab,
  onChange,
  className,
  tabListClassName,
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleSelect = (id: string) => {
    setActiveTab(id);
    onChange?.(id);
  };

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("flex border-b border-slate-200 dark:border-slate-800 gap-2", tabListClassName)}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => handleSelect(tab.id)}
              className={cn(
                "flex items-center gap-2 border-b-2 py-2.5 px-4 text-sm font-medium transition-colors cursor-pointer",
                isActive
                  ? "border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-semibold"
                  : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-4">{currentTab?.content}</div>
    </div>
  );
}
