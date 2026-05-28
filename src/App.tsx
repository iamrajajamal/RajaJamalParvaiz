import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProcessSection } from "./components/ProcessSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { StatsSection } from "./components/StatsSection";
import { ContactSection } from "./components/ContactSection";
import { CaseStudyPage } from "./components/CaseStudyPage";
import { Toaster } from "./components/ui/sonner";
import { Preloader } from "./components/Preloader";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"portfolio" | "caseStudy">(
    "portfolio"
  );
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scroll & velocity skewing
  useSmoothScroll();

  const handleViewCaseStudy = (project: any) => {
    setSelectedProject(project);
    setCurrentPage("caseStudy");
    window.scrollTo(0, 0);
  };

  const handleBackToPortfolio = () => {
    setCurrentPage("portfolio");
    setSelectedProject(null);
    setTimeout(() => {
      const element = document.getElementById("projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  if (currentPage === "caseStudy" && selectedProject) {
    return (
      <>
        <CustomCursor />
        <CaseStudyPage project={selectedProject} onBack={handleBackToPortfolio} />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navigation />
      <div className="skew-container min-h-screen bg-background text-foreground paper-grain font-craft-body transition-colors duration-300 selection:bg-craft-yellow/40 selection:text-foreground">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="services">
          <ServicesSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="projects">
          <ProjectsSection onViewCaseStudy={handleViewCaseStudy} />
        </div>
        <div id="stats">
          <StatsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
        <Toaster />
      </div>
    </>
  );
}
