import { useState, useCallback } from "react";
import { Navigation } from "./components/Navigation";
import { SearchOverlay } from "./components/SearchOverlay";
import { ProjectDetail } from "./components/ProjectDetail";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { ContinueExploring } from "./sections/ContinueExploring";
import { Journey } from "./sections/Journey";
import { Projects } from "./sections/Projects";
import { Achievements } from "./sections/Achievements";
import { Research } from "./sections/Research";
import { Skills } from "./sections/Skills";
import { Certifications } from "./sections/Certifications";
import { Contact } from "./sections/Contact";
import { portfolioData } from "./data/portfolioData";
import type { Project } from "./data/portfolioData";

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNavigate = useCallback((section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  const handleProjectClick = useCallback((project: Project) => {
    const index = portfolioData.projects.findIndex(p => p.id === project.id);
    setCurrentProjectIndex(index);
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  }, []);

  const handleCloseProjectDetail = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  }, []);

  const handleNextProject = useCallback(() => {
    const nextIndex = (currentProjectIndex + 1) % portfolioData.projects.length;
    setCurrentProjectIndex(nextIndex);
    setSelectedProject(portfolioData.projects[nextIndex]);
  }, [currentProjectIndex]);

  const handleResumeDownload = useCallback(() => {
    window.open("/resume.pdf", "_blank");
  }, []);

  const handleExplore = useCallback(() => {
    handleNavigate("journey");
  }, [handleNavigate]);

  return (
    <div className="min-h-screen bg-[#0B0D10]">
      <Navigation
        onNavigate={handleNavigate}
        onSearchToggle={() => setIsSearchOpen(true)}
        onResumeDownload={handleResumeDownload}
      />

      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSearch={handleSearch}
      />

      <main>
        <Hero onExplore={handleExplore} onResumeDownload={handleResumeDownload} />
        
        <ContinueExploring
          items={portfolioData.continueExploring}
          onNavigate={handleNavigate}
        />

        <Journey seasons={portfolioData.seasons} />

        <Projects
          projects={portfolioData.projects}
          onProjectClick={handleProjectClick}
          searchQuery={searchQuery}
        />

        <Achievements achievements={portfolioData.achievements} />

        <Research publications={portfolioData.publications} />

        <Skills skills={portfolioData.skills} searchQuery={searchQuery} />

        <Certifications certifications={portfolioData.certifications} />

        <Contact
          email={portfolioData.email}
          phone={portfolioData.phone}
          location={portfolioData.location}
          onResumeDownload={handleResumeDownload}
        />
      </main>

      <Footer
        email={portfolioData.email}
        onResumeDownload={handleResumeDownload}
      />

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={handleCloseProjectDetail}
          onNextProject={handleNextProject}
          hasNextProject={currentProjectIndex < portfolioData.projects.length - 1}
        />
      )}
    </div>
  );
}

export default App;
