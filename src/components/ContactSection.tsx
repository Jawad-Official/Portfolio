import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-3">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            I'm always open to new opportunities, collaborations, and conversations. 
            Whether you have a project idea, want to team up, or just want to say hi — reach out!
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/Jawad-Official"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl glow-border bg-card/50 backdrop-blur-sm text-foreground font-medium hover:border-primary/50 transition-all duration-300 group"
          >
            <Github size={22} />
            GitHub
            <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/jawad-alarman-6194453a9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 group"
          >
            <Linkedin size={22} />
            LinkedIn
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
