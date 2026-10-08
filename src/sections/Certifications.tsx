import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { Award } from "lucide-react";
import type { Certification } from "../data/portfolioData";

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications = ({ certifications }: CertificationsProps) => {
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
            CERTIFICATIONS
          </h2>
          <p className="text-[#A8AFB8]">
            Professional development and learning achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full group">
                <motion.div
                  className="p-4 bg-[#E50914]/10 rounded-lg mb-4 mx-auto w-fit"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Award className="text-[#E50914]" size={32} />
                </motion.div>

                <h3 className="text-lg font-bold text-[#F5F5F5] mb-2 text-center line-clamp-2">
                  {certification.title}
                </h3>

                <p className="text-[#A8AFB8] text-sm text-center">
                  {certification.issuer}
                </p>

                <motion.div
                  className="mt-4 pt-4 border-t border-gray-800 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <span className="text-xs text-[#E50914] font-mono">VERIFIED</span>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
