import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { ArrowRight, Play } from "lucide-react";

interface ContinueExploringProps {
  items: Array<{
    episodeNumber: string;
    title: string;
    category: string;
    description: string;
    section: string;
    coverImage?: string;
  }>;
  onNavigate: (section: string) => void;
}

export const ContinueExploring = ({ items, onNavigate }: ContinueExploringProps) => {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
            EXPLORE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.episodeNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                onClick={() => onNavigate(item.section)}
                className="h-full cursor-pointer group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.coverImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  >
                    <div className="w-12 h-12 bg-[#E50914] rounded-full flex items-center justify-center">
                      <Play className="text-white" size={24} fill="white" />
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <span className="text-xs font-mono text-[#E50914] mb-1 block">
                      {item.episodeNumber}
                    </span>
                    <h3 className="text-sm font-bold text-[#F5F5F5] group-hover:text-[#E50914] transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-3 bg-[#101318]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-[#E50914]/20 text-[#E50914] text-xs rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <p className="text-[#A8AFB8] text-xs mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-[#E50914] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    Explore
                    <ArrowRight size={12} />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
