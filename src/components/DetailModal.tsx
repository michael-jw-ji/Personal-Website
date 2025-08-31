import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, MapPin } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  gradient: string;
  tech: string[];
  github: string;
  demo: string;
  features: string[];
}

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  logo: string;
  color: string;
  skills: string[];
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Project | Experience | null;
  type: 'project' | 'experience';
}

const DetailModal = ({ isOpen, onClose, data, type }: DetailModalProps) => {
  if (!data) return null;

  const isProject = type === 'project';
  const project = isProject ? data as Project : null;
  const experience = !isProject ? data as Experience : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur-lg border border-border/30">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
              isProject ? project?.gradient : experience?.color
            } flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
              {isProject ? project?.image : experience?.logo}
            </div>
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                {isProject ? project?.title : experience?.role}
              </DialogTitle>
              {isProject ? (
                <p className="text-primary font-semibold">Personal Project</p>
              ) : (
                <>
                  <p className="text-lg font-semibold text-primary mb-2">
                    {experience?.company}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{experience?.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{experience?.location}</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {isProject ? "Project Overview" : "Role Description"}
            </h3>
            <p className="text-card-foreground/80 leading-relaxed">
              {isProject ? project?.description : experience?.description}
            </p>
          </div>

          {/* Key Features/Achievements */}
          {isProject && project?.features && (
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="text-card-foreground/80 flex items-start gap-2">
                    <span className="text-primary mt-1 text-sm">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack/Skills */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">
              {isProject ? "Technologies Used" : "Skills & Technologies"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {(isProject ? project?.tech : experience?.skills)?.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-muted/50 text-muted-foreground text-sm rounded-full border border-border/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons for Projects */}
          {isProject && project && (
            <div className="flex gap-3 pt-4 border-t border-border/30">
              {project.github && project.github !== "#" && (
                <Button
                  variant="outline"
                  onClick={() => window.open(project.github, '_blank')}
                  className="flex-1 group"
                >
                  <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  View Code
                </Button>
              )}
              {project.demo && project.demo !== "#" && (
                <Button
                  variant="hero"
                  onClick={() => window.open(project.demo, '_blank')}
                  className="flex-1 group"
                >
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Live Demo
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;