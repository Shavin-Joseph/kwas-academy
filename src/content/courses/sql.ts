import { Course } from "@/types";

export const sqlCourse: Course = {
  id: "course-sql",
  slug: "sql",
  title: "SQL & Relational Database Engineering",
  tagline: "Master relational databases, complex queries, JOINs, indexing, transactions, and performance tuning.",
  description: "Comprehensive relational database engineering: schema design, SQL CRUD operations, INNER/LEFT/FULL JOINs, aggregations, subqueries, Common Table Expressions (CTEs), ACID transactions, B-Tree indexes, and query execution plans.",
  category: "Databases",
  level: "Beginner",
  estimatedHours: 24,
  icon: "Database",
  badgeColor: "purple",
  prerequisites: ["Basic data concept familiarity."],
  skillsGained: [
    "Relational Schema Modeling (PK/FK Constraints, Normalization)",
    "High-Performance SQL Queries (JOINs, GROUP BY, HAVING)",
    "Common Table Expressions (WITH queries) & Window Functions",
    "ACID Transactions & Concurrency Isolation Levels",
    "Indexing Strategies (B-Tree, Hash, GIN) & EXPLAIN ANALYZE",
  ],
  featured: true,
  modules: [
    {
      id: "mod-sql-1",
      slug: "intro",
      title: "Module 1: Relational Database Concepts & ACID",
      description: "RDBMS architecture, tables, columns, rows, primary keys, and ACID guarantees.",
      lessons: [
        {
          id: "sql-intro",
          slug: "sql-introduction",
          courseSlug: "sql",
          moduleSlug: "intro",
          title: "Relational Database Fundamentals & SQL",
          description: "Understand relational theory, tables, primary keys, foreign keys, and write foundational SELECT queries.",
          durationMinutes: 14,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "How RDBMS structures data into relational tables with primary keys",
            "Writing SELECT, WHERE, ORDER BY, and LIMIT clauses",
            "Why SELECT * should be avoided in production systems",
          ],
          introduction: `SQL (Structured Query Language) is the universal domain-specific language used to manage, query, and manipulate data stored in Relational Database Management Systems.`,
          whyItMatters: `Databases are the persistent source of truth for all enterprise web applications.`,
          mainExample: {
            title: "SELECT Query with Filter & Sort",
            language: "sql",
            code: `SELECT id, name, email, score\nFROM students\nWHERE score >= 80\nORDER BY score DESC\nLIMIT 5;`,
            executable: true,
            explanation: ["WHERE score >= 80 filters rows matching the condition."],
          },
          detailedExplanation: ["SQL execution lifecycle: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY -> LIMIT."],
          commonMistakes: [],
          bestPractices: ["Always select explicit columns rather than SELECT *."],
          summary: ["SQL is the foundational query language for all backend engineering."],
        },
      ],
    },
    {
      id: "mod-sql-2",
      slug: "ddl",
      title: "Module 2: Data Definition (CREATE, ALTER, DROP) & Data Types",
      description: "Table schema creation, column data types (VARCHAR, UUID, TIMESTAMP), and constraints.",
      lessons: [
        {
          id: "sql-ddl",
          slug: "create-alter-drop-tables",
          courseSlug: "sql",
          moduleSlug: "ddl",
          title: "DDL: CREATE TABLE, Constraints & Data Types",
          description: "Define relational tables with PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, and CHECK constraints.",
          durationMinutes: 16,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Choosing optimal data types (VARCHAR, INT, UUID, NUMERIC, TIMESTAMPTZ)",
            "Enforcing entity integrity with PRIMARY KEY and UNIQUE constraints",
            "Referential integrity with FOREIGN KEY ... REFERENCES ... ON DELETE CASCADE",
          ],
          introduction: `Data Definition Language (DDL) commands define and modify the schema structure of your relational database tables and indexes.`,
          whyItMatters: `Declaring strict constraints at the database level guarantees data integrity even if application code contains bugs.`,
          mainExample: {
            title: "CREATE TABLE with Relational Constraints",
            language: "sql",
            code: `CREATE TABLE users (\n    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),\n    email VARCHAR(255) NOT NULL UNIQUE,\n    age INT CHECK (age >= 13),\n    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP\n);`,
            executable: true,
            explanation: ["CHECK constraint ensures age is at least 13; UNIQUE prevents duplicate emails."],
          },
          detailedExplanation: ["ALTER TABLE allows adding or dropping columns on existing production tables."],
          commonMistakes: [],
          bestPractices: ["Always store dates with timezone (TIMESTAMPTZ)."],
          summary: ["DDL establishes the structural integrity rules of your database."],
        },
      ],
    },
    {
      id: "mod-sql-3",
      slug: "dml",
      title: "Module 3: Data Manipulation (INSERT, UPDATE, DELETE)",
      description: "Modifying records, batch insertions, UPSERT (ON CONFLICT), and DELETE safety.",
      lessons: [
        {
          id: "sql-dml",
          slug: "insert-update-delete-records",
          courseSlug: "sql",
          moduleSlug: "dml",
          title: "DML: INSERT, UPDATE, DELETE & UPSERT",
          description: "Insert rows, update specific records safely with WHERE, delete records, and handle duplicate collisions with UPSERT.",
          durationMinutes: 15,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Inserting single and multiple rows with INSERT INTO",
            "Safe updates with UPDATE ... SET ... WHERE id = ...",
            "Handling existing collisions with INSERT ... ON CONFLICT DO UPDATE (UPSERT)",
          ],
          introduction: `Data Manipulation Language (DML) commands allow you to insert, modify, and delete rows in your database tables.`,
          whyItMatters: `Running UPDATE or DELETE without a WHERE clause will accidentally overwrite or wipe all rows in the entire table!`,
          mainExample: {
            title: "Safe INSERT with RETURNING & UPSERT",
            language: "sql",
            code: `INSERT INTO users (id, email, age)\nVALUES ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'alex@example.com', 25)\nON CONFLICT (email) DO UPDATE \nSET age = EXCLUDED.age\nRETURNING id, email, created_at;`,
            executable: true,
            explanation: ["ON CONFLICT updates the existing record if the email already exists."],
          },
          detailedExplanation: ["RETURNING clause returns newly mutated values instantly without a second query."],
          commonMistakes: [],
          bestPractices: ["Always double-check WHERE clauses before running UPDATE or DELETE queries."],
          summary: ["DML manages the lifecycle of data rows inside relational tables."],
        },
      ],
    },
    {
      id: "mod-sql-4",
      slug: "select-filtering",
      title: "Module 4: Querying Data with SELECT, WHERE & ORDER BY",
      description: "Filtering with AND/OR, LIKE/ILIKE, IN, BETWEEN, NULL handling (IS NULL), and pagination.",
      lessons: [
        {
          id: "sql-filtering",
          slug: "filtering-like-and-pagination",
          courseSlug: "sql",
          moduleSlug: "select-filtering",
          title: "Advanced WHERE Filters, Pattern Matching & Pagination",
          description: "Filter datasets using pattern matching (LIKE/ILIKE), NULL safety (IS NOT NULL), and implement OFFSET/LIMIT pagination.",
          durationMinutes: 16,
          difficulty: "Beginner",
          whatYouWillLearn: [
            "Pattern matching with LIKE '%text%' and case-insensitive ILIKE",
            "Handling three-valued logic with IS NULL and IS NOT NULL",
            "Keyset cursor pagination vs OFFSET/LIMIT pagination",
          ],
          introduction: `The SELECT statement retrieves rows matching precise filtering criteria and sorts them in ascending (ASC) or descending (DESC) order.`,
          whyItMatters: `In SQL, NULL = NULL is UNKNOWN (not true). You must use IS NULL to test for missing values.`,
          mainExample: {
            title: "Filtered Search with Pagination",
            language: "sql",
            code: `SELECT id, name, email, score\nFROM students\nWHERE email ILIKE '%@kwasacademy.dev'\n  AND score BETWEEN 80 AND 100\n  AND status IS NOT NULL\nORDER BY score DESC\nLIMIT 10 OFFSET 0;`,
            executable: true,
            explanation: ["ILIKE matches case-insensitively.", "BETWEEN filters inclusive ranges."],
          },
          detailedExplanation: ["High OFFSET values (e.g. OFFSET 100000) are slow; use cursor pagination on large tables."],
          commonMistakes: [],
          bestPractices: ["Use keyset cursor pagination (WHERE id > last_seen_id) for large datasets."],
          summary: ["SELECT and WHERE clauses extract precise subsets of data efficiently."],
        },
      ],
    },
    {
      id: "mod-sql-5",
      slug: "aggregations",
      title: "Module 5: Aggregate Functions & GROUP BY / HAVING",
      description: "COUNT, SUM, AVG, MIN, MAX, GROUP BY multi-column, and HAVING post-aggregation filters.",
      lessons: [
        {
          id: "sql-aggregates",
          slug: "group-by-and-aggregates",
          courseSlug: "sql",
          moduleSlug: "aggregations",
          title: "Aggregate Functions (COUNT, SUM, AVG) & HAVING",
          description: "Summarize data groups, calculate financial metrics, and filter aggregated groups with HAVING.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Summarizing metrics with COUNT(*), SUM(col), AVG(col), MIN, MAX",
            "Grouping rows by dimensions with GROUP BY",
            "Why HAVING filters groups while WHERE filters individual rows",
          ],
          introduction: `Aggregate functions calculate a single summary result from multiple input row values. GROUP BY groups rows that have the same values into summary rows.`,
          whyItMatters: `Aggregations drive executive dashboards, financial summaries, and business intelligence metrics.`,
          mainExample: {
            title: "Revenue by Region with HAVING Filter",
            language: "sql",
            code: `SELECT \n    region,\n    COUNT(order_id) AS total_orders,\n    SUM(amount) AS total_revenue,\n    ROUND(AVG(amount), 2) AS avg_order_value\nFROM orders\nWHERE status = 'COMPLETED'\nGROUP BY region\nHAVING SUM(amount) > 10000\nORDER BY total_revenue DESC;`,
            executable: true,
            explanation: ["HAVING filters regions whose total revenue exceeds 10,000."],
          },
          detailedExplanation: ["COUNT(*) counts all rows; COUNT(column) counts non-null values only."],
          commonMistakes: [],
          bestPractices: ["Every non-aggregated column in the SELECT list must appear in the GROUP BY clause."],
          summary: ["Aggregations and GROUP BY synthesize raw records into actionable insights."],
        },
      ],
    },
    {
      id: "mod-sql-6",
      slug: "joins",
      title: "Module 6: Relational JOINs (INNER, LEFT, RIGHT, FULL)",
      description: "Combining normalized tables, foreign key matching, self joins, and cross joins.",
      lessons: [
        {
          id: "sql-joins",
          slug: "joins-and-aggregations",
          courseSlug: "sql",
          moduleSlug: "joins",
          title: "Relational JOINs (INNER, LEFT, RIGHT, FULL)",
          description: "Combine related tables across primary and foreign key relationships with high-performance JOIN clauses.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "INNER JOIN (matching rows in both tables)",
            "LEFT JOIN (all left rows + matching right rows)",
            "FULL OUTER JOIN and Self-referencing JOINs",
          ],
          introduction: `In normalized databases, data is split across tables (Users, Orders, Items). JOIN clauses re-combine these tables during query time based on shared key columns.`,
          whyItMatters: `Choosing between INNER JOIN and LEFT JOIN determines whether records with zero orders are included or excluded in reports.`,
          mainExample: {
            title: "Customer Orders with LEFT JOIN",
            language: "sql",
            code: `SELECT \n    c.customer_id,\n    c.customer_name,\n    COUNT(o.order_id) AS orders_placed\nFROM customers c\nLEFT JOIN orders o ON c.customer_id = o.customer_id\nGROUP BY c.customer_id, c.customer_name\nORDER BY orders_placed DESC;`,
            executable: true,
            explanation: ["LEFT JOIN keeps customers who have 0 orders in the result set."],
          },
          detailedExplanation: ["Always index foreign key columns to ensure JOIN operations run via index scans."],
          commonMistakes: [],
          bestPractices: ["Always use table aliases (c, o) to keep multi-table queries readable."],
          summary: ["JOINs unlock the full power of normalized relational data architectures."],
        },
      ],
    },
    {
      id: "mod-sql-7",
      slug: "subqueries-ctes",
      title: "Module 7: Subqueries & Common Table Expressions (CTEs)",
      description: "Subqueries in WHERE/FROM, correlated subqueries, and readable WITH clauses (CTEs).",
      lessons: [
        {
          id: "sql-ctes",
          slug: "ctes-and-subqueries",
          courseSlug: "sql",
          moduleSlug: "subqueries-ctes",
          title: "Common Table Expressions (WITH) & Subqueries",
          description: "Break down monolithic queries into readable, reusable CTE pipelines using the WITH statement.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Writing Common Table Expressions (WITH table_name AS (...))",
            "Correlated subqueries (WHERE EXISTS (...))",
            "Recursive CTEs for hierarchical organizational trees",
          ],
          introduction: `Common Table Expressions (CTEs) define temporary named result sets that exist within the scope of a single SELECT, INSERT, UPDATE, or DELETE statement.`,
          whyItMatters: `CTEs transform 100-line unreadable nested subquery monstrosities into clean, sequential, top-to-bottom data pipelines.`,
          mainExample: {
            title: "Multi-Step CTE Query",
            language: "sql",
            code: `WITH HighValueCustomers AS (\n    SELECT customer_id, SUM(amount) AS total_spent\n    FROM orders\n    GROUP BY customer_id\n    HAVING SUM(amount) > 1000\n)\nSELECT c.customer_name, c.email, h.total_spent\nFROM HighValueCustomers h\nINNER JOIN customers c ON c.customer_id = h.customer_id\nORDER BY h.total_spent DESC;`,
            executable: true,
            explanation: ["HighValueCustomers is calculated first, making the final SELECT simple."],
          },
          detailedExplanation: ["In modern PostgreSQL, CTEs are inlined by the query planner for optimal execution speed."],
          commonMistakes: [],
          bestPractices: ["Use CTEs instead of deeply nested subqueries to improve code maintainability."],
          summary: ["CTEs provide clean modular structure for complex SQL analytics."],
        },
      ],
    },
    {
      id: "mod-sql-8",
      slug: "window-functions",
      title: "Module 8: Window Functions (ROW_NUMBER, RANK, LEAD, LAG)",
      description: "OVER (PARTITION BY ... ORDER BY ...), ROW_NUMBER, DENSE_RANK, LEAD, LAG, and running totals.",
      lessons: [
        {
          id: "sql-window",
          slug: "window-functions-mastery",
          courseSlug: "sql",
          moduleSlug: "window-functions",
          title: "Window Functions (ROW_NUMBER, RANK, LEAD, LAG)",
          description: "Perform advanced calculations across rows without collapsing them with the OVER (PARTITION BY) clause.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Difference between GROUP BY (collapses rows) and Window functions (retains rows)",
            "Ranking rows with ROW_NUMBER(), RANK(), and DENSE_RANK()",
            "Comparing against previous/next rows with LAG() and LEAD()",
          ],
          introduction: `A window function performs a calculation across a set of table rows that are somehow related to the current row, without collapsing the individual rows into a single summary output.`,
          whyItMatters: `Calculating running totals or month-over-month growth takes 1 line with window functions instead of 5 complex self-joins.`,
          mainExample: {
            title: "Top 3 Products per Category with ROW_NUMBER",
            language: "sql",
            code: `WITH RankedProducts AS (\n    SELECT \n        product_name,\n        category,\n        price,\n        ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as rank_in_category\n    FROM products\n)\nSELECT product_name, category, price\nFROM RankedProducts\nWHERE rank_in_category <= 3;`,
            executable: true,
            explanation: ["PARTITION BY category restarts the rank numbering for each category."],
          },
          detailedExplanation: ["LEAD(sales, 1) OVER (ORDER BY month) retrieves the next month's sales value."],
          commonMistakes: [],
          bestPractices: ["Use window functions for ranking, pagination, and time-series delta analysis."],
          summary: ["Window functions unlock advanced analytics without procedural code."],
        },
      ],
    },
    {
      id: "mod-sql-9",
      slug: "indexing-tuning",
      title: "Module 9: Indexing Strategies (B-Tree, Hash, GIN) & EXPLAIN",
      description: "B-Tree index structure, composite indexes, GIN index for JSONB, and reading EXPLAIN ANALYZE.",
      lessons: [
        {
          id: "sql-indexes",
          slug: "indexing-and-explain-analyze",
          courseSlug: "sql",
          moduleSlug: "indexing-tuning",
          title: "B-Tree Indexes & Query Execution Plans (EXPLAIN ANALYZE)",
          description: "Accelerate query performance from seconds to sub-milliseconds using B-Tree indexes and reading EXPLAIN plans.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How B-Tree indexes enable O(log n) binary search lookup on disk",
            "Composite multi-column indexes and the left-prefix rule",
            "Reading EXPLAIN ANALYZE output: Seq Scan vs Index Scan vs Bitmap Heap Scan",
          ],
          introduction: `An index is a separate data structure on disk (most commonly a balanced B-Tree) that speeds up the retrieval of rows by column value, at the cost of additional write overhead.`,
          whyItMatters: `On a 10,000,000 row table, an unindexed query performs a sequential scan reading 2GB of disk. An index scan touches only 4 tree pages in <1ms.`,
          mainExample: {
            title: "Index Creation & EXPLAIN Plan",
            language: "sql",
            code: `-- Create Composite Index\nCREATE INDEX idx_orders_customer_status ON orders(customer_id, status);\n\n-- Inspect query execution plan\nEXPLAIN ANALYZE\nSELECT * FROM orders\nWHERE customer_id = 'CUST-001' AND status = 'COMPLETED';`,
            executable: true,
            explanation: ["Index scan executes in under 1ms on large datasets."],
          },
          detailedExplanation: ["Indexes speed up SELECT queries but slightly slow down INSERT, UPDATE, and DELETE operations."],
          commonMistakes: [],
          bestPractices: ["Index columns frequently used in WHERE filters, JOIN ON keys, and ORDER BY clauses."],
          summary: ["Proper indexing is the #1 factor in database scalability and throughput."],
        },
      ],
    },
    {
      id: "mod-sql-10",
      slug: "transactions",
      title: "Module 10: Transactions, Isolation Levels & Row Locks",
      description: "BEGIN, COMMIT, ROLLBACK, dirty reads, isolation levels (Read Committed, Serializable), and row locking.",
      lessons: [
        {
          id: "sql-transactions",
          slug: "transactions-and-isolation-levels",
          courseSlug: "sql",
          moduleSlug: "transactions",
          title: "ACID Transactions, Row Locks & Isolation Levels",
          description: "Ensure financial-grade data integrity with transactions, ROLLBACK on errors, and SELECT ... FOR UPDATE locks.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The 4 ACID Pillars: Atomicity, Consistency, Isolation, Durability",
            "Transaction lifecycle: BEGIN, COMMIT, ROLLBACK",
            "Pessimistic locking with SELECT ... FOR UPDATE to prevent race conditions",
          ],
          introduction: `A database transaction is a sequence of multiple database operations executed as a single, atomic unit of work. Either all statements succeed, or the entire batch rolls back completely.`,
          whyItMatters: `In bank transfers, deducting from Account A and adding to Account B must be atomic. If the server crashes mid-way, money cannot vanish into thin air.`,
          mainExample: {
            title: "Atomic Bank Transfer Transaction",
            language: "sql",
            code: `BEGIN;\n\n-- 1. Deduct from sender with row lock\nUPDATE accounts \nSET balance = balance - 100 \nWHERE id = 'acc_sender' AND balance >= 100;\n\n-- 2. Credit to receiver\nUPDATE accounts \nSET balance = balance + 100 \nWHERE id = 'acc_receiver';\n\nCOMMIT; -- All mutations become permanent atomically`,
            executable: true,
            explanation: ["If any error occurs before COMMIT, issuing ROLLBACK restores the original balances."],
          },
          detailedExplanation: ["Isolation levels (Read Committed, Repeatable Read, Serializable) balance concurrency with isolation."],
          commonMistakes: [],
          bestPractices: ["Keep transactions as short as possible to minimize row lock contention."],
          summary: ["ACID transactions guarantee total consistency and crash resilience."],
        },
      ],
    },
    {
      id: "mod-sql-11",
      slug: "schema-design",
      title: "Module 11: Database Normalization & Schema Architecture",
      description: "1NF, 2NF, 3NF normalization, foreign keys, junction tables, and deliberate denormalization.",
      lessons: [
        {
          id: "sql-normalization",
          slug: "normalization-and-schema-architecture",
          courseSlug: "sql",
          moduleSlug: "schema-design",
          title: "Database Normalization (1NF, 2NF, 3NF) & Schema Design",
          description: "Design relational database schemas eliminating redundancy via 1st, 2nd, and 3rd Normal Forms.",
          durationMinutes: 20,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "First Normal Form (1NF): Atomic single values and unique primary keys",
            "Second Normal Form (2NF): No partial dependencies on composite keys",
            "Third Normal Form (3NF): No transitive non-key dependencies",
          ],
          introduction: `Database normalization is the process of structuring a relational database in accordance with a series of normal forms in order to reduce data redundancy and improve data integrity.`,
          whyItMatters: `Proper normalization prevents update anomalies where changing a customer's address requires modifying 500 duplicate order rows.`,
          mainExample: {
            title: "Normalized E-Commerce Schema Architecture",
            language: "sql",
            code: `CREATE TABLE categories (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL\n);\n\nCREATE TABLE products (\n    id SERIAL PRIMARY KEY,\n    category_id INT REFERENCES categories(id),\n    title VARCHAR(200) NOT NULL,\n    price NUMERIC(10, 2) NOT NULL\n);`,
            executable: true,
            explanation: ["Foreign key category_id normalizes category names into a single source of truth."],
          },
          detailedExplanation: ["In high-throughput analytics data warehouses, deliberate denormalization (star schema) is used for speed."],
          commonMistakes: [],
          bestPractices: ["Aim for 3NF for OLTP transactional applications."],
          summary: ["Normalized schemas ensure data consistency and eliminate redundant updates."],
        },
      ],
    },
    {
      id: "mod-sql-12",
      slug: "postgres-wal-mvcc-vacuum-internals",
      title: "Module 12: PostgreSQL Storage: WAL, MVCC & Vacuum Internals",
      description: "Master PostgreSQL storage engine internals: Write-Ahead Logging (WAL), Multi-Version Concurrency Control (MVCC), and autovacuum tuning.",
      lessons: [
        {
          id: "sql-wal-mvcc",
          slug: "postgresql-wal-mvcc-vacuum-page-layout",
          courseSlug: "sql",
          moduleSlug: "postgres-wal-mvcc-vacuum-internals",
          title: "PostgreSQL Storage Internals: WAL, MVCC & Vacuuming",
          description: "Explore the physical storage engine of PostgreSQL: 8KB buffer page layout, Multi-Version Concurrency Control (xmin/xmax transaction visibility), Write-Ahead Logging (WAL) fsync checkpoints, and tuning autovacuum to eliminate table bloat.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "PostgreSQL 8KB Page Layout: PageHeaderData, ItemIdData (line pointers), and HeapTuples",
            "Multi-Version Concurrency Control (MVCC): How `xmin` and `xmax` provide non-blocking reads during concurrent writes",
            "Write-Ahead Logging (WAL): ARIES recovery algorithm and fsync durability guarantees",
            "Autovacuum internals: Dead tuple reclamation, freezing transaction IDs, and preventing transaction wraparound panic",
          ],
          introduction: `PostgreSQL guarantees ACID compliance without locking readers through Multi-Version Concurrency Control (MVCC). When a row is updated, PostgreSQL does not overwrite the existing data in-place; it inserts a new version of the tuple with updated 'xmin' and 'xmax' transaction IDs. Write-Ahead Logging (WAL) records every binary disk modification sequentially to durable storage before dirty pages are flushed from the buffer pool to disk.`,
          whyItMatters: `Dead tuples accumulate over time, inflating disk usage (table bloat) and slowing down sequential scans. Understanding autovacuum mechanics is essential for managing multi-terabyte production database clusters.`,
          syntax: `SELECT ctid, xmin, xmax, * FROM users;\nVACUUM (VERBOSE, ANALYZE) users;`,
          mainExample: {
            title: "Inspecting MVCC Tuple Visibility and WAL Metadata",
            language: "sql",
            code: `-- 1. Create test table and insert a record
CREATE TABLE account_balances (
    account_id INT PRIMARY KEY,
    balance NUMERIC(12, 2) NOT NULL
);

INSERT INTO account_balances VALUES (101, 5000.00);

-- 2. Inspect physical MVCC system columns (ctid, xmin, xmax)
-- ctid: Physical page location (0, 1) -> Page 0, Line pointer 1
-- xmin: Transaction ID that inserted this tuple
-- xmax: 0 (or transaction ID that deleted/updated this tuple)
SELECT ctid, xmin, xmax, account_id, balance 
FROM account_balances 
WHERE account_id = 101;

-- 3. Update the balance -> Creates a NEW tuple version on disk!
UPDATE account_balances SET balance = 5500.00 WHERE account_id = 101;

-- Inspect updated physical layout (ctid transitions to (0, 2)!)
SELECT ctid, xmin, xmax, account_id, balance 
FROM account_balances 
WHERE account_id = 101;

-- 4. Reclaim dead tuple (0, 1) and update query statistics
VACUUM (ANALYZE) account_balances;`,
            executable: true,
            explanation: [
              "ctid (0, 1) points to the physical 8KB page number and item offset of the row.",
              "UPDATE inserts a new tuple with ctid (0, 2) and sets the old tuple's xmax to the active transaction ID.",
              "Transactions starting before the update see tuple (0, 1); transactions starting after see tuple (0, 2) with zero locking.",
              "VACUUM scans pages, marks dead unreferenced tuples as free space for future inserts, and updates table planner statistics.",
            ],
          },
          detailedExplanation: [
            "Transaction ID Wraparound: PostgreSQL transaction IDs are 32-bit integers (~4 billion transactions). Autovacuum runs 'Freeze' operations that mark old transaction IDs as frozen (`FrozenTransactionId = 2`), preventing database transaction ID wraparound shutdowns.",
          ],
          commonMistakes: [
            {
              mistake: "Disabling autovacuum on high-write tables to 'improve insert speed'.",
              badCode: "ALTER TABLE transactions SET (autovacuum_enabled = false); -- Catastrophic bloat",
              goodCode: "ALTER TABLE transactions SET (autovacuum_vacuum_scale_factor = 0.05);",
              explanation: "Disabling autovacuum causes massive disk bloat, degrades index performance, and eventually causes database shutdowns due to transaction ID wraparound.",
            },
          ],
          bestPractices: [
            "Tune `autovacuum_vacuum_scale_factor` down to 0.05 on large high-write tables.",
            "Monitor bloat using `pgstattuple` extensions.",
            "Use SSD/NVMe drives with `wal_sync_method = fdatasync` for maximum Write-Ahead Log throughput.",
          ],
          summary: [
            "MVCC provides lock-free concurrent reads by creating tuple versions tracked by `xmin` and `xmax`.",
            "WAL ensures durability by writing sequential log records before flushing dirty heap pages.",
            "Autovacuum reclaims dead tuple disk space and prevents transaction wraparound panics.",
          ],
        },
      ],
    },
    {
      id: "mod-sql-13",
      slug: "advanced-indexing-btree-brin-gin-gist",
      title: "Module 13: Advanced Indexing Architecture: B-Tree, BRIN, GIN & GiST",
      description: "Master PostgreSQL index access methods: B-Tree internal nodes, BRIN block ranges, GIN inverted indexes, and GiST geometric trees.",
      lessons: [
        {
          id: "sql-indexes-deep",
          slug: "postgresql-indexes-btree-brin-gin-gist-hash",
          courseSlug: "sql",
          moduleSlug: "advanced-indexing-btree-brin-gin-gist",
          title: "Database Indexing Internals: B-Tree, BRIN, GIN & GiST",
          description: "Select the optimal database index architecture: B-Tree balanced search trees, Block Range Index (BRIN) for multi-billion row timeseries, Generalized Inverted Index (GIN) for JSONB/full-text, and GiST for spatial and range types.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The internal mechanics of B-Tree indexes: Root, Internal branches, Leaf pages, and B-Tree Page Splits",
            "How BRIN (Block Range Index) compresses index size from 50GB to 500KB on naturally ordered timeseries data",
            "GIN (Generalized Inverted Index) posting lists for JSONB documents and full-text search",
            "Covering indexes with `INCLUDE` clauses for zero-heap-lookup Index-Only Scans",
          ],
          introduction: `Indexes are specialized disk data structures that allow database engines to locate specific rows without reading entire multi-gigabyte tables from disk. PostgreSQL provides multiple specialized index access methods. Selecting the wrong index type can degrade write throughput and consume hundreds of gigabytes of unnecessary RAM.`,
          whyItMatters: `For a 500-million row audit log table, a standard B-Tree index consumes ~15GB of RAM. A BRIN index achieves identical range query performance while consuming only 2MB of memory.`,
          syntax: `CREATE INDEX idx_logs_brin ON logs USING BRIN (created_at);\nCREATE INDEX idx_users_json ON users USING GIN (metadata jsonb_path_ops);\nCREATE INDEX idx_orders_covering ON orders (user_id) INCLUDE (total_amount);`,
          mainExample: {
            title: "Creating High-Performance GIN, BRIN, and Covering Indexes",
            language: "sql",
            code: `-- 1. Covering B-Tree Index for Index-Only Scans (Heap Lookup Elimination)
CREATE TABLE user_orders (
    order_id BIGSERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- INCLUDE clause stores total_amount in leaf pages without adding it to the B-Tree search key!
CREATE INDEX idx_orders_covering ON user_orders (user_id) INCLUDE (total_amount);

-- 2. GIN Index on JSONB Document Attributes
CREATE TABLE user_profiles (
    user_id INT PRIMARY KEY,
    metadata JSONB NOT NULL
);

-- jsonb_path_ops creates hash tokens for instant key-value containment lookups (@>)
CREATE INDEX idx_profiles_gin ON user_profiles USING GIN (metadata jsonb_path_ops);

-- Query using GIN index:
SELECT user_id FROM user_profiles WHERE metadata @> '{"role": "architect", "verified": true}';

-- 3. BRIN Index for Multi-Million Row Ordered Telemetry Logs
CREATE TABLE server_telemetry (
    id BIGSERIAL,
    server_id VARCHAR(50),
    cpu_percent FLOAT,
    logged_at TIMESTAMPTZ NOT NULL
);

-- BRIN records min/max timestamps per 128 disk pages (Tiny footprint!)
CREATE INDEX idx_telemetry_brin ON server_telemetry USING BRIN (logged_at) WITH (pages_per_range = 128);`,
            executable: true,
            explanation: [
              "Covering index (INCLUDE total_amount) allows PostgreSQL to execute an 'Index-Only Scan', reading total_amount directly from the index without touching the heap table pages.",
              "GIN jsonb_path_ops creates an inverted index mapping hashed JSON key-value pairs to matching tuple IDs.",
              "BRIN stores only the minimum and maximum values for physical 128-page ranges, keeping index memory footprint microscopic.",
            ],
          },
          detailedExplanation: [
            "B-Tree Page Splits: When inserting a key into a full 8KB B-Tree leaf page, PostgreSQL must split the page into two 4KB pages and update the parent branch node. Frequent page splits on random UUID primary keys cause index fragmentation. Sequential integer or ULID/UUIDv7 keys prevent page splits.",
          ],
          commonMistakes: [
            {
              mistake: "Using standard B-Tree indexes on massive time-series tables instead of BRIN.",
              badCode: "CREATE INDEX idx_huge_btree ON events (timestamp); -- 30GB index consuming entire buffer pool",
              goodCode: "CREATE INDEX idx_huge_brin ON events USING BRIN (timestamp); -- 5MB index",
              explanation: "For append-only time-series data physically clustered by date, BRIN provides equivalent query speeds with 99% less memory usage.",
            },
          ],
          bestPractices: [
            "Use UUIDv7 (time-ordered) instead of UUIDv4 to eliminate B-Tree page splits.",
            "Use `INCLUDE` clauses for covering indexes on hot queries to enable Index-Only Scans.",
            "Use GIN `jsonb_path_ops` for JSONB containment lookups (`@>`).",
          ],
          summary: [
            "B-Trees provide O(log N) lookup speed for point and range queries.",
            "BRIN indexes naturally ordered datasets with negligible RAM overhead.",
            "GIN indexes power fast JSONB attribute lookups and full-text search.",
          ],
        },
      ],
    },
    {
      id: "mod-sql-14",
      slug: "query-optimizer-cost-models-joins",
      title: "Module 14: Query Optimizer Internals: Cost Models & Join Strategies",
      description: "Understand the Cost-Based Optimizer (CBO): Nested Loop vs Hash Join vs Merge Join, table statistics, and Genetic Query Optimization (GEQO).",
      lessons: [
        {
          id: "sql-optimizer-internals",
          slug: "database-query-optimizer-cost-model-join-strategies",
          courseSlug: "sql",
          moduleSlug: "query-optimizer-cost-models-joins",
          title: "Query Optimizer Internals: Cost Models & Join Algorithms",
          description: "Master the Cost-Based Optimizer (CBO): how PostgreSQL estimates disk I/O and CPU costs (`seq_page_cost`, `random_page_cost`), selecting between Nested Loop, Hash Join, and Merge Join algorithms, and tuning `pg_statistic` histogram buckets.",
          durationMinutes: 24,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The Cost-Based Optimizer formula: Total Cost = CPU Cost + Sequential I/O + Random I/O",
            "The 3 Relational Join Algorithms: Nested Loop Join, Hash Join, and Merge Join",
            "How `ANALYZE` builds MCV (Most Common Values) lists and histogram bounds in `pg_statistic`",
            "Why Genetic Query Optimization (GEQO) activates on queries joining 12+ tables",
          ],
          introduction: `When you submit a SQL query, the database does not execute your SQL literally. The Cost-Based Optimizer (CBO) explores thousands of alternative execution trees and chooses the plan with the lowest estimated cost. Understanding how the optimizer calculates costs and picks join algorithms allows you to fix slow query plans with precision.`,
          whyItMatters: `When table statistics become stale, the optimizer can miscalculate row estimates by 1,000,000x, picking a catastrophic Nested Loop join over a fast Hash Join and causing queries to take 10 minutes instead of 10 milliseconds.`,
          syntax: `EXPLAIN (ANALYZE, BUFFERS, COSTS) SELECT ...;\nSET enable_nestloop = off;`,
          mainExample: {
            title: "Analyzing Optimizer Join Strategies with EXPLAIN BUFFERS",
            language: "sql",
            code: `-- 1. Execute Detailed Execution Plan with Memory Buffers
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT 
    c.name AS course_name,
    COUNT(e.user_id) AS total_enrolled
FROM courses c
JOIN enrollments e ON c.id = e.course_id
WHERE c.category = 'Systems Engineering'
GROUP BY c.id, c.name;

-- Sample Output Analysis:
-- -> HashAggregate (Cost: 450.20..460.50 Rows: 150)
--      Buffers: shared hit=42
--      -> Hash Join (Cost: 120.00..420.00 Rows: 12000)
--           Hash Cond: (e.course_id = c.id)
--           -> Seq Scan on enrollments e (Cost: 0.00..250.00 Rows: 15000)
--           -> Hash (Cost: 110.00..110.00 Rows: 800)
--                -> Seq Scan on courses c (Filter: category = 'Systems Engineering')

-- 2. Inspecting PostgreSQL Optimizer Statistics
SELECT 
    tablename, 
    attname, 
    n_distinct, 
    correlation 
FROM pg_stats 
WHERE tablename = 'courses';`,
            executable: true,
            explanation: [
              "Hash Join builds an in-memory hash table from the smaller dataset (courses) and probes it in O(1) time per enrollment row.",
              "Buffers: shared hit=42 shows that 42 pages were read directly from the RAM buffer pool with zero disk I/O.",
              "pg_stats correlation close to 1.0 indicates rows are physically stored on disk in the exact order of the column, enabling fast index scans.",
            ],
          },
          detailedExplanation: [
            "Join Strategy Decision Matrix: 1. Nested Loop Join is optimal when one table is tiny (<100 rows) and the inner table has an index lookup. 2. Hash Join is optimal for large unsorted datasets that fit in `work_mem`. 3. Merge Join is optimal when both inputs are already sorted by the join key.",
          ],
          commonMistakes: [
            {
              mistake: "Leaving `random_page_cost` at default 4.0 on modern NVMe SSD cloud storage.",
              badCode: "SET random_page_cost = 4.0; -- Default for legacy magnetic spinning hard drives",
              goodCode: "SET random_page_cost = 1.1; -- Accurate for NVMe SSD / EBS gp3 storage",
              explanation: "A high random_page_cost discourages the optimizer from using indexes, causing it to incorrectly prefer slow full table sequential scans.",
            },
          ],
          bestPractices: [
            "Set `random_page_cost = 1.1` on SSD environments to encourage index usage.",
            "Increase `work_mem` for analytical queries to allow Hash Joins to fit entirely in RAM.",
            "Run `ANALYZE` after large batch insertions to update `pg_statistic` histogram buckets.",
          ],
          summary: [
            "Cost-Based Optimizer models CPU and I/O costs to choose execution trees.",
            "Nested Loop, Hash Join, and Merge Join each suit specific data distributions.",
            "`EXPLAIN (ANALYZE, BUFFERS)` reveals exact memory cache hits and execution timings.",
          ],
        },
      ],
    },
    {
      id: "mod-sql-15",
      slug: "distributed-transactions-2pc-replication",
      title: "Module 15: Distributed Transactions: 2PC & Streaming Replication",
      description: "Master distributed database consensus: Two-Phase Commit (`PREPARE TRANSACTION`), Synchronous Streaming Replication, and Quorum consensus.",
      lessons: [
        {
          id: "sql-2pc-replication",
          slug: "distributed-sql-two-phase-commit-streaming-replication",
          courseSlug: "sql",
          moduleSlug: "distributed-transactions-2pc-replication",
          title: "Distributed SQL: Two-Phase Commit & Replication",
          description: "Scale databases across nodes: atomic distributed transactions with Two-Phase Commit (2PC / `PREPARE TRANSACTION`), Physical vs Logical Streaming Replication, and synchronous commit quorum consistency.",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The anatomy of Two-Phase Commit (2PC): Prepare Phase (Voting) vs Commit Phase (Resolution)",
            "Executing distributed transactions with `PREPARE TRANSACTION 'tx_id'` and `COMMIT PREPARED`",
            "Physical Streaming Replication vs Logical Replication (Decoded Write-Ahead Logs)",
            "Configuring zero-data-loss synchronous replication with `synchronous_commit = remote_apply`",
          ],
          introduction: `When an enterprise application splits data across multiple database instances or microservices (e.g. User Database and Billing Database), standard single-node transactions cannot guarantee atomicity. Two-Phase Commit (2PC) is a distributed consensus algorithm that coordinates multiple independent database nodes to either commit or abort a transaction together as an atomic unit.`,
          whyItMatters: `Financial settlement systems cannot allow money to be deducted from Database A without guaranteed recording in Database B. 2PC and synchronous streaming replication prevent distributed data divergence.`,
          syntax: `BEGIN;\nUPDATE accounts SET bal = bal - 100 WHERE id = 1;\nPREPARE TRANSACTION 'global_tx_99';\nCOMMIT PREPARED 'global_tx_99';`,
          mainExample: {
            title: "Executing a Two-Phase Commit (2PC) Transaction Across Nodes",
            language: "sql",
            code: `-- Node 1 (Ledger Service Database): Phase 1 - Prepare
BEGIN;
UPDATE customer_wallets SET balance = balance - 500.00 WHERE customer_id = 99;
-- Prepare the transaction for global consensus (Flushes state to WAL and releases connection lock)
PREPARE TRANSACTION 'transfer_tx_global_001';

-- Node 2 (Payment Gateway Database): Phase 1 - Prepare
BEGIN;
INSERT INTO processed_transfers (customer_id, amount, status) VALUES (99, 500.00, 'SETTLED');
PREPARE TRANSACTION 'transfer_tx_global_001';

-- ==========================================================
-- Distributed Coordinator receives 'PREPARED' vote from BOTH nodes:
-- ==========================================================

-- Node 1: Phase 2 - Commit
COMMIT PREPARED 'transfer_tx_global_001';

-- Node 2: Phase 2 - Commit
COMMIT PREPARED 'transfer_tx_global_001';

-- 3. Monitoring Replication Health and Lag
SELECT 
    client_addr, 
    state, 
    sync_state, 
    sync_priority,
    pg_wal_lsn_diff(pg_current_wal_lsn(), replay_lsn) AS replication_lag_bytes
FROM pg_stat_replication;`,
            executable: true,
            explanation: [
              "PREPARE TRANSACTION writes all modified rows to persistent WAL storage and guarantees the transaction CAN be committed even if the database crashes.",
              "If either node fails during the Prepare phase, the coordinator issues 'ROLLBACK PREPARED' to both nodes, ensuring zero partial state.",
              "pg_stat_replication monitors streaming replication lag bytes between primary and standby replicas in real time.",
            ],
          },
          detailedExplanation: [
            "Replication Modes: In Asynchronous Replication (`synchronous_commit = off/local`), commits return instantly, but failover may lose milliseconds of data. In Synchronous Replication (`synchronous_commit = on`), commits wait until the standby confirms writing the WAL to disk.",
          ],
          commonMistakes: [
            {
              mistake: "Abandoning prepared transactions without committing or rolling them back, causing permanent lock retention.",
              badCode: "PREPARE TRANSACTION 'tx_1'; -- Coordinator crashes and never commits",
              goodCode: "SELECT * FROM pg_prepared_xacts; -- Monitor and resolve dangling prepared transactions",
              explanation: "Prepared transactions hold table locks and prevent VACUUM from cleaning dead tuples until explicitly resolved with COMMIT/ROLLBACK PREPARED.",
            },
          ],
          bestPractices: [
            "Implement automated monitors on `pg_prepared_xacts` to detect orphaned distributed transactions.",
            "Use `synchronous_standby_names = 'ANY 2 (standby1, standby2, standby3)'` for quorum replication.",
            "Use Logical Replication for zero-downtime major PostgreSQL version upgrades.",
          ],
          summary: [
            "Two-Phase Commit guarantees atomicity across multiple independent database clusters.",
            "Prepare Phase ensures durability in WAL; Commit Phase finalizes the transaction.",
            "Streaming replication distributes read traffic and provides high-availability failover.",
          ],
        },
      ],
    },
    {
      id: "mod-sql-16",
      slug: "postgis-timescaledb-spatial-timeseries",
      title: "Module 16: TimescaleDB Hypertables & PostGIS Spatial Analytics",
      description: "Master modern SQL extensions: time-series hypertables with automatic chunking in TimescaleDB and geospatial indexing in PostGIS.",
      lessons: [
        {
          id: "sql-postgis-timeseries",
          slug: "postgresql-postgis-spatial-timescaledb-hypertables",
          courseSlug: "sql",
          moduleSlug: "postgis-timescaledb-spatial-timeseries",
          title: "PostGIS Geospatial Analytics & TimescaleDB Hypertables",
          description: "Extend PostgreSQL beyond standard relational tables: high-performance time-series data management with TimescaleDB Hypertables (automated range chunking) and geospatial GIS queries with PostGIS (`ST_DWithin`, `ST_Distance`, GiST R-Tree indexing).",
          durationMinutes: 26,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How TimescaleDB Hypertables partition data into physical time/space chunks automatically",
            "Continuous Aggregates and automatic data retention policies in TimescaleDB",
            "Geospatial primitives in PostGIS: `GEOMETRY` (flat Cartesian) vs `GEOGRAPHY` (ellipsoidal Earth)",
            "Executing spatial proximity queries (`ST_DWithin`) with GiST spatial indexes",
          ],
          introduction: `PostgreSQL's extension architecture allows it to function as both a specialized Time-Series database and a Geographic Information System (GIS). TimescaleDB transforms standard tables into 'Hypertables' that automatically partition incoming data into physical time chunks. PostGIS adds spatial data types (Points, Polygons) and spatial algorithms (R-Tree GiST indexes) capable of querying millions of geographic coordinates in milliseconds.`,
          whyItMatters: `Ride-sharing platforms (like Uber/Lyft), IoT sensor fleets, and logistics apps use PostGIS and TimescaleDB to track millions of moving vehicles and sensor telemetry data points without separate NoSQL databases.`,
          syntax: `SELECT create_hypertable('metrics', 'time');\nSELECT * FROM venues WHERE ST_DWithin(geom, ST_MakePoint(lon, lat)::geography, 5000);`,
          mainExample: {
            title: "Building a Geospatial Proximity Search with PostGIS and GiST",
            language: "sql",
            code: `-- 1. Enable PostGIS Extension
CREATE EXTENSION IF NOT EXISTS postgis;

-- 2. Create Spatial Table for EV Charging Stations
CREATE TABLE charging_stations (
    station_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    -- GEOGRAPHY type handles Earth curvature (WGS 84 / SRID 4326) in meters!
    location GEOGRAPHY(POINT, 4326) NOT NULL
);

-- 3. Create Spatial GiST (R-Tree) Index
CREATE INDEX idx_stations_spatial ON charging_stations USING GIST (location);

-- Insert Sample Coordinates (Longitude, Latitude)
INSERT INTO charging_stations (name, location) VALUES
('Downtown Supercharger', ST_SetSRID(ST_MakePoint(-73.9851, 40.7484), 4326)),
('Airport Fast Charger', ST_SetSRID(ST_MakePoint(-73.7781, 40.6413), 4326));

-- 4. Spatial Proximity Query: Find all charging stations within 5000 meters (5km) of user
SELECT 
    name,
    ROUND(ST_Distance(location, ST_SetSRID(ST_MakePoint(-73.9850, 40.7480), 4326)::geography)::numeric, 2) AS distance_meters
FROM charging_stations
WHERE ST_DWithin(
    location,
    ST_SetSRID(ST_MakePoint(-73.9850, 40.7480), 4326)::geography,
    5000 -- 5,000 meters search radius
)
ORDER BY distance_meters ASC;`,
            executable: true,
            explanation: [
              "GEOGRAPHY(POINT, 4326) represents GPS coordinates on the Earth's ellipsoidal surface.",
              "USING GIST builds an R-Tree index bounding boxes around points, enabling lightning-fast spatial lookups.",
              "ST_DWithin filters stations within 5,000 meters using index bounding box checks before calculating exact distances.",
              "ST_Distance calculates the precise geodetic distance in meters.",
            ],
          },
          detailedExplanation: [
            "TimescaleDB Hypertable Architecture: Under the hood, a Hypertable is an abstraction over dozens of individual PostgreSQL tables (chunks). When you query `WHERE time > NOW() - INTERVAL '1 hour'`, TimescaleDB prunes 99% of chunks at planning time, reading only the newest 1-hour chunk from memory.",
          ],
          commonMistakes: [
            {
              mistake: "Passing coordinates in (Latitude, Longitude) order to ST_MakePoint instead of standard (Longitude, Latitude / X, Y).",
              badCode: "ST_MakePoint(40.7128, -74.0060) -- Incorrect: Latitude first",
              goodCode: "ST_MakePoint(-74.0060, 40.7128) -- Correct: Longitude (X) then Latitude (Y)",
              explanation: "In GIS systems, coordinates always follow X (Longitude) and Y (Latitude). Inverting them places points in Antarctica or the ocean.",
            },
          ],
          bestPractices: [
            "Always build GiST indexes on `GEOGRAPHY` / `GEOMETRY` columns.",
            "Use `GEOGRAPHY` when calculating distances in meters across Earth coordinates.",
            "Use TimescaleDB Continuous Aggregates for automatic real-time metric downsampling (e.g. 1-minute to 1-hour rollups).",
          ],
          summary: [
            "PostGIS adds geospatial coordinates, polygon mathematics, and spatial GiST indexing.",
            "TimescaleDB Hypertables partition time-series metrics into manageable physical chunks.",
            "Enables PostgreSQL to replace specialized geospatial and time-series NoSQL engines.",
          ],
        },
      ],
    },
  ],
};
