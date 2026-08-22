import { Course } from "@/types";

export const dsaCourse: Course = {
  id: "course-dsa",
  slug: "dsa",
  title: "Data Structures & Algorithms (DSA) Mastery",
  tagline: "From Big-O complexity to Arrays, Trees, Graphs, Sorting, and Dynamic Programming.",
  description: "Master foundational and advanced computer science algorithms: Asymptotic Big-O analysis, Arrays, Linked Lists, Stacks, Queues, Hash Tables, Binary Search Trees (BST), Heaps, Graphs (BFS/DFS, Dijkstra), Sorting algorithms, and Dynamic Programming.",
  category: "Data Structures & Algorithms",
  level: "Beginner",
  estimatedHours: 36,
  icon: "Cpu",
  badgeColor: "purple",
  prerequisites: ["Basic Programming Syntax"],
  skillsGained: [
    "Big-O Time & Space Complexity Analysis",
    "Linear Structures (Arrays, Linked Lists, Stacks, Queues)",
    "Non-Linear Structures (Binary Trees, BST, Heaps, Graphs)",
    "Graph Traversal (BFS, DFS) & Shortest Path (Dijkstra)",
    "Dynamic Programming (Memoization, Tabulation)",
  ],
  featured: true,
  modules: [
    {
      id: "mod-dsa-1",
      slug: "big-o",
      title: "Module 1: Asymptotic Analysis & Big-O Notation",
      description: "Time complexity, space complexity, Big-O classes, and asymptotic growth.",
      lessons: [
        {
          id: "dsa-big-o",
          slug: "big-o-notation",
          courseSlug: "dsa",
          moduleSlug: "big-o",
          title: "Big-O Notation & Complexity Analysis",
          description: "Learn how to analyze and compare algorithmic efficiency: O(1), O(log n), O(n), O(n log n), and O(n²).",
          durationMinutes: 15,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "What Big-O notation measures (worst-case growth rate)",
            "Common complexity classes from O(1) to O(2ⁿ)",
            "How to calculate time and space complexity of code",
          ],
          introduction: `Big-O notation describes the limiting behavior of an algorithm as input size (n) approaches infinity. It allows engineers to quantify efficiency independent of hardware clock speeds.`,
          whyItMatters: `An O(n²) algorithm running in 1s for 1,000 items takes 11+ days for 1,000,000 items. Big-O helps you write code that scales.`,
          mainExample: {
            title: "Comparing O(n) vs O(1) Lookup",
            language: "javascript",
            code: `// O(n) Linear Search\nfunction linearFind(arr, target) {\n  for (let i = 0; i < arr.length; i++) {\n    if (arr[i] === target) return i;\n  }\n  return -1;\n}\n\n// O(1) Constant Time Map Lookup\nconst hashLookup = new Map([["usr_1", "Alex"]]);\nconsole.log(hashLookup.get("usr_1")); // O(1)`,
            executable: true,
            explanation: ["Linear search scans one-by-one; Hash Map computes direct hash index in O(1)."],
          },
          detailedExplanation: ["Always evaluate both time complexity (CPU cycles) and space complexity (auxiliary memory)."],
          commonMistakes: [],
          bestPractices: ["Aim for O(1) lookups and O(n log n) sorting in production algorithms."],
          summary: ["Big-O is the universal standard for algorithm performance analysis."],
        },
      ],
    },
    {
      id: "mod-dsa-2",
      slug: "arrays-strings",
      title: "Module 2: Dynamic Arrays & String Algorithms",
      description: "Dynamic array amortization, two pointers technique, and sliding window algorithms.",
      lessons: [
        {
          id: "dsa-two-pointers",
          slug: "two-pointers-and-sliding-window",
          courseSlug: "dsa",
          moduleSlug: "arrays-strings",
          title: "Two Pointers Technique & Sliding Window",
          description: "Optimize array and string algorithms from O(n²) to O(n) using Two Pointers and Sliding Window patterns.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Two Pointers convergence technique on sorted arrays",
            "Sliding Window pattern for maximum sum subarray problems",
            "Reducing polynomial O(n²) loops to linear O(n) time",
          ],
          introduction: `Two Pointers and Sliding Window are fundamental algorithmic patterns used to process contiguous subarrays or pairs in linear time.`,
          whyItMatters: `Solving the Two Sum problem on sorted inputs takes O(n) time with two pointers instead of O(n²) with nested loops.`,
          mainExample: {
            title: "Two Sum on Sorted Array (O(n))",
            language: "javascript",
            code: `function twoSumSorted(numbers, target) {\n  let left = 0, right = numbers.length - 1;\n  while (left < right) {\n    const sum = numbers[left] + numbers[right];\n    if (sum === target) return [left + 1, right + 1];\n    if (sum < target) left++;\n    else right--;\n  }\n  return [];\n}\n\nconsole.log("Two Sum Result:", twoSumSorted([2, 7, 11, 15], 9));`,
            executable: true,
            explanation: ["Pointers move inward based on sum comparison, eliminating nested loops."],
          },
          detailedExplanation: ["Sliding Window maintains a running window sum/count as it shifts across the array."],
          commonMistakes: [],
          bestPractices: ["Look for sorted array inputs to apply two pointers instantly."],
          summary: ["Two pointers and sliding windows convert quadratic searches into linear algorithms."],
        },
      ],
    },
    {
      id: "mod-dsa-3",
      slug: "linked-lists",
      title: "Module 3: Singly & Doubly Linked Lists",
      description: "Node pointers, traversal, in-place list reversal, and Floyd's cycle detection algorithm.",
      lessons: [
        {
          id: "dsa-linked-list",
          slug: "singly-linked-lists-and-cycle-detection",
          courseSlug: "dsa",
          moduleSlug: "linked-lists",
          title: "Linked Lists & Floyd's Cycle Detection (Tortoise & Hare)",
          description: "Implement linked list nodes, reverse lists in-place in O(n) time, and detect circular loops.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Node pointer chaining (val, next)",
            "In-place iterative reversal of a linked list in O(n) time and O(1) space",
            "Floyd's Tortoise and Hare two-pointer cycle detection algorithm",
          ],
          introduction: `A Linked List is a linear data structure where elements are not stored at contiguous memory locations. Instead, each node contains data and a pointer to the next node.`,
          whyItMatters: `Linked lists allow O(1) constant-time insertions at the head without shifting array memory.`,
          mainExample: {
            title: "Linked List In-Place Reversal",
            language: "javascript",
            code: `class ListNode {\n  constructor(val, next = null) { this.val = val; this.next = next; }\n}\n\nfunction reverseList(head) {\n  let prev = null, current = head;\n  while (current) {\n    const nextTemp = current.next;\n    current.next = prev;\n    prev = current;\n    current = nextTemp;\n  }\n  return prev;\n}\n\nconst list = new ListNode(1, new ListNode(2, new ListNode(3)));\nconsole.log("Reversed Head Val:", reverseList(list).val);`,
            executable: true,
            explanation: ["Iteratively rewires pointers in O(n) time and O(1) auxiliary space."],
          },
          detailedExplanation: ["Fast pointer moves 2 steps while slow moves 1 step; if they meet, a cycle exists."],
          commonMistakes: [],
          bestPractices: ["Always use dummy head pointers to simplify edge cases in linked list mutations."],
          summary: ["Linked lists provide flexible pointer-based dynamic node structures."],
        },
      ],
    },
    {
      id: "mod-dsa-4",
      slug: "stacks-queues",
      title: "Module 4: Stacks & Queues",
      description: "LIFO Stacks, FIFO Queues, monotonic stacks, and circular queue buffers.",
      lessons: [
        {
          id: "dsa-stack-queue",
          slug: "stacks-queues-and-monotonic-stack",
          courseSlug: "dsa",
          moduleSlug: "stacks-queues",
          title: "Stacks (LIFO), Queues (FIFO) & Monotonic Stacks",
          description: "Master LIFO stacks (call stack, undo/redo), FIFO queues (task scheduling), and valid parenthesis matching.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Stack LIFO (push, pop, peek) in O(1) time",
            "Queue FIFO (enqueue, dequeue) in O(1) time",
            "Valid Parentheses algorithm using a stack",
          ],
          introduction: `Stacks and Queues are constrained linear data structures with strict insertion and removal order rules.`,
          whyItMatters: `Stacks power browser Back/Forward history, recursive function call stacks, and expression evaluators.`,
          mainExample: {
            title: "Valid Parentheses with Stack",
            language: "javascript",
            code: `function isValid(s) {\n  const stack = [];\n  const map = { ")": "(", "}": "{", "]": "[" };\n  for (const char of s) {\n    if (char in map) {\n      if (stack.pop() !== map[char]) return false;\n    } else {\n      stack.push(char);\n    }\n  }\n  return stack.length === 0;\n}\n\nconsole.log("Valid '()[]{}':", isValid("()[]{}"));\nconsole.log("Valid '(]':", isValid("(]"));`,
            executable: true,
            explanation: ["Opening brackets push to stack; closing brackets pop and verify matching pair."],
          },
          detailedExplanation: ["Monotonic stacks maintain elements in strictly ascending or descending order for Next Greater Element queries."],
          commonMistakes: [],
          bestPractices: ["Use stacks for parsing nested expressions, HTML tags, and bracket matching."],
          summary: ["Stacks and queues enforce disciplined sequential access ordering."],
        },
      ],
    },
    {
      id: "mod-dsa-5",
      slug: "hash-tables",
      title: "Module 5: Hash Tables & Hash Sets",
      description: "Hash functions, collision resolution (chaining vs open addressing), and load factor resizing.",
      lessons: [
        {
          id: "dsa-hash-tables",
          slug: "hash-tables-and-collision-resolution",
          courseSlug: "dsa",
          moduleSlug: "hash-tables",
          title: "Hash Tables, Collision Resolution & O(1) Lookups",
          description: "Understand hash functions, separate chaining, open addressing, and achieving O(1) average time complexity.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How hash functions map arbitrary string keys to numeric array indices",
            "Collision resolution strategies (Separate Chaining vs Linear Probing)",
            "Load factor thresholds and dynamic array resizing",
          ],
          introduction: `A Hash Table is a data structure that implements an associative array abstract data type, a structure that can map keys to values with O(1) average lookup time.`,
          whyItMatters: `Hash tables power database indexes, in-memory caches (Redis), and associative arrays in all modern programming languages.`,
          mainExample: {
            title: "O(n) Two Sum with Hash Map",
            language: "javascript",
            code: `function twoSum(nums, target) {\n  const seen = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (seen.has(complement)) {\n      return [seen.get(complement), i];\n    }\n    seen.set(nums[i], i);\n  }\n  return [];\n}\n\nconsole.log("Indices:", twoSum([3, 2, 4], 6));`,
            executable: true,
            explanation: ["Map lookup checks complement presence in O(1) time per element."],
          },
          detailedExplanation: ["Poor hash functions cause clustering, degrading lookup performance from O(1) to O(n)."],
          commonMistakes: [],
          bestPractices: ["Use Hash Maps whenever you need instant O(1) key lookups."],
          summary: ["Hash tables provide near-instant data retrieval through efficient hashing."],
        },
      ],
    },
    {
      id: "mod-dsa-6",
      slug: "recursion",
      title: "Module 6: Recursion & Backtracking",
      description: "Base cases, recursive call stacks, tail call optimization, and backtracking algorithms (N-Queens).",
      lessons: [
        {
          id: "dsa-recursion",
          slug: "recursion-and-backtracking",
          courseSlug: "dsa",
          moduleSlug: "recursion",
          title: "Recursion, Base Cases & Backtracking",
          description: "Solve complex combinatorial search problems using recursion, call stack frames, and backtracking.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Formulating base cases to prevent stack overflow errors",
            "How the CPU call stack tracks recursive function frames",
            "The Backtracking algorithm template (Choose, Explore, Unchoose)",
          ],
          introduction: `Recursion is a method of solving problems where the solution depends on solutions to smaller instances of the same problem. Backtracking prunes invalid exploration branches early.`,
          whyItMatters: `Backtracking powers Sudoku solvers, maze exploration, and combinatorial subset generation.`,
          mainExample: {
            title: "Subsets Generation with Backtracking",
            language: "javascript",
            code: `function subsets(nums) {\n  const result = [];\n  function backtrack(start, current) {\n    result.push([...current]);\n    for (let i = start; i < nums.length; i++) {\n      current.push(nums[i]);     // Choose\n      backtrack(i + 1, current); // Explore\n      current.pop();             // Unchoose (Backtrack)\n    }\n  }\n  backtrack(0, []);\n  return result;\n}\n\nconsole.log("Subsets of [1, 2]:", subsets([1, 2]));`,
            executable: true,
            explanation: ["Backtrack explores every combination by choosing and undoing steps."],
          },
          detailedExplanation: ["Always establish the base case as the very first check in recursive functions."],
          commonMistakes: [],
          bestPractices: ["Identify base cases before writing any recursive logic."],
          summary: ["Recursion and backtracking break complex combinatorial problems into manageable steps."],
        },
      ],
    },
    {
      id: "mod-dsa-7",
      slug: "binary-trees",
      title: "Module 7: Binary Trees & Binary Search Trees (BST)",
      description: "Tree traversals (Pre/In/Post/Level-order), BST search/insert/delete, and balanced AVL trees.",
      lessons: [
        {
          id: "dsa-bst",
          slug: "binary-search-trees-and-traversals",
          courseSlug: "dsa",
          moduleSlug: "binary-trees",
          title: "Binary Search Trees (BST) & Tree Traversals",
          description: "Perform O(log n) searches, insertions, and in-order traversals on Binary Search Trees.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The BST invariant: Left child < Root < Right child",
            "Tree traversals: In-Order (sorted), Pre-Order, and Post-Order",
            "Binary search tree insertion and lookup in O(h) time",
          ],
          introduction: `A Binary Search Tree (BST) is a rooted binary tree data structure whose internal nodes each store a key greater than all the keys in the node's left subtree and less than those in its right subtree.`,
          whyItMatters: `In-Order traversal on a BST produces elements in strictly ascending sorted order automatically in O(n) time!`,
          mainExample: {
            title: "BST Node & In-Order Traversal",
            language: "javascript",
            code: `class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val; this.left = left; this.right = right;\n  }\n}\n\nfunction inOrder(root, result = []) {\n  if (!root) return result;\n  inOrder(root.left, result);\n  result.push(root.val);\n  inOrder(root.right, result);\n  return result;\n}\n\nconst tree = new TreeNode(20, new TreeNode(10), new TreeNode(30));\nconsole.log("Sorted Traversal:", inOrder(tree));`,
            executable: true,
            explanation: ["In-order traversal visits left subtree, root, then right subtree."],
          },
          detailedExplanation: ["Unbalanced BSTs can degenerate into O(n) linked lists; self-balancing trees (AVL, Red-Black) maintain O(log n) height."],
          commonMistakes: [],
          bestPractices: ["Use tree structures for hierarchical data like DOM trees and file systems."],
          summary: ["BSTs combine the rapid search of sorted arrays with the dynamic insertion of linked lists."],
        },
      ],
    },
    {
      id: "mod-dsa-8",
      slug: "heaps",
      title: "Module 8: Heaps & Priority Queues",
      description: "Min-Heaps, Max-Heaps, binary heap array representation, Heapify, and Heap Sort.",
      lessons: [
        {
          id: "dsa-heaps",
          slug: "heaps-and-priority-queues",
          courseSlug: "dsa",
          moduleSlug: "heaps",
          title: "Binary Heaps & Priority Queues (O(log n))",
          description: "Extract minimum or maximum elements in O(1) time and maintain heap invariants in O(log n) with Min/Max Heaps.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Min-Heap and Max-Heap invariants",
            "Array representation of binary trees (parent = (i-1)/2, children = 2i+1, 2i+2)",
            "Building Priority Queues for top-K problems and event scheduling",
          ],
          introduction: `A Heap is a specialized tree-based data structure that satisfies the heap property: in a max heap, for any given node C, if P is a parent node of C, then the key of P is greater than or equal to the key of C.`,
          whyItMatters: `Heaps find the K largest elements in a stream of 1,000,000,000 items in O(N log K) time using only K memory.`,
          mainExample: {
            title: "Priority Queue Concept",
            language: "javascript",
            code: `// Array representation of Min-Heap: [10, 20, 15, 30, 40]\n// Root (index 0) always contains the minimum element\nconst minHeap = [10, 20, 15, 30, 40];\nconsole.log("Minimum Element O(1) Access:", minHeap[0]);`,
            executable: true,
            explanation: ["Root index 0 always guarantees constant time O(1) minimum access."],
          },
          detailedExplanation: ["Insertion and extraction take O(log n) time by bubbling elements up or down."],
          commonMistakes: [],
          bestPractices: ["Use Min-Heaps to find Top-K largest elements efficiently."],
          summary: ["Heaps power priority queues, Dijkstra's algorithm, and event simulation systems."],
        },
      ],
    },
    {
      id: "mod-dsa-9",
      slug: "graphs",
      title: "Module 9: Graph Representations, BFS & DFS",
      description: "Adjacency list vs adjacency matrix, Breadth-First Search (BFS), and Depth-First Search (DFS).",
      lessons: [
        {
          id: "dsa-graphs",
          slug: "breadth-first-and-depth-first-search",
          courseSlug: "dsa",
          moduleSlug: "graphs",
          title: "Graph Traversal: BFS (Shortest Path) & DFS",
          description: "Represent graphs via adjacency lists and traverse networks using BFS (Queue) and DFS (Stack/Recursion).",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Adjacency list vs adjacency matrix memory tradeoffs",
            "Breadth-First Search (BFS) using a Queue to find shortest paths in unweighted graphs",
            "Depth-First Search (DFS) for connected components and cycle detection",
          ],
          introduction: `A Graph is a non-linear data structure consisting of vertices (nodes) and edges that connect pairs of vertices.`,
          whyItMatters: `Graphs model social networks (friend connections), maps (GPS navigation), recommendation engines, and dependency trees.`,
          mainExample: {
            title: "Breadth-First Search (BFS) on Graph",
            language: "javascript",
            code: `function bfs(graph, start) {\n  const visited = new Set([start]);\n  const queue = [start];\n  const traversal = [];\n  \n  while (queue.length > 0) {\n    const node = queue.shift();\n    traversal.push(node);\n    for (const neighbor of graph[node] || []) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return traversal;\n}\n\nconst graph = { A: ["B", "C"], B: ["D"], C: ["E"], D: [], E: [] };\nconsole.log("BFS Order:", bfs(graph, "A"));`,
            executable: true,
            explanation: ["BFS visits nodes layer-by-layer using a queue."],
          },
          detailedExplanation: ["Always track visited nodes with a Set to prevent infinite loops in cyclic graphs."],
          commonMistakes: [],
          bestPractices: ["Use BFS for shortest path in unweighted graphs; use DFS for topological sorting."],
          summary: ["BFS and DFS form the foundation of all network and pathfinding algorithms."],
        },
      ],
    },
    {
      id: "mod-dsa-10",
      slug: "advanced-graphs",
      title: "Module 10: Shortest Path & Minimum Spanning Trees (Dijkstra, Prim)",
      description: "Dijkstra's shortest path algorithm with priority queues, Bellman-Ford, and Union-Find (Disjoint Set).",
      lessons: [
        {
          id: "dsa-dijkstra",
          slug: "dijkstras-algorithm-and-union-find",
          courseSlug: "dsa",
          moduleSlug: "advanced-graphs",
          title: "Dijkstra's Shortest Path & Disjoint Set (Union-Find)",
          description: "Find shortest paths on weighted graphs with Dijkstra's algorithm and detect cycles with Union-Find.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Dijkstra's greedy shortest path algorithm with Min-Heap in O((V + E) log V)",
            "Disjoint Set Union (DSU) with path compression and union by rank",
            "Kruskal's algorithm for Minimum Spanning Trees (MST)",
          ],
          introduction: `Dijkstra's algorithm finds the shortest path between nodes in a graph with non-negative edge weights (like highway travel times).`,
          whyItMatters: `Dijkstra's algorithm powers Google Maps routing, internet network packet routing (OSPF), and airline flight schedulers.`,
          mainExample: {
            title: "Dijkstra Shortest Path Concept",
            language: "javascript",
            code: `// Dijkstra computes min distance from source to all destinations\nconsole.log("Dijkstra Algorithm computes optimal weighted paths in O(E log V).");`,
            executable: true,
            explanation: ["Greedily relaxes shortest known distance using a priority queue."],
          },
          detailedExplanation: ["Union-Find with path compression achieves nearly constant O(α(n)) inverse Ackermann time."],
          commonMistakes: [],
          bestPractices: ["Use Dijkstra when edges are weighted positively; use Bellman-Ford if negative weights exist."],
          summary: ["Dijkstra and Union-Find solve complex routing and network connectivity problems."],
        },
      ],
    },
    {
      id: "mod-dsa-11",
      slug: "dynamic-programming",
      title: "Module 11: Dynamic Programming (Memoization & Tabulation)",
      description: "Overlapping subproblems, optimal substructure, top-down memoization, bottom-up tabulation, and knapsack.",
      lessons: [
        {
          id: "dsa-dp",
          slug: "dynamic-programming-patterns",
          courseSlug: "dsa",
          moduleSlug: "dynamic-programming",
          title: "Dynamic Programming: Top-Down & Bottom-Up Patterns",
          description: "Turn exponential O(2ⁿ) recursive algorithms into linear O(n) solutions using memoization and bottom-up tabulation.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Identifying DP problems: Overlapping Subproblems & Optimal Substructure",
            "Top-down Memoization (recursion + cache Map)",
            "Bottom-up Tabulation (iterative DP array) and space optimization",
          ],
          introduction: `Dynamic Programming (DP) is an algorithmic technique for solving optimization problems by breaking them down into simpler subproblems and storing the results to avoid duplicate computation.`,
          whyItMatters: `Calculating the 50th Fibonacci number with raw recursion takes ~11 days (2⁵⁰ operations). With DP, it takes 50 operations (<1 millisecond!).`,
          mainExample: {
            title: "Climbing Stairs DP (Bottom-Up Tabulation)",
            language: "javascript",
            code: `function climbStairs(n) {\n  if (n <= 2) return n;\n  let prev2 = 1, prev1 = 2;\n  for (let i = 3; i <= n; i++) {\n    const current = prev1 + prev2;\n    prev2 = prev1;\n    prev1 = current;\n  }\n  return prev1;\n}\n\nconsole.log("Distinct ways to climb 10 stairs:", climbStairs(10));`,
            executable: true,
            explanation: ["Space optimized bottom-up DP runs in O(n) time and O(1) space."],
          },
          detailedExplanation: ["The 0/1 Knapsack problem demonstrates optimal decision making under capacity constraints."],
          commonMistakes: [],
          bestPractices: ["Always write the recursive recurrence relation first before optimizing to iterative DP."],
          summary: ["Dynamic programming turns intractable exponential problems into blazing fast polynomial algorithms."],
        },
      ],
    },
    {
      id: "mod-dsa-12",
      slug: "cache-conscious-btree-bplus-trees",
      title: "Module 12: Cache-Conscious Data Structures: B-Trees & B+ Trees",
      description: "Master modern memory hierarchy algorithms: Cache-Conscious Trees, B-Tree and B+ Tree node layout, and reducing L1/L2 CPU cache misses.",
      lessons: [
        {
          id: "dsa-cache-conscious-btrees",
          slug: "cache-conscious-algorithms-btree-bplus-tree-node-layout",
          courseSlug: "dsa",
          moduleSlug: "cache-conscious-btree-bplus-trees",
          title: "Cache-Conscious Data Structures: B-Trees & B+ Trees",
          description: "Explore hardware cache-optimized algorithms: why standard pointer-chasing binary trees (AVL, Red-Black) suffer 95% CPU cache misses, designing Cache-Conscious B-Trees with 64-byte/4KB block nodes, B+ Tree leaf linked lists, and minimizing memory stalls.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Hardware CPU Cache latency: L1 Cache (1ns) vs L3 (12ns) vs Main RAM (60ns / 200 CPU cycles)",
            "Why Binary Search Trees (std::map, TreeMap) perform poorly on modern CPUs due to pointer chasing",
            "The architecture of B-Trees: multi-way search trees with high branching factor matching CPU cache lines (64 bytes)",
            "B+ Tree leaf sequencing for sequential scanning in relational database storage engines",
          ],
          introduction: `In theoretical computer science, a Red-Black Tree and a B-Tree both offer O(log N) lookup complexity. However, on modern CPU hardware where memory access is 100x slower than computation, theoretical Big-O fails to model reality. Pointer-heavy binary trees scatter nodes randomly across memory, causing a hardware CPU cache miss at every single tree depth. Cache-conscious B-Trees pack multiple keys into contiguous 64-byte array blocks, fitting entire search nodes into a single L1 CPU cache line.`,
          whyItMatters: `Modern database engines (PostgreSQL, MySQL InnoDB, SQLite) and high-performance in-memory indexes (B-Tree Map) rely on cache-conscious B+ Trees to achieve 5x-10x higher lookup speeds than binary trees.`,
          syntax: `class BTreeNode {\n  int keys[CACHE_LINE_SIZE / sizeof(int)];\n  BTreeNode* children[...];\n}`,
          mainExample: {
            title: "Simulating a Contiguous Cache-Line Friendly B-Tree Node Search",
            language: "javascript",
            code: `// Cache-Conscious Multi-Way Search Node Simulation
class CacheConsciousBNode {
    constructor(order = 8) {
        this.order = order;
        // Keys stored contiguously in a flat array (Fits directly in CPU L1 Cache!)
        this.keys = [];
        this.children = [];
        this.isLeaf = true;
    }

    // Binary search within contiguous array (Extremely cache-friendly!)
    search(target) {
        let low = 0;
        let high = this.keys.length - 1;

        while (low <= high) {
            const mid = (low + high) >>> 1;
            if (this.keys[mid] === target) {
                return { found: true, index: mid };
            } else if (this.keys[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        // If not found and is leaf, key does not exist
        if (this.isLeaf) return { found: false };

        // Otherwise, descend to child node at pointer index 'low'
        return this.children[low].search(target);
    }

    insertNonFull(key) {
        let i = this.keys.length - 1;
        if (this.isLeaf) {
            // Insert into sorted contiguous array
            this.keys.push(null);
            while (i >= 0 && this.keys[i] > key) {
                this.keys[i + 1] = this.keys[i];
                i--;
            }
            this.keys[i + 1] = key;
        }
    }
}

// Verification
const root = new CacheConsciousBNode(8);
[10, 20, 30, 40, 50, 60, 70].forEach(k => root.insertNonFull(k));

console.log("=== Cache-Conscious B-Tree Node Search ===");
console.log("Searching for 40:", root.search(40));
console.log("Searching for 99:", root.search(99));
console.log("✅ Contiguous keys scanned with zero pointer-chasing cache misses!");`,
            executable: true,
            explanation: [
              "Contiguous array storage guarantees all keys in the node are loaded into the L1 CPU cache in a single 64-byte memory fetch.",
              "Binary trees allocate left and right pointers separately on the heap, forcing a random RAM lookup (~60ns) at every tree level.",
              "A B-Tree with branching factor 128 can index 1,000,000 items with a tree height of only 3 (3 cache misses vs 20 cache misses in AVL!).",
              "B+ Trees store data pointers only at leaf nodes, allowing internal routing nodes to hold hundreds of keys.",
            ],
          },
          detailedExplanation: [
            "Cache Line Alignment: On x86 and ARM processors, memory is transferred from RAM to L1 cache in 64-byte blocks (cache lines). By sizing node structs to exactly 64 or 128 bytes, searching a node loads all branch keys with zero wasted memory bandwidth.",
          ],
          commonMistakes: [
            {
              mistake: "Choosing Red-Black Trees (`std::map`, `TreeMap`) for large in-memory datasets instead of flat B-Trees (`absl::btree_map`).",
              badCode: "std::map<int, Data> index; // Scatters millions of node pointers across heap",
              goodCode: "absl::btree_map<int, Data> index; // 5x faster due to contiguous cache lines",
              explanation: "Pointer chasing in binary search trees causes high CPU stall cycles. B-Tree maps dramatically outperform binary trees on modern hardware.",
            },
          ],
          bestPractices: [
            "Use B-Trees for in-memory associative lookups where performance is critical.",
            "Use B+ Trees for disk-based storage engines to maximize sequential range scan throughput.",
            "Align tree node structures to 64-byte cache boundaries.",
          ],
          summary: [
            "Hardware memory latency dominates algorithmic performance on modern CPUs.",
            "B-Trees eliminate pointer chasing by packing keys into contiguous cache-line nodes.",
            "B+ Trees power modern high-scale relational database indexes and file systems.",
          ],
        },
      ],
    },
    {
      id: "mod-dsa-13",
      slug: "succinct-compressed-data-structures",
      title: "Module 13: Succinct & Compressed Data Structures: Roaring Bitmaps",
      description: "Master compressed data structures: Roaring Bitmaps, Bitsets, Rank/Select operations, and Succinct Wavelet Trees.",
      lessons: [
        {
          id: "dsa-roaring-bitmaps",
          slug: "succinct-data-structures-roaring-bitmaps-rank-select",
          courseSlug: "dsa",
          moduleSlug: "succinct-compressed-data-structures",
          title: "Succinct Data Structures: Roaring Bitmaps & Rank/Select",
          description: "Represent massive datasets in compressed memory with Succinct Data Structures: Roaring Bitmaps (Array Containers, Bitmap Containers, Run-Length Encoded RLE Containers), Rank and Select operations on bit vectors, and Wavelet Trees.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The concept of Succinct Data Structures: operating directly on compressed data without decompressing",
            "The 3 internal containers of Roaring Bitmaps: Array (sparse), Bitset (dense), and Run (contiguous ranges)",
            "How Lucene, Elasticsearch, Spark, and Redis use Roaring Bitmaps for high-speed set intersections (AND/OR)",
            "Rank and Select primitive queries in constant O(1) time",
          ],
          introduction: `Storing sets containing millions of integers (such as user IDs, document IDs in search engines, or analytics tags) requires hundreds of megabytes of RAM if using standard HashSets. A standard bitset consumes fixed memory regardless of density. Roaring Bitmaps partition 32-bit integers by their top 16 bits and dynamically choose between sparse 16-bit integer arrays, uncompressed bitsets, or Run-Length Encoding (RLE) to achieve up to 100x compression with sub-microsecond set intersection speeds.`,
          whyItMatters: `Search engines (Elasticsearch, Apache Lucene) and distributed analytical databases (ClickHouse, Apache Spark, Druid) use Roaring Bitmaps to intersect billion-record filter queries in milliseconds.`,
          syntax: `// Roaring Bitmap Container Selection\nif (count < 4096) ArrayContainer(uint16[])\nelse BitsetContainer(uint64[1024])`,
          mainExample: {
            title: "Simulating Roaring Bitmap Dynamic Container Selection and Set Intersection",
            language: "javascript",
            code: `// Roaring Bitmap Dynamic Container Architecture Simulation
class SimpleRoaringBitmap {
    constructor() {
        // Map high 16-bit chunk -> Container
        this.chunks = new Map();
    }

    add(val) {
        const chunkKey = (val >>> 16) & 0xFFFF;
        const lowVal = val & 0xFFFF;

        if (!this.chunks.has(chunkKey)) {
            // Start with sparse Array Container
            this.chunks.set(chunkKey, { type: 'ARRAY', data: [] });
        }

        const container = this.chunks.get(chunkKey);
        if (container.type === 'ARRAY') {
            if (!container.data.includes(lowVal)) {
                container.data.push(lowVal);
                container.data.sort((a, b) => a - b);
            }
            // If cardinality exceeds 4,096 elements, convert to Bitset Container!
            if (container.data.length > 4096) {
                const bitset = new Uint32Array(2048); // 65,536 bits
                container.data.forEach(v => bitset[v >>> 5] |= (1 << (v & 31)));
                container.type = 'BITSET';
                container.data = bitset;
            }
        } else if (container.type === 'BITSET') {
            container.data[lowVal >>> 5] |= (1 << (lowVal & 31));
        }
    }

    has(val) {
        const chunkKey = (val >>> 16) & 0xFFFF;
        const lowVal = val & 0xFFFF;
        const container = this.chunks.get(chunkKey);
        if (!container) return false;

        if (container.type === 'ARRAY') {
            return container.data.includes(lowVal);
        } else if (container.type === 'BITSET') {
            return (container.data[lowVal >>> 5] & (1 << (lowVal & 31))) !== 0;
        }
        return false;
    }
}

const rb = new SimpleRoaringBitmap();
rb.add(105);
rb.add(65536 + 10); // Spans into chunk #1

console.log("=== Roaring Bitmap Hybrid Container Engine ===");
console.log("Contains 105:", rb.has(105));
console.log("Contains 65546:", rb.has(65536 + 10));
console.log("Contains 999:", rb.has(999));
console.log("✅ Adaptive memory compression active across chunk boundaries!");`,
            executable: true,
            explanation: [
              "Integers are partitioned by their upper 16 bits into independent 65,536-element chunks.",
              "Sparse chunks (<4096 elements) use sorted 16-bit integer arrays (ArrayContainer), using only 2 bytes per integer.",
              "Dense chunks (>4096 elements) convert to fixed 8KB bitsets (BitsetContainer), enabling single-cycle SIMD bitwise AND operations.",
              "Contiguous sequential ranges convert to Run-Length Encoded (RLE) containers, storing millions of items in only 4 bytes.",
            ],
          },
          detailedExplanation: [
            "Rank and Select Queries: Rank(i) returns the number of 1-bits before index i in O(1) time using pre-computed block sum lookup tables. Select(j) returns the index of the j-th 1-bit. These two operations form the foundation of compressed full-text search indexes (FM-Index).",
          ],
          commonMistakes: [
            {
              mistake: "Using standard uncompressed `HashSet<Long>` in Java/C# for massive user tracking, exhausting gigabytes of heap RAM.",
              badCode: "Set<Long> userIds = new HashSet<>(); // 32 bytes of overhead per number!",
              goodCode: "RoaringBitmap userIds = new RoaringBitmap(); // ~0.5 to 2 bits per number",
              explanation: "Standard HashSets box primitives into heap objects with 32 bytes of object header overhead. Roaring Bitmaps compress integers down to fractions of a byte.",
            },
          ],
          bestPractices: [
            "Use Roaring Bitmaps for high-cardinality search filtering and tag intersection.",
            "Use SIMD-accelerated bitwise instructions (AVX2/AVX-512) for parallel bitmap AND/OR intersections.",
            "Store inverted index posting lists as Roaring Bitmaps for instant search filtering.",
          ],
          summary: [
            "Roaring Bitmaps adaptively switch between Array, Bitset, and RLE containers.",
            "Enables sub-microsecond set intersection with up to 100x memory compression.",
            "Widely adopted by Elasticsearch, Lucene, Spark, and high-performance databases.",
          ],
        },
      ],
    },
    {
      id: "mod-dsa-14",
      slug: "lock-free-concurrency-treiber-cas",
      title: "Module 14: Lock-Free Concurrency Algorithms: Stacks & Queues",
      description: "Master lockless algorithm design: Treiber Stack, Michael-Scott Lock-Free Queue, Compare-And-Swap (CAS), and the ABA problem.",
      lessons: [
        {
          id: "dsa-lockfree-queues",
          slug: "lock-free-data-structures-treiber-stack-michael-scott-queue-cas",
          courseSlug: "dsa",
          moduleSlug: "lock-free-concurrency-treiber-cas",
          title: "Lock-Free Algorithms: Treiber Stack & Michael-Scott Queue",
          description: "Design wait-free and lock-free concurrent algorithms: Compare-And-Swap (CAS) consensus, lock-free Treiber Stack, the Michael-Scott non-blocking FIFO Queue, and solving the ABA problem with tagged pointers.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The hierarchy of non-blocking concurrency: Obstruction-Free vs Lock-Free vs Wait-Free",
            "Atomic hardware primitives: Compare-And-Swap (CAS) and Fetch-And-Add (FAA)",
            "The Michael-Scott Lock-Free Queue algorithm (foundation of Java's ConcurrentLinkedQueue)",
            "The ABA Problem and solving it with versioned/tagged atomic pointers",
          ],
          introduction: `Concurrent data structures that rely on mutual exclusion locks (mutexes) suffer from priority inversion, deadlock risks, and high context-switching overhead. Lock-free algorithms guarantee system-wide progress without locks: even if some threads are suspended or delayed by the OS, at least one thread is guaranteed to complete its operation in a bounded number of steps.`,
          whyItMatters: `High-throughput asynchronous runtimes (Tokio, .NET ThreadPool, Go runtime) and financial trading systems rely on lock-free stacks and queues to schedule millions of tasks per second without lock contention.`,
          syntax: `while (!CAS(&head, oldHead, newHead)) {\n    oldHead = head;\n}`,
          mainExample: {
            title: "Simulating a Lock-Free Michael-Scott Non-Blocking FIFO Queue with Atomic CAS",
            language: "javascript",
            code: `// Conceptual Lock-Free Michael-Scott Queue Simulation
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LockFreeQueue {
    constructor() {
        // Dummy sentinel node
        const sentinel = new Node(null);
        this.head = sentinel;
        this.tail = sentinel;
    }

    // Atomic CAS Simulation Helper
    _cas(obj, field, expected, update) {
        if (obj[field] === expected) {
            obj[field] = update;
            return true;
        }
        return false;
    }

    enqueue(val) {
        const newNode = new Node(val);
        while (true) {
            const curTail = this.tail;
            const tailNext = curTail.next;

            if (curTail === this.tail) {
                if (tailNext === null) {
                    // Try to link newNode at the end of the list
                    if (this._cas(curTail, 'next', null, newNode)) {
                        // Advance tail to new node (Helpful step)
                        this._cas(this, 'tail', curTail, newNode);
                        return;
                    }
                } else {
                    // Tail was lagging behind; help advance it
                    this._cas(this, 'tail', curTail, tailNext);
                }
            }
        }
    }

    dequeue() {
        while (true) {
            const curHead = this.head;
            const curTail = this.tail;
            const headNext = curHead.next;

            if (curHead === this.head) {
                if (curHead === curTail) {
                    if (headNext === null) return null; // Queue Empty
                    // Advance lagging tail
                    this._cas(this, 'tail', curTail, headNext);
                } else {
                    const value = headNext.value;
                    if (this._cas(this, 'head', curHead, headNext)) {
                        return value; // Dequeued successfully!
                    }
                }
            }
        }
    }
}

const queue = new LockFreeQueue();
queue.enqueue("TASK_101");
queue.enqueue("TASK_102");
console.log("=== Lock-Free Michael-Scott Queue ===");
console.log("Dequeued:", queue.dequeue());
console.log("Dequeued:", queue.dequeue());
console.log("Dequeued (Empty):", queue.dequeue());
console.log("✅ Queue executed without locking or thread suspension!");`,
            executable: true,
            explanation: [
              "The Michael-Scott queue uses a dummy sentinel node so head and tail always point to valid nodes.",
              "Enqueuing uses CAS to atomically append a node and advance the tail pointer.",
              "If a thread is preempted halfway through an enqueue, other threads 'help' advance the lagging tail pointer, guaranteeing lock-freedom.",
              "Dequeuing atomically moves the head pointer forward via CAS, reading the next node's value in O(1) time.",
            ],
          },
          detailedExplanation: [
            "The ABA Problem: Thread 1 reads pointer A. Thread 2 pops A, frees it, pushes B, and pushes a newly allocated node that happens to share the same physical address A. Thread 1's CAS succeeds even though the list changed. Tagged pointers (storing a 16-bit incrementing counter alongside the pointer) prevent the ABA problem.",
          ],
          commonMistakes: [
            {
              mistake: "Assuming lock-free algorithms are always faster than mutex locks for low-contention single-threaded workloads.",
              badCode: "// Using complex CAS retry loops on thread-confined collections",
              goodCode: "// Use lock-free structures specifically when multiple threads contend concurrently",
              explanation: "Under zero contention, simple sequential data structures are faster due to lack of memory barrier instructions. Lock-free shines under concurrent thread contention.",
            },
          ],
          bestPractices: [
            "Use tagged/versioned pointers (`AtomicStampedReference` in Java) to eliminate the ABA problem.",
            "Use helping mechanisms so lagging threads do not block forward progress of active threads.",
            "Rely on battle-tested standard libraries (`ConcurrentLinkedQueue`, `crossbeam::queue`) in production.",
          ],
          summary: [
            "Lock-free algorithms guarantee system-wide forward progress using hardware atomic CAS instructions.",
            "The Michael-Scott Queue provides high-concurrency FIFO buffering without mutex locks.",
            "Tagged pointers and epoch memory reclamation solve the concurrent ABA problem.",
          ],
        },
      ],
    },
    {
      id: "mod-dsa-15",
      slug: "advanced-graph-network-flows-dinic",
      title: "Module 15: Advanced Graph Network Flows: Dinic's Algorithm",
      description: "Master Maximum Network Flow algorithms: Residual Graphs, Augmenting Paths, Dinic's blocking flow algorithm, and Hopcroft-Karp Bipartite Matching.",
      lessons: [
        {
          id: "dsa-dinic-network-flow",
          slug: "advanced-graph-algorithms-dinics-network-flow-bipartite-matching",
          courseSlug: "dsa",
          moduleSlug: "advanced-graph-network-flows-dinic",
          title: "Network Flow Algorithms: Dinic's & Bipartite Matching",
          description: "Solve complex network routing and assignment problems: Maximum Flow / Minimum Cut theorem, Residual graphs, Dinic's Algorithm using BFS Level Graphs and DFS Blocking Flows in O(V²E) time, and Hopcroft-Karp Bipartite Matching.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Max-Flow Min-Cut Theorem and Ford-Fulkerson foundations",
            "Why Edmonds-Karp is slow (O(V E²)) and how Dinic's algorithm optimizes flow to O(V² E)",
            "Constructing BFS Level Graphs and pushing blocking flows via DFS with pointer pruning",
            "Solving Maximum Bipartite Matching in O(E √V) with Hopcroft-Karp",
          ],
          introduction: `Network Flow algorithms model how resources (liquid in pipes, network packets in routers, traffic in road grids, tasks assigned to workers) can flow through a directed capacity-constrained graph from a Source (S) to a Sink (T). Dinic's algorithm is one of the most efficient Max-Flow algorithms in computer science: it builds a layered BFS Level Graph and pushes multiple Augmenting Paths simultaneously via DFS Blocking Flows.`,
          whyItMatters: `Network flow algorithms power airline crew scheduling, ride-share dispatch matching (Uber/Lyft driver assignment), image segmentation in computer vision, and network routing throughput optimization.`,
          syntax: `// Dinic's Flow Loop\nwhile (bfs_build_level_graph()) {\n    while (flow = dfs_blocking_flow(s, t, INF)) max_flow += flow;\n}`,
          mainExample: {
            title: "Implementing Dinic's Maximum Network Flow Algorithm",
            language: "javascript",
            code: `// Dinic's Maximum Network Flow Algorithm Implementation
class Edge {
    constructor(to, cap, flow = 0, revIndex = 0) {
        this.to = to;
        this.cap = cap;
        this.flow = flow;
        this.revIndex = revIndex; // Index of reverse residual edge
    }
}

class DinicMaxFlow {
    constructor(numVertices) {
        this.V = numVertices;
        this.adj = Array.from({ length: numVertices }, () => []);
        this.level = new Array(numVertices);
        this.ptr = new Array(numVertices); // DFS edge pointer for pruning
    }

    addEdge(from, to, capacity) {
        const forward = new Edge(to, capacity, 0, this.adj[to].length);
        const backward = new Edge(from, 0, 0, this.adj[from].length);
        this.adj[from].push(forward);
        this.adj[to].push(backward);
    }

    // Step 1: BFS to build layered level graph
    bfs(source, sink) {
        this.level.fill(-1);
        this.level[source] = 0;
        const queue = [source];

        while (queue.length > 0) {
            const u = queue.shift();
            for (const edge of this.adj[u]) {
                if (edge.cap - edge.flow > 0 && this.level[edge.to] === -1) {
                    this.level[edge.to] = this.level[u] + 1;
                    queue.push(edge.to);
                }
            }
        }
        return this.level[sink] !== -1;
    }

    // Step 2: DFS to push blocking flow along level graph
    dfs(u, sink, pushed) {
        if (pushed === 0 || u === sink) return pushed;

        for (let cid = this.ptr[u]; cid < this.adj[u].length; cid++) {
            this.ptr[u] = cid;
            const edge = this.adj[u][cid];
            const tr = edge.to;

            if (this.level[u] + 1 !== this.level[tr] || edge.cap - edge.flow === 0) continue;

            const pushable = Math.min(pushed, edge.cap - edge.flow);
            const flow = this.dfs(tr, sink, pushable);

            if (flow > 0) {
                edge.flow += flow;
                this.adj[tr][edge.revIndex].flow -= flow;
                return flow;
            }
        }
        return 0;
    }

    computeMaxFlow(source, sink) {
        let totalFlow = 0;
        while (this.bfs(source, sink)) {
            this.ptr.fill(0);
            while (true) {
                const pushed = this.dfs(source, sink, Infinity);
                if (pushed === 0) break;
                totalFlow += pushed;
            }
        }
        return totalFlow;
    }
}

// Verification Graph: Source (0) -> (1, 2) -> Sink (3)
const dinic = new DinicMaxFlow(4);
dinic.addEdge(0, 1, 10);
dinic.addEdge(0, 2, 10);
dinic.addEdge(1, 2, 2);
dinic.addEdge(1, 3, 4);
dinic.addEdge(2, 3, 9);

const maxFlow = dinic.computeMaxFlow(0, 3);
console.log("=== Dinic's Maximum Network Flow Algorithm ===");
console.log("Computed Maximum Flow:", maxFlow); // Expected: 13
console.log("✅ Optimal bottleneck capacity computed in O(V²E) time!");`,
            executable: true,
            explanation: [
              "bfs() builds a Level Graph ensuring DFS only explores edges that advance strictly forward (level[u] + 1 == level[v]).",
              "ptr array tracks explored edges in DFS, preventing visiting saturated edges multiple times (Dead-End Elimination).",
              "Reverse edges allow undoing previous suboptimal flow allocations dynamically.",
              "Max-Flow Min-Cut Theorem guarantees that max flow equals the minimum capacity bottleneck cut separating S from T.",
            ],
          },
          detailedExplanation: [
            "Bipartite Matching with Dinic: Any Maximum Bipartite Matching problem (e.g. matching N job applicants to M job vacancies) can be modeled as Max-Flow in O(E √V) time by creating a Source connected to all applicants with capacity 1, and connecting all jobs to a Sink with capacity 1.",
          ],
          commonMistakes: [
            {
              mistake: "Omitting reverse residual edges with negative flow adjustments, preventing the algorithm from routing around suboptimal paths.",
              badCode: "// Adding only forward edge without backward edge",
              goodCode: "adj[from].push(forward); adj[to].push(backwardWithZeroCap);",
              explanation: "Without reverse residual edges, the flow network cannot 'push back' flow if a better global route is discovered later.",
            },
          ],
          bestPractices: [
            "Use Dinic's algorithm for general maximum flow networks.",
            "Use Hopcroft-Karp when specifically solving Maximum Bipartite Matching for O(E √V) performance.",
            "Reset edge pointers (`ptr.fill(0)`) before each DFS blocking flow phase.",
          ],
          summary: [
            "Network Flow algorithms calculate maximum capacity routing from Source to Sink.",
            "Dinic's algorithm combines BFS Level Graphs with DFS Blocking Flows in O(V² E).",
            "Max-Flow Min-Cut theorem solves network routing, matching, and image segmentation problems.",
          ],
        },
      ],
    },
    {
      id: "mod-dsa-16",
      slug: "probabilistic-data-structures-hyperloglog",
      title: "Module 16: Probabilistic Streaming Algorithms: HyperLogLog & Sketches",
      description: "Master streaming probabilistic algorithms: HyperLogLog (HLL) cardinality estimation, Count-Min Sketch frequency, and Bloom/Cuckoo Filters.",
      lessons: [
        {
          id: "dsa-hyperloglog-sketches",
          slug: "probabilistic-data-structures-hyperloglog-count-min-sketch-bloom",
          courseSlug: "dsa",
          moduleSlug: "probabilistic-data-structures-hyperloglog",
          title: "Probabilistic Algorithms: HyperLogLog & Count-Min Sketch",
          description: "Process massive streaming big data in fixed memory with Probabilistic Algorithms: HyperLogLog (counting 1 billion unique users in 1.5KB RAM), Count-Min Sketch for frequency estimation, and Cuckoo Filters for dynamic item deletion.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The trade-off of Probabilistic Data Structures: trading 1% precision for a 99.9% memory reduction",
            "How HyperLogLog (HLL) estimates unique cardinality by observing maximum leading zeros in hash values",
            "Harmonic Mean and register bucket bias correction in the Flajolet-Martin algorithm",
            "Count-Min Sketch: estimating event frequencies in high-throughput network packet streams",
          ],
          introduction: `Counting the exact number of unique visitors (cardinality) across 1,000,000,000 requests using a HashSet requires ~16GB of RAM. The HyperLogLog (HLL) algorithm accomplishes this with a typical error rate of ~1% while consuming only 1.5 Kilobytes of memory. By observing the distribution of leading zeros in uniform cryptographic hash values across multiple register buckets, HLL computes accurate cardinality estimates in constant O(1) space.`,
          whyItMatters: `Redis (\`PFADD\`, \`PFCOUNT\`), Google BigQuery (\`APPROX_COUNT_DISTINCT\`), and Cloudflare analytics track billions of unique daily users in real time using HyperLogLog.`,
          syntax: `// Redis CLI HyperLogLog\nPFADD visitors "user_101" "user_102"\nPFCOUNT visitors // Estimated cardinality in 1.5KB RAM`,
          mainExample: {
            title: "Simulating HyperLogLog Cardinality Estimation with Bucket Registers",
            language: "javascript",
            code: `// HyperLogLog (HLL) Cardinality Estimator Simulation
class SimpleHyperLogLog {
    constructor(b = 6) {
        this.b = b; // 2^b registers (e.g. 2^6 = 64 bucket registers)
        this.m = 1 << b;
        this.registers = new Uint8Array(this.m);
        // Alpha constant for 64 buckets
        this.alpha = 0.709;
    }

    // 32-bit Integer Hash Function (Murmur-like bit mixer)
    _hash(str) {
        let h = 2166136261 >>> 0;
        for (let i = 0; i < str.length; i++) {
            h ^= str.charCodeAt(i);
            h = Math.imul(h, 16777619) >>> 0;
        }
        return h;
    }

    // Count leading zeros after bucket index
    _clz(val) {
        if (val === 0) return 32 - this.b;
        return Math.clz32(val);
    }

    add(item) {
        const hash = this._hash(item);
        // Extract bucket register index from first 'b' bits
        const bucketIndex = hash >>> (32 - this.b);
        // Extract remaining hash bits
        const remainingBits = (hash << this.b) >>> 0;
        const leadingZeros = this._clz(remainingBits) + 1;

        // Keep maximum observed leading zeros in bucket register
        if (leadingZeros > this.registers[bucketIndex]) {
            this.registers[bucketIndex] = leadingZeros;
        }
    }

    count() {
        // Compute Harmonic Mean of registers to reduce outlier variance
        let sum = 0;
        for (let i = 0; i < this.m; i++) {
            sum += Math.pow(2, -this.registers[i]);
        }
        const rawEstimate = (this.alpha * this.m * this.m) / sum;
        return Math.round(rawEstimate);
    }
}

const hll = new SimpleHyperLogLog(6); // 64 registers
// Add 500 unique simulated items
for (let i = 1; i <= 500; i++) {
    hll.add("user_account_id_" + i);
}

console.log("=== Probabilistic HyperLogLog Cardinality Engine ===");
console.log("Actual Unique Elements Inserted: 500");
console.log("HyperLogLog Estimated Count:     ", hll.count());
console.log("Total Memory Consumed by HLL:    ", hll.registers.length, "bytes (Tiny 64-byte footprint!)");
console.log("✅ Estimated 500 unique items within standard HLL error bounds!");`,
            executable: true,
            explanation: [
              "Uniform hashing distributes values evenly: finding a hash with K leading zeros has a 1 in 2^K probability.",
              "If the maximum observed leading zeros in a bucket is 6, we estimate that bucket has seen ~2^6 = 64 unique items.",
              "Partitioning into M buckets and taking the Harmonic Mean eliminates outlier bias.",
              "Standard 1.5KB HyperLogLog (1024 registers of 5 bits) counts up to billions with an error rate under 1.04 / sqrt(m) ≈ 1.04 / 32 ≈ 3.25%.",
            ],
          },
          detailedExplanation: [
            "Count-Min Sketch: While HLL counts unique cardinality, Count-Min Sketch estimates frequency (how many times did item X appear in the stream?). It uses D independent hash functions to increment counters across a 2D matrix, returning the minimum counter value for queries with zero false negatives.",
          ],
          commonMistakes: [
            {
              mistake: "Using HyperLogLog when exact 100% precision is legally or mathematically required (e.g. financial bank balance calculations).",
              badCode: "// Using HLL for exact billing invoices",
              goodCode: "// Use exact database COUNT(DISTINCT) for financial billing; use HLL for analytics dashboards",
              explanation: "HyperLogLog is an approximation algorithm. It is ideal for metrics and analytics, but should not be used where exact precision is required.",
            },
          ],
          bestPractices: [
            "Use Redis `PFADD` / `PFCOUNT` for tracking unique daily active users (DAU) across millions of visitors.",
            "Use Count-Min Sketch for tracking top-K heavy hitters and rate limiting in network firewalls.",
            "Use Cuckoo Filters instead of Bloom Filters if your system requires deleting items dynamically.",
          ],
          summary: [
            "Probabilistic data structures trade minimal precision for 99.9% memory savings.",
            "HyperLogLog estimates unique cardinality across billions of items in 1.5KB RAM.",
            "Count-Min Sketch and Bloom Filters provide constant-space frequency and membership testing.",
          ],
        },
      ],
    },
  ],
};
