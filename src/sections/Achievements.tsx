import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Award, Trophy } from "lucide-react";
import type { Achievement } from "../data/portfolioData";

interface AchievementsProps {
  achievements: Achievement[];
}

export const Achievements = ({ achievements }: AchievementsProps) => {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101318]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
            ACHIEVEMENTS
          </h2>
          <p className="text-[#A8AFB8]">
            Recognition for innovation and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  {achievement.coverImage ? (
                    <img
                      src={achievement.coverImage}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#101318] to-[#0B0D10]" />
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Trophy Icon */}
                  <motion.div
                    className="absolute top-4 right-4 p-3 bg-[#E50914]/20 rounded-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {achievement.title.includes("SECOND") ? (
                      <Trophy className="text-[#E50914]" size={24} />
                    ) : (
                      <Award className="text-[#E50914]" size={24} />
                    )}
                  </motion.div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <motion.h3
                      className="text-xl font-bold text-[#F5F5F5] mb-1"
                      whileHover={{ scale: 1.02 }}
                    >
                      {achievement.title}
                    </motion.h3>
                    <p className="text-[#E50914] font-medium text-sm">{achievement.prize}</p>
                  </div>
                </div>
                
                <div className="p-4 bg-[#101318]">
                  <div className="space-y-3">
                    <div>
                      <p className="text-[#A8AFB8] text-xs mb-1">Project</p>
                      <p className="text-[#F5F5F5] text-sm font-medium">{achievement.project}</p>
                    </div>
                    <div>
                      <p className="text-[#A8AFB8] text-xs mb-1">Institution</p>
                      <p className="text-[#F5F5F5] text-sm">{achievement.institution}</p>
                    </div>
                    {achievement.date && (
                      <div>
                        <p className="text-[#A8AFB8] text-xs mb-1">Year</p>
                        <p className="text-[#F5F5F5] text-sm">{achievement.date}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
