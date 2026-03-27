import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Briefcase,
  FileText,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Trophy,
  UserCircle,
} from "lucide-react";

type SiteCommandPaletteProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const navRoutes = [
  { label: "About", href: "#about", icon: UserCircle },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Awards", href: "#awards", icon: Trophy },
  { label: "Expertise", href: "#features", icon: Sparkles },
  { label: "Contact", href: "#contact", icon: Mail },
];

const externalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/michael-jw-ji",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/michael-jw-ji",
    icon: Linkedin,
  },
  {
    label: "Resume (PDF)",
    href: "/s26_michael_ji_resume.pdf",
    icon: FileText,
  },
];

export function SiteCommandPalette({
  open,
  onOpenChange,
}: SiteCommandPaletteProps) {
  const goTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    onOpenChange(false);
  };

  const openUrl = (href: string) => {
    if (href.startsWith("/")) {
      window.open(href, "_blank");
    } else {
      window.open(href, "_blank");
    }
    onOpenChange(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search sections and links..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigate">
          {navRoutes.map((item) => (
            <CommandItem
              key={item.href}
              value={`${item.label} ${item.href}`}
              onSelect={() => goTo(item.href)}
            >
              <item.icon className="mr-2 h-4 w-4 opacity-70" />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Links">
          {externalLinks.map((item) => (
            <CommandItem
              key={item.href}
              value={`${item.label} ${item.href}`}
              onSelect={() => openUrl(item.href)}
            >
              <item.icon className="mr-2 h-4 w-4 opacity-70" />
              {item.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
