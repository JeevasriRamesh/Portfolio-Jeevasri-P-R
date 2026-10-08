import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download } from "lucide-react";

interface ContactProps {
  email: string;
  phone: string;
  location: string;
  onResumeDownload: () => void;
}

export const Contact = ({ email, phone, location, onResumeDownload }: ContactProps) => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#101318]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-2">
            LET'S CONNECT
          </h2>
          <p className="text-[#A8AFB8] text-lg">
            Let's build something meaningful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <motion.div
              className="p-4 bg-[#E50914]/10 rounded-full w-fit mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Mail className="text-[#E50914]" size={32} />
            </motion.div>
            <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-[#A8AFB8] hover:text-[#E50914] transition-colors"
            >
              {email}
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              className="p-4 bg-[#E50914]/10 rounded-full w-fit mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Phone className="text-[#E50914]" size={32} />
            </motion.div>
            <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Phone</h3>
            <a
              href={`tel:${phone}`}
              className="text-[#A8AFB8] hover:text-[#E50914] transition-colors"
            >
              {phone}
            </a>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <motion.div
              className="p-4 bg-[#E50914]/10 rounded-full w-fit mx-auto mb-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MapPin className="text-[#E50914]" size={32} />
            </motion.div>
            <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Location</h3>
            <p className="text-[#A8AFB8]">{location}</p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center gap-4"
        >
          <motion.button
            onClick={onResumeDownload}
            className="p-4 bg-[#0B0D10] border border-gray-800 rounded-lg hover:border-[#6366F1] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="text-[#F5F5F5]" size={24} />
          </motion.button>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-[#F5F5F5] mb-4">
            Ready to collaborate?
          </p>
          <motion.a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#E50914] hover:bg-[#F40612] text-white rounded-lg text-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
