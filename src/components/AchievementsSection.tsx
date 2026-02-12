import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="text-yellow-400" size={32} />,
    place: "1st Place",
    event: "JoHackathon 2025",
    description: "National Jordanian Competition for Programmers — Competing against the country's top young developers and taking the gold.",
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/10",
  },
  {
    icon: <Award className="text-slate-300" size={32} />,
    place: "2nd Place",
    event: "JoHackathon 2024",
    description: "National Jordanian Competition for Programmers — Proving consistency by placing at the top two years in a row.",
    color: "from-slate-400/20 to-slate-500/5",
    borderColor: "border-slate-400/30",
    glowColor: "shadow-slate-400/10",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-3">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Achievements & <span className="text-gradient">Awards</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.event}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className={`relative overflow-hidden rounded-2xl border ${ach.borderColor} bg-gradient-to-br ${ach.color} p-8 cursor-default shadow-lg ${ach.glowColor}`}
            >
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-xl bg-background/50 glow-border">{ach.icon}</div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{ach.place}</p>
                  <p className="text-lg font-semibold text-gradient mt-1">{ach.event}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{ach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
