# Resume Skills

---

## Professional Experience

### AutoTrader Canada — Analytics Implementation Specialist Intern → Analytics Engineer
**April 2024 – Present · Toronto, Ontario**

#### Analytics & Tag Management
- **Google Tag Manager (GTM)** — Onboarded and maintained web tracking configurations for 600+ clients across TRFFK (AutoTrader's analytics division); authored GTM container changes, triggers, and variable configurations at scale
- **Google Analytics 4 (GA4)** — Implemented and validated GA4 event schemas for client web properties; debugged measurement discrepancies and ensured data fidelity
- **OEM Web Tracking (Volvo Canada)** — Implemented Volvo-specific tracking by interpreting a vendor technical specification, translating requirements into codebase changes, and validating data compatibility with Volvo's downstream systems (part of a $2.5M OEM analytics project covering Jaguar and Land Rover)
- **ASC Data Standards** — Authored and maintained technical documentation aligned to Automotive Standards Council (ASC) data formats for web tagging compliance

#### Software Development & Cross-Team Collaboration
- **Achilles Codebase** — Fixed bugs and shipped a new tracking feature in a codebase owned by a separate team; wrote a PR, added Jest unit tests, and participated in code review for cross-team changes
- **Jest** — Wrote unit tests for analytics instrumentation code to validate event payload shape and firing conditions
- **Agile / Scrum / Jira** — Managed high-volume technical ticket queues and sprint planning within an Agile framework; met deadlines with minimal supervision

#### Automation & Infrastructure
- **Client Onboarding Portal (AWS)** — Architected and deployed a full-stack web portal used by the Advertising team to automate client onboarding; reduced ticket turnaround time by 62.5%
- **CI/CD Pipeline** — Built automated pipeline for both application code deployment and infrastructure deployment for the onboarding portal
- **AWS (Hosting & Deployment)** — Managed cloud hosting, secure configuration, and real-time monitoring of the centralized onboarding portal

#### Leadership & Knowledge Transfer
- **Claude Code Adoption** — Spearheaded the adoption of Claude Code across the team; taught colleagues and cross-functional teams how to use AI-assisted development tools, directly improving coding speed, documentation quality, and onboarding efficiency
- **Google Build with AI Event** — Represented the team at Google's Build with AI event; acquired and shared knowledge on building secure and scalable AI agents, bringing back insights on agentic frameworks including LangGraph, LangChain, and Google ADK
- **Technical Documentation** — Authored comprehensive workflow documentation for complex tagging implementations to facilitate seamless team knowledge transfer and adherence to ASC data standards

#### AI Tools & Productivity
- **Claude Code** — Primary AI coding assistant; used for code generation, debugging, refactoring, and documentation; spearheaded team-wide adoption
- **GitHub Copilot** — Integrated into development workflow for in-editor code suggestions and boilerplate acceleration
- **OpenAI ChatGPT & Custom GPTs** — Used for research, ideation, documentation drafting, and building task-specific custom GPTs to automate repetitive knowledge work
- **Agentic Frameworks** — Gained hands-on knowledge of LangGraph, LangChain, and Google ADK for designing multi-step, tool-calling AI agent pipelines
- **Community Engagement** — Attended Google's Build with AI event on behalf of the team; actively follows the AI/agent ecosystem to stay current and bring relevant knowledge back to the organization

---

### Emkal Inc — Service Desk Technician Intern
**September 2023 – January 2024 · Brampton, Ontario**

#### Network & Infrastructure
- **Unifi (Ubiquiti)** — Upgraded and configured networking hardware on-site; provisioned LAN/WAN infrastructure for clients requiring reliable, enterprise-grade connectivity
- **Network Hardware Deployment** — Visited client sites to physically install and configure upgraded network equipment alongside senior team members

#### Microsoft Environment & Identity
- **Microsoft Admin Center** — Performed account delegation, user account management, and license assignment for client Microsoft 365 environments
- **Domain Controller** — Administered AD user provisioning and group policy in on-premises domain environments
- **Microsoft Azure AD (Entra ID)** — Provisioned cloud user accounts and managed identity in Azure Active Directory

#### Security & Compliance
- **Microsoft Entra (SIEM)** — Conducted security audits for suspicious activity patterns using Entra ID sign-in and audit logs
- **MFA Rollout** — Executed a mass organizational rollout of Multi-Factor Authentication, enforcing new security policy across all users
- **Security Policy Implementation** — Drafted and enforced updated security policies across client organizations

#### Support & Documentation
- **Remote IT Support** — Diagnosed and resolved complex technical issues for end users of multiple client organizations via remote support sessions
- **VoIP Deployment** — Assisted in deploying EmKal VoIP communication systems for client organizations
- **Incident Documentation** — Accurately documented all incidents and system bugs to optimize troubleshooting protocols and reduce ticket resolution time

---

### Sheridan College — Laptop and Classroom Support Technologist
**December 2022 – August 2023 · Brampton, Ontario**

#### Hardware & Asset Management
- **Hardware Lifecycle Management** — Managed an inventory of IT equipment valued at over $150,000; oversaw asset tracking, distribution, auditing, and end-of-life processes for laptops, peripherals, and printers
- **Preventive Maintenance** — Performed daily classroom and printer health checks proactively, identifying and resolving issues before they generated support tickets

#### Systems & Deployment
- **Windows 11 Deployment Testing** — Participated in compatibility assessment and UAT for Windows 11 prior to large-scale rollout across Sheridan College's network (2,000+ users)
- **Microsoft Azure Active Directory** — Maintained and updated institutional user and device records in Azure AD

#### IT Service Management
- **ServiceNow** — Created, managed, and resolved technical support tickets for faculty and students; maintained SLA compliance across high-volume request queues
- **End-User Support (500+ users)** — Resolved hardware, software, and connectivity requests for students and teaching staff; supported AV and equipment setup for special events

#### Process Improvement & Leadership
- **Service Portal Redesign** — Developed and presented UI improvement recommendations for the IT self-service portal directly to the Director and Manager of IT
- **Knowledge Base Authoring** — Created and maintained internal knowledge base articles to reduce ticket turnaround time and accelerate onboarding for new technicians
- **Experience Flow Design** — Designed the student and faculty IT interaction flow for Help Desk services, improving request routing and resolution efficiency

---

## Projects

### LazyFruit — Full-Stack Job Board

A job board SPA that aggregates listings from LazyScrape, featuring auth, saved jobs, SEO, and analytics.

#### Frontend Development

##### Core Framework & Language
- **React 18** — Built full-featured SPA with functional components, custom hooks, and React lifecycle patterns
- **JavaScript (ES2020+)** — Modern JS with async/await, destructuring, optional chaining, and ES modules
- **JSX** — Component-based UI development with React JSX syntax
- **Vite** — Configured and used Vite as build tool with HMR for fast development iteration

##### Routing
- **React Router v6** — Implemented client-side routing with dynamic routes (e.g., `/details/:jobid`, `/company/:employerId`), nested routes, and programmatic navigation

##### Styling & UI
- **Tailwind CSS v4** — Utility-first styling across entire application; implemented responsive breakpoints, dark mode classes, and animation utilities
- **CSS Variables / Custom Properties** — Implemented theme switching (dark/light mode) using CSS variables (`--bg-main`, `--text-primary`, etc.)
- **Responsive Design** — Mobile-first layout with breakpoints; distinct UX patterns for mobile vs. desktop (drawer vs. modal)
- **Bootstrap Icons & Font Awesome** — Integrated icon libraries for UI elements
- **Google Fonts** — Custom font integration for branding

##### State Management
- **React Context API** — Built multiple global context providers:
  - `AuthContext` — User session and authentication state
  - `ThemeContext` — Dark/light mode with `localStorage` persistence
  - `SavedJobsContext` — Saved jobs list with optimistic UI updates

##### HTTP & API
- **Axios** — REST API integration with `withCredentials` for session-based auth, environment-based base URL configuration via `import.meta.env`
- **REST API Consumption** — Integrated with multiple endpoints: job listings, job detail, auth, company info, saved jobs CRUD

##### Performance & UX Patterns
- **Infinite Scroll** — Implemented offset-based pagination with `requestAnimationFrame` for smooth scroll performance
- **Skeleton Loading** — Built placeholder loading states using `animate-pulse` for perceived performance
- **Optimistic UI Updates** — Immediate state updates on save/unsave with async API confirmation
- **Scroll Throttling** — Used `requestAnimationFrame` to debounce expensive scroll event handlers
- **Lazy Loading** — Load-on-demand pattern for job list pagination

##### SEO & Meta
- **React Helmet Async** — Dynamic `<title>`, `<meta>` descriptions, and Open Graph tags per page for SEO
- **Open Graph Tags** — Implemented structured social sharing metadata

##### Third-Party Integrations
- **Google Analytics 4 (GA4)** — Advanced Consent Mode integration with cookieless pings
- **Google Tag Manager (GTM)** — Tag management for analytics and tracking scripts
- **Web3Forms API** — Contact form submission integration
- **Reddit Community Integration** — Embedded community banner with UTM-tracked links

##### Browser APIs
- **Cookie Management** — Custom cookie utility for consent state (`granted`/`denied`) and UI persistence with `SameSite=Lax` security policy
- **localStorage API** — Theme preference and UI state persistence
- **Intersection Observer / Scroll Events** — Scroll-triggered data loading and sticky navigation

---

#### Backend Development

##### Framework & Runtime
- **Node.js** — Server-side JavaScript runtime; built and deployed production REST API
- **Express.js** — Routing, middleware chains, request/response handling, query parameter parsing
- **nodemon** — Development auto-restart tooling for faster iteration

##### Database
- **PostgreSQL** — Relational database with schema namespacing (`oi.*`), parameterized queries, JOINs across multiple tables, ILIKE case-insensitive search, `ON CONFLICT DO NOTHING/UPDATE` upserts, array column types, and transaction management (`COMMIT`/`ROLLBACK`)
- **node-postgres (`pg`)** — PostgreSQL client for Node.js; configured connection pooling and SSL
- **AWS RDS** — Managed PostgreSQL on RDS; configured SSL connections with CA bundle (`rejectUnauthorized: true`) and environment-variable-based credentials

##### Authentication & Identity
- **AWS Cognito** — User pool with OAuth 2.0/OIDC login; integrated post-confirmation Lambda trigger to sync users to PostgreSQL
- **OpenID Connect (OIDC)** — Implemented full Authorization Code Flow using `openid-client`: discovery, auth URL generation, callback validation, token exchange, and userinfo fetch
- **PKCE / Nonce + State** — Generated and validated `nonce` and `state` parameters to prevent CSRF and replay attacks
- **express-session** — Server-side session management with `SameSite=Lax` cookie policy; stored user identity and Cognito `sub` securely in session
- **Cognito Logout Flow** — Implemented federated logout with dynamic redirect URI construction

##### AWS Serverless
- **AWS Lambda** — Wrote Node.js Lambda handler for Cognito post-confirmation trigger; used warm invocation optimization (lazy singleton DB connection via `clientPromise`) to minimize cold-start overhead
- **Cognito Lambda Triggers** — Implemented `PostConfirmation_ConfirmSignUp` trigger to auto-provision users in PostgreSQL on signup

##### AI Integration
- **Google Gemini AI (`@google/genai`)** — Integrated Gemini `gemini-2.5-flash-lite` model to auto-generate resume keyword tags from job descriptions
- **Prompt Engineering** — Designed structured prompts to extract JSON-parseable arrays from LLM responses; handled malformed output gracefully

##### API Design & Security
- **RESTful API Design** — Built resource-based endpoints (GET, POST, DELETE) with proper HTTP status codes (200, 201, 204, 400, 401, 404, 500)
- **Dynamic SQL Filtering** — Constructed parameterized WHERE clauses at runtime based on optional query params; avoided SQL injection via positional placeholders (`$1`, `$2`, ...)
- **Offset-based Pagination** — `LIMIT`/`OFFSET` pagination with configurable page size
- **Input Validation** — Type-checked and sanitized incoming request parameters and body fields
- **CORS** — Configured `cors` middleware with `credentials: true` and explicit `origin` allowlist
- **Environment Variables** — Used `dotenv` for config isolation; zero secrets in source code

##### SEO Backend
- **Dynamic XML Sitemap** — Generated `sitemap.xml` server-side from live database records with proper XML structure, `<changefreq>`, and `<priority>` tags
- **In-Memory Caching** — Cached sitemap in process memory on startup; refreshed every 24 hours via `setInterval` to avoid per-request DB load
- **Content-Type Serving** — Set correct `application/xml` headers for sitemap and static asset serving

##### Web Scraping Integration
- **Child Process (`spawn`)** — Spawned external scraper subprocess from Node.js backend
- **Scraper Orchestration API** — Built endpoints to serve next URL to scrape (`/scrape/urls`) and receive scraped job batch inserts (`/web_scrapping/insert`) with full replace-then-insert logic and `lastscrape` timestamp tracking

---

#### DevOps & Infrastructure

##### CI/CD
- **GitHub Actions** — Wrote automated deployment pipeline triggered on push to `main`:
  - Build step: `npm install` → `vite build`
  - Deployment: SCP file transfer to remote server over SSH
  - Post-deploy: Remote Nginx restart via SSH

##### AWS
- **AWS EC2** — Deployed application on EC2 Linux instance; managed deployment destination and SSH-based access
- **SSH Key Management** — Configured SSH key-based authentication for secure CI/CD access to EC2

##### Web Server
- **Nginx** — Served static frontend build on Ubuntu Linux; configured deployment path (`/usr/share/nginx/html/`) and managed service lifecycle

##### Environment Configuration
- **Environment Variables** — Used `.env` files with Vite's `import.meta.env` for environment-specific API base URLs (dev vs. production)
- **Node.js v18** — Runtime environment; specified in GitHub Actions workflow

---

#### Code Quality & Tooling
- **ESLint** — Configured ESLint v9 with React, React Hooks, and React Refresh plugins for consistent code quality
- **npm** — Package management, dependency tracking, and script execution
- **Git & GitHub** — Version control, branching strategy, and pull request workflow
- **ES Modules** — Project configured with `"type": "module"` for native ESM support

#### Software Engineering Practices
- **Component-Driven Architecture** — Built reusable, single-responsibility React components
- **Separation of Concerns** — Contexts for state, utilities for helpers, components for UI
- **Mobile-First Responsive Design** — Designed for mobile with progressive enhancement for desktop
- **Accessibility Patterns** — Semantic HTML, keyboard-navigable UI elements
- **Security Practices** — Cookie `SameSite=Lax`, `withCredentials` for secure session handling, no token exposure in frontend state

---

### LazyScrape — AI-Guided Web Scraper

LazyScrape is the data-collection engine powering LazyFruit. It uses a large language model to navigate arbitrary company career pages without hardcoded CSS selectors, extracting structured job data and inserting it into the shared PostgreSQL database.

#### Runtime & Framework
- **Python 3.14 (async/await)** — Entire scraping stack is strictly async end-to-end, from browser navigation through DB insert
- **FastAPI** — ASGI REST + WebSocket API server exposing scraper control, company management, job export, and real-time log streaming endpoints
- **Uvicorn** — ASGI server running FastAPI in production; frontend static files served from the same process via `StaticFiles`
- **Pydantic** — Request body validation via FastAPI's `BaseModel` for all incoming API payloads

#### Browser Automation & Anti-Detection
- **Playwright (async API)** — Headless Chromium automation; incognito contexts per session, `wait_until="networkidle"` page loads, `page.evaluate()` for DOM extraction, frame-level interaction (`frame.content()`, `frame.click()`, `frame.goto()`)
- **playwright-stealth** — Applied stealth patches to every Playwright page to evade bot-detection fingerprinting
- **Headless/Headed Fallback** — Automatically retried in headed (visible) browser mode when headless returned zero jobs
- **xvfb-run** — Virtual framebuffer wrapper for running headed Playwright on headless Linux servers
- **Scroll-to-Bottom Loop** — Programmatic `scrollHeight` comparison loop to trigger lazy-loaded job cards before HTML extraction

#### AI / LLM Integration
- **Google Gemini (`gemini-2.5-flash`)** — Core intelligence of the scraper; four distinct call types: job listing page analysis, iframe candidate ranking, iframe content analysis, and structured job detail extraction
- **Structured Output / `response_schema`** — Enforced Gemini's `response_schema` (JSON Schema) on all calls to guarantee valid JSON structure and eliminate unparseable responses
- **Prompt Engineering with Session Context** — Injected full session state (pages visited, jobs found, pagination history, errors) into every LLM prompt via `ScrapingMemory.get_context_for_ai()`, enabling stateful multi-page navigation decisions
- **Multi-Stage JSON Repair** — 6-step cascade repair strategy for malformed LLM output: markdown fence stripping → escape-sequence fixing → missing-comma insertion → unescaped quote normalization → control-character removal → brace extraction as last resort
- **Dynamic Model Escalation** — Retried failed job-detail extractions with `gemini-2.5-flash` (stronger model) when the default model returned incomplete fields
- **Selector-Free Scraping** — LLM identifies pagination buttons, job links, and next-page URLs dynamically from raw HTML — no hardcoded CSS selectors anywhere in the pipeline

#### Async Concurrency & Architecture
- **asyncio Semaphore + Task Pools** — Capped concurrent browser tabs at 5 with `asyncio.Semaphore(5)` combined with `asyncio.gather()` for parallel job detail scraping across multiple pages
- **Orchestrator-Worker Pattern** — `orchestrator.py` coordinates `WebScraper`, `AIAnalyzer`, and `ScrapingMemory`; each concern fully separated into its own module
- **Parent-Child Browser Model** — Child scrapers reuse the parent's browser process but open independent incognito contexts and pages, avoiding the overhead of launching multiple browser instances
- **Per-Company Isolated Queues** — Each concurrent company scrape gets its own `asyncio.Queue` and dedicated broadcaster coroutine, fully decoupled from other running jobs
- **`ContextVar` Stdout Multiplexer** — Replaced `sys.stdout` with a custom `TextIOBase` subclass using `contextvars.ContextVar` to route each `print()` to the correct company's log queue based on which `asyncio.Task` is executing — thread-safe via `loop.call_soon_threadsafe()` for Playwright's background threads
- **Session Memory (`ScrapingMemory`)** — `@dataclass` acting as short-term working memory for a scrape session; tracked job links, pagination state, iframe state, action history, and error log; serialized to JSON after each run

#### Database (PostgreSQL / asyncpg)
- **asyncpg** — Async PostgreSQL driver with connection pool (min=2, max=10), 60-second command timeout, and schema-change detection with automatic pool teardown and recreation
- **ACID Batch Inserts** — All jobs in a batch inserted inside a single `async with conn.transaction()` block; full rollback on any error
- **Active/Inactive Job Deduplication** — Set intersection between newly scraped URLs and DB records: matched URLs skipped, URLs no longer on the career page marked `is_active = FALSE`, only genuinely new URLs scraped and inserted
- **DB Queue Scheduling** — `oi.scrapeurl` table acts as a priority queue; jobs ordered by `lastscrape ASC` with polite 2-second delays between companies — no external scheduler (Celery/Airflow)
- **Parameterized Queries** — All SQL uses positional `$1, $2, ...` placeholders; schema names validated against `^[a-zA-Z_][a-zA-Z0-9_]*$` regex before interpolation to prevent SQL injection on non-parameterizable identifiers

#### Iframe & ATS Platform Handling
- **Heuristic Iframe Scoring** — Frames scored by URL pattern matching (+400 pts for known ATS keywords), bounding-box visibility (+100 pts, area-proportional), `in_iframe` parameter presence (+120 pts), and hard negatives for analytics/tracking URLs (−1000 pts)
- **In-Page Iframe Strategy** — Read content directly from `page.frames` without browser navigation for ATS platforms embedded as iframes (Greenhouse, Lever, Workday, iCIMS, Jobvite, Taleo, BambooHR, Workable, and 10+ others)
- **AI Iframe Ranking** — When multiple iframe candidates exist, Gemini ranked them by likelihood of being a job board before the browser navigated

#### Real-Time WebSocket Streaming
- **FastAPI WebSocket** — Bidirectional channel pushing `log`, `status`, `done`, `error`, `company_start`, `company_update`, and `ping` event types to connected clients
- **Reconnect History Replay** — On reconnect, server immediately sent last 500 log lines and last 3,000 structured company events; frontend reconstructed live UI state from replayed history without re-scraping

#### Data Processing & Type Safety
- **BeautifulSoup4** — HTML cleaning pipeline: decomposed `script`, `style`, `noscript`, `svg`, `meta`, `link`, `header`, `footer`, `nav` before sending to Gemini; content capped at 60,000 characters
- **Type Coercion Layer** — `coerce_text()`, `coerce_list()`, and `parse_date()` (8 format variants) normalized LLM-extracted values before PostgreSQL insert, handling `str | list | dict | None` heterogeneity
- **Excel Export (openpyxl)** — Streamed styled `.xlsx` workbooks via `StreamingResponse`: bold blue header row, auto-width columns (capped at 60 chars), array fields joined as comma-separated strings

#### Tooling & Experimentation
- **LangGraph** — Explored `StateGraph` with typed state (`TypedDict`), nodes, and compile/invoke patterns in Jupyter notebooks for future agent pipeline design
- **Jupyter / IPython** — Used notebooks for iterative AI prompt development and pipeline prototyping
- **python-dotenv** — Environment variable isolation; zero secrets in source code

---

## Hackathon

### Hack for Good 2022 — 1st Place, $2,500 Prize

Won the Hack for Good 2022 hackathon as a **solo participant**. Built an ADHD assistance application that gamifies focus-training and passively tracks patient behavior to give doctors longitudinal data beyond clinic visits.

#### Application Development
- **Game-Based UX** — Designed an interactive game that helps users with ADHD calm down and improve focus, making therapeutic engagement feel natural rather than clinical
- **Behavioral Click Tracking** — Implemented passive click and interaction tracking to capture how patients behave when unobserved, generating time-series data for clinical review
- **Doctor Dashboard** — Built a data-sharing mechanism so physicians can monitor patient progress over time rather than relying solely on in-person assessments

#### Product & Business Model
- **Premium Section** — Designed a monetization layer to fund continued development while keeping the core therapeutic tool accessible
- **Solo Execution** — Scoped, designed, and shipped a working prototype end-to-end as the only team member within the hackathon time constraint

---

## Capstone

### NEWSLY — Capstone Project Winner, 2024

A Chrome extension for real-time fake news detection, built to address the spread of fabricated content as billions of new users come online.

#### Machine Learning
- **BERT (NLP Model)** — Trained and implemented a BERT-based text classification model to identify fabricated news articles with high accuracy
- **ML Model Integration** — Embedded a trained transformer model into a browser extension runtime for on-demand inference against live web content

#### Browser Extension Development
- **Chrome Extension** — Built a full Chrome extension (manifest, content scripts, popup UI) that intercepts and analyzes news content in the browser
- **Content Script Architecture** — Injected scripts to extract page text and pass it to the ML classification pipeline without disrupting the host page

#### Product & Monetization
- **Freemium Model** — Designed a premium tier to support development costs and long-term sustainability, applying lessons from the AutoTrader work term on analytics-driven product decisions

---

## Education

### Sheridan College — Advanced Diploma in Software Development and Network Engineering
**September 2021 – December 2024 · Brampton, Ontario**

- **Object-Oriented Programming** — Core OOP principles: encapsulation, inheritance, polymorphism, abstraction
- **Data Structures and Algorithms** — Arrays, linked lists, trees, sorting and searching algorithms, time/space complexity analysis
- **SQL Database Management** — Relational database design, query writing, normalization, and administration
- **C# / .NET** — Application development with the .NET framework
- **Network Architecture** — LAN/WAN design, OSI model, routing and switching fundamentals

---

## Summary (Resume Bullet Points)

### Frontend
- Built a full-stack job board SPA using **React 18**, **Vite**, and **Tailwind CSS v4** with dark mode, responsive design, and mobile-optimized UX
- Implemented **CI/CD pipeline with GitHub Actions** to automatically build and deploy to **AWS EC2** via SSH/SCP with **Nginx** as web server
- Developed custom **React Context** providers for auth, theme, and saved jobs with **optimistic UI updates** and `localStorage` persistence
- Integrated **Google Analytics 4** with Advanced Consent Mode, **GTM**, and **Web3Forms** for analytics and contact functionality
- Built infinite scroll pagination, skeleton loading, and scroll throttling with **requestAnimationFrame** for performance
- Implemented **SEO** with **React Helmet Async** for dynamic meta tags and Open Graph support per page

### Backend
- Built a production **Node.js/Express** REST API with session-based auth, PostgreSQL, and dynamic SQL filtering with offset pagination
- Implemented **OAuth 2.0 / OIDC Authorization Code Flow** using **AWS Cognito** with nonce/state CSRF protection and federated logout
- Wrote an **AWS Lambda** post-confirmation trigger to auto-provision Cognito users into PostgreSQL, with warm-invocation DB connection reuse
- Integrated **Google Gemini AI** to automatically generate job keyword tags from descriptions using structured prompt engineering
- Built server-side **XML sitemap generation** with in-memory caching and 24-hour auto-refresh for SEO at scale
- Secured all database connections with **SSL/TLS** (RDS CA bundle, `rejectUnauthorized: true`) and parameterized queries to prevent SQL injection

### LazyScrape
- Built an AI-guided web scraper using **Playwright** + **Google Gemini** (`gemini-2.5-flash`) that navigates arbitrary company career pages without hardcoded CSS selectors, extracting structured job data at scale
- Designed a fully async orchestration pipeline with **asyncio Semaphore** capping 5 concurrent browser tabs and `asyncio.gather()` for parallel job detail extraction across pages
- Enforced structured LLM output via Gemini's **`response_schema`** (JSON Schema) and implemented a 6-stage JSON repair cascade to handle malformed AI responses reliably
- Built a heuristic **iframe scoring and fallback system** to handle 10+ ATS platforms (Greenhouse, Lever, Workday, iCIMS, Taleo, etc.) embedded as iframes, using pattern-matching and bounding-box visibility scoring
- Implemented per-company isolated **asyncio.Queue** pipelines with a custom `ContextVar`-based stdout multiplexer to route concurrent scraper logs to the correct real-time stream without cross-contamination
- Exposed a **FastAPI** + **WebSocket** control panel with reconnect history replay (last 500 log lines + 3,000 structured events) so clients reconstruct live state without re-triggering scrapes
- Applied **playwright-stealth** and headless/headed browser fallback, with `xvfb-run` for virtual framebuffer deployment on headless Linux servers
- Implemented ACID batch DB inserts via **asyncpg** transactions with active/inactive job deduplication (set intersection against existing DB URLs) and a DB-queue scheduler ordering by `lastscrape ASC`

### AutoTrader Canada
- Onboarded and maintained **GTM + GA4** web tracking for 600+ clients at TRFFK; delivered Volvo Canada OEM tracking by interpreting vendor specs and validating data against Volvo's systems (part of a $2.5M Jaguar/Land Rover analytics program)
- Architected and deployed a full-stack **AWS-hosted client onboarding portal** with CI/CD pipeline, reducing advertising team ticket turnaround time by **62.5%**
- Shipped cross-team bug fixes and a new tracking feature in the Achilles codebase, including **Jest unit tests** and code reviews following an Agile/Scrum/Jira workflow
- Spearheaded **Claude Code adoption** across the team and represented the organization at **Google's Build with AI** event, sharing knowledge on secure and scalable AI agent design using LangGraph, LangChain, and Google ADK
- Extensively uses AI tools (**Claude Code, GitHub Copilot, ChatGPT, custom GPTs**) to accelerate coding, documentation, and learning

### Emkal Inc
- Upgraded and configured **Unifi LAN/WAN** networking hardware on-site for enterprise clients; provisioned and administered user identities via **Microsoft Azure AD** and Domain Controller
- Conducted **Microsoft Entra (SIEM)** security audits and executed a mass **MFA rollout** to enforce new organizational security policies across client environments
- Provided remote IT support, assisted in **VoIP system deployment**, and maintained incident documentation to optimize ticket resolution workflows

### Sheridan College
- Managed a $150,000+ hardware inventory with full lifecycle tracking; performed daily preventive maintenance across classrooms and printer fleets to proactively reduce ticket volume
- Participated in **Windows 11 UAT** prior to campus-wide rollout (2,000+ users); maintained institutional records in **Microsoft Azure Active Directory**
- Designed the student/faculty Help Desk interaction flow, authored knowledge base articles to accelerate onboarding, and presented IT portal redesign recommendations directly to the Director of IT

### NEWSLY (Capstone, 2024)
- Built a **Chrome extension** for real-time fake news detection, training and integrating a **BERT NLP model** to classify news articles directly in the browser
- Applied product and analytics knowledge from AutoTrader to design a **freemium monetization model** for long-term sustainability

### Hack for Good 2022
- Won **1st place ($2,500)** as a solo participant; built an ADHD assistance app combining a focus-training game with passive **behavioral click tracking** to give doctors longitudinal patient data outside of clinic visits
