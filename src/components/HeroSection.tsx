import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, FileText, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile_photo.png";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center py-12 pb-20 lg:py-16 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 lg:items-stretch">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="mb-5 inline-flex items-center gap-2.5 self-center rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm font-medium text-muted-foreground animate-fade-in lg:self-start">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              CFM @ University of Waterloo
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-semibold tracking-tight text-foreground leading-[1.05] mb-6 animate-fade-in-up animation-delay-100">
              Michael Ji
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-snug animate-fade-in-up animation-delay-200">
              Full-stack developer and professional badminton player who builds ML
              systems and polished web products.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up animation-delay-300">
              <Button
                variant="hero"
                size="lg"
                className="h-12 min-h-12 rounded-lg px-8 text-base font-semibold [&_svg]:h-5 [&_svg]:w-5"
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in touch
                <ArrowRight className="ml-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 min-h-12 rounded-lg border-border/60 bg-transparent px-8 text-base font-semibold [&_svg]:h-5 [&_svg]:w-5"
                onClick={() =>
                  window.open("/s26_michael_ji_resume.pdf", "_blank")
                }
              >
                <FileText className="mr-1" />
                Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-base animate-fade-in-up animation-delay-400">
              <a
                href="mailto:michael.jw.ji@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5 shrink-0" />
                Email
              </a>
              <a
                href="https://linkedin.com/in/michael-jw-ji"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5 shrink-0" />
                LinkedIn
              </a>
              <a
                href="https://github.com/michael-jw-ji"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5 shrink-0" />
                GitHub
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-lg items-center justify-center lg:max-w-none lg:justify-end animate-fade-in-up animation-delay-200">
            <div className="relative h-80 w-80 sm:h-[22rem] sm:w-[22rem] lg:h-96 lg:w-96 shrink-0 overflow-hidden rounded-full border border-border/40 ring-2 ring-primary/20">
              <img
                src={profilePhoto}
                alt="Michael Ji"
                className="h-full w-full scale-[1.12] object-cover object-[center_28%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
