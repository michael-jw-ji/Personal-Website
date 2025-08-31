import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Send,
  ExternalLink,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "m2ji@uwaterloo.ca",
      href: "mailto:m2ji@uwaterloo.ca",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Waterloo, ON",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/michael-jw-ji",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/michael-jw-ji",
      color: "from-gray-600 to-gray-400",
    },
    {
      icon: ExternalLink,
      label: "Resume",
      href: "#", // Update this with your actual resume link
      color: "from-green-500 to-emerald-500",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-card/10 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss opportunities in
            tech and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <div className="glass-card p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-card-hover transition-colors duration-300 group"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {item.label}
                        </p>
                        <p className="text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      onClick={() => window.open(social.href, "_blank")}
                      className="w-12 h-12 rounded-xl hover:scale-110 transition-transform duration-300 group"
                    >
                      <IconComponent className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send me a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-input border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-input border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-input border-border/50 focus:border-primary transition-colors"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="bg-input border-border/50 focus:border-primary transition-colors resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
