import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileDown, ArrowRight } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_HREF,
  CV_URL,
  GITHUB_URL,
  LINKEDIN_URL,
} from "@/lib/contact";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 relative"
      style={{ background: "#FFD93D" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p
            className="font-mono text-xs uppercase tracking-widest mb-2"
            style={{ color: "#000", opacity: 0.6 }}
          >
            // get in touch
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Get in touch
          </h2>
          <p className="text-base text-gray-800 max-w-xl mx-auto leading-relaxed">
            I'm looking for part-time and internship engineering work, in Amman
            or remote. Email is fastest.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Primary CTA: email */}
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href={CONTACT_EMAIL_HREF}
            className="neo-btn flex items-center gap-3 px-8 py-4 font-bold text-base group max-w-full"
            style={{ background: "#fff" }}
          >
            <Mail size={22} className="flex-shrink-0" />
            <span className="break-all">{CONTACT_EMAIL}</span>
            <ArrowRight
              size={16}
              className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn flex items-center gap-3 px-8 py-4 font-bold text-base group"
            style={{ background: "#fff" }}
          >
            <Github size={22} />
            GitHub
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="neo-btn flex items-center gap-3 px-8 py-4 font-bold text-base group"
            style={{ background: "#66D9EF" }}
          >
            <Linkedin size={22} />
            LinkedIn
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            href={CV_URL}
            className="neo-btn flex items-center gap-3 px-8 py-4 font-bold text-base group"
            style={{ background: "#fff" }}
          >
            <FileDown size={22} />
            Download CV
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
