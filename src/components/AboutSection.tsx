import { motion } from "framer-motion";
import { Rocket, Zap, Globe } from "lucide-react";

const highlights = [
  {
    icon: <Zap size={20} />,
    text: "Python backend: FastAPI, PostgreSQL, Redis, Celery, async, typing, testing",
  },
  {
    icon: <Rocket size={20} />,
    text: "1st place, JoHackathon 2025, Jordan's national hackathon",
  },
  {
    icon: <Globe size={20} />,
    text: "Shipping client work: e-commerce and an AI language-learning platform",
  },
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
              I build backend systems and the products on top of them. Most of my
              work is Python: FastAPI services, PostgreSQL, Redis and Celery for
              anything that needs to run out of band, with Next.js or React
              Native where a client is needed.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              I placed{" "}
              <span className="font-bold highlight-cyan px-1">
                1st at JoHackathon 2025
              </span>{" "}
              and 2nd in 2024, Jordan's national hackathon. I'm starting a BSc in
              AI and Data Science at Al-Hussein Technical University, and I take
              on client and part-time engineering work alongside it.
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
