import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import DetailModal from "./DetailModal";

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "Machine Learning Research Engineer Intern",
      company: "Algoverse",
      period: "April 2025 - Present",
      location: "Remote",
      description: "Automated dataset preprocessing and experiment orchestration using Bash and NumPy, reducing setup time by 75%. Optimized GPU utilization and runtime performance with PyTorch and CUDA memory profiling. Implemented distributed training frameworks and model parallelization techniques.",
      logo: "🤖",
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "PyTorch", "CUDA", "NumPy", "Bash", "Distributed Training", "Model Parallelization"],
      achievements: [
        "Reduced dataset preprocessing time by 75% through automated pipeline optimization",
        "Optimized GPU memory utilization resulting in 40% faster training times",
        "Implemented CUDA memory profiling tools for performance monitoring",
        "Developed distributed training frameworks for large-scale ML models"
      ]
    },
    {
      id: 2,
      role: "Infrastructure Developer Intern",
      company: "Mackenzie Health",
      period: "April 2025 - August 2025",
      location: "Richmond Hill, ON",
      description: "Managed on-premises and cloud virtualized EMR systems on AWS and Azure, enhancing performance and reducing downtime by 30%. Upgraded hospital network infrastructure from 100GB to 400GB with comprehensive security protocols.",
      logo: "🏥",
      color: "from-emerald-500 to-teal-500",
      skills: ["AWS", "Azure", "EMR Systems", "Network Infrastructure", "Security Protocols", "Virtualization"],
      achievements: [
        "Reduced system downtime by 30% through proactive monitoring and optimization",
        "Successfully upgraded network infrastructure from 100GB to 400GB capacity",
        "Implemented comprehensive security protocols for patient data protection",
        "Managed hybrid cloud-on-premises EMR systems for 5000+ patient records daily",
        "Automated system backup and disaster recovery procedures"
      ]
    },
    {
      id: 3,
      role: "Software Developer",
      company: "KC Badminton Club",
      period: "August 2024 - August 2025",
      location: "Markham, ON",
      description: "Built scalable website and management system using React and Node.js, improving user experience and growing monthly users to over 10,000. Enhanced performance by 35% with JavaScript optimizations and SEO improvements.",
      logo: "🏸",
      color: "from-purple-500 to-pink-500",
      skills: ["React", "Node.js", "JavaScript", "Bootstrap", "SEO", "Performance Optimization"],
      achievements: [
        "Grew monthly active users from 2,000 to over 10,000 within 6 months",
        "Improved website performance by 35% through JavaScript optimization",
        "Implemented responsive design for cross-device compatibility",
        "Enhanced SEO ranking resulting in 200% increase in organic traffic",
        "Developed member management system with automated registration workflows",
        "Integrated Google Analytics for comprehensive user behavior tracking"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-transparent to-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across machine learning, healthcare tech, and web development
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Logo and Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl shadow-lg`}>
                  {exp.logo}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-smooth text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              {/* Content */}
              <div className="flex flex-col h-full">
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold text-primary mb-3">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-card-foreground/80 leading-relaxed">
                    {exp.description.split('.')[0]}.
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground text-xs rounded-full border border-border/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {exp.skills.length > 4 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{exp.skills.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Learn More Button - Always at bottom with padding */}
                <div className="mt-6 pt-4">
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary/10 transition-smooth"
                    onClick={() => {
                      setSelectedExperience(exp);
                      setIsModalOpen(true);
                    }}
                  >
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gradient mb-4">Notable Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary font-bold text-sm">🏆</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Multiple-time National Elite Champion</p>
                  <p className="text-sm text-muted-foreground">Canadian Men's Singles Badminton</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary font-bold text-sm">🌍</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">World Championships Finalist</p>
                  <p className="text-sm text-muted-foreground">2023/2024 World Junior Championships</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <DetailModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={selectedExperience}
          type="experience"
        />
      </div>
    </section>
  );
};

export default ExperienceSection;