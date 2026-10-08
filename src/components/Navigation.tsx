import { motion } from "framer-motion";
import { Search, Menu, X, Download } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onNavigate: (section: string) => void;
  onSearchToggle: () => void;
  onResumeDownload: () => void;
}

export const Navigation = ({ onNavigate, onSearchToggle, onResumeDownload }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", section: "hero" },
    { label: "Journey", section: "journey" },
    { label: "Projects", section: "projects" },
    { label: "Research", section: "research" },
    { label: "Achievements", section: "achievements" },
    { label: "Skills", section: "skills" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0D10]/80 backdrop-blur-lg border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold text-[#E50914]"
            whileHover={{ scale: 1.05 }}
          >
            JEEVASRI
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.section}
                onClick={() => onNavigate(item.section)}
                className="text-[#A8AFB8] hover:text-[#F5F5F5] transition-colors text-sm"
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <motion.button
              onClick={onSearchToggle}
              className="p-2 text-[#A8AFB8] hover:text-[#F5F5F5] transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Search size={20} />
            </motion.button>

            <motion.button
              onClick={onResumeDownload}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#E50914] hover:bg-[#F40612] text-white text-sm rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Resume
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#A8AFB8]"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => {
                    onNavigate(item.section);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-[#A8AFB8] hover:text-[#F5F5F5] transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <motion.button
                onClick={onResumeDownload}
                className="flex items-center gap-2 px-4 py-2 bg-[#E50914] hover:bg-[#F40612] text-white rounded-lg"
              >
                <Download size={16} />
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
