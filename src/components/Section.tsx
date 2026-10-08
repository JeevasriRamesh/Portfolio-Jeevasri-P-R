import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen py-20 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
};
