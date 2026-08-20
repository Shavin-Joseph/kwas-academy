import React from "react";
import { DifficultyLevel } from "@/types";
import { Badge } from "./Badge";

interface DifficultyBadgeProps {
  level: DifficultyLevel;
  className?: string;
}

export function DifficultyBadge({ level, className }: DifficultyBadgeProps) {
  switch (level) {
    case "Beginner":
    case "Easy":
      return (
        <Badge variant="success" className={className}>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-0.5" />
          {level}
        </Badge>
      );
    case "Intermediate":
    case "Medium":
      return (
        <Badge variant="primary" className={className}>
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-0.5" />
          {level}
        </Badge>
      );
    case "Advanced":
    case "Hard":
      return (
        <Badge variant="warning" className={className}>
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-0.5" />
          {level}
        </Badge>
      );
    case "Expert":
      return (
        <Badge variant="danger" className={className}>
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 mr-0.5" />
          Expert
        </Badge>
      );
    default:
      return <Badge className={className}>{level}</Badge>;
  }
}
