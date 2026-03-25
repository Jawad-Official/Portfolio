import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    color: "#FFD93D",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    color: "#66D9EF",
    skills: ["React", "Next.js", "Tailwind CSS", "State Management", "Responsive UI"],
  },
  {
    category: "Backend",
    color: "#6BCB77",
    skills: ["Next.js", "FastAPI", "PostgreSQL", "REST APIs", "SaaS Development"],
  },
  {
    category: "AI & Product",
    color: "#FF6B9D",
    skills: ["AI / Machine Learning", "Product Thinking", "System Design"],
  },
];

const softSkills = [
  "Problem Solving",
  "Structured Thinking",
  "Decision Under Pressure",
  "Prioritization",
  "Leadership",
  "Problem Decomposition",
  "Vibe Coding",
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
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
            // expertise
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="highlight-yellow px-1">SKILLS</span>
          </h2>
        </motion.div>

        {/* Technical skills grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="neo-card overflow-hidden"
            >
              <div
                className="px-5 py-3 font-bold text-sm"
                style={{
                  background: group.color,
                  borderBottom: "2px solid #000",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                {group.category}
              </div>
              <div className="p-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ y: -2 }}
                    style={{
                      border: "2px solid #000",
                      padding: "3px 12px",
                      fontSize: 12,
                      fontWeight: 600,
                      fontFamily: "Space Mono, monospace",
                      background: "#f0f0f0",
                      cursor: "default",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="neo-card overflow-hidden"
        >
          <div
            className="px-5 py-3 font-bold text-sm"
            style={{
              background: "#FFD93D",
              borderBottom: "2px solid #000",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            Soft Skills
          </div>
          <div className="p-5 flex flex-wrap gap-2">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                style={{
                  border: "2px solid #000",
                  padding: "4px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  background: "#66D9EF",
                  cursor: "default",
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
