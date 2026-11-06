import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Code, Globe, BarChart3, Wrench, Database, Zap, Brain } from "lucide-react";

interface SkillsProps {
  skills: Record<string, string[]>;
  searchQuery: string;
}

const skillCategories = [
  {
    key: "programming",
    icon: Code,
    label: "Programming",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop"
  },
  {
    key: "web",
    icon: Globe,
    label: "Web Development",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
  },
  {
    key: "dataAnalytics",
    icon: BarChart3,
    label: "Data Analytics",
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
  },
  {
    key: "tools",
    icon: Wrench,
    label: "Tools",
    coverImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop"
  },
  {
    key: "database",
    icon: Database,
    label: "Database",
    coverImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=450&fit=crop"
  },
  {
    key: "aiRag",
    icon: Brain,
    label: "AI & RAG",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop"
  },
  {
    key: "additional",
    icon: Zap,
    label: "Additional",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=450&fit=crop"
  },
];

export const Skills = ({ skills, searchQuery }: SkillsProps) => {
  const filteredCategories = skillCategories.filter(category => {
    const categorySkills = skills[category.key] || [];
    return categorySkills.some(skill =>
      skill.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101318]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
            MY TOOLKIT
          </h2>
          <p className="text-[#A8AFB8]">
            Technologies and skills for data-driven solutions
          </p>
        </motion.div>

        {filteredCategories.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-[#A8AFB8] text-lg">No skills found matching "{searchQuery}"</p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const categorySkills = skills[category.key] || [];
              const filteredSkills = categorySkills.filter(skill =>
                skill.toLowerCase().includes(searchQuery.toLowerCase())
              );

              if (filteredSkills.length === 0) return null;

              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <Card className="overflow-hidden group cursor-pointer h-full">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={category.coverImage}
                        alt={category.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                      
                      {/* Icon */}
                      <motion.div
                        className="absolute top-3 right-3 p-2 bg-[#E50914]/20 rounded-lg"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="text-[#E50914]" size={18} />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-base font-bold text-[#F5F5F5]">
                          {category.label}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-[#101318]">
                      <div className="space-y-2">
                        {filteredSkills.map((skill, skillIndex) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                            className="group"
                          >
                            <div className="flex items-center gap-3 p-2 bg-[#0B0D10] rounded-lg border border-gray-800 group-hover:border-[#E50914]/50 transition-colors">
                              <div className="w-1.5 h-1.5 bg-[#E50914] rounded-full group-hover:scale-125 transition-transform" />
                              <span className="text-[#A8AFB8] text-sm group-hover:text-[#F5F5F5] transition-colors">
                                {skill}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
