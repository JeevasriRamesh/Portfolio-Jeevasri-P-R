import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

export const SearchOverlay = ({ isOpen, onClose, onSearch }: SearchOverlayProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      setQuery("");
    }
  }, [isOpen]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#0B0D10]/95 backdrop-blur-sm flex items-start justify-center pt-32"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: -20 }}
            className="w-full max-w-2xl px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#A8AFB8]" size={24} />
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search projects, skills, research..."
                className="w-full pl-12 pr-12 py-4 bg-[#101318] border border-gray-700 rounded-lg text-[#F5F5F5] placeholder-[#A8AFB8] focus:outline-none focus:border-[#6366F1] text-lg"
                autoFocus
              />
              <button
                onClick={onClose}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#A8AFB8] hover:text-[#F5F5F5]"
              >
                <X size={24} />
              </button>
            </div>
            <div className="mt-4 text-[#A8AFB8] text-sm">
              Try searching for: "Power BI", "Python", "Research", "Projects", "SAP"
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
