import { motion } from "framer-motion";
import { Rocket, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: <Rocket size={20} />, text: "Built 5+ production-grade products before turning 18" },
  { icon: <Zap size={20} />, text: "Full-stack developer fluent in TypeScript, React & AI" },
  { icon: <Globe size={20} />, text: "Driven by solving real-world problems at scale" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Passionate about <span className="text-gradient">building</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a 17-year-old IT student from Jordan who doesn't just learn technology — I build with it. 
              While most people my age are still figuring out what they want to do, I've already shipped 
              business automation platforms, AI-powered development tools, and a live NGO website.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My competitive programming journey — winning back-to-back medals at Jordan's national hackathon — 
              isn't just about accolades. It taught me to think fast, build under pressure, and deliver real 
              solutions. Every project I take on starts with one question: <span className="text-foreground font-medium">"What problem does this solve?"</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card/50 glow-border cursor-default"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5">{item.icon}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
