// ============================================================
// EDIT THIS FILE to update the portfolio - layout never changes.
// ============================================================

export const site = {
  name: "Jovan Kalyango",
  tagline: "Systems that keep trades honest, and pipelines that don't lie.",
  lede: "I'm a data engineer who builds things that have to be right the first time: production pipelines on Google Cloud, a governance-assessment platform carrying a government ministry's programme for 652 officers, and a systematic trading operation with a full audit trail behind every position.",
  email: "kalyangojonn@gmail.com",
  linkedin: "https://linkedin.com/in/jovan-kalyango",
  // TODO: set your real GitHub handle
  github: "https://github.com/KalyangoJovan",
    calendly: "https://calendly.com/kalyangojovan/30min",
  whatsapp: "https://wa.me/393494333088",
  location: "Bologna, Italy - remote worldwide",
  resumeFile: "/Jovan_Kalyango_Resume.pdf",
};

export const stats = [
  { num: "652", label: "government officers served by an assessment platform I built solo" },
  { num: "220+", label: "trades captured, validated & reconciled at Driips Capital over 12 months" },
  { num: "4 yrs", label: "running production data pipelines on Google Cloud" },
  { num: "229", label: "automated tests guarding Rubikon's scoring & analytics logic" },
];

export type ProjectStatus = "live" | "research" | "queued";

export type Project = {
  name: string;
  role: string;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  highlights: string[];
  tags: string[];
  links: { label: string; href?: string }[];
};

export const projects: Project[] = [
  {
    name: "Rubikon",
    role: "Founder & sole engineer - 2025-present",
    status: "live",
    statusLabel: "Live in production",
    summary:
      "A governance and competency assessment platform (Next.js 15, Prisma, Neon PostgreSQL, Vercel) currently carrying a national finance ministry's leadership programme: 652 officers across 4 grade cohorts, from baseline survey through tiered assessments to individual and organisational reports.",
    highlights: [
      "Hybrid paper + digital data collection - a preview-to-commit CSV ingestion pipeline with row-level validation lands paper responses from a 394-officer cohort in the same tables as digital ones, so all 652 analyse together.",
      "Dual-scale competency gap analytics: capability vs. importance heatmaps per cohort, with priority flags where the gap is severe on a competency the role depends on.",
      "Zero-downtime, additive-only schema changes against the live production database, verified by before/after row counts.",
      "Automated branded Word deliverables - individual and organisational reports, plus a separate board-evaluation module already used with a real school board.",
    ],
    tags: ["Next.js", "PostgreSQL", "Prisma", "Data pipelines", "Report automation"],
    links: [
      { label: "Visit therubikon.org", href: "https://therubikon.org" },
      { label: "Full case study - publishing soon" },
    ],
  },
  {
    name: "Driips Capital",
    role: "Founder - 2025-present",
    status: "live",
    statusLabel: "Live operation",
    summary:
      "A proprietary systematic trading operation across FX, index derivatives and CFDs. I designed the risk-control framework - pre-trade limits and kill-switch conditions - and built the Python pipeline behind it.",
    highlights: [
      "Automated capture of every execution, with positions and cash reconciled against broker statements.",
      "An auto-journaling service that logged 220+ trades over a full year into a reporting cockpit with per-trade charts.",
      "Daily, weekly and monthly reporting with versioned, audit-ready documentation of every process.",
    ],
    tags: ["Python", "Risk management", "FX & derivatives", "Reconciliation"],
    links: [{ label: "Performance dashboard - in the pipeline" }],
  },
  {
    name: "Data engineering at Bitbang",
    role: "Data Engineer - June 2022-present",
    status: "live",
    statusLabel: "Current role",
    summary:
      "Production data pipelines on Google Cloud Platform for enterprise analytics clients - the four-year foundation under everything else on this page.",
    highlights: [
      "Streaming and batch processing with BigQuery, Dataflow (Apache Beam, Python SDK) and Pub/Sub, with automated data-quality checks and dead-letter handling.",
      "Root-cause troubleshooting of pipeline anomalies, documented for audit and client review.",
      "Turnaround-time reductions by automating processes that used to be manual.",
    ],
    tags: ["BigQuery", "Dataflow", "Pub/Sub", "Python & SQL"],
    links: [],
  },
  {
    name: "ICT-OS / DRIIPS",
    role: "Independent research - 2025-ongoing",
    status: "research",
    statusLabel: "Active research",
    summary:
      "A master specification for systematic trading: one source document from which a knowledge base, a chart library, quantitative rules, and a Python backtesting engine are all derived. The goal is to turn discretionary trading frameworks into rules that can be specified, backtested and automated - not judgment calls.",
    highlights: [
      "Explicit, numbered rule specifications written before any code - the discipline the whole programme runs on.",
      "A Python backtesting engine validated in-sample and out-of-sample on independent data before anything trades live.",
      "The first framework module is being packaged as a public, reproducible repository - see the pipeline below.",
    ],
    tags: ["Quantitative research", "Python", "Systems design"],
    links: [{ label: "Public backtester repo", href: "https://github.com/KalyangoJovan/driips-backtester" }],
  },
  {
    name: "Automating Email Classification for INFN CNAF User Support",
    role: "MSc thesis · 8-month internship trainee, INFN CNAF, Bologna · 2024",
    status: "live",
    statusLabel: "Completed",
    summary:
      "End-to-end multilingual text pipeline over 28,000+ real support emails (2.7 GB, Italian/English): ingestion, cleaning and language-aware stemming, thread detection, TF-IDF + LDA topic modelling, chi-squared feature selection, class-imbalance handling, and an eight-classifier benchmark with full error analysis. Supervised by Prof. Stefano Lodi and Prof. Elisabetta Ronchieri, University of Bologna.",
    highlights: [],
    tags: ["Python", "pandas", "scikit-learn", "NLTK", "NLP", "Text Classification"],
    links: [
      { label: "Read the thesis (PDF)", href: "/Kalyango_Jovan_MSc_Thesis.pdf" },
    ],
  },
];

export const pipeline: {
  name: string;
  status: ProjectStatus;
  statusLabel: string;
  blurb: string;
  href?: string;
}[] = [
  {
    name: "driips-backtester",
    status: "live",
    statusLabel: "Shipped",
    blurb:
      "Systematic intraday futures strategy — written spec, Python backtesting engine, out-of-sample validation on a held-out year (231 trades, +277R net), costs and limitations stated. Reproducible via synthetic mode.",
    href: "https://github.com/KalyangoJovan/driips-backtester",
  },
  {
    name: "Statistical case study",
    status: "queued",
    statusLabel: "Queued",
    blurb:
      "A rigorous hypothesis test on a year of real trade data - question, method, p-value, effect size, and limitations, written up as a research note.",
  },
  {
    name: "Trade outcome classifier",
    status: "queued",
    statusLabel: "Queued",
    blurb:
      "A scikit-learn model predicting trade outcome likelihood from setup features - baseline first, honest validation, overfitting risks stated plainly.",
  },
  {
    name: "Trading performance dashboard",
    status: "queued",
    statusLabel: "Queued",
    blurb:
      "An interactive dashboard over the same trade log - win rate, drawdown, monthly P&L by session and setup - deployed publicly.",
  },
  {
    name: "Scholarship search API",
    status: "queued",
    statusLabel: "Queued",
    blurb:
      "A deployed FastAPI service with search, filtering and pagination - the first real slice of an education-platform search engine.",
  },
  {
    name: "Double-entry ledger prototype",
    status: "queued",
    statusLabel: "Queued",
    blurb:
      "A PostgreSQL double-entry ledger with an enforced debits-equal-credits invariant, append-only audit log, and tests that try to break it.",
  },
];

export const skills = [
  {
    title: "Quantitative & trading",
    items: [
      "Probability & statistics",
      "Model specification & backtesting logic",
      "Risk-limit design",
      "FX & derivatives (spot, forwards, swaps, options)",
      "Reconciliation & lifecycle-event processing",
    ],
  },
  {
    title: "Data engineering & cloud",
    items: [
      "Python & SQL",
      "Google Cloud Platform - BigQuery, Dataflow, Pub/Sub",
      "PostgreSQL, Prisma, Next.js",
      "Pipeline monitoring, data-quality checks & exception handling",
      "Git, API integrations, UAT/regression testing",
    ],
  },
  {
    title: "Background",
    items: [
      "MSc, Statistical Sciences (Data Science) - Bologna & Utrecht — thesis with INFN CNAF (email classification, NLP)",
      "BSc, Statistical Sciences (Maths & Stats) - Bologna, with study periods at UC Berkeley & Glasgow",
      "English (fluent), Italian (professional)",
      "Based in Bologna, Italy - open to remote, worldwide",
    ],
  },
];
