import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { StatsSection } from "./components/StatsSection";
import { ContactSection } from "./components/ContactSection";
import { CaseStudyPage } from "./components/CaseStudyPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"portfolio" | "caseStudy">("portfolio");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleViewCaseStudy = (project: any) => {
    setSelectedProject(project);
    setCurrentPage("caseStudy");
    window.scrollTo(0, 0);
  };

  const handleBackToPortfolio = () => {
    setCurrentPage("portfolio");
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  if (currentPage === "caseStudy" && selectedProject) {
    return (
      <CaseStudyPage
        project={selectedProject}
        onBack={handleBackToPortfolio}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
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
    </div>
  );
}
