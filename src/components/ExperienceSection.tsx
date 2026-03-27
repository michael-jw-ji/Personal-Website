import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import DetailModal from "./DetailModal";
import rogersLogo from "@/assets/rogers_logo.png";
import algoverseLogo from "@/assets/algoverse_logo.jpeg";
import mackenzieHealthLogo from "@/assets/mackenzie_health_logo.jpg";
import kcBadmintonLogo from "@/assets/kc_badminton_club_logo.jpeg";

const SKILL_CHIP_CLASS =
  "rounded-md border border-border/30 bg-muted/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground whitespace-nowrap";

function measureMoreLabelWidth(hidden: number): number {
  if (hidden <= 0) return 0;
  const span = document.createElement("span");
  span.className = "py-1 text-xs text-muted-foreground whitespace-nowrap";
  span.textContent = `+${hidden} more`;
  span.setAttribute("aria-hidden", "true");
  document.body.appendChild(span);
  const w = span.offsetWidth;
  document.body.removeChild(span);
  return w;
}

function ExperienceSkillRow({ skills }: { skills: string[] }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(skills.length);

  const recalculate = useCallback(() => {
    const row = rowRef.current;
    const measure = measureRef.current;
    if (!row || !measure || skills.length === 0) {
      setVisibleCount(skills.length);
      return;
    }

    const available = row.offsetWidth;
    if (available <= 0) return;

    const chipNodes = measure.querySelectorAll<HTMLElement>("[data-skill-chip]");
    const widths = Array.from(chipNodes).map((n) => n.offsetWidth);
    const gap = 8;

    let best = 0;
    for (let k = skills.length; k >= 0; k--) {
      let total = 0;
      for (let i = 0; i < k; i++) {
        total += widths[i] + (i > 0 ? gap : 0);
      }
      const hidden = skills.length - k;
      if (hidden > 0) {
        total += (k > 0 ? gap : 0) + measureMoreLabelWidth(hidden);
      }
      if (total <= available) {
        best = k;
        break;
      }
    }
    setVisibleCount(best);
  }, [skills]);

  useLayoutEffect(() => {
    recalculate();
    const row = rowRef.current;
    if (!row) return;
    const ro = new ResizeObserver(() => recalculate());
    ro.observe(row);
    return () => ro.disconnect();
  }, [recalculate]);

  if (skills.length === 0) return null;

  const hidden = skills.length - visibleCount;

  return (
    <div className="relative min-w-0">
      {/* Hidden measurement row: same chip styles as visible */}
      <div
        ref={measureRef}
        className="pointer-events-none invisible absolute left-0 top-0 flex gap-2"
        aria-hidden
      >
        {skills.map((skill) => (
          <span key={skill} data-skill-chip className={SKILL_CHIP_CLASS}>
            {skill}
          </span>
        ))}
      </div>

      <div
        ref={rowRef}
        className="flex min-w-0 flex-nowrap items-center gap-2 overflow-hidden"
      >
        {skills.slice(0, visibleCount).map((skill) => (
          <span key={skill} className={SKILL_CHIP_CLASS}>
            {skill}
          </span>
        ))}
        {hidden > 0 && (
          <span className="shrink-0 py-1 text-xs text-muted-foreground">
            +{hidden} more
          </span>
        )}
      </div>
    </div>
  );
}

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<
    (typeof experiences)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Newest first (reverse chronological); copy aligned to resume */
  const experiences = [
    {
      id: 1,
      role: "Software Engineering Intern",
      company: "Rogers Communications",
      period: "01/01/2026 – Present",
      periodLines: ["01/01/2026 –", "Present"] as const,
      location: "Toronto, ON",
      summary:
        "At Rogers I built a Microsoft Teams-based AI governance stack on Azure (Power Automate, Azure OpenAI, RAG over Azure AI Search, SharePoint) with strong observability and responsible-AI guardrails so policy questions get faster, citation-backed, and auditable answers.",
      logo: rogersLogo,
      skills: [
        "Azure OpenAI",
        "Azure AI Search",
        "RAG",
        "Power Automate",
        "SharePoint",
        "Azure Monitor",
        "Entra ID",
        "APIM",
      ],
      achievements: [
        "Built a Microsoft Teams-based AI governance assistant using Power Automate, Azure OpenAI, Azure AI Search (RAG), and SharePoint, achieving 75% faster policy clarity and earlier governance engagement for AI projects.",
        "Implemented policy-grounded responses with Retrieval-Augmented Generation (RAG) over approved internal sources in Azure AI Search, delivering 100% citation-backed guidance for auditable governance interpretations.",
        "Architected a localized Azure solution integrating APIM, Azure Monitor, Log Analytics, and Azure OpenAI telemetry, achieving 99% token and latency visibility for enhanced observability and precise cost attribution.",
        "Defined responsible-AI guardrails including human-in-the-loop escalation, non-approval posture, and access control (Entra ID/RBAC), ensuring 100% non-approval responses to reinforce trust and safe AI usage.",
      ],
    },
    {
      id: 2,
      role: "Machine Learning Research Engineer Intern",
      company: "Algoverse",
      period: "04/01/2025 – Present",
      periodLines: ["04/01/2025 –", "Present"] as const,
      location: "Palo Alto (Remote)",
      summary:
        "At Algoverse I automated preprocessing and experiment workflows, tuned PyTorch and CUDA for faster training, and analyzed transformer behavior with HuggingFace, Seaborn, and related tooling.",
      logo: algoverseLogo,
      skills: [
        "Python",
        "PyTorch",
        "CUDA",
        "Bash",
        "NumPy",
        "HuggingFace",
        "Transformers",
        "Seaborn",
      ],
      achievements: [
        "Automated dataset preprocessing, tokenization, and experiment orchestration using Bash and NumPy, reducing experiment setup time by 75%.",
        "Optimized GPU utilization and runtime performance by tuning batch sizes, leveraging efficient tensor operations with PyTorch, and applying CUDA memory profiling, cutting average training time by 25%.",
        "Analyzed circuit stability and grokking patterns using Transformers, HuggingFace, Seaborn, and NumPy.",
      ],
    },
    {
      id: 3,
      role: "Infrastructure Developer Intern",
      company: "Mackenzie Health",
      period: "04/01/2025 – 08/31/2025",
      periodLines: ["04/01/2025 –", "08/31/2025"] as const,
      location: "Richmond Hill, ON",
      summary:
        "At Mackenzie Health I supported on-premises and AWS-hosted EMR and clinical systems (EC2, RDS, S3, CloudWatch) and helped upgrade core hospital networking to 400 Gbps for modern clinical and AI workloads.",
      logo: mackenzieHealthLogo,
      skills: [
        "AWS",
        "EC2",
        "RDS",
        "S3",
        "CloudWatch",
        "EMR",
        "Networking",
      ],
      achievements: [
        "Managed on-premises and AWS-based virtualized EMR and health IT systems using EC2, RDS, S3, and CloudWatch, improving performance and reducing downtime by 30% through monitoring and optimization.",
        "Participated in upgrading the hospital network from 100gbps to 400gbps, enabling the fastest healthcare network in Canada to support advanced medical technologies and AI-powered healthcare systems.",
      ],
    },
    {
      id: 4,
      role: "Software Developer",
      company: "KC Badminton Club",
      period: "08/01/2024 – 08/31/2025",
      periodLines: ["08/01/2024 –", "08/31/2025"] as const,
      location: "Markham, ON",
      summary:
        "At KC Badminton I built and scaled the club’s React and Node.js site and member flows, growing monthly users past 10,000 while improving performance, SEO, and analytics-driven iteration.",
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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
            <span className="text-accent-heading">Experience</span>
          </h2>
        </div>
        {/* Vertical timeline: dates (left) → rail → card; newest at top */}
        <div className="max-w-5xl mx-auto">
          <ol className="relative list-none m-0 p-0">
            {/* One continuous line through all entries (spans gaps between cards) */}
            <div
              className="pointer-events-none absolute bottom-0 left-[9rem] top-0 z-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/35 via-border to-border sm:left-[11.75rem]"
              aria-hidden
            />

            {experiences.map((exp) => (
              <li
                key={exp.id}
                className="relative flex flex-row items-stretch gap-2 sm:gap-4 pb-12 last:pb-0"
              >
                <div className="flex min-w-0 flex-[0_0_7.5rem] shrink-0 flex-col justify-center text-right sm:flex-[0_0_9.5rem]">
                  <time
                    className="font-mono text-[11px] leading-tight tabular-nums text-muted-foreground sm:text-xs"
                  >
                    <span className="block">{exp.periodLines[0]}</span>
                    <span className="block">{exp.periodLines[1]}</span>
                  </time>
                </div>

                {/* Dot only; vertical line is drawn once on the <ol> above */}
                <div className="relative z-10 flex w-8 shrink-0 justify-center sm:w-10">
                  <div
                    className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-primary shadow-[0_0_0_4px_hsl(var(--background))]"
                    aria-hidden
                  />
                </div>

                <article className="min-w-0 flex-1">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedExperience(exp);
                      setIsModalOpen(true);
                    }}
                    className="glass-card card-glow-hover group w-full cursor-pointer rounded-xl border border-border/20 p-6 text-left transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:p-8"
                    aria-label={`Open details for ${exp.role} at ${exp.company}`}
                  >
                    <header className="mb-4">
                      <div className="flex items-start gap-3">
                        <img
                          src={exp.logo}
                          alt=""
                          className="h-11 w-11 shrink-0 rounded-lg border border-border/40 object-cover"
                          width={44}
                          height={44}
                        />
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold leading-snug text-foreground md:text-xl">
                            {exp.role}
                          </h3>
                          <p className="mt-0.5 text-base font-medium text-primary">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex items-start gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </header>

                    <p className="mb-4 text-sm leading-relaxed text-card-foreground/85 md:text-base">
                      {exp.summary}
                    </p>

                    <ExperienceSkillRow skills={exp.skills} />
                  </button>
                </article>
                </li>
              ))}
            </ol>
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
