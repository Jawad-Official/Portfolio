import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    icon: <Trophy size={36} />,
    place: "1st Place",
    event: "JoHackathon 2025",
    description:
      "National Jordanian Competition for Programmers — Competing against the country's top young developers and taking the gold.",
    bg: "#FFD93D",
  },
  {
    icon: <Award size={36} />,
    place: "2nd Place",
    event: "JoHackathon 2024",
    description:
      "National Jordanian Competition for Programmers — Proving consistency by placing at the top two years in a row.",
    bg: "#66D9EF",
  },
];

const AchievementsSection = () => {
  return (
    <section
      id="achievements"
      className="py-24 relative"
      style={{ background: "#f0f0f0" }}
    >
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
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
            // recognition
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="highlight-yellow px-1">ACHIEVEMENTS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.event}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5, x: -2 }}
              className="neo-card cursor-default overflow-hidden"
            >
              <div
                className="p-6 flex items-start gap-5"
                style={{ borderBottom: "2px solid #000" }}
              >
                <div
                  style={{
                    background: ach.bg,
                    border: "2px solid #000",
                    padding: "12px",
                    flexShrink: 0,
                  }}
                >
                  {ach.icon}
                </div>
                <div>
                  <p className="text-3xl font-bold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                    {ach.place}
                  </p>
                  <p
                    className="text-lg font-bold mt-0.5"
                    style={{ color: "#66D9EF" }}
                  >
                    {ach.event}
                  </p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
