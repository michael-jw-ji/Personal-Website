import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import DetailModal from "./DetailModal";

// Project images
import whyAmIBrokeImage from "@/assets/whyamibroke_website.png";
import stocksenseaiImage from "@/assets/stocksenseai_website.png";
import kcBadmintonImage from "@/assets/kc_badminton_club_website.png";
import eagleEyeImage from "@/assets/eagle_eye_website.png";
import stockPredictorImage from "@/assets/stock_market_predictor_graph.png";

const ProjectsSection = () => {
  const [translateX, setTranslateX] = useState(0);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-scroll effect - continuous movement
  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prev) => prev - 1); // Move 1px left every interval
    }, 20); // Smooth movement every 20ms

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      title: "WhyAmIBroke",
      description:
        "Full-stack expense tracking app with RAG pipeline using Brave Web Search API and LLM agents. Features real-time financial insights and Docker deployment.",
      image: whyAmIBrokeImage,
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
      image: stocksenseaiImage,
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
      image: kcBadmintonImage,
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
      image: eagleEyeImage,
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
      image: stockPredictorImage,
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

  // Create multiple copies for truly infinite scroll
  const duplicatedProjects = [...projects, ...projects, ...projects];
  const cardWidth = 400; // Card width + gap
  const resetPoint = projects.length * cardWidth;

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

        {/* Continuous Horizontal Scrolling Carousel */}
        <div className="relative overflow-hidden max-w-[1240px] mx-auto py-8">
          {/* Left gradient fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>

          {/* Right gradient fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          <div
            className="flex gap-8 transition-none"
            style={{
              transform: `translateX(${translateX % resetPoint}px)`,
              width: `${duplicatedProjects.length * cardWidth}px`,
            }}
          >
            {duplicatedProjects.map((project, index) => (
              <div
                key={`${project.id}-${Math.floor(
                  index / projects.length
                )}-${index}`}
                className="flex-shrink-0 w-[360px] my-4"
              >
                <div className="glass-card h-[520px] p-6 rounded-2xl flex flex-col justify-between group hover:scale-105 transition-transform duration-300">
                  {/* Project Header */}
                  <div className="text-center mb-3">
                    <div className="w-56 h-42 mx-auto rounded-2xl overflow-hidden shadow-lg mb-3 bg-white/10 backdrop-blur-sm">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="object-cover"
                        style={{ width: "224px", height: "168px" }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Description */}
                  <p className="text-card-foreground/80 text-sm leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                      className="flex-1 group"
                    >
                      <Github className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => {
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
              </div>
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
