import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "../data/portfolioData";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
  onNextProject?: () => void;
  hasNextProject?: boolean;
}

export const ProjectDetail = ({ project, onClose, onNextProject, hasNextProject }: ProjectDetailProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0B0D10]/95 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="max-w-5xl mx-auto px-4 py-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cover Image */}
          {project.coverImage && (
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent" />
            </div>
          )}

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-sm font-mono text-[#E50914] mb-2 block">
                {project.episodeNumber}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
                {project.title}
              </h2>
              <span className="px-3 py-1 bg-[#E50914]/20 text-[#E50914] text-sm rounded-full">
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#A8AFB8] hover:text-[#F5F5F5] transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Live Demo Link */}
          {project.links?.demo && (
            <div className="mb-8">
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E50914] hover:bg-[#F40612] text-white rounded-lg transition-colors"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            </div>
          )}

          {/* GitHub Link */}
          {project.links?.github && (
            <div className="mb-8">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#101318] border border-gray-700 text-[#F5F5F5] rounded-lg hover:border-[#E50914] transition-colors"
              >
                <span>View on GitHub</span>
              </a>
            </div>
          )}

          {/* Description */}
          <div className="mb-8">
            <p className="text-[#A8AFB8] text-lg leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#101318] border border-gray-700 text-[#A8AFB8] rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Description */}
          {project.detailedDescription && (
            <div className="mb-8 space-y-6">
              {project.detailedDescription.problem && (
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Problem</h3>
                  <p className="text-[#A8AFB8]">{project.detailedDescription.problem}</p>
                </div>
              )}
              {project.detailedDescription.dataset && (
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Dataset</h3>
                  <p className="text-[#A8AFB8]">{project.detailedDescription.dataset}</p>
                </div>
              )}
              {project.detailedDescription.process && (
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Process</h3>
                  <p className="text-[#A8AFB8]">{project.detailedDescription.process}</p>
                </div>
              )}
              {project.detailedDescription.analysis && (
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Analysis</h3>
                  <p className="text-[#A8AFB8]">{project.detailedDescription.analysis}</p>
                </div>
              )}
              {project.detailedDescription.outcome && (
                <div>
                  <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">Outcome</h3>
                  <p className="text-[#A8AFB8]">{project.detailedDescription.outcome}</p>
                </div>
              )}
            </div>
          )}

          {/* Next Episode */}
          {hasNextProject && onNextProject && (
            <motion.button
              onClick={onNextProject}
              className="flex items-center gap-3 text-[#E50914] hover:text-[#F40612] transition-colors text-lg font-medium"
              whileHover={{ x: 10 }}
            >
              Next Episode
              <ArrowRight size={24} />
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
