import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import DetailModal from "./DetailModal";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "WhyAmIBroke",
      description:
        "Full-stack expense tracking app with RAG pipeline using Brave Web Search API and LLM agents. Features real-time financial insights and Docker deployment.",
      image: "💰",
      gradient: "from-green-500 to-emerald-500",
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
      id: 2,
      title: "StockSenseAI",
      description:
        "Advanced stock analysis platform with integrated sentiment analysis and 30+ days of historical data preprocessing for ML prediction models.",
      image: "📈",
      gradient: "from-blue-500 to-purple-500",
      tech: ["Python", "Flask", "React", "TypeScript", "TensorFlow", "VADER"],
      github: "https://github.com/michael-jw-ji/StockSenseAI",
      demo: "#",
      features: [
        "Real-time stock sentiment analysis",
        "Interactive React/TypeScript frontend",
        "MLPRegressor models for prediction",
        "20-day moving averages and 100+ news articles analysis",
      ],
    },
    {
      id: 3,
      title: "Club Website",
      description:
        "Scalable website and management system that grew monthly users to 10,000+ with 35% performance improvements through JavaScript optimization.",
      image: "🏸",
      gradient: "from-orange-500 to-red-500",
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
      image: "📹",
      gradient: "from-indigo-500 to-cyan-500",
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
      image: "📊",
      gradient: "from-emerald-500 to-teal-500",
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

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-card/10 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Innovative solutions spanning AI, fintech, and web development
          </p>
          <Button
            variant="ghost"
            onClick={() =>
              window.open("https://github.com/michael-jw-ji", "_blank")
            }
            className="text-primary hover:text-primary-glow"
          >
            Want to see more? Check out my GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* 3D Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative h-[700px] flex items-center justify-center perspective-1000">
            {Array.from({ length: 5 }, (_, i) => {
              const offset = i - 2; // -2, -1, 0, 1, 2
              const projectIndex =
                (currentProject + offset + projects.length) % projects.length;
              const project = projects[projectIndex];
              const isActive = offset === 0;

              // Calculate size and properties based on distance from center
              const absOffset = Math.abs(offset);
              let scale;

              if (absOffset === 0) {
                // Center project - largest
                scale = 1.0;
              } else if (absOffset === 1) {
                // Adjacent projects - medium
                scale = 0.85;
              } else {
                // Outermost projects - smallest
                scale = 0.7;
              }

              return (
                <motion.div
                  key={i}
                  className="absolute w-[420px] h-[540px] transform-gpu cursor-pointer"
                  animate={{
                    x: offset * 180,
                    rotateY: offset * 25,
                    translateZ:
                      absOffset === 0 ? 50 : absOffset === 1 ? 0 : -50,
                    scale: scale,
                    zIndex: absOffset === 0 ? 30 : absOffset === 1 ? 20 : 10,
                    opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.8 : 0.6,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.25, 0.8, 0.25, 1],
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => {
                    setCurrentProject(projectIndex);
                  }}
                >
                  <div className="glass-card h-full p-8 rounded-2xl flex flex-col justify-between group hover:scale-105 transition-transform duration-300">
                    {/* Project Header */}
                    <div className="text-center mb-6">
                      <div
                        className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-4xl shadow-lg mb-4`}
                      >
                        {project.image}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                    </div>

                    {/* Project Description */}
                    <p className="text-card-foreground/80 text-sm leading-relaxed mb-6 line-clamp-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto pt-6 pb-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        className="flex-1 group"
                      >
                        <Github className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
                        Code
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                          setIsModalOpen(true);
                        }}
                        className="flex-1 group"
                      >
                        <ExternalLink className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="glass"
              size="icon"
              onClick={prevProject}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentProject
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="glass"
              size="icon"
              onClick={nextProject}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
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
