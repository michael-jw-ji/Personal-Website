import { Brain, Code, TrendingUp, Zap, Database, Cloud } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "Advanced ML algorithms, neural networks, and AI model development with PyTorch and TensorFlow",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Modern web applications using React, Node.js, TypeScript, and scalable backend architectures",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Financial Technology",
      description:
        "Fintech solutions, algorithmic trading systems, and financial data analysis platforms",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "ETL pipelines, data preprocessing, and big data solutions with PostgreSQL and cloud databases",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "AWS and Azure cloud solutions, containerization with Docker, and scalable deployments",
      gradient: "from-teal-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "System optimization, GPU utilization, and high-performance computing solutions",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-transparent to-card/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Core <span className="text-gradient">Expertise</span>
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

            return (
              <div
                key={feature.title}
                className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 group animate-fade-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-card-foreground/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-br group-hover:${feature.gradient} rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-20`}
                />
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient mb-6">
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
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-border/30"
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
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-border/30"
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
                      className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-border/30"
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
