import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Card } from "./Card";
import type { Project } from "../data/portfolioData";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <Card onClick={onClick} className="group cursor-pointer overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        {project.coverImage ? (
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#101318] to-[#0B0D10]" />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-xs font-mono text-[#E50914] mb-1 block">
            {project.episodeNumber}
          </span>
          <h3 className="text-base font-bold text-[#F5F5F5] group-hover:text-[#E50914] transition-colors line-clamp-1 mb-1">
            {project.title}
          </h3>
          <p className="text-[#A8AFB8] text-xs line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>
      
      <div className="p-4 bg-[#101318]">
        <div className="flex items-center justify-between">
          <span className="px-2 py-1 bg-[#E50914]/20 text-[#E50914] text-xs rounded-full">
            {project.category}
          </span>
          {project.links?.demo && (
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#E50914] text-xs font-medium transition-colors"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.05 }}
            >
              <ExternalLink size={12} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </Card>
  );
};
