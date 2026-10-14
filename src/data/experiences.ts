import communitechLogo from "@/assets/communitech_logo.png";
import ennsLogo from "@/assets/brad_enns_logo.png";
import rogersLogo from "@/assets/rogers_logo.png";
import algoverseLogo from "@/assets/algoverse_logo.jpeg";
import mackenzieHealthLogo from "@/assets/mackenzie_health_logo.jpg";


export type Experience = {
  id: number;
  role: string;
  company: string;
  period: string;
  /** Compact date shown beside the company. */
  periodShort: string;
  location: string;
  summary: string;
  logo: string;
  /** Optional company site (not a demo). */
  link?: string;
  skills: string[];
  achievements: string[];
};

/* Chronological, oldest first. The page reverses this for display. */
export const experiences: Experience[] = [
  {
    id: 4,
    role: "Infrastructure Developer Intern",
    company: "Mackenzie Health",
    period: "April 2025 – August 2025",
    periodShort: "Apr – Aug 2025",
    location: "Richmond Hill, ON",
    summary:
      "At Mackenzie Health I supported on-premises and AWS-hosted EMR and clinical systems (EC2, RDS, S3, CloudWatch) and helped upgrade core hospital networking to 400 Gbps for modern clinical and AI workloads.",
    logo: mackenzieHealthLogo,
    skills: ["AWS", "EC2", "RDS", "S3", "CloudWatch", "EMR", "Networking"],
    achievements: [
      "Managed on-premises and AWS-based virtualized EMR and health IT systems using EC2, RDS, S3, and CloudWatch, improving performance and reducing downtime by 30% through monitoring and optimization.",
      "Participated in upgrading the hospital network from 100gbps to 400gbps, enabling the fastest healthcare network in Canada to support advanced medical technologies and AI-powered healthcare systems.",
    ],
  },
  {
    id: 3,
    role: "Machine Learning Research Intern",
    company: "Algoverse",
    period: "April 2025 – March 2026",
    periodShort: "Apr 2025 – Mar 2026",
    location: "Palo Alto, CA",
    summary:
      "At Algoverse I study how code models represent variable roles, training per-layer probes with seed and random-label controls to separate real structure from lexical shortcuts, backed by a multi-language dataset pipeline and a reusable experiment CLI.",
    logo: algoverseLogo,
    skills: [
      "Python",
      "PyTorch",
      "Transformers",
      "Interpretability",
      "Probing Classifiers",
      "HuggingFace",
    ],
    achievements: [
      "Trained per-layer probes reaching 0.98 macro-F1 with five-seed confidence intervals and random-label controls, showing near-identical probe scores can reflect lexical shortcuts; 2 papers accepted at NeurIPS 2026 workshops.",
      "Built a Python dataset pipeline labeling 5 variable roles across 7 programming languages using AST and regex extractors, with problem-hash 70/10/20 splits to prevent train/test leakage; published as a public Hugging Face dataset.",
      "Designed a model-agnostic experiment CLI extracting per-layer hidden states from any Hugging Face LLM, running perturbation and cross-language probe sweeps across 3 models and 5 variable roles with resumable, checkpointed runs.",
    ],
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Rogers Communications",
    period: "January 2026 – April 2026",
    periodShort: "Jan – Apr 2026",
    location: "Toronto, ON",
    summary:
      "At Rogers I built the Python APIs and document ingestion behind an internal policy assistant on Azure AI Search and Azure OpenAI, fronted by request-validation middleware and an async pipeline that alerts owners on suspicious prompts.",
    logo: rogersLogo,
    skills: [
      "Azure OpenAI",
      "Azure AI Search",
      "RAG",
      "LLM Guardrails",
      "Tool Calling",
      "Prompt Injection Defense",
    ],
    achievements: [
      "Built Python APIs and document ingestion pipelines for an internal policy assistant serving 5K+ users, indexing 500+ policy documents into Azure AI Search, handling 35K+ weekly queries at 3s p95 latency with Azure OpenAI.",
      "Designed request-validation middleware in front of the RAG APIs with LLM-based query normalization, prompt-injection detection, oversized-input rejection, and file-type allowlisting, blocking 95% of 250+ adversarial test cases.",
      "Shipped an async pipeline alerting owners on suspicious prompts via Azure OpenAI function calling and Power Automate, decoupled from the response path to keep user p95 latency at 3s, cutting review time from 2 hours to 5 minutes.",
    ],
  },
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Enns Real Estate",
    period: "May 2026 – August 2026",
    periodShort: "May – Aug 2026",
    location: "Waterloo, ON",
    summary:
      "At Enns Real Estate I built the brokerage’s listings platform end to end on Next.js/TypeScript and Supabase, from schema design through deployment, cutting page load time with incremental static regeneration and automating staging and production releases through GitHub Actions and Vercel.",
    logo: ennsLogo,
    link: "https://ennsrealestate.ca",
    skills: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "GitHub Actions",
      "Vercel",
      "Figma",
    ],
    achievements: [
      "Designed and built the brokerage’s listings platform end to end on Next.js/TypeScript and Supabase, from schema design to deployment, contributing to 200% year-over-year revenue growth after launch with 200+ monthly visitors.",
      "Reduced listing page load time by 40% by caching listing queries with Next.js incremental static regeneration and indexing Postgres filter columns for price, bedrooms, and location, revalidating pages on every listing update.",
      "Automated staging and production releases with GitHub Actions and Vercel CI/CD, gating every PR on typecheck, lint, and build checks, cutting release time to under 5 minutes with 0 failed production deploys.",
    ],
  },
  {
    id: 5,
    role: "Software Engineer Intern",
    company: "Communitech",
    period: "September 2026 – Present",
    periodShort: "Sep 2026 – Present",
    location: "Waterloo, ON",
    summary:
      "At Communitech I build Python/SQL ingestion and aggregation pipelines on Microsoft Fabric that unify four source systems into a single guest and revenue model, with a Claude-powered report generator on top and PII hardening for PIPEDA compliance.",
    logo: communitechLogo,
    skills: [
      "Python",
      "SQL",
      "Microsoft Fabric",
      "Claude",
      "Entra ID",
      "Azure Key Vault",
    ],
    achievements: [
      "Building Python/SQL ingestion and aggregation pipelines on Microsoft Fabric, transforming reservation, spa, restaurant, and POS data from 4 source systems into a unified guest and revenue model for cross-department analytics.",
      "Built a Claude-powered report generator on top of the unified guest model, turning data from 4 systems into daily and per-guest department summaries via a curated system prompt, cutting lookup time from 30 to 2 minutes.",
      "Hardening the platform for guest PII with row-level security, least-privilege Entra ID service principals per pipeline, secrets in Azure Key Vault, and Canadian-region data residency for PIPEDA compliance.",
    ],
  },
];

