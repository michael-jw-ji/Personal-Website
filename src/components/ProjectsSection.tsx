import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import DetailModal from "./DetailModal";

import whyAmIBrokeImage from "@/assets/whyamibroke_website.png";
import stocksenseaiImage from "@/assets/stocksenseai_website.png";
import kcBadmintonImage from "@/assets/kc_badminton_club_website.png";
import eagleEyeImage from "@/assets/eagle_eye_website.png";
import stockPredictorImage from "@/assets/stock_market_predictor_graph.png";
import atlasTradingViewImage from "@/assets/atlas_trading_view_website.png";

export type Project = {
  id: number;
  title: string;
  /** Shown in grid cards and modal overview */
  description: string;
  /** Longer context for featured strip (problem, impact, stack) */
  featuredStory?: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
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
    "Serverless microservices with AWS CDK, TypeScript and Python, Lambda, DynamoDB, S3, and API Gateway for automated deployments.",
    "REST APIs with Python and Lambda, OpenAPI 3.0, JWT authentication, DynamoDB queries, and rate limiting; sub-90ms responses for 1000+ concurrent requests with tiered access.",
    "React and TypeScript frontend with Stripe, Lightweight Charts, React Query, and Tailwind; Python and Selenium ETL with Lambda and S3 triggers, DynamoDB, and EventBridge for 100,000+ daily records at 99%+ reliability.",
  ],
};

const stockSenseAI: Project = {
  id: 2,
  title: "StockSenseAI",
  description:
    "Advanced stock analysis platform with integrated sentiment analysis and 30+ days of historical data preprocessing for ML prediction models.",
  featuredStory:
    "StockSenseAI combines neural networks with news sentiment and technical indicators to surface buy, sell, and hold signals. I built the Flask backend, React and TypeScript frontend, and TensorFlow models, pairing VADER sentiment with moving averages and 100+ articles per run to speed up decisions without sacrificing context.",
  image: stocksenseaiImage,
  tech: ["Python", "Flask", "React", "TypeScript", "TensorFlow", "VADER"],
  github: "https://github.com/michael-jw-ji/StockSenseAI",
  demo: "#",
  features: [
    "Real-time stock sentiment analysis",
    "Interactive React/TypeScript frontend",
    "MLPRegressor models for prediction",
    "20-day moving averages and 100+ news articles analysis",
  ],
};

const featuredProjects: Project[] = [atlasTradingView, stockSenseAI];

const moreProjects: Project[] = [
  {
    id: 1,
    title: "WhyAmIBroke",
    description:
      "Full-stack expense tracking app with RAG pipeline using Brave Web Search API and LLM agents. Features real-time financial insights and Docker deployment.",
    image: whyAmIBrokeImage,
    tech: ["RAG", "LLM Agents", "Flask", "PostgreSQL", "Docker", "RabbitMQ"],
    github: "https://github.com/ivanccheng/personal-budget",
    demo: "#",
    features: [
      "20% improvement in expense classification accuracy",
      "Microservice architecture with modular LLM agents",
      "Real-time financial insights and budgeting",
      "Containerized deployment with Docker",
    ],
  },
  {
    id: 3,
    title: "Club Website",
    description:
      "Scalable website and management system that grew monthly users to 10,000+ with 35% performance improvements through JavaScript optimization.",
    image: kcBadmintonImage,
    tech: ["React", "HTML/CSS", "JavaScript", "Node.js", "Bootstrap"],
    github: "#",
    demo: "https://kcbadmintonclub.com",
    features: [
      "10,000+ monthly active users",
      "35% performance improvement",
      "Responsive cross-device compatibility",
      "SEO optimization and Google Analytics",
    ],
  },
  {
    id: 4,
    title: "Eagle Eye Surveillance",
    description:
      "ESP32-CAM web-based surveillance system with motion detection, cloud integration, and real-time streaming. Features PIR sensors and Google Drive storage.",
    image: eagleEyeImage,
    tech: ["ESP32-CAM", "FreeRTOS", "C/C++", "Node.js", "Express", "React"],
    github: "https://github.com/CeanLiu/eagle-eye",
    demo: "#",
    features: [
      "Motion detection with PIR sensors",
      "Real-time video streaming",
      "Cloud storage integration with Google Drive",
      "ESP32-CAM with FreeRTOS for efficient task management",
    ],
  },
  {
    id: 5,
    title: "Stock Market Predictor",
    description:
      "Machine learning project for stock market trend forecasting using historical data analysis and predictive modeling in Jupyter Notebook.",
    image: stockPredictorImage,
    tech: [
      "Python",
      "Jupyter Notebook",
      "Machine Learning",
      "Data Analysis",
      "Pandas",
      "NumPy",
    ],
    github: "https://github.com/michael-jw-ji/Stock-Market-Predictor",
    demo: "#",
    features: [
      "Historical stock data processing and visualization",
      "Machine learning algorithms for price prediction",
      "Clean data visualizations and model outputs",
      "Jupyter Notebook-based development environment",
    ],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-card/10 to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            My <span className="text-accent-heading">Projects</span>
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-xl text-muted-foreground">
            Innovative solutions spanning AI, fintech, and web development
          </p>
          <Button
            variant="ghost"
            onClick={() =>
              window.open("https://github.com/michael-jw-ji", "_blank")
            }
            className="text-primary hover:text-primary/90"
          >
            Want to see more? Check out my GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Featured flagship projects */}
        <div className="mb-20 space-y-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Featured
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Deeper dives into two builds with the strongest product and
              infrastructure scope
            </p>
          </div>

          {featuredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="glass-card card-glow-hover scroll-mt-10 overflow-hidden rounded-2xl border border-border/20"
            >
              <div className="flex flex-col gap-8 p-6 lg:flex-row lg:items-stretch lg:gap-10 lg:p-10">
                <div className="min-w-0 lg:w-[58%]">
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/30 bg-muted/20 shadow-inner">
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center lg:w-[42%]">
                  <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-card-foreground/90">
                    {project.featuredStory ?? project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border/40 bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button
                      variant="hero"
                      size="lg"
                      className="rounded-lg"
                      onClick={() => openProject(project)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View project
                    </Button>
                    {project.github !== "#" && (
                      <Button
                        variant="outline"
                        size="lg"
                        className="rounded-lg"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Compact grid */}
        <div>
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
              More projects
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
              Smaller builds and tools: title, one-liner, and stack. Click for
              details.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {moreProjects.map((project) => (
              <button
                key={project.id}
                id={`project-${project.id}`}
                type="button"
                onClick={() => openProject(project)}
                className="glass-card card-glow-hover group flex h-full scroll-mt-10 flex-col rounded-xl border border-border/20 p-5 text-left transition-colors hover:border-primary/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <h4 className="text-lg font-bold text-foreground group-hover:text-primary">
                  {project.title}
                </h4>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border/40 bg-muted/30 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2 py-0.5 text-[10px] text-muted-foreground">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedProject}
          type="project"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
