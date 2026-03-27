import SiteBackground from "@/components/SiteBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AwardsSection from "@/components/AwardsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SiteBackground />
      <div className="relative z-10 pl-[4.25rem] pr-14 sm:pl-48 sm:pr-16">
        <Navigation />
        <main>
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <AwardsSection />
          <FeaturesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
