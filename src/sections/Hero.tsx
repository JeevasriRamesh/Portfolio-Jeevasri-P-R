import { motion } from "framer-motion";
import { Download, Play } from "lucide-react";
import { Button } from "../components/Button";

interface HeroProps {
  onExplore: () => void;
  onResumeDownload: () => void;
}

export const Hero = ({ onExplore, onResumeDownload }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0D10] via-[#101318] to-[#0B0D10]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E50914]/20 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F5] mb-6 tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            JEEVASRI P R
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-[#A8AFB8] mb-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            IT Graduate • Data Analytics • Technology • Research
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            className="text-lg text-[#A8AFB8] mb-12 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Turning data, technology and ideas into meaningful solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Button
              onClick={onExplore}
              size="lg"
              icon={<Play size={20} />}
            >
              Explore Portfolio
            </Button>
            <Button
              onClick={onResumeDownload}
              variant="outline"
              size="lg"
              icon={<Download size={20} />}
            >
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Cinematic Visual */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="relative max-w-4xl mx-auto h-64 md:h-80 bg-gradient-to-br from-[#101318] to-[#0B0D10] border border-gray-800 rounded-lg overflow-hidden">
            {/* Background Image */}
            <img
              src="/hero-streaming.jpg"
              alt="Data Analytics Dashboard"
              className="w-full h-full object-cover opacity-40"
            />
            
            {/* Overlay Text */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-[#A8AFB8]">Now Streaming</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#E50914] rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#A8AFB8] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-[#A8AFB8] rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
