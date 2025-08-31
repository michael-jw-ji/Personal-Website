import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Heart } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const skills = [
    "Machine Learning", "Full-Stack Development", "Financial Analysis", 
    "Data Science", "Cloud Computing", "Competitive Badminton"
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Michael Ji</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Computing and Financial Management @ University of Waterloo
            </p>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                What I'm passionate about:
              </h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card/60 backdrop-blur-sm border border-card-border/30 rounded-full text-sm font-medium text-card-foreground hover:bg-card-hover transition-smooth animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => window.open('https://linkedin.com/in/michael-jw-ji', '_blank')}
                className="group"
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => window.open('https://github.com/michael-jw-ji', '_blank')}
                className="group"
              >
                <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="group"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Resume
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl float-animation">
                <img
                  src={profilePhoto}
                  alt="Michael Ji - Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl animate-glow" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Floating likes counter */}
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="glass-card px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-smooth cursor-pointer">
            <Heart className="h-5 w-5 text-secondary fill-secondary" />
            <span className="font-medium text-foreground">1,247 people like this</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;