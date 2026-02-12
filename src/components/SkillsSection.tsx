import { motion } from "framer-motion";
import { Code2, Layout, Server, Brain, Lightbulb, Users } from "lucide-react";

const technicalSkills = [
  {
    category: "Languages",
    icon: <Code2 size={20} />,
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frontend",
    icon: <Layout size={20} />,
    skills: ["Next.js (App Router, v15)", "React", "Tailwind CSS", "State Management", "Responsive UI Systems"],
  },
  {
    category: "Full-Stack & Backend",
    icon: <Server size={20} />,
    skills: ["Next.js", "FastAPI", "PostgreSQL", "SaaS Development", "REST APIs"],
  },
  {
    category: "AI & Product",
    icon: <Brain size={20} />,
    skills: ["AI / Machine Learning", "Product Thinking", "System Design"],
  },
];

const softSkills = [
  { name: "Problem Solving", icon: <Lightbulb size={16} /> },
  { name: "Structured Thinking", icon: <Brain size={16} /> },
  { name: "Decision Making Under Pressure", icon: <Lightbulb size={16} /> },
  { name: "Prioritization", icon: <Lightbulb size={16} /> },
  { name: "Leadership", icon: <Users size={16} /> },
  { name: "Problem Decomposition", icon: <Brain size={16} /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-3">Expertise</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {technicalSkills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl glow-border bg-card/50 backdrop-blur-sm p-6 group hover:border-primary/50 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">{group.icon}</div>
                <h3 className="text-lg font-bold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Users size={18} className="text-accent" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium cursor-default"
              >
                {skill.icon}
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
