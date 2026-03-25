import { motion } from "framer-motion";
import { Rocket, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: <Rocket size={20} />, text: "Built 5+ production-grade products before turning 18" },
  { icon: <Zap size={20} />, text: "Full-stack developer fluent in TypeScript, React & AI" },
  { icon: <Globe size={20} />, text: "Driven by solving real-world problems at scale" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p
            className="font-mono text-xs uppercase tracking-widest mb-2"
            style={{ color: "#66D9EF" }}
          >
            // about me
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-2"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="highlight-yellow px-1">ABOUT</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5">
              I'm a 17-year-old IT student from Jordan who doesn't just learn
              technology — I build with it. While most people my age are still
              figuring out what they want to do, I've already shipped business
              automation platforms, AI-powered development tools, and a live NGO
              website.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              My competitive programming journey — winning back-to-back medals at
              Jordan's national hackathon — isn't just about accolades. It taught
              me to think fast, build under pressure, and deliver real solutions.
              Every project I take on starts with one question:{" "}
              <span
                className="font-bold highlight-cyan px-1"
              >
                "What problem does this solve?"
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 3, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="neo-card flex items-start gap-3 p-4 cursor-default"
              >
                <div
                  className="p-2 flex-shrink-0"
                  style={{ background: "#FFD93D", border: "2px solid #000" }}
                >
                  {item.icon}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
