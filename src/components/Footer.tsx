import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

interface FooterProps {
  email: string;
  onResumeDownload: () => void;
}

export const Footer = ({ email, onResumeDownload }: FooterProps) => {
  return (
    <footer className="bg-[#0B0D10] border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2 uppercase">JEEVASRI P R</h3>
            <p className="text-[#A8AFB8]">Data • Technology • Research</p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-[#F5F5F5] font-semibold mb-4">Contact</h4>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-[#A8AFB8] hover:text-[#E50914] transition-colors"
            >
              <Mail size={16} />
              {email}
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[#F5F5F5] font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.button
                onClick={onResumeDownload}
                className="p-2 bg-[#101318] border border-gray-800 rounded-lg hover:border-[#6366F1] transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Download className="text-[#F5F5F5]" size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-[#A8AFB8] text-sm">
            © {new Date().getFullYear()} JEEVASRI P R. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
