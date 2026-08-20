import { PracticeProblem } from "@/types";

export const PRACTICE_PROBLEMS: PracticeProblem[] = [
  {
    id: "problem-two-sum",
    slug: "two-sum",
    title: "Two Sum (Array Hash Map Lookup)",
    category: "Algorithm",
    difficulty: "Easy",
    language: "javascript",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target` in O(n) time.",
    requirements: [
      "Return an array of two indices [i, j].",
      "Each input will have exactly one solution.",
      "You may not use the same element twice.",
      "Achieve O(n) time complexity using a Hash Map.",
    ],
    sampleInput: "nums = [2, 7, 11, 15], target = 9",
    sampleOutput: "[0, 1]",
    starterCode: `function twoSum(nums, target) {
  // Implement your O(n) solution here
  
}

// Test call
console.log(twoSum([2, 7, 11, 15], 9));`,
    hints: [
      "A brute force nested loop takes O(n²) time. Can you do it in one pass?",
      "Use a JavaScript Map or object to store the complement (target - currentNum) and its index.",
    ],
    solutionCode: `function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }
    seen.set(nums[i], i);
  }
  return [];
}`,
    explanation: "By keeping a Map of numbers to indices, we can check for the required complement in O(1) time per element, achieving overall O(n) time and O(n) space.",
  },
  {
    id: "problem-reverse-string",
    slug: "reverse-string-in-place",
    title: "Reverse String In-Place (Two Pointers)",
    category: "Algorithm",
    difficulty: "Beginner",
    language: "javascript",
    description: "Write a function that reverses an array of characters in-place using O(1) extra memory.",
    requirements: [
      "Do not allocate extra space for another array.",
      "You must modify the input array in-place with O(1) extra memory.",
    ],
    sampleInput: "s = ['h', 'e', 'l', 'l', 'o']",
    sampleOutput: "['o', 'l', 'l', 'e', 'h']",
    starterCode: `function reverseString(s) {
  // In-place two-pointer reversal
  
}

const arr = ['h', 'e', 'l', 'l', 'o'];
reverseString(arr);
console.log(arr);`,
    hints: [
      "Initialize a left pointer at 0 and a right pointer at array.length - 1.",
      "Swap characters and move pointers toward each other until left >= right.",
    ],
    solutionCode: `function reverseString(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
}`,
    explanation: "Two pointers swap elements from outer edges inward in O(n/2) iterations with O(1) auxiliary space.",
  },
  {
    id: "problem-valid-parentheses",
    slug: "valid-parentheses-stack",
    title: "Valid Parentheses (Stack)",
    category: "Data Structures",
    difficulty: "Easy",
    language: "javascript",
    description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    requirements: [
      "Open brackets must be closed by the same type of brackets.",
      "Open brackets must be closed in the correct order.",
      "Every close bracket has a corresponding open bracket of the same type.",
    ],
    sampleInput: "s = '()[]{}'",
    sampleOutput: "true",
    starterCode: `function isValid(s) {
  // Use a stack to track open brackets
  
}

console.log(isValid("()[]{}")); // true
console.log(isValid("(]"));     // false`,
    hints: [
      "Push open brackets onto a stack (array.push).",
      "When encountering a closing bracket, pop from the stack and verify the pair matches.",
    ],
    solutionCode: `function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}`,
    explanation: "A LIFO (Last-In First-Out) stack ensures brackets close in the reverse order of opening.",
  },
  {
    id: "problem-sql-second-highest-salary",
    slug: "second-highest-salary-sql",
    title: "Find Second Highest Salary (SQL)",
    category: "SQL",
    difficulty: "Medium",
    language: "sql",
    description: "Write an SQL query to report the second highest salary from the Employee table. If there is no second highest salary, the query should report NULL.",
    requirements: [
      "Return the result table with a column named SecondHighestSalary.",
      "Handle duplicate salaries appropriately.",
    ],
    sampleInput: "Employee: id, salary",
    sampleOutput: "SecondHighestSalary: 200",
    starterCode: `-- Write your SQL query below
SELECT 
  -- Your query here
;`,
    hints: [
      "Use DISTINCT to avoid duplicate salaries.",
      "You can use subqueries with MAX() or LIMIT 1 OFFSET 1.",
    ],
    solutionCode: `SELECT (
  SELECT DISTINCT salary 
  FROM Employee 
  ORDER BY salary DESC 
  LIMIT 1 OFFSET 1
) AS SecondHighestSalary;`,
    explanation: "Wrapping the subquery in a scalar SELECT automatically returns NULL if OFFSET 1 yields zero rows.",
  },
  {
    id: "problem-js-closure-counter",
    slug: "javascript-closure-counter",
    title: "Stateful Counter with Closures",
    category: "Output Prediction",
    difficulty: "Beginner",
    language: "javascript",
    description: "Create a function `createCounter(init)` that returns an object with `increment()`, `decrement()`, and `reset()` methods maintaining internal encapsulated state.",
    requirements: [
      "increment() increases value by 1 and returns it.",
      "decrement() decreases value by 1 and returns it.",
      "reset() resets value back to initial value and returns it.",
      "Do not expose internal variable directly.",
    ],
    sampleInput: "const counter = createCounter(5); counter.increment(); counter.reset(); counter.decrement();",
    sampleOutput: "6, 5, 4",
    starterCode: `function createCounter(init) {
  // Encapsulate count inside closure
  
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4`,
    hints: ["Let current = init inside the function body and return object containing method closures."],
    solutionCode: `function createCounter(init) {
  let current = init;
  return {
    increment: () => ++current,
    decrement: () => --current,
    reset: () => {
      current = init;
      return current;
    }
  };
}`,
    explanation: "The returned object's functions close over the private `current` and `init` variables, providing clean encapsulation without classes.",
  },
];

export function getPracticeProblemById(id: string): PracticeProblem | undefined {
  return PRACTICE_PROBLEMS.find((p) => p.id === id || p.slug === id);
}
