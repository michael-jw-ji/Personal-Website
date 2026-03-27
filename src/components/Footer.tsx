import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/michael-jw-ji",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/michael-jw-ji",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:michael.jw.ji@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="bg-card/20 backdrop-blur-sm border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-accent-heading mb-4">
              Michael Ji
            </h3>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Computing and Financial Management student at University of
              Waterloo, passionate about machine learning, fintech, and building
              impactful solutions.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(social.href, "_blank")}
                    className="w-10 h-10 rounded-full text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>michael.jw.ji@gmail.com</p>
              <p>647-938-0623</p>
              <p>Toronto, ON</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Michael Ji. All rights reserved.
            </p>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made using React, Typescript, and Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
