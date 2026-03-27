import badmintonCanadaLogo from "@/assets/badminton_canada_logo.png";
import bwfLogo from "@/assets/bwf_logo.jpg";
import awsLogo from "@/assets/aws_logo.jpg";
import deeplearningAiLogo from "@/assets/deeplearning.ai_logo.png";

const awards = [
  {
    id: "badminton-canada",
    logo: badmintonCanadaLogo,
    logoAlt: "Badminton Canada",
    iconWrapClass: "bg-primary/20",
    logoClass: "w-10 h-10 object-cover rounded-lg scale-125",
    title: "Multiple-time National Elite Champion",
    subtitle: "Singles, Doubles, and Mixed Doubles",
  },
  {
    id: "bwf",
    logo: bwfLogo,
    logoAlt: "BWF World Championships",
    iconWrapClass: "bg-secondary/20",
    logoClass: "w-10 h-10 object-cover rounded-lg scale-125",
    title: "World Championships Representative",
    subtitle: "2023/2024 World Junior Championships",
  },
  {
    id: "aws",
    logo: awsLogo,
    logoAlt: "AWS Certification",
    iconWrapClass: "bg-muted/30",
    logoClass: "w-12 h-12 object-cover rounded-lg",
    title: "AWS Certification",
    subtitle:
      "AWS Cloud Technical Essentials, Architecting Solutions on AWS, Building Data Lakes on AWS",
  },
  {
    id: "deeplearning-ai",
    logo: deeplearningAiLogo,
    logoAlt: "DeepLearning.AI Certification",
    iconWrapClass: "bg-muted/30",
    logoClass: "w-12 h-12 object-cover rounded-lg",
    title: "DeepLearning.AI Certification",
    subtitle:
      "Advanced Learning Algorithms, Unsupervised Learning: Recommenders, Reinforcement Learning, Supervised Machine Learning: Regression and Classification",
  },
] as const;

const AwardsSection = () => {
  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-b from-transparent to-card/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            My{" "}
            <span className="text-accent-heading">Awards/Certifications</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Highlights from competition and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch md:gap-8">
          {awards.map((item) => (
            <div
              key={item.id}
              className="glass-card card-glow-hover flex h-full flex-col rounded-2xl border border-border/20 p-6 md:p-8"
            >
              <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-start">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl ${item.iconWrapClass}`}
                >
                  <img
                    src={item.logo}
                    alt={item.logoAlt}
                    className={item.logoClass}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold leading-snug text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
