import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  icon,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-lg";
  
  const variantStyles = {
    primary: "bg-[#E50914] hover:bg-[#F40612] text-white",
    secondary: "bg-[#101318] hover:bg-[#0B0D10] text-[#F5F5F5] border border-gray-700",
    outline: "bg-transparent hover:bg-[#E50914]/10 text-[#F5F5F5] border border-[#E50914] hover:border-[#F40612]",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const MotionComponent = href ? motion.a : motion.button;
  const motionProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { onClick };

  return (
    <MotionComponent
      {...motionProps}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {icon && <span>{icon}</span>}
    </MotionComponent>
  );
};
