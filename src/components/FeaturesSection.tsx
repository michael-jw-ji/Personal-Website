import { Brain, Code, TrendingUp, Zap, Database, Cloud } from "lucide-react";

const accentStyles = [
  "bg-primary/10 border-primary/25 text-primary",
  "bg-secondary/10 border-secondary/25 text-secondary",
  "bg-accent/10 border-accent/25 text-accent",
] as const;

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Advanced ML algorithms, neural networks, and AI model development with PyTorch and TensorFlow",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Modern web applications using React, Node.js, TypeScript, and scalable backend architectures",
    },
    {
      icon: TrendingUp,
      title: "Financial Technology",
      description:
        "Fintech solutions, algorithmic trading systems, and financial data analysis platforms",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "ETL pipelines, data preprocessing, and big data solutions with PostgreSQL and cloud databases",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "AWS and Azure cloud solutions, containerization with Docker, and scalable deployments",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "System optimization, GPU utilization, and high-performance computing solutions",
    },
  ];

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Programming Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Python",
                    "C",
                    "JavaScript",
                    "TypeScript",
                    "SQL",
                    "Bash",
                  ].map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-md border border-border/30"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Database className="h-5 w-5 text-secondary" />
                  Frameworks & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "Flask",
                    "PyTorch",
                    "TensorFlow",
                    "Docker",
                    "Next.js",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-md border border-border/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-accent" />
                  Cloud & Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "AWS",
                    "Azure",
                    "PostgreSQL",
                    "Git",
                    "RabbitMQ",
                    "CUDA",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-md border border-border/30"
                    >
                      {tech}
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
