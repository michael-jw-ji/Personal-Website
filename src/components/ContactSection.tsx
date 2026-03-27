import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

function emailJsErrorMessage(error: unknown): string {
  if (error && typeof error === "object") {
    const o = error as { text?: string; message?: string; status?: number };
    if (typeof o.text === "string" && o.text.length > 0) return o.text;
    if (typeof o.message === "string" && o.message.length > 0) return o.message;
  }
  if (error instanceof Error) return error.message;
  return "Unknown error";
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() ?? "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() ?? "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() ?? "";

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Email not configured",
        description:
          "Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in .env, then stop and run npm run dev again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Michael Ji",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      const detail = emailJsErrorMessage(error);
      toast({
        title: "Failed to send message",
        description:
          detail.length > 120
            ? `${detail.slice(0, 117)}...`
            : detail || "Check the browser console and your EmailJS template variables.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-card/10 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div className="flex min-h-0 flex-col justify-center text-left lg:h-full lg:pr-4">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Get in <span className="text-accent-heading">Touch</span>
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Let's collaborate on your next project or discuss opportunities in
                tech and innovation
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex h-full min-h-0 flex-col">
            <div className="glass-card flex h-full min-h-0 flex-col rounded-2xl border border-border/20 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                Send me a message
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                I usually reply within a couple of days.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-6 flex min-h-0 flex-1 flex-col gap-5 sm:gap-6"
              >
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
                    rows={5}
                    className="min-h-[150px] bg-input border-border/50 focus:border-primary transition-colors resize-y sm:min-h-[168px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={isSubmitting}
                  className="mt-auto h-12 w-full text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
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
