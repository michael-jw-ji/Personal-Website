import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import DetailModal from "./DetailModal";
import algoverseLogo from "@/assets/algoverse_logo.jpeg";
import mackenzieHealthLogo from "@/assets/mackenzie_health_logo.jpg";
import kcBadmintonLogo from "@/assets/kc_badminton_club_logo.jpeg";
import badmintonCanadaLogo from "@/assets/badminton_canada_logo.png";
import bwfLogo from "@/assets/bwf_logo.jpg";
import awsLogo from "@/assets/aws_logo.jpg";
import deeplearningAiLogo from "@/assets/deeplearning.ai_logo.png";

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "Machine Learning Research Engineer Intern",
      company: "Algoverse",
      period: "April 2025 - Present",
      location: "Remote (Palo Alto, CA)",
      description:
        "Automated dataset preprocessing and experiment orchestration using Bash and NumPy, reducing setup time by 75%. Optimized GPU utilization and runtime performance with PyTorch and CUDA memory profiling. Implemented distributed training frameworks and model parallelization techniques.",
      logo: algoverseLogo,
      skills: [
        "Python",
        "PyTorch",
        "CUDA",
        "NumPy",
        "Bash",
        "Distributed Training",
        "Model Parallelization",
      ],
      achievements: [
        "Reduced dataset preprocessing time by 75% through automated pipeline optimization",
        "Optimized GPU memory utilization resulting in 40% faster training times",
        "Implemented CUDA memory profiling tools for performance monitoring",
        "Developed distributed training frameworks for large-scale ML models",
      ],
    },
    {
      id: 2,
      role: "Infrastructure Developer Intern",
      company: "Mackenzie Health",
      period: "April 2025 - August 2025",
      location: "Richmond Hill, ON",
      description:
        "Managed on-premises and cloud virtualized EMR systems on AWS and Azure, enhancing performance and reducing downtime by 30%. Upgraded hospital network infrastructure from 100GB to 400GB with comprehensive security protocols.",
      logo: mackenzieHealthLogo,
      skills: [
        "AWS",
        "Azure",
        "EMR Systems",
        "Network Infrastructure",
        "Security Protocols",
        "Virtualization",
      ],
      achievements: [
        "Reduced system downtime by 30% through proactive monitoring and optimization",
        "Successfully upgraded network infrastructure from 100GB to 400GB capacity",
        "Implemented comprehensive security protocols for patient data protection",
        "Managed hybrid cloud-on-premises EMR systems for 5000+ patient records daily",
        "Automated system backup and disaster recovery procedures",
      ],
    },
    {
      id: 3,
      role: "Software Developer ",
      company: "KC Badminton Club",
      period: "August 2024 - August 2025",
      location: "Markham, ON",
      description:
        "Built scalable website and management system using React and Node.js, improving user experience and growing monthly users to over 10,000. Enhanced performance by 35% with JavaScript optimizations and SEO improvements.",
      logo: kcBadmintonLogo,
      skills: [
        "React",
        "Node.js",
        "JavaScript",
        "Bootstrap",
        "SEO",
        "Performance Optimization",
      ],
      achievements: [
        "Grew monthly active users from 2,000 to over 10,000 within 6 months",
        "Improved website performance by 35% through JavaScript optimization",
        "Implemented responsive design for cross-device compatibility",
        "Enhanced SEO ranking resulting in 200% increase in organic traffic",
        "Developed member management system with automated registration workflows",
        "Integrated Google Analytics for comprehensive user behavior tracking",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-transparent to-card/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions across machine learning, healthcare
            tech, and web development
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 group animate-fade-in flex flex-col h-full border-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Logo and Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-15 h-15 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
                  style={{ boxShadow: "0 8px 12px #000c" }}
                >
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-14 h-14 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-3">
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col h-full ${exp.id === 3 ? "mt-6" : ""}`}
              >
                <div className="flex-1 space-y-4">
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
                    {exp.description.split(".")[0]}.
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
                <div className="mt-auto pt-4">
                  <Button
                    variant="ghost"
                    className="w-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
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
        <div
          className="mt-16 text-center animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Awards/Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 -mt-1 overflow-hidden">
                  <img
                    src={badmintonCanadaLogo}
                    alt="Badminton Canada"
                    className="w-10 h-10 object-cover rounded-lg scale-125"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Multiple-time National Elite Champion
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Singles, Doubles, and Mixed Doubles
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0 -mt-1 overflow-hidden">
                  <img
                    src={bwfLogo}
                    alt="BWF World Championships"
                    className="w-10 h-10 object-cover rounded-lg scale-125"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    World Championships Representative
                  </p>
                  <p className="text-sm text-muted-foreground">
                    2023/2024 World Junior Championships
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 -mt-1 overflow-hidden">
                  <img
                    src={awsLogo}
                    alt="AWS Certification"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    AWS Certification
                  </p>
                  <p className="text-sm text-muted-foreground">
                    AWAS Cloud Technical Essentials, Architecting Solutions on AWS, Building Data Lakes on AWS
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 -mt-1 overflow-hidden">
                  <img
                    src={deeplearningAiLogo}
                    alt="DeepLearning.AI Certification"
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    DeepLearning.AI Certification
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Advanced Learning Algorithms, Unsupervised Learning:
                    Recommenders, Reinforcement Learning, Supervised Machine
                    Learning: Regression and Classification
                  </p>
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
