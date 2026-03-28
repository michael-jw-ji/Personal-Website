import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code,
  TrendingUp,
  Zap,
  Database,
  Cloud,
  Layers,
  Link2,
} from "lucide-react";

const accentStyles = [
  "bg-primary/10 border-primary/25 text-primary",
  "bg-secondary/10 border-secondary/25 text-secondary",
  "bg-accent/10 border-accent/25 text-accent",
] as const;

type ExpertiseEvidence = {
  label: string;
  href: string;
};

type ExpertiseFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Work on the site where this theme shows up (Experience + Projects). */
  evidence: ExpertiseEvidence[];
};

const features: ExpertiseFeature[] = [
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Advanced ML algorithms, neural networks, and AI model development with PyTorch and TensorFlow",
    evidence: [
      { label: "Algoverse", href: "#experience-2" },
      { label: "StockSenseAI", href: "#project-2" },
      { label: "Stock Market Predictor", href: "#project-5" },
    ],
  },
  {
    icon: Code,
    title: "Full-Stack Development",
    description:
      "Modern web applications using React, Node.js, TypeScript, and scalable backend architectures",
    evidence: [
      { label: "Atlas Trading View", href: "#project-6" },
      { label: "Club Website", href: "#project-3" },
      { label: "WhyAmIBroke", href: "#project-1" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Financial Technology",
    description:
      "Fintech solutions, algorithmic trading systems, and financial data analysis platforms",
    evidence: [
      { label: "Atlas Trading View", href: "#project-6" },
      { label: "StockSenseAI", href: "#project-2" },
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "ETL pipelines, data preprocessing, and big data solutions with PostgreSQL and cloud databases",
    evidence: [
      { label: "WhyAmIBroke", href: "#project-1" },
      { label: "Mackenzie Health", href: "#experience-3" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS and Azure cloud solutions, containerization with Docker, and scalable deployments",
    evidence: [
      { label: "Rogers Communications", href: "#experience-1" },
      { label: "Atlas Trading View", href: "#project-6" },
      { label: "Mackenzie Health", href: "#experience-3" },
    ],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "System optimization, GPU utilization, and high-performance computing solutions",
    evidence: [
      { label: "Algoverse", href: "#experience-2" },
      { label: "KC Badminton Club", href: "#experience-4" },
      { label: "Atlas Trading View", href: "#project-6" },
    ],
  },
];

const FeaturesSection = () => {

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-transparent to-card/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            Core <span className="text-accent-heading">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining technical excellence with innovative problem-solving
            across multiple domains
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const accent = accentStyles[index % accentStyles.length];

            return (
              <div
                key={feature.title}
                className="glass-card card-glow-hover group p-8 rounded-2xl border border-border/20"
              >
                <div
                  className={`w-14 h-14 rounded-lg border flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)] ${accent}`}
                >
                  <IconComponent className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-card-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-5 border-t border-border/30 pt-4">
                  <p className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    <Link2 className="h-3.5 w-3.5" aria-hidden />
                    Seen in
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.evidence.map((item) => (
                      <a
                        key={`${feature.title}-${item.href}-${item.label}`}
                        href={item.href}
                        className="inline-flex max-w-full items-center rounded-md border border-primary/25 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:border-primary/40 hover:bg-primary/10"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="glass-card card-glow-hover p-8 rounded-2xl border border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Technical Proficiency
            </h3>

            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-2 xl:grid-cols-4">
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                  <Code className="h-5 w-5 shrink-0 text-primary" />
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Python",
                    "C",
                    "C++",
                    "HTML/CSS",
                    "JavaScript",
                    "TypeScript",
                    "SQL",
                    "Bash",
                  ].map((lang) => (
                    <span
                      key={lang}
                      className="rounded-md border border-border/30 bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                  <Layers className="h-5 w-5 shrink-0 text-secondary" />
                  Frameworks & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "Next.js",
                    "Flask",
                    "FastAPI",
                    "Docker",
                    "Bootstrap",
                    "REST",
                    "Linux",
                    "Jupyter Notebook",
                    "VS Code",
                    "IntelliJ",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-border/30 bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                  <Cloud className="h-5 w-5 shrink-0 text-accent" />
                  Cloud & Data
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Azure",
                    "GCP",
                    "PostgreSQL",
                    "MongoDB",
                    "Git",
                    "GitHub",
                    "Git Bash",
                    "RabbitMQ",
                    "CUDA",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border/30 bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 flex items-center gap-2 font-semibold text-foreground">
                  <Brain className="h-5 w-5 shrink-0 text-primary" />
                  ML, AI & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "PyTorch",
                    "TensorFlow",
                    "Pandas",
                    "NumPy",
                    "Sci-Kit Learn",
                    "Matplotlib",
                    "Seaborn",
                    "HuggingFace",
                    "Transformers",
                    "LangChain",
                    "LangGraph",
                    "Keras",
                    "XGBoost",
                    "OpenCV",
                    "YOLO",
                  ].map((lib) => (
                    <span
                      key={lib}
                      className="rounded-md border border-border/30 bg-muted/50 px-3 py-1 text-sm text-muted-foreground"
                    >
                      {lib}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
