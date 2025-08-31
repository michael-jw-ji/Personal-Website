import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import DetailModal from "./DetailModal";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "WhyAmIBroke",
      description: "Full-stack expense tracking app with RAG pipeline using Brave Web Search API and LLM agents. Features real-time financial insights and Docker deployment.",
      image: "💰",
      gradient: "from-green-500 to-emerald-500",
      tech: ["RAG", "LLM Agents", "Flask", "PostgreSQL", "Docker", "RabbitMQ"],
      github: "https://github.com/ivanccheng/personal-budget",
      demo: "#",
      features: [
        "20% improvement in expense classification accuracy",
        "Microservice architecture with modular LLM agents",
        "Real-time financial insights and budgeting",
        "Containerized deployment with Docker"
      ]
    },
    {
      id: 2,
      title: "StockSenseAI",
      description: "Advanced stock analysis platform with integrated sentiment analysis and 30+ days of historical data preprocessing for ML prediction models.",
      image: "📈",
      gradient: "from-blue-500 to-purple-500",
      tech: ["Python", "Flask", "React", "TypeScript", "TensorFlow", "VADER"],
      github: "https://github.com/michael-jw-ji/StockSenseAI",
      demo: "#",
      features: [
        "Real-time stock sentiment analysis",
        "Interactive React/TypeScript frontend",
        "MLPRegressor models for prediction",
        "20-day moving averages and 100+ news articles analysis"
      ]
    },
    {
      id: 3,
      title: "KC Badminton Platform",
      description: "Scalable website and management system that grew monthly users to 10,000+ with 35% performance improvements through JavaScript optimization.",
      image: "🏸",
      gradient: "from-orange-500 to-red-500",
      tech: ["React", "HTML/CSS", "JavaScript", "Node.js", "Bootstrap"],
      github: "#",
      demo: "https://kcbadmintonclub.com",
      features: [
        "10,000+ monthly active users",
        "35% performance improvement",
        "Responsive cross-device compatibility",
        "SEO optimization and Google Analytics"
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-card/10 to-transparent">
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
            onClick={() => window.open('https://github.com/michael-jw-ji', '_blank')}
            className="text-primary hover:text-primary-glow"
          >
            Want to see more? Check out my GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* 3D Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[600px] flex items-center justify-center perspective-1000">
            {projects.map((project, index) => {
              const isActive = index === currentProject;
              const offset = index - currentProject;
              const absOffset = Math.abs(offset);
              
              return (
                <div
                  key={project.id}
                  className={`absolute w-80 h-96 transition-all duration-700 ease-out transform-gpu ${
                    isActive 
                      ? 'z-20 scale-110' 
                      : absOffset === 1 
                      ? 'z-10 scale-95' 
                      : 'z-0 scale-75 opacity-30'
                  }`}
                  style={{
                    transform: `translateX(${offset * 120}px) rotateY(${offset * 15}deg) ${
                      isActive ? 'translateZ(0px)' : 'translateZ(-100px)'
                    }`,
                  }}
                >
                  <div className="glass-card h-full p-6 rounded-2xl group hover:scale-105 transition-smooth">
                    {/* Project Header */}
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-3xl shadow-lg mb-4`}>
                        {project.image}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                    </div>

                    {/* Project Description */}
                    <p className="text-card-foreground/80 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border/30"
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
                    <div className="flex gap-2 mt-auto pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, '_blank')}
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
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentProject ? 'bg-primary' : 'bg-muted-foreground/30'
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