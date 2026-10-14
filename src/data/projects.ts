import atlasTradingViewImage from "@/assets/atlas_trading_view_website.png";
import decyferImage from "@/assets/decyfer_website.png";
import aegisImage from "@/assets/aegis.png";
import goLedgerImage from "@/assets/go_ledger_console.png";
import insiderReadingImage from "@/assets/insider_reading_workflow.png";

export type Project = {
  id: number;
  title: string;
  /** Shown in grid cards and modal overview */
  description: string;
  /** Longer context for featured strip (problem, impact, stack) */
  featuredStory?: string;
  /** Screenshot. Optional: a seated project never shows one, and the panel
   *  skips its image block when there is none. */
  image?: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
};

const decyfer: Project = {
  id: 7,
  title: "Decyfer",
  description:
    "Equity-analysis platform with a LightGBM ranking model and a fine-tuned Qwen model for qualitative financial-health assessments.",
  featuredStory:
    "Decyfer is an equity-analysis platform that pairs quantitative ranking with LLM-generated financial narrative. I built a LightGBM ranking model that reaches 0.03 IC (Spearman) on held-out data with strict time-based train/test separation, surfaced through a Next.js dashboard alongside company financials. I also fine-tuned Qwen2.5-7B with LoRA on a self-built dataset of 5000+ company financial documents to generate qualitative financial-health assessments, agreeing with expert judgement on 80% of a validation sample.",
  image: decyferImage,
  tech: [
    "Python",
    "Next.js",
    "FastAPI",
    "Supabase",
    "Qwen LLM",
    "LightGBM",
    "LoRA",
  ],
  github: "https://github.com/zgl06/decyfer",
  demo: "#",
  features: [
    "Built an equity-analysis platform with a LightGBM ranking model reaching 0.03 IC (Spearman) on held-out data with strict time-based train/test separation, shown through a Next.js dashboard alongside company financials.",
    "Fine-tuned Qwen2.5-7B with LoRA on a self-built dataset of 5000+ company financial documents and numbers to generate qualitative financial-health assessments, agreeing with expert judgement on 80% of a validation sample.",
  ],
};

const atlasTradingView: Project = {
  id: 6,
  title: "Atlas Trading View",
  description:
    "Serverless trading analytics platform on AWS with a React and TypeScript frontend, Stripe billing, charting, and high-volume ETL.",
  featuredStory:
    "Atlas Trading View brings market data, charting, and billing together on a fully serverless stack. I architected AWS CDK infrastructure (Lambda, DynamoDB, S3, API Gateway), shipped REST APIs with OpenAPI 3.0, JWT, and rate limiting for sub-90ms responses under load, and built the client with Stripe, Lightweight Charts, and React Query. A Python and Selenium ETL pipeline with Lambda, S3, DynamoDB, and EventBridge processes 100,000+ records daily with 99%+ reliability.",
  image: atlasTradingViewImage,
  tech: [
    "TypeScript",
    "Python",
    "AWS CDK",
    "Lambda",
    "DynamoDB",
    "React",
    "Stripe",
    "OpenAPI",
    "Selenium",
    "Tailwind",
  ],
  github: "#",
  demo: "#",
  features: [
    "Built serverless microservices with AWS CDK, TypeScript, and Python across Lambda, DynamoDB, S3, and API Gateway, with automated deployments.",
    "Designed REST APIs in Python on Lambda with OpenAPI 3.0, JWT authentication, DynamoDB queries, and rate limiting, holding sub-90ms responses for 1000+ concurrent requests with tiered access.",
    "Built a React and TypeScript frontend with Stripe, Lightweight Charts, React Query, and Tailwind, and a Python and Selenium ETL pipeline on Lambda, S3, DynamoDB, and EventBridge that processes 100,000+ records a day at 99%+ reliability.",
  ],
};

export const featuredProjects: Project[] = [decyfer, atlasTradingView];

export const moreProjects: Project[] = [
  {
    id: 10,
    title: "Go Ledger",
    description:
      "Double-entry payments ledger in Go and Postgres, built for correctness under concurrency and failure.",
    image: goLedgerImage,
    tech: ["Go", "Postgres", "Redis", "React", "Prometheus", "Grafana"],
    github: "https://github.com/michael-jw-ji/go-ledger",
    demo: "#",
    features: [
      "Built a double-entry payments ledger in Go and Postgres where multi-leg transfers post atomically, debits equal credits, and accounts without an overdraft allowance never go negative.",
      "Enforced exactly-once posting with idempotency keys in Redis and a Postgres backstop, and took row locks in id order so concurrent transfers do not deadlock.",
      "Deferred the cached balance on hot accounts, which cut merchant p99 from 1.67 s to 31 ms at 300 transfers a second, while reconciliation found 0 mismatches.",
    ],
  },
  {
    id: 11,
    title: "Insider Reading",
    description:
      "Extracts insider transactions from SEC Form 4 filings with a 7B model, and ships a change only if a statistical gate says it is better.",
    image: insiderReadingImage,
    tech: ["Python", "Qwen2.5", "LoRA", "Modal", "OpenTelemetry", "MCP"],
    github: "https://github.com/michael-jw-ji/insider-reading",
    demo: "#",
    features: [
      "Built a pipeline that extracts insider transactions from SEC Form 4 filings with Qwen2.5-7B, scores every change on a frozen holdout of 189 filings whose gold comes from the filing XML, and promotes a change only when a bootstrap 95% interval of the gain is above zero and no field drops more than 2 points.",
      "Raised field F1 from 0.8401 to 0.9932 and the schema-valid rate from 54.5% to 99.5% by fixing rendering and post-processing in code, then training a LoRA on the pipeline's own XML-verified failures.",
      "Added a CI eval that replays 30 recorded answers and fails a pull request if a scored field drops more than 0.5 points, plus an MCP server that extracts a filing and checks it against the filing XML.",
    ],
  },
  {
    id: 9,
    title: "Aegis",
    description:
      "AI system that answers vendor security questionnaires from an approved knowledge base and has AI judges grade each answer.",
    image: aegisImage,
    tech: ["LangGraph", "LangChain", "Ollama", "React", "Express", "SQLite"],
    github: "https://github.com/michael-jw-ji/aegis",
    demo: "#",
    features: [
      "Built a security questionnaire answering system on React/TypeScript and Express, using a LangGraph workflow that retrieves the top 5 matching knowledge base entries with TF-IDF and drafts answers with a local Llama 3.2 model through LangChain and Ollama.",
      "Guarded against hallucinated answers by gating generation on a retrieval confidence threshold, limiting prompts to knowledge base context at temperature 0, and scoring every answer with 3 parallel AI judges for accuracy, completeness, and risk.",
      "Designed a SQLite schema with full version history and rollback for knowledge base entries, plus an analytics dashboard with custom SVG charts tracking pass rates, verdict distribution, and quality scores over time.",
    ],
  },
  {
    id: 8,
    title: "Baddie Match",
    description:
      "Score and stats tracker for the Waterloo Warriors badminton team, rating players with TrueSkill from recorded match results.",
    tech: ["React", "Flask", "PostgreSQL", "SQLAlchemy", "TrueSkill", "Docker"],
    github: "https://github.com/uwbaddev/baddie-match",
    demo: "https://baddie-match.herokuapp.com/",
    features: [
      "Built a score and stats tracker for the Waterloo Warriors badminton team on a React front end and a Flask API, with SQLAlchemy models and Alembic migrations over PostgreSQL.",
      "Rated players with TrueSkill, the Bayesian skill-rating system, so standings update from match outcomes and the strength of the opponent rather than from win-loss totals alone.",
      "Containerised the stack with separate development and production images behind nginx, deployed through a scripted release.",
    ],
  },
];
