import { Course } from "@/types";

export const cybersecurityCourse: Course = {
  id: "course-cybersecurity",
  slug: "cybersecurity",
  title: "Cybersecurity & Defensive Web Engineering",
  tagline: "OWASP Top 10 defenses, secure authentication, cryptographic hashing, and threat modeling.",
  description: "Learn defensive web security: OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, SSRF, Broken Access Control), cryptographic algorithms (symmetric vs asymmetric), bcrypt password hashing, JWT security, HTTPS/TLS certificates, Content Security Policy (CSP), and secure coding standards.",
  category: "Cybersecurity",
  level: "Intermediate",
  estimatedHours: 26,
  icon: "Shield",
  badgeColor: "red",
  prerequisites: ["Web development basics"],
  skillsGained: [
    "OWASP Top 10 Vulnerability Mitigation & Penetration Defense",
    "SQL Injection & Cross-Site Scripting (XSS) Prevention",
    "Cryptographic Hashing (bcrypt, argon2) & Salt Mechanics",
    "HTTPS/TLS Handshake Protocols & Public Key Infrastructure",
    "HTTP Security Headers (CSP, HSTS, CORS)",
  ],
  featured: false,
  modules: [
    {
      id: "mod-sec-1",
      slug: "infosec-principles",
      title: "Module 1: Information Security Principles (CIA Triad)",
      description: "Confidentiality, Integrity, Availability, Defense-in-Depth, and Principle of Least Privilege.",
      lessons: [
        {
          id: "sec-cia",
          slug: "cia-triad-and-security-principles",
          courseSlug: "cybersecurity",
          moduleSlug: "infosec-principles",
          title: "The CIA Triad & Core Defensive Principles",
          description: "Understand the foundational pillars of information security: Confidentiality, Integrity, and Availability.",
          durationMinutes: 14,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The CIA Triad: Confidentiality (encryption), Integrity (hashes), Availability (redundancy)",
            "The Defense-in-Depth layered security model",
            "Principle of Least Privilege (PoLP) across accounts and services",
          ],
          introduction: `Information Security is the practice of protecting information by mitigating information risks. The CIA Triad serves as the guiding model for evaluating and building secure systems.`,
          whyItMatters: `Every security control in existence—from firewalls to cryptographic signatures—serves to protect at least one aspect of the CIA triad.`,
          mainExample: {
            title: "CIA Triad Mapping",
            language: "text",
            code: `Confidentiality: Data is hidden from unauthorized parties (TLS, AES-256 Encryption)\nIntegrity: Data is unaltered and trustworthy (SHA-256 Hashes, Digital Signatures)\nAvailability: Data is accessible to authorized users when needed (DDoS Mitigation, Backups)`,
            takeaway: "A comprehensive security posture balances all three pillars simultaneously.",
          },
          detailedExplanation: ["Defense-in-depth requires multiple redundant layers of security controls so no single failure compromises the system."],
          commonMistakes: [],
          bestPractices: ["Always apply the principle of least privilege to database users, API keys, and IAM roles."],
          summary: ["The CIA triad guides secure software architecture and risk mitigation."],
        },
      ],
    },
    {
      id: "mod-sec-2",
      slug: "network-security",
      title: "Module 2: Network Security & TCP/IP Protocols",
      description: "OSI model, TCP 3-way handshake, DNS security, firewalls, and port scanning.",
      lessons: [
        {
          id: "sec-network",
          slug: "tcp-ip-and-network-defense",
          courseSlug: "cybersecurity",
          moduleSlug: "network-security",
          title: "Network Defense: TCP Handshake, DNS & Firewalls",
          description: "Understand network packet flow, TCP 3-way handshake (SYN, SYN-ACK, ACK), and packet filtering firewalls.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The TCP 3-Way Handshake mechanism and SYN Flood DDoS attacks",
            "DNS resolution, DNS Spoofing, and DNSSEC protection",
            "Stateful packet inspection firewalls and network segmentation",
          ],
          introduction: `Network security involves policies, processes, and practices adopted to prevent, detect and monitor unauthorized access, misuse, modification, or denial of a computer network.`,
          whyItMatters: `Understanding TCP packet headers allows security engineers to detect port scanning, spoofing, and DDoS attacks.`,
          mainExample: {
            title: "TCP 3-Way Handshake Flow",
            language: "text",
            code: `Client ------------ [SYN: Synchronize Sequence] -----------> Server\nClient <----------- [SYN-ACK: Acknowledge & Sync] ---------- Server\nClient ------------ [ACK: Connection Established] ---------> Server`,
            takeaway: "TCP guarantees reliable bidirectional stream delivery before application data transmits.",
          },
          detailedExplanation: ["SYN cookies defend servers against SYN flood denial-of-service attacks."],
          commonMistakes: [],
          bestPractices: ["Close all unused server ports and segment networks with strict firewall rules."],
          summary: ["Network protocols require defensive configuration to repel automated scans and flood attacks."],
        },
      ],
    },
    {
      id: "mod-sec-3",
      slug: "cryptography",
      title: "Module 3: Cryptography: Symmetric vs Asymmetric",
      description: "AES-256 encryption, RSA/ECC public-key cryptography, key exchange, and digital signatures.",
      lessons: [
        {
          id: "sec-crypto",
          slug: "symmetric-and-asymmetric-cryptography",
          courseSlug: "cybersecurity",
          moduleSlug: "cryptography",
          title: "Symmetric (AES) vs Asymmetric (RSA/ECC) Cryptography",
          description: "Master symmetric bulk encryption (AES-256-GCM) and asymmetric public/private key pairs (RSA, Elliptic Curve).",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Symmetric encryption (same shared key for encrypt/decrypt) with AES-256",
            "Asymmetric cryptography (Public Key encrypts, Private Key decrypts) with RSA/ECC",
            "Digital signatures for non-repudiation and authenticity verification",
          ],
          introduction: `Cryptography is the science of securing communication and data from adversaries through mathematical algorithms.`,
          whyItMatters: `Modern secure systems combine both: asymmetric crypto (Diffie-Hellman) establishes shared keys securely, and symmetric AES encrypts the high-speed data stream.`,
          mainExample: {
            title: "Symmetric vs Asymmetric Roles",
            language: "text",
            code: `Symmetric (AES-GCM): 1 Secret Key | Ultra Fast | Used for database data-at-rest encryption\nAsymmetric (RSA/ECC): Public + Private Key Pair | Used for SSH logins, TLS handshake, and JWT signing`,
            takeaway: "Hybrid cryptography combines asymmetric key exchange with symmetric bulk data speed.",
          },
          detailedExplanation: ["Elliptic Curve Cryptography (ECC) provides the same security as RSA with much smaller key sizes (256-bit ECC ≈ 3072-bit RSA)."],
          commonMistakes: [],
          bestPractices: ["Never implement custom cryptographic algorithms; always use established standard libraries."],
          summary: ["Cryptography protects data confidentiality, integrity, and authenticity."],
        },
      ],
    },
    {
      id: "mod-sec-4",
      slug: "hashing-passwords",
      title: "Module 4: Hashing & Secure Password Storage",
      description: "Cryptographic hash functions (SHA-256), Rainbow Tables, Salts, and bcrypt/Argon2.",
      lessons: [
        {
          id: "sec-hashing",
          slug: "password-hashing-bcrypt-and-argon2",
          courseSlug: "cybersecurity",
          moduleSlug: "hashing-passwords",
          title: "Password Hashing with Bcrypt & Argon2",
          description: "Understand why fast hashes (MD5, SHA-256) are dangerous for passwords, and use adaptive salted hashes (bcrypt, Argon2).",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why cryptographic hashes (SHA-256) are one-way and irreversible",
            "How unique random salts defeat Rainbow Table lookup attacks",
            "Adaptive work factors in bcrypt and Argon2 to resist GPU brute-forcing",
          ],
          introduction: `Passwords must NEVER be stored in plain text or encrypted with reversible keys. Passwords must be hashed using slow, salted, adaptive cryptographic algorithms like bcrypt or Argon2id.`,
          whyItMatters: `GPUs can compute 10,000,000,000 SHA-256 hashes per second. Bcrypt forces work factor delays, limiting attackers to a few hundred attempts per second.`,
          mainExample: {
            title: "Bcrypt Password Hashing & Verification",
            language: "javascript",
            code: `const bcrypt = require("bcryptjs");\n\nasync function hashPassword(plainPassword) {\n  const saltRounds = 12; // 2^12 computational cost iterations\n  const hash = await bcrypt.hash(plainPassword, saltRounds);\n  return hash;\n}\n\nasync function verify(plain, hash) {\n  return await bcrypt.compare(plain, hash);\n}`,
            executable: false,
            explanation: ["bcrypt automatically embeds a unique random 128-bit salt in the output hash."],
          },
          detailedExplanation: ["Argon2id is the winner of the Password Hashing Competition (PHC) and adds memory-hardness against custom ASIC cracking hardware."],
          commonMistakes: [],
          bestPractices: ["Use a minimum of 12 rounds for bcrypt in production authentication systems."],
          summary: ["Slow, salted hashes protect user credentials against data breach cracking."],
        },
      ],
    },
    {
      id: "mod-sec-5",
      slug: "https-tls",
      title: "Module 5: HTTPS, TLS Handshakes & SSL Certificates",
      description: "HTTP vs HTTPS, TLS 1.3 handshake, Certificate Authorities (Let's Encrypt), and Public Key Infrastructure.",
      lessons: [
        {
          id: "sec-tls",
          slug: "https-and-tls-handshake",
          courseSlug: "cybersecurity",
          moduleSlug: "https-tls",
          title: "HTTPS & The TLS 1.3 Handshake Protocol",
          description: "Learn how Transport Layer Security (TLS 1.3) encrypts web traffic and verifies server identity via SSL certificates.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Why unencrypted HTTP exposes credentials to Man-in-the-Middle (MitM) sniffing",
            "The 1-RTT TLS 1.3 cryptographic handshake",
            "Certificate Authorities (CAs) and Public Key Infrastructure (PKI) chains of trust",
          ],
          introduction: `HTTPS (Hypertext Transfer Protocol Secure) encrypts all communication between your browser and the website using TLS, protecting sensitive data like passwords and credit card numbers.`,
          whyItMatters: `On open public Wi-Fi networks, unencrypted HTTP traffic can be intercepted and modified by any attacker on the same network.`,
          mainExample: {
            title: "TLS 1.3 Handshake Timeline",
            language: "text",
            code: `Client -> [ClientHello + Key Share] -> Server\nClient <- [ServerHello + Certificate + Server Key Share + Finished] <- Server\nClient -> [Finished + Encrypted Application Data (HTTP GET)] -> Server`,
            takeaway: "TLS 1.3 completes secure key exchange in just 1 network round-trip (1-RTT).",
          },
          detailedExplanation: ["Let's Encrypt automates free SSL/TLS certificate issuance via the ACME protocol."],
          commonMistakes: [],
          bestPractices: ["Always enforce HTTPS and enable HTTP Strict Transport Security (HSTS)."],
          summary: ["HTTPS/TLS encrypts web traffic and guarantees authentic server identity."],
        },
      ],
    },
    {
      id: "mod-sec-6",
      slug: "owasp-top-10",
      title: "Module 6: Web App Security & OWASP Top 10",
      description: "The Open Web Application Security Project (OWASP) Top 10 vulnerabilities overview.",
      lessons: [
        {
          id: "sec-owasp-intro",
          slug: "owasp-top-10",
          courseSlug: "cybersecurity",
          moduleSlug: "owasp-top-10",
          title: "OWASP Top 10 & Web Application Defenses",
          description: "Understand the most critical web security vulnerabilities and how to write defensive, secure code.",
          durationMinutes: 16,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The OWASP Top 10 risk categories",
            "Broken Access Control (#1 most common web vulnerability)",
            "Security misconfigurations and vulnerable third-party dependencies",
          ],
          introduction: `The Open Web Application Security Project (OWASP) Top 10 is the universally recognized standard awareness document for developers and web application security.`,
          whyItMatters: `Knowing the OWASP Top 10 allows engineering teams to build security into their software development lifecycle (DevSecOps) from day one.`,
          mainExample: {
            title: "OWASP Top 10 Core Highlights",
            language: "text",
            code: `A01: Broken Access Control (Unauthorized data access / IDOR)\nA02: Cryptographic Failures (Plaintext passwords, weak ciphers)\nA03: Injection (SQLi, Command Injection, XSS)\nA04: Insecure Design (Missing rate limits, architectural flaws)\nA05: Security Misconfiguration (Default passwords, debug modes enabled)`,
            takeaway: "Designing security controls upfront prevents costly retrofits post-breach.",
          },
          detailedExplanation: ["Automated dependency scanners (npm audit, Snyk, Dependabot) detect known CVE vulnerabilities in packages."],
          commonMistakes: [],
          bestPractices: ["Run automated security scanners in CI pipelines on every pull request."],
          summary: ["OWASP Top 10 provides the baseline checklist for application security."],
        },
      ],
    },
    {
      id: "mod-sec-7",
      slug: "sql-injection",
      title: "Module 7: SQL Injection (SQLi) & Parameterization",
      description: "Classic SQL injection, blind SQLi, OR 1=1 exploits, and parameterized prepared statements.",
      lessons: [
        {
          id: "sec-sqli",
          slug: "sql-injection-and-parameterized-queries",
          courseSlug: "cybersecurity",
          moduleSlug: "sql-injection",
          title: "SQL Injection (SQLi) & Parameterized Queries",
          description: "Prevent catastrophic SQL injection attacks by replacing string concatenation with parameterized prepared statements.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "How attackers exploit unescaped string concatenation (' OR '1'='1)",
            "Why parameterized prepared statements completely eliminate SQLi",
            "Object-Relational Mapping (ORM) query safety",
          ],
          introduction: `SQL Injection occurs when untrusted user input is directly concatenated into a database SQL query string, allowing attackers to manipulate the query structure.`,
          whyItMatters: `A single SQL injection vulnerability can allow an attacker to bypass authentication, dump the entire user database, or delete all records.`,
          mainExample: {
            title: "Vulnerable vs Parameterized SQL",
            language: "javascript",
            code: `// VULNERABLE (DO NOT DO THIS!):\n// const query = "SELECT * FROM users WHERE email = '" + userInput + "'";\n\n// SECURE (Parameterized Prepared Statement):\nconst query = "SELECT id, email FROM users WHERE email = $1";\nconst result = await db.query(query, [userInput]);`,
            executable: false,
            explanation: ["Database treats $1 strictly as a literal data parameter, never as executable SQL code."],
          },
          detailedExplanation: ["Prepared statements compile the SQL query template first, then pass data parameters separately."],
          commonMistakes: [],
          bestPractices: ["Never concatenate strings into SQL queries; always use parameterized queries or type-safe ORMs."],
          summary: ["Parameterized queries permanently eliminate SQL injection vulnerabilities."],
        },
      ],
    },
    {
      id: "mod-sec-8",
      slug: "xss-defense",
      title: "Module 8: Cross-Site Scripting (XSS) & Mitigation",
      description: "Stored XSS, Reflected XSS, DOM-based XSS, context escaping, and React auto-escaping.",
      lessons: [
        {
          id: "sec-xss",
          slug: "cross-site-scripting-and-mitigation",
          courseSlug: "cybersecurity",
          moduleSlug: "xss-defense",
          title: "Cross-Site Scripting (XSS): Stored, Reflected & DOM",
          description: "Defend web apps against malicious JavaScript execution using HTML escaping, sanitized inputs, and DOMPurify.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "The 3 types of XSS: Stored, Reflected, and DOM-based",
            "How attackers steal session cookies using document.cookie in XSS payloads",
            "Why dangerouslySetInnerHTML requires DOMPurify sanitization in React",
          ],
          introduction: `Cross-Site Scripting (XSS) attacks occur when an attacker injects malicious client-side executable JavaScript scripts into web pages viewed by other users.`,
          whyItMatters: `Malicious JavaScript executing in a victim's browser can steal session tokens, log keystrokes, or perform actions on behalf of the user.`,
          mainExample: {
            title: "Safe React Escaping vs dangerouslySetInnerHTML",
            language: "javascript",
            code: `// SAFE: React automatically escapes HTML entities in JSX\nfunction SafeComment({ text }) {\n  return <p>{text}</p>; // '<script>...' is rendered harmlessly as plain text\n}\n\n// If raw HTML is required, ALWAYS sanitize with DOMPurify first:\n// import DOMPurify from 'dompurify';\n// <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userHTML) }} />`,
            executable: false,
            explanation: ["React escapes text by default, converting < and > into safe &lt; and &gt; entities."],
          },
          detailedExplanation: ["Mark authentication session cookies as HttpOnly so client JavaScript cannot access them via document.cookie."],
          commonMistakes: [],
          bestPractices: ["Set HttpOnly flags on authentication cookies and sanitize all raw HTML inputs."],
          summary: ["Context-aware output escaping and input sanitization neutralize XSS attacks."],
        },
      ],
    },
    {
      id: "mod-sec-9",
      slug: "csrf-ssrf-bac",
      title: "Module 9: CSRF, SSRF & Broken Access Control",
      description: "Cross-Site Request Forgery, SameSite cookie attributes, SSRF, and Insecure Direct Object References (IDOR).",
      lessons: [
        {
          id: "sec-csrf-idor",
          slug: "csrf-ssrf-and-broken-access-control",
          courseSlug: "cybersecurity",
          moduleSlug: "csrf-ssrf-bac",
          title: "CSRF, IDOR & Server-Side Request Forgery (SSRF)",
          description: "Protect against forged cross-site requests with SameSite cookies, anti-CSRF tokens, and prevent IDOR with authorization checks.",
          durationMinutes: 20,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Cross-Site Request Forgery (CSRF) and SameSite=Lax/Strict cookie protection",
            "Insecure Direct Object References (IDOR) when authorization checks are missing (GET /api/user/123)",
            "Server-Side Request Forgery (SSRF) cloud metadata theft prevention",
          ],
          introduction: `Broken Access Control occurs when users can act outside of their intended permissions. CSRF tricks authenticated users into executing unwanted actions on web apps where they are logged in.`,
          whyItMatters: `IDOR happens when an API endpoint looks up records by ID without checking whether the requesting user actually owns that record.`,
          mainExample: {
            title: "IDOR Authorization Guard Pattern",
            language: "javascript",
            code: `async function getInvoice(invoiceId, requestingUserId) {\n  const invoice = await db.invoices.findById(invoiceId);\n  // MANDATORY: Verify ownership!\n  if (!invoice || invoice.userId !== requestingUserId) {\n    throw new ForbiddenError("You do not have permission to view this invoice.");\n  }\n  return invoice;\n}`,
            executable: false,
            explanation: ["Explicitly checks that requestingUserId matches the owner before returning data."],
          },
          detailedExplanation: ["SameSite=Lax prevents browsers from sending cookies along with cross-site third-party requests."],
          commonMistakes: [],
          bestPractices: ["Always enforce ownership authorization checks at the database query level (WHERE id = $1 AND user_id = $2)."],
          summary: ["Access control and SameSite cookie protections prevent unauthorized cross-site actions."],
        },
      ],
    },
    {
      id: "mod-sec-10",
      slug: "security-headers",
      title: "Module 10: HTTP Security Headers (CSP, HSTS, CORS)",
      description: "Content Security Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options, and CORS.",
      lessons: [
        {
          id: "sec-headers",
          slug: "http-security-headers-and-csp",
          courseSlug: "cybersecurity",
          moduleSlug: "security-headers",
          title: "Content Security Policy (CSP) & HTTP Security Headers",
          description: "Harden browsers against clickjacking, script injection, and protocol downgrade with CSP, HSTS, and X-Frame-Options.",
          durationMinutes: 18,
          difficulty: "Intermediate",
          whatYouWillLearn: [
            "Content-Security-Policy (CSP) headers to restrict script/image execution sources",
            "HTTP Strict Transport Security (HSTS) to force HTTPS permanently",
            "X-Frame-Options: DENY to prevent iframe clickjacking",
          ],
          introduction: `HTTP Security Headers are response headers sent by the server that instruct the client's web browser on how to behave securely when rendering the application.`,
          whyItMatters: `A strict CSP header blocks unauthorized third-party scripts from executing even if an attacker successfully injects an XSS script tag!`,
          mainExample: {
            title: "Production Security Headers Configuration",
            language: "http",
            code: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload\nX-Content-Type-Options: nosniff\nX-Frame-Options: DENY\nContent-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com; img-src 'self' data: https:; object-src 'none';`,
            executable: false,
            explanation: ["Headers instruct the browser to enforce strict sandboxing boundaries."],
          },
          detailedExplanation: ["HSTS preload tells browsers to never attempt unencrypted HTTP connections to your domain."],
          commonMistakes: [],
          bestPractices: ["Deploy CSP in 'Content-Security-Policy-Report-Only' mode first to monitor violations before enforcement."],
          summary: ["Security headers turn standard browsers into active defense shields."],
        },
      ],
    },
    {
      id: "mod-sec-11",
      slug: "auth-threat-model",
      title: "Module 11: Authentication, OAuth 2.0 & Threat Modeling",
      description: "OAuth 2.0 / OpenID Connect authorization code flow, PKCE, STRIDE threat modeling, and zero trust.",
      lessons: [
        {
          id: "sec-oauth-stride",
          slug: "oauth2-and-stride-threat-modeling",
          courseSlug: "cybersecurity",
          moduleSlug: "auth-threat-model",
          title: "OAuth 2.0 (PKCE), Multi-Factor Auth & STRIDE Threat Modeling",
          description: "Implement delegated authorization with OAuth 2.0 + PKCE and systematically analyze architecture risks with STRIDE.",
          durationMinutes: 22,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "OAuth 2.0 Authorization Code Flow with PKCE (Proof Key for Code Exchange)",
            "Multi-Factor Authentication (TOTP / WebAuthn FIDO2 keys)",
            "The STRIDE Threat Modeling framework (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation of Privilege)",
          ],
          introduction: `OAuth 2.0 is the industry-standard authorization framework enabling third-party applications to obtain limited access to user accounts without sharing passwords. STRIDE provides a structured method to find vulnerabilities during architectural design.`,
          whyItMatters: `Threat modeling before writing code prevents fundamental architectural security flaws that cost millions to fix post-launch.`,
          mainExample: {
            title: "STRIDE Threat Modeling Taxonomy",
            language: "text",
            code: `S - Spoofing Identity (Prevent with MFA & Digital Signatures)\nT - Tampering with Data (Prevent with Hashes & TLS)\nR - Repudiation (Prevent with Audit Logs & WORM Storage)\nI - Information Disclosure (Prevent with Encryption & Least Privilege)\nD - Denial of Service (Prevent with Rate Limiting & Autoscaling)\nE - Elevation of Privilege (Prevent with Role-Based Access Control RBAC)`,
            takeaway: "STRIDE systematically identifies every category of security threat across application components.",
          },
          detailedExplanation: ["PKCE (RFC 7636) prevents authorization code interception attacks on single-page apps and mobile devices."],
          commonMistakes: [],
          bestPractices: ["Perform STRIDE threat modeling on all new system architecture diagrams before implementation."],
          summary: ["Threat modeling and modern OAuth standards build secure-by-design software systems."],
        },
      ],
    },
    {
      id: "mod-cs-sec-12",
      slug: "advanced-web-exploitation-ssrf-pollution",
      title: "Module 12: Advanced Web Exploitation: Prototype Pollution & SSRF",
      description: "Master cutting-edge web exploitation techniques: JavaScript Prototype Pollution, Blind Server-Side Request Forgery (SSRF), and GraphQL Injections.",
      lessons: [
        {
          id: "sec-prototype-ssrf",
          slug: "advanced-web-security-prototype-pollution-blind-ssrf-graphql",
          courseSlug: "cybersecurity",
          moduleSlug: "advanced-web-exploitation-ssrf-pollution",
          title: "Advanced Web Exploitation: Prototype Pollution & SSRF",
          description: "Deconstruct complex application vulnerabilities: Server-Side Prototype Pollution in Node.js leading to Remote Code Execution (RCE), Blind SSRF bypassing cloud metadata filters (`169.254.169.254`), and GraphQL query depth circular denial of service.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "How recursive object merge and `Object.assign` introduce Prototype Pollution via `__proto__` and `constructor.prototype`",
            "Escalating Prototype Pollution to Remote Code Execution (RCE) via `child_process.fork` environment gadgets",
            "Advanced SSRF exploitation against AWS/GCP/Azure Instance Metadata Services (IMDSv2)",
            "Securing GraphQL APIs against Batching Attacks and Circular Nested Query DoS",
          ],
          introduction: `While standard vulnerabilities like SQL Injection and Cross-Site Scripting (XSS) are widely understood, modern JavaScript stacks and cloud-native backends face subtle architectural exploit primitives. Server-Side Prototype Pollution allows attackers to inject properties into the root \`Object.prototype\`, corrupting application logic or hijacking subprocess execution. Server-Side Request Forgery (SSRF) abuses backend services into making unauthorized HTTP requests to internal cloud metadata APIs.`,
          whyItMatters: `Capital One suffered one of the largest data breaches in history (100M+ customer records leaked) through a Server-Side Request Forgery (SSRF) attack that exfiltrated AWS IAM credentials from the EC2 metadata service.`,
          syntax: `// Prototype Pollution Payload\n{"__proto__": {"shell": "/bin/sh", "NODE_OPTIONS": "--inspect"}}\n// AWS IMDSv2 Token Header\ncurl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600"`,
          mainExample: {
            title: "Simulating Prototype Pollution Gadget Hijacking and Hardening Defense",
            language: "javascript",
            code: `// Prototype Pollution Vulnerability & Defensive Mitigation Engine
const express = require('express');

// VULNERABLE FUNCTION: Recursive deep merge without property sanitization
function vulnerableDeepMerge(target, source) {
    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null) {
            if (!target[key]) target[key] = {};
            vulnerableDeepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

// HARDENED FUNCTION: Defensive Prototype-Safe Merge
function secureDeepMerge(target, source) {
    for (const key in source) {
        // Block dangerous prototype poisoning keys!
        if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
            continue;
        }
        if (typeof source[key] === 'object' && source[key] !== null) {
            if (!target[key]) target[key] = Object.create(null); // Dictionary with no prototype!
            secureDeepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

// 1. Attacker Payload attempting to pollute global Object prototype
const maliciousPayload = JSON.parse('{"__proto__": {"isAdmin": true, "role": "SUPERADMIN"}}');

console.log("=== Server-Side Prototype Pollution Defense Engine ===");
console.log("Global Object isAdmin before attack:", ({}).isAdmin); // undefined

// Testing Safe Merge
const userConfig = {};
secureDeepMerge(userConfig, maliciousPayload);
console.log("Global Object isAdmin after secure merge:", ({}).isAdmin); // undefined (Clean!)

// Object.freeze prevention demonstration
Object.freeze(Object.prototype); // Locks root prototype permanently!
console.log("✅ Object.prototype frozen permanently: System immune to prototype tampering!");`,
            executable: true,
            explanation: [
              "Vulnerable recursive merge loops traverse user-controlled JSON keys without filtering __proto__.",
              "Polluting Object.prototype causes every newly created object {} across the entire Node.js runtime to inherit malicious properties.",
              "secureDeepMerge strictly skips __proto__, constructor, and prototype keys.",
              "Object.freeze(Object.prototype) makes the root object immutable, causing any prototype pollution attempt to throw an error.",
            ],
          },
          detailedExplanation: [
            "IMDSv2 Defense: AWS EC2 Instance Metadata Service Version 2 (IMDSv2) mitigates SSRF by requiring a session-oriented `PUT` request with `X-aws-ec2-metadata-token-ttl-seconds` before metadata can be queried. Attackers exploiting simple `GET` SSRF cannot retrieve IAM credentials.",
          ],
          commonMistakes: [
            {
              mistake: "Relying on simple blacklist URL filters for SSRF (e.g. blocking `http://127.0.0.1`), which can be bypassed with DNS Rebinding or decimal IPs (`http://2130706433`).",
              badCode: "if (url.includes('127.0.0.1')) block(); // Easily bypassed via 0.0.0.0 or DNS rebinding",
              goodCode: "// Resolve DNS IP first, verify IP is not in private RFC1918 or link-local range, then fetch",
              explanation: "Attackers register domain names with short TTL that resolve to a public IP first and a private IP (169.254.169.254) on subsequent lookups (DNS Rebinding).",
            },
          ],
          bestPractices: [
            "Execute `Object.freeze(Object.prototype)` at the entry point of Node.js microservices.",
            "Enforce IMDSv2 (`HttpTokens=required`) on all AWS EC2 and container instances.",
            "Use GraphQL query cost analysis and max depth limiters (e.g., `graphql-depth-limit`) to prevent nested query denial of service.",
          ],
          summary: [
            "Prototype Pollution corrupts global JavaScript object inheritance, leading to logic bypass and RCE.",
            "SSRF targets internal cloud metadata services to steal IAM credentials.",
            "Deep input validation, Object.freeze, and IMDSv2 mitigate advanced web attack vectors.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-sec-13",
      slug: "binary-exploitation-rop-aslr-heap",
      title: "Module 13: Binary Exploitation: ROP Chains, ASLR & Heap Exploitation",
      description: "Master memory corruption and binary security: Return-Oriented Programming (ROP), ASLR/DEP bypasses, and Heap Spraying mechanics.",
      lessons: [
        {
          id: "sec-binary-rop-aslr",
          slug: "binary-exploitation-memory-corruption-rop-chains-aslr-heap",
          courseSlug: "cybersecurity",
          moduleSlug: "binary-exploitation-rop-aslr-heap",
          title: "Binary Exploitation: ROP Chains, ASLR & Heap Corruption",
          description: "Understand low-level memory corruption defenses and attack primitives: Stack Buffer Overflows, Return-Oriented Programming (ROP gadgets), bypassing Address Space Layout Randomization (ASLR) with memory leaks, and Heap chunk metadata corruption.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The memory layout of x86-64 Linux binaries: Stack, Heap, BSS, Data, and Text segments",
            "Why Data Execution Prevention (DEP / NX Bit) stopped simple shellcode execution on the stack",
            "How Return-Oriented Programming (ROP) chains existing instructions ending in `ret` (`pop rdi; ret`) to execute arbitrary code",
            "Modern compiler memory mitigations: Stack Canaries (`-fstack-protector-strong`), ASLR, and Control Flow Integrity (CFI)",
          ],
          introduction: `In the early days of binary exploitation, attackers wrote executable shellcode directly onto the call stack and jumped to it. Modern operating systems introduced the Non-Executable Stack (NX / DEP) and Address Space Layout Randomization (ASLR). Return-Oriented Programming (ROP) is an advanced exploitation technique that bypasses NX by chaining together small snippets of existing machine code in executable memory (called 'gadgets') ending in \`ret\` instructions to achieve arbitrary computation.`,
          whyItMatters: `Understanding ROP chains and heap corruption allows systems engineers to write secure C/C++/Rust code, configure compiler defenses, and evaluate kernel vulnerabilities.`,
          syntax: `// ROP Gadget Example\n0x401123: pop rdi ; ret\n0x401125: call system`,
          mainExample: {
            title: "Simulating Return-Oriented Programming (ROP) Execution Flow in Assembly Logic",
            language: "c",
            code: `// Conceptual Representation of Stack Smash Mitigation & ROP Chain Flow
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

// Simulated Vulnerable Function (Compiled without Stack Canaries for Demonstration)
void vulnerable_copy(const char *input) {
    char stack_buffer[64];
    
    // VULNERABILITY: strcpy does not check bounds!
    // Overflows stack_buffer -> overwrites saved frame pointer (RBP) -> overwrites Return Address (RIP)
    // strcpy(stack_buffer, input); 
    printf("[DEBUG] Stack buffer allocated at %p\\n", (void*)stack_buffer);
}

/*
 * HOW A ROP CHAIN WORKS UNDER THE HOOD:
 * When NX (No-Execute) prevents executing shellcode on the stack,
 * the attacker crafts the stack to contain a chain of function return pointers:
 *
 * Stack Offset | Injected Value              | Action Taken on 'ret'
 * ----------------------------------------------------------------------------------
 * RIP (0x48)   | 0x0000000000401823          | Gadget 1: pop rdi ; ret (Loads pointer to "/bin/sh" into RDI register)
 * RIP + 8      | 0x0000000000403040          | Address of string "/bin/sh" in memory
 * RIP + 16     | 0x00007ffff7e0e5a0          | Address of system() function in libc -> Spawns Root Shell!
 */

int main() {
    printf("=== Binary Exploitation: ROP Chains & ASLR Defenses ===\\n");
    printf("1. Stack Canaries: Inserts random guard word before return address.\\n");
    printf("2. ASLR: Randomizes base addresses of stack, heap, and libc on every execution.\\n");
    printf("3. Control Flow Integrity (CFI): Hardware-enforced indirect branch tracking.\\n");
    printf("✅ Modern systems combine Stack Canaries + Full ASLR + PIE + CFI for binary safety.\\n");
    return 0;
}`,
            executable: false,
            explanation: [
              "When a buffer overflows, it overwrites the saved Return Address (RIP) on the execution stack.",
              "Instead of pointing to injected shellcode (blocked by NX bit), the attacker points RIP to an existing sequence of instructions ending in 'ret' (a ROP Gadget).",
              "Chaining gadgets (`pop rdi ; ret` followed by `system()`) loads arguments into CPU registers and invokes libc functions.",
              "Stack Canaries (`-fstack-protector-strong`) place a random cookie before RIP and terminate the process if corrupted.",
            ],
          },
          detailedExplanation: [
            "ASLR & PIE (Position-Independent Executable): ASLR randomizes the memory addresses of the stack, heap, and shared libraries (`libc.so`) at process launch. Attackers must first exploit an Information Disclosure / Memory Leak vulnerability to calculate libc base offsets before crafting ROP chains.",
          ],
          commonMistakes: [
            {
              mistake: "Compiling C/C++ services without Position Independent Executable (PIE) and Stack Protection flags in production builds.",
              badCode: "gcc -fno-stack-protector -no-pie server.c -o server # Highly vulnerable!",
              goodCode: "gcc -O2 -fstack-protector-strong -D_FORTIFY_SOURCE=2 -fPIE -pie -Wl,-z,relro,-z,now server.c -o server",
              explanation: "Full RELRO and PIE randomize binary code locations and mark the Global Offset Table (GOT) read-only, preventing GOT overwrite attacks.",
            },
          ],
          bestPractices: [
            "Enable `-fstack-protector-strong`, `-fPIE -pie`, and `-Wl,-z,relro,-z,now` on all C/C++ builds.",
            "Use memory-safe languages (Rust, Go) for new infrastructure and network services.",
            "Enable Control Flow Guard (CFG) / Intel CET (Shadow Stack) on supported modern hardware.",
          ],
          summary: [
            "ROP chains bypass Non-Executable (NX) stacks by reusing existing binary instructions.",
            "ASLR and Stack Canaries provide defense-in-depth against automated buffer overflow exploits.",
            "Memory-safe languages eliminate binary memory corruption vulnerabilities at compile time.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-sec-14",
      slug: "modern-crypto-post-quantum-aes-gcm",
      title: "Module 14: Modern Cryptographic Protocols: Post-Quantum & AES-GCM",
      description: "Master modern cryptographic standards: Authenticated Encryption with Associated Data (AEAD), ChaCha20-Poly1305, and NIST Post-Quantum Cryptography (ML-KEM/Kyber).",
      lessons: [
        {
          id: "sec-post-quantum-crypto",
          slug: "modern-cryptography-aead-aes-gcm-chacha20-post-quantum-kyber",
          courseSlug: "cybersecurity",
          moduleSlug: "modern-crypto-post-quantum-aes-gcm",
          title: "Modern Cryptography: AEAD, ChaCha20 & Post-Quantum",
          description: "Implement modern cryptographic algorithms: Authenticated Encryption with Associated Data (AES-256-GCM vs ChaCha20-Poly1305), Cryptographic Nonces, constant-time operations to prevent side-channel timing attacks, and NIST Post-Quantum Cryptography standards (ML-KEM / CRYSTALS-Kyber).",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "Why unauthenticated encryption (AES-CBC without HMAC) is vulnerable to Padding Oracle attacks",
            "Authenticated Encryption with Associated Data (AEAD): combining confidentiality and integrity in a single pass",
            "Why Nonce reuse in AES-GCM and ChaCha20 causes complete cryptographic key recovery",
            "Preparing for 'Harvest Now, Decrypt Later' quantum threats with NIST Post-Quantum Cryptography (ML-KEM / Kyber)",
          ],
          introduction: `In legacy cryptography, developers attempted to encrypt data with AES-CBC and manually calculate an HMAC hash, frequently introducing Padding Oracle attacks and timing side-channel leaks. Modern cryptographic engineering mandates Authenticated Encryption with Associated Data (AEAD), such as AES-256-GCM and ChaCha20-Poly1305. Furthermore, with the advent of Quantum Computing threatening RSA and Elliptic Curve Diffie-Hellman, NIST has finalized Post-Quantum Cryptographic (PQC) standards based on Module Lattice cryptography.`,
          whyItMatters: `Nation-state adversaries are currently harvesting encrypted TLS traffic across the internet to decrypt it later once quantum computers running Shor's algorithm become available. Upgrading to Hybrid Post-Quantum TLS 1.3 (X25519Kyber768) protects sensitive data today.`,
          syntax: `// Node.js Crypto AEAD AES-256-GCM\nconst cipher = crypto.createCipheriv('aes-256-gcm', key, nonce);\ncipher.setAAD(Buffer.from('metadata'));`,
          mainExample: {
            title: "Authenticated Encryption with Associated Data (AEAD) AES-256-GCM in Node.js",
            language: "javascript",
            code: `// Secure Authenticated Encryption with Associated Data (AEAD) using AES-256-GCM
const crypto = require('crypto');

class ModernAeadCrypto {
    static encrypt(plainText, key, associatedData = '') {
        // 1. Generate unique 96-bit (12-byte) Cryptographic Nonce (NEVER REUSE NONCE WITH SAME KEY!)
        const nonce = crypto.randomBytes(12);

        // 2. Initialize AES-256-GCM Cipher
        const cipher = crypto.createCipheriv('aes-256-gcm', key, nonce);

        // 3. Attach Associated Data (Authenticated in plaintext, not encrypted)
        if (associatedData) {
            cipher.setAAD(Buffer.from(associatedData, 'utf8'));
        }

        // 4. Encrypt payload
        let cipherText = cipher.update(plainText, 'utf8', 'hex');
        cipherText += cipher.final('hex');

        // 5. Extract 128-bit Authentication Tag (Guarantees data integrity and prevents tampering!)
        const authTag = cipher.getAuthTag();

        return {
            cipherText,
            nonce: nonce.toString('hex'),
            authTag: authTag.toString('hex'),
            associatedData
        };
    }

    static decrypt(encryptedPayload, key) {
        const nonce = Buffer.from(encryptedPayload.nonce, 'hex');
        const authTag = Buffer.from(encryptedPayload.authTag, 'hex');

        const decipher = crypto.createDecipheriv('aes-256-gcm', key, nonce);
        decipher.setAuthTag(authTag); // Set expected authentication tag

        if (encryptedPayload.associatedData) {
            decipher.setAAD(Buffer.from(encryptedPayload.associatedData, 'utf8'));
        }

        let decrypted = decipher.update(encryptedPayload.cipherText, 'hex', 'utf8');
        decrypted += decipher.final('utf8'); // Throws error if 1 single bit was tampered!

        return decrypted;
    }
}

// 256-bit Cryptographic Key
const key = crypto.randomBytes(32);
const secretData = "CONFIDENTIAL_FINANCIAL_TRANSACTION_PAYLOAD";
const metadata = "account_id=ACC_1092;timestamp=2026-08-22";

console.log("=== Modern AEAD Cryptographic Engine ===");
const encrypted = ModernAeadCrypto.encrypt(secretData, key, metadata);
console.log("Encrypted Ciphertext:", encrypted.cipherText);
console.log("Authentication Tag:  ", encrypted.authTag);
console.log("Unique Nonce (12B):  ", encrypted.nonce);

const decrypted = ModernAeadCrypto.decrypt(encrypted, key);
console.log("\\nDecrypted Result:    ", decrypted);
console.log("✅ Authenticated encryption verified: Confidentiality and Integrity mathematically guaranteed!");`,
            executable: true,
            explanation: [
              "AES-256-GCM is an AEAD cipher that produces both ciphertext and a 16-byte cryptographic Authentication Tag.",
              "Associated Data (AAD) allows authenticating unencrypted metadata (such as packet headers or user IDs) so it cannot be swapped.",
              "If an attacker alters even a single bit of the ciphertext or AAD, decipher.final() throws an authentication error immediately.",
              "Nonces MUST be unique for every encryption operation under the same key to prevent XOR stream keystream extraction.",
            ],
          },
          detailedExplanation: [
            "NIST Post-Quantum Cryptography (ML-KEM): NIST standard FIPS 203 defines ML-KEM (formerly CRYSTALS-Kyber) for Key Encapsulation Mechanisms. ML-KEM is based on the hardness of the Module Learning With Errors (M-LWE) lattice problem, which is mathematically resistant to both classical and quantum computing attacks.",
          ],
          commonMistakes: [
            {
              mistake: "Reusing the same Nonce / Initialization Vector (IV) across multiple encryptions with AES-GCM or ChaCha20.",
              badCode: "const nonce = Buffer.alloc(12, 0); // STATIC ZERO NONCE -> Catastrophic security breach!",
              goodCode: "const nonce = crypto.randomBytes(12); // Always generate fresh random 12-byte nonce",
              explanation: "Reusing a nonce with the same key in GCM mode allows an attacker to compute the GHASH authentication key and forge arbitrary ciphertexts.",
            },
          ],
          bestPractices: [
            "Use AES-256-GCM on hardware with AES-NI instructions; use ChaCha20-Poly1305 on mobile and ARM devices without AES hardware acceleration.",
            "Use constant-time comparison (`crypto.timingSafeEqual`) when comparing passwords, tokens, and HMACs.",
            "Adopt Hybrid Post-Quantum Key Exchange (X25519 + Kyber768) in TLS 1.3 configurations.",
          ],
          summary: [
            "AEAD ciphers (AES-GCM, ChaCha20-Poly1305) provide encryption and integrity verification simultaneously.",
            "Nonce uniqueness is mathematically required to prevent catastrophic cryptographic failure.",
            "Post-Quantum Cryptography (ML-KEM/Kyber) secures data against future quantum decryption.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-sec-15",
      slug: "cloud-security-cspm-k8s-threat-modeling",
      title: "Module 15: Cloud Security Posture & Kubernetes Threat Modeling",
      description: "Master cloud infrastructure security: Cloud Security Posture Management (CSPM), Kubernetes attack matrices (MITRE ATT&CK), and Admission Controllers.",
      lessons: [
        {
          id: "sec-k8s-cloud-threats",
          slug: "cloud-security-posture-management-kubernetes-mitre-admission-controllers",
          courseSlug: "cybersecurity",
          moduleSlug: "cloud-security-cspm-k8s-threat-modeling",
          title: "Cloud & Kubernetes Security: CSPM & Threat Modeling",
          description: "Harden multi-tenant cloud and container infrastructure: the MITRE ATT&CK Matrix for Kubernetes, detecting misconfigurations with Cloud Security Posture Management (CSPM), enforcing security guardrails with Validating Admission Controllers (Kyverno / OPA Gatekeeper), and container supply chain security (cosign / SBOMs).",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The MITRE ATT&CK Matrix for Kubernetes: Initial Access, Execution, Persistence, Privilege Escalation, and Egress",
            "Validating Admission Controllers: intercepting Kubernetes API requests before persisting to etcd",
            "Writing policy-as-code guardrails with Kyverno to disallow root containers and hostPath volume mounts",
            "Cryptographic container image signing and Software Bill of Materials (SBOM) verification using Sigstore `cosign`",
          ],
          introduction: `Modern cloud security breaches rarely stem from 0-day exploits; over 80% occur due to infrastructure misconfigurations (over-privileged IAM roles, public S3 buckets, privileged Kubernetes containers with host access). Cloud Security Posture Management (CSPM) continuously audits cloud resources against CIS Benchmarks, while Kubernetes Admission Controllers enforce immutable policy guardrails that prevent insecure workloads from ever running.`,
          whyItMatters: `Attackers compromising a single pod can access the host root filesystem or the cloud provider instance metadata service if Admission Controllers and CSPM guardrails are not strictly enforced.`,
          syntax: `apiVersion: kyverno.io/v1\nkind: ClusterPolicy\nmetadata:\n  name: disallow-root-user\nspec:\n  validationFailureAction: Enforce`,
          mainExample: {
            title: "Kyverno Policy-as-Code Enforcing Non-Root Containers and Disallowing hostPath",
            language: "yaml",
            code: `# Kyverno Policy Guardrail: Prevent Privileged Containers & HostPath Volume Mounts
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: enforce-pod-security-standards
spec:
  validationFailureAction: Enforce # Rejects non-compliant pods immediately!
  background: true
  rules:
    # Rule 1: Disallow Root User Execution
    - name: require-run-as-non-root
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "Running containers as root (UID 0) is strictly forbidden for security compliance."
        pattern:
          spec:
            securityContext:
              runAsNonRoot: true
            containers:
              - securityContext:
                  allowPrivilegeEscalation: false
                  capabilities:
                    drop:
                      - ALL
    # Rule 2: Disallow dangerous hostPath mounts (prevents host filesystem takeover)
    - name: disallow-host-path
      match:
        any:
          - resources:
              kinds:
                - Pod
      validate:
        message: "hostPath volume mounts are prohibited. Use CSI PersistentVolumes."
        pattern:
          spec:
            =(volumes):
              - X(hostPath): null`,
            executable: false,
            explanation: [
              "Kyverno acts as a dynamic Admission Webhook in Kubernetes, evaluating YAML before pods are created.",
              "validationFailureAction: Enforce blocks any deployment that does not meet the strict security pattern.",
              "Rule 1 forces runAsNonRoot: true, allowPrivilegeEscalation: false, and drops all Linux Capabilities.",
              "Rule 2 blocks hostPath volume mounts, preventing containers from mounting `/etc` or `/var/run/docker.sock` from the host node.",
            ],
          },
          detailedExplanation: [
            "Software Supply Chain Security (Sigstore & Cosign): Developers sign container images using ephemeral OIDC tokens (`cosign sign`). The Kubernetes admission controller verifies the signature and SBOM (CycloneDX / SPDX) before pulling the image, ensuring untrusted third-party images cannot execute.",
          ],
          commonMistakes: [
            {
              mistake: "Mounting the host Docker socket (`/var/run/docker.sock` or `containerd.sock`) inside application containers.",
              badCode: "volumeMounts:\n  - mountPath: /var/run/docker.sock\n    name: docker-sock # Instant root host compromise!",
              goodCode: "// Use isolated rootless builders like Kaniko or Buildah without host socket mounts",
              explanation: "Mounting the container runtime socket gives container processes direct control over the host daemon, allowing instant root escape.",
            },
          ],
          bestPractices: [
            "Enforce Kubernetes Pod Security Standards at the `restricted` profile level.",
            "Deploy Kyverno or OPA Gatekeeper to automate policy-as-code enforcement.",
            "Sign all production container images using Sigstore `cosign` and generate automated SBOMs.",
          ],
          summary: [
            "CSPM continuously audits cloud infrastructure against misconfigurations.",
            "Kubernetes Admission Controllers enforce zero-trust security guardrails before pod creation.",
            "Disallowing root execution, dropping capabilities, and signing container images harden the cloud supply chain.",
          ],
        },
      ],
    },
    {
      id: "mod-cs-sec-16",
      slug: "threat-hunting-siem-incident-response",
      title: "Module 16: Threat Hunting, Incident Response & SIEM Architecture",
      description: "Master Security Operations (SecOps): SIEM event correlation, Sigma rules, memory forensics, and automated incident response playbooks.",
      lessons: [
        {
          id: "sec-threat-hunting-siem",
          slug: "threat-hunting-siem-architecture-sigma-rules-incident-response",
          courseSlug: "cybersecurity",
          moduleSlug: "threat-hunting-siem-incident-response",
          title: "Threat Hunting, SIEM Architecture & Incident Response",
          description: "Operate modern Security Operations Centers (SOC): Security Information and Event Management (SIEM) log ingestion pipelines, writing detection rules with Sigma and YARA, investigating Indicators of Compromise (IoCs), live memory forensics, and automated SOAR response playbooks.",
          durationMinutes: 28,
          difficulty: "Advanced",
          whatYouWillLearn: [
            "The SecOps lifecycle: Detection, Triage, Containment, Eradication, and Post-Incident Root Cause Analysis",
            "SIEM event correlation architecture (Splunk, Elastic SIEM, Google Chronicle, Microsoft Sentinel)",
            "Writing generic detection rules with Sigma to detect suspicious process execution and living-off-the-land binaries (LOLBins)",
            "Automating incident containment with Security Orchestration, Automation, and Response (SOAR)",
          ],
          introduction: `Preventative security controls will never stop 100% of sophisticated adversaries. When an intrusion occurs, the speed of detection and containment determines whether an incident is a minor alert or a catastrophic breach. Security Operations teams use Security Information and Event Management (SIEM) systems to correlate billions of telemetry events across endpoints, cloud audit logs (AWS CloudTrail), firewalls, and authentication servers in real time.`,
          whyItMatters: `The industry average dwell time (time an attacker remains undetected on a network) is over 16 days. Threat hunting and automated SOAR pipelines reduce dwell time to under 15 minutes.`,
          syntax: `// Sigma Detection Rule Format\ntitle: Suspicious Process Spawning from Web Server\nlogsource:\n  category: process_creation\ndetection:\n  selection:\n    ParentImage|endswith: '/nginx' or '/httpd'\n    Image|endswith: '/bin/sh' or '/bin/bash'\n  condition: selection`,
          mainExample: {
            title: "Sigma Detection Rule and Automated SIEM Threat Correlation Engine",
            language: "yaml",
            code: `# Sigma Detection Rule: Web Server Spawning Reverse Interactive Shell (RCE Indicator)
title: Suspicious Process Spawning from Web Server Process
id: f48b11c9-7d8a-40a2-9b21-49b019318182
status: production
description: Detects when a web server daemon (Nginx, Apache, Node.js) spawns an interactive shell, indicating Remote Code Execution.
author: KWAS Academy Security Research Team
references:
  - https://attack.mitre.org/techniques/T1059/004/
tags:
  - attack.execution
  - attack.t1059.004
  - attack.initial_access
logsource:
  category: process_creation
  product: linux
detection:
  parent_process:
    ParentImage|endswith:
      - '/nginx'
      - '/apache2'
      - '/httpd'
      - '/node'
      - '/gunicorn'
  spawned_shell:
    Image|endswith:
      - '/bin/sh'
      - '/bin/bash'
      - '/bin/zsh'
      - '/usr/bin/python3'
      - '/usr/bin/perl'
  condition: parent_process and spawned_shell
falsepositives:
  - Legitimate administrative maintenance scripts (filter via service accounts)
level: critical`,
            executable: false,
            explanation: [
              "Sigma is the vendor-agnostic standard for describing log detection signatures, translatable to Splunk, Elastic, Sentinel, and Chronicle.",
              "The rule detects when a web daemon unexpectedly spawns a shell binary (/bin/bash), a classic signature of webshells or RCE exploits.",
              "ParentImage and Image correlation filters out billions of normal events, alerting SecOps teams within seconds.",
              "Automated SOAR playbooks trigger on this alert: isolating the host node from the network and taking an emergency memory snapshot.",
            ],
          },
          detailedExplanation: [
            "SOAR Automated Playbooks: When a critical SIEM alert fires (e.g. lateral movement detected), SOAR systems automatically execute remediation playbooks: revoking AWS IAM session tokens, disabling compromised Okta accounts, blocking attacker IP addresses at the Cloudflare edge, and notifying the on-call security engineer.",
          ],
          commonMistakes: [
            {
              mistake: "Logging plain text passwords, credit card numbers, or cryptographic tokens into SIEM log streams.",
              badCode: "logger.info(`User login attempt: ${username} with password: ${password}`); // PII & Credential leak!",
              goodCode: "logger.info(`User login attempt: ${username} | Result: ${success ? 'SUCCESS' : 'FAILED'}`);",
              explanation: "SIEM log streams are ingested by hundreds of analysts and third-party dashboards. Never write sensitive secrets or PII into logs.",
            },
          ],
          bestPractices: [
            "Write detection rules in generic Sigma format for cross-platform portability.",
            "Aggregate all cloud audit logs (AWS CloudTrail, GCP Cloud Audit Logs, K8s Audit) into an immutable Write-Once-Read-Many (WORM) storage bucket.",
            "Test incident response playbooks with regular Red Team vs Blue Team tabletop exercises.",
          ],
          summary: [
            "SIEM correlates billions of multi-cloud telemetry events to detect intrusions in real time.",
            "Sigma provides an open standard for writing cross-platform threat detection rules.",
            "SOAR playbooks automate containment (network isolation, credential revocation) to slash attacker dwell time.",
          ],
        },
      ],
    },
  ],
};
