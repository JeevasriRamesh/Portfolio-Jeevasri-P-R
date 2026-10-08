import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { BookOpen, ExternalLink } from "lucide-react";
import type { Publication } from "../data/portfolioData";

interface ResearchProps {
  publications: Publication[];
}

export const Research = ({ publications }: ResearchProps) => {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
            RESEARCH LIBRARY
          </h2>
          <p className="text-[#A8AFB8]">
            Academic contributions and published research
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer h-full">
                <div className="relative h-48 overflow-hidden">
                  {publication.coverImage ? (
                    <img
                      src={publication.coverImage}
                      alt={publication.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#101318] to-[#0B0D10]" />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Book Icon */}
                  <motion.div
                    className="absolute top-4 right-4 p-2 bg-[#E50914]/20 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <BookOpen className="text-[#E50914]" size={20} />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-xs font-mono text-[#E50914] mb-1 block">
                      EPISODE {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-sm font-bold text-[#F5F5F5] line-clamp-2">
                      {publication.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-4 bg-[#101318]">
                  <div className="space-y-2 mb-4">
                    <div>
                      <p className="text-[#A8AFB8] text-xs mb-1">Conference</p>
                      <p className="text-[#F5F5F5] text-sm font-medium">{publication.conference}</p>
                    </div>
                    <div>
                      <p className="text-[#A8AFB8] text-xs mb-1">Year</p>
                      <p className="text-[#F5F5F5] text-sm">{publication.year}</p>
                    </div>
                  </div>

                  <motion.a
                    href={publication.doi.startsWith('http') ? publication.doi : `https://doi.org/${publication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#E50914] hover:text-[#F40612] transition-colors text-sm font-medium"
                    whileHover={{ x: 5 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Publication
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
