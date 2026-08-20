export type DifficultyLevel = 
  | "Beginner" 
  | "Easy" 
  | "Intermediate" 
  | "Medium" 
  | "Hard" 
  | "Advanced" 
  | "Expert";

export type TechCategory = 
  | "Web Development"
  | "Frontend"
  | "Backend"
  | "Programming Languages"
  | "Databases"
  | "APIs"
  | "Frameworks"
  | "Mobile Development"
  | "Software Engineering"
  | "Data Structures & Algorithms"
  | "System Design"
  | "DevOps & Cloud"
  | "Cybersecurity"
  | "AI & Machine Learning";

export interface CodeExample {
  title?: string;
  language: string;
  code: string;
  executable?: boolean;
  output?: string;
  explanation?: string[];
  takeaway?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CommonMistake {
  mistake: string;
  badCode: string;
  goodCode: string;
  explanation: string;
}

export interface Challenge {
  title: string;
  description: string;
  starterCode: string;
  language: string;
  hints: string[];
  solutionCode: string;
  explanation: string;
}

export interface LessonSection {
  id: string;
  title: string;
  content?: string;
}

export interface Lesson {
  id: string;
  slug: string;
  courseSlug: string;
  moduleSlug: string;
  title: string;
  description: string;
  durationMinutes: number;
  difficulty: DifficultyLevel;
  whatYouWillLearn: string[];
  introduction: string;
  whyItMatters: string;
  syntax?: string;
  mainExample: CodeExample;
  detailedExplanation: string[];
  interactiveCode?: {
    html?: string;
    css?: string;
    js?: string;
    initialCode?: string;
    language?: string;
  };
  commonMistakes: CommonMistake[];
  bestPractices: string[];
  realWorldExample?: {
    title: string;
    scenario: string;
    code: string;
    language: string;
    takeaway: string;
  };
  challenge?: Challenge;
  quiz?: QuizQuestion[];
  summary: string[];
  nextLesson?: { title: string; slug: string; courseSlug: string };
  prevLesson?: { title: string; slug: string; courseSlug: string };
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: TechCategory;
  level: DifficultyLevel;
  estimatedHours: number;
  icon: string;
  badgeColor: string;
  prerequisites: string[];
  skillsGained: string[];
  featured?: boolean;
  modules: Module[];
}

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Optional";
  courseSlug?: string;
  lessonSlug?: string;
  topics: string[];
  recommendedProjects?: string[];
}

export interface RoadmapSection {
  id: string;
  title: string;
  description: string;
  nodes: RoadmapNode[];
}

export interface Roadmap {
  id: string;
  slug: string;
  title: string;
  description: string;
  targetRole: string;
  estimatedDuration: string;
  icon: string;
  color: string;
  sections: RoadmapSection[];
}

export interface PracticeProblem {
  id: string;
  slug: string;
  title: string;
  category: "Algorithm" | "Debugging" | "Output Prediction" | "SQL" | "Web Fundamentals" | "Data Structures";
  difficulty: DifficultyLevel;
  language: string;
  description: string;
  requirements: string[];
  sampleInput?: string;
  sampleOutput?: string;
  starterCode: string;
  hints: string[];
  solutionCode: string;
  explanation: string;
  testCases?: { input: string; expected: string }[];
}

export interface ProjectBlueprint {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  difficulty: DifficultyLevel;
  estimatedHours: number;
  technologies: string[];
  architectureDiagram?: string;
  overview: string;
  requirements: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    auth?: string;
  };
  steps: {
    stepNumber: number;
    title: string;
    description: string;
    codeSnippet?: string;
    language?: string;
    explanation: string;
  }[];
  testingGuidelines: string[];
  deploymentGuide: string[];
  advancedImprovements: string[];
}

export interface GlossaryTerm {
  id: string;
  slug: string;
  term: string;
  shortDefinition: string;
  technicalDefinition: string;
  category: string;
  codeSnippet?: {
    code: string;
    language: string;
  };
  relatedConcepts: string[];
  relatedCourses: { name: string; slug: string }[];
}

export interface UserProgress {
  completedLessons: string[];
  courseProgress: Record<string, number>;
  quizScores: Record<string, { score: number; total: number; timestamp: string }>;
  completedProblems: string[];
  completedProjects: string[];
  bookmarks: string[];
  streakDays: number;
  lastActiveDate: string;
  points: number;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  avatar?: string;
  createdAt: string;
}

export interface AdminMetrics {
  totalUsers: number;
  activeUsersToday: number;
  totalCourses: number;
  totalLessons: number;
  completedLessonsCount: number;
  averageQuizScore: number;
  popularCourses: { title: string; enrollments: number; completionRate: number }[];
}
