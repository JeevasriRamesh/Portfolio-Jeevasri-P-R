import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import type { Project } from "../data/portfolioData";

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  searchQuery: string;
}

export const Projects = ({ projects, onProjectClick, searchQuery }: ProjectsProps) => {
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
            FEATURED PROJECTS
          </h2>
          <p className="text-[#A8AFB8]">
            Building solutions through data, technology, and innovation
          </p>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[#A8AFB8] text-lg">No projects found matching "{searchQuery}"</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} onClick={() => onProjectClick(project)} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
