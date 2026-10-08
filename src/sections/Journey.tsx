import { motion } from "framer-motion";
import { Card } from "../components/Card";
import type { Season } from "../data/portfolioData";

interface JourneyProps {
  seasons: Season[];
}

export const Journey = ({ seasons }: JourneyProps) => {
  return (
    <section id="journey" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101318]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
            JOURNEY
          </h2>
          <p className="text-[#A8AFB8]">
            The story of growth, learning, and achievement
          </p>
        </motion.div>

        <div className="space-y-8">
          {seasons.map((season, index) => (
            <motion.div
              key={season.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <span className="text-sm font-mono text-[#E50914] mb-2 block">
                      {season.seasonNumber}
                    </span>
                    <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">
                      {season.title}
                    </h3>
                    <p className="text-[#A8AFB8] text-sm">
                      {season.period}
                    </p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-[#F5F5F5] font-medium">
                      {season.description}
                    </p>
                  </div>
                </div>

                {season.details && (
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <ul className="space-y-2">
                      {season.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                          className="flex items-start gap-3 text-[#A8AFB8]"
                        >
                          <span className="w-1.5 h-1.5 bg-[#E50914] rounded-full mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
