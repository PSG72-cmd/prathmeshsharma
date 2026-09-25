export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  stats: { label: string; value: string }[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  size: "large" | "small";
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface Certification {
  provider: string;
  title: string;
}

export interface SocialLink {
  label: string;
  url: string;
  type: "email" | "github" | "linkedin" | "resume";
}

// ─── Projects ────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    slug: "attendance-planner",
    name: "Smart Attendance Planner",
    tagline:
      "Scaled a DSA class project into a live product with 50+ real users.",
    description: [
      "Subject-wise bunk planning and low-attendance recovery using greedy-algorithm logic.",
      "Dual-mode engine — Bunk Planner (safe skips) and Recovery Tracker (classes needed to recover attendance) — with live recalculation on every input.",
      "Deployed as a PWA on Vercel: installable on mobile, localStorage persistence, zero login friction.",
      "Private PostHog dashboard tracks DAU/MAU and college-wise usage.",
    ],
    stats: [
      { label: "USERS", value: "50+" },
      { label: "TYPE", value: "PWA" },
    ],
    stack: ["React", "JavaScript", "Tailwind CSS", "PostHog", "Vercel"],
    liveUrl: "https://attendance-bunk-planner.vercel.app",
    repoUrl: "https://github.com/PSG72-cmd/Attendance-Bunk-planner",
    size: "large",
  },
  {
    slug: "financial-sentiment",
    name: "Financial Sentiment Analysis & Market Prediction",
    tagline:
      "End-to-end ML pipeline classifying financial text sentiment on a 6,051-entry corpus.",
    description: [
      "End-to-end ML pipeline classifying financial text sentiment (positive/negative/neutral) on a combined FiQA + Financial PhraseBank corpus (6,051 entries post-deduplication).",
      "Custom 900+ term financial sentiment lexicon built to resolve domain-specific ambiguity (e.g. \"debt,\" \"liability\") that generic NLP misreads, concatenated with TF-IDF features.",
      "Benchmarked 5 algorithms (Logistic Regression, Random Forest, Naive Bayes, KNN, Neural Network) with SMOTE and class-weighting for imbalance — Logistic Regression performed best at 0.64 macro-F1.",
      "Expanded into a full-stack deployed app with candlestick charting and a live stock explorer.",
    ],
    stats: [
      { label: "MACRO-F1", value: "0.64" },
      { label: "CORPUS", value: "6,051" },
    ],
    stack: [
      "Python",
      "scikit-learn",
      "Next.js",
      "TF-IDF",
      "SMOTE",
      "Vercel",
    ],
    liveUrl: "https://market-sentiment-kappa.vercel.app",
    repoUrl: "https://github.com/PSG72-cmd/market-sentiment",
    size: "large",
  },
  {
    slug: "cognition-env",
    name: "Cognition Env",
    tagline:
      "AI-driven training environment for IT support — Scaler School of Technology, OpenEnv Hackathon.",
    description: [
      "AI-driven training environment automating IT support ticket handling end-to-end, no hardcoded logic.",
      "An agent classifies incoming tickets, assigns priority, and routes them to the correct team, improving through reinforcement learning (reward on correct routing, penalty on incorrect) — simulating a real-world IT workflow.",
    ],
    stats: [
      { label: "EVENT", value: "HACKATHON" },
      { label: "METHOD", value: "RL" },
    ],
    stack: ["Python", "Reinforcement Learning"],
    repoUrl: "https://github.com/PSG72-cmd/Cognition-Env",
    size: "small",
  },
  {
    slug: "ai-agent-capstone",
    name: "BondKeeper — AI Agent Capstone",
    tagline:
      "Complete AI concierge agent for Google's Intensive AI Workshop, via Kaggle & Streamlit.",
    description: [
      "Built and submitted a complete AI social concierge agent for Google's official Intensive AI Workshop.",
      "Applied multi-step reasoning, context-aware memory, and structured prompt engineering using Gemini models.",
      "Designed and documented the full agent architecture independently with Streamlit UI and SQLite memory store.",
    ],
    stats: [
      { label: "PLATFORM", value: "KAGGLE" },
      { label: "MODEL", value: "GEMINI" },
    ],
    stack: ["Python", "Google Gemini API", "Streamlit", "SQLite"],
    repoUrl: "https://github.com/PSG72-cmd/bondkeeper",
    size: "small",
  },
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills: SkillCategory[] = [
  {
    label: "AI/ML",
    items: [
      "Python",
      "Google Gemini API",
      "Applied Reinforcement Learning",
      "Prompt Engineering",
    ],
  },
  {
    label: "FULL-STACK",
    items: [
      "React",
      "JavaScript",
      "HTML/CSS",
      "Backend Development",
      "MySQL",
    ],
  },
  {
    label: "CLOUD & INFRA",
    items: [
      "AWS (EC2, S3, IAM, VPC)",
      "Google Cloud Platform",
      "Linux (Ubuntu Server)",
    ],
  },
  {
    label: "SYSTEMS (IN PROGRESS)",
    items: ["ROS2", "Robotics", "C"],
  },
];

// ─── Certifications ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [
  {
    provider: "Google Cloud",
    title: "MLOps in Generative AI",
  },
  {
    provider: "Microsoft Learn",
    title: "Discover Data Analysis",
  },
  {
    provider: "AWS",
    title: "Cloud Essentials",
  },
];

// ─── Languages ───────────────────────────────────────────────────────────────

export const languages: string[] = [
  "English",
  "Hindi",
  "Gujarati",
  "Japanese",
  "French",
];

// ─── Social Links ────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    url: "mailto:prathmeshsharma72@gmail.com",
    type: "email",
  },
  {
    label: "GitHub",
    url: "https://github.com/PSG72-cmd",
    type: "github",
  },
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/prathmesh-sharma",
    type: "linkedin",
  },
  {
    label: "Resume",
    url: "/resume.pdf",
    type: "resume",
  },
];

// ─── Timeline ────────────────────────────────────────────────────────────────

export interface TimelineEntry {
  date: string;
  title: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    date: "2024",
    title: "Smart Attendance Planner",
    description:
      "Turned a DSA assignment into a live PWA — first shipped product, 50+ users within college.",
  },
  {
    date: "2024",
    title: "Cognition Env — OpenEnv Hackathon",
    description:
      "Built an RL-driven IT ticket routing agent at Scaler School of Technology hackathon.",
  },
  {
    date: "2025",
    title: "AI Agent Capstone — Google AI Workshop",
    description:
      "Designed and submitted a full AI agent architecture for Google's Intensive AI Workshop via Kaggle.",
  },
  {
    date: "2025",
    title: "Financial Sentiment Analysis",
    description:
      "End-to-end ML pipeline with custom lexicon, benchmarked 5 algorithms, deployed full-stack app.",
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
] as const;
