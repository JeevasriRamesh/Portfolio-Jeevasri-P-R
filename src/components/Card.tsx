import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export const Card = ({ children, className = "", onClick, hover = true }: CardProps) => {
  const MotionComponent = onClick ? motion.button : motion.div;

  return (
    <MotionComponent
      onClick={onClick}
      className={`bg-[#101318] border border-gray-800 rounded-lg overflow-hidden ${className}`}
      {...(hover && {
        whileHover: { scale: 1.02, y: -4 },
        transition: { duration: 0.3 },
      })}
    >
      {children}
    </MotionComponent>
  );
};
