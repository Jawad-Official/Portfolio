import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

const achievements = [
  {
    icon: <Trophy className="text-yellow-400" size={28} />,
    place: "1st Place",
    event: "JoHackathon 2025",
    description: "National Jordanian Competition for Programmers",
    color: "from-yellow-500/20 to-yellow-600/5",
    borderColor: "border-yellow-500/30",
  },
  {
    icon: <Award className="text-slate-300" size={28} />,
    place: "2nd Place",
    event: "JoHackathon 2024",
    description: "National Jordanian Competition for Programmers",
    color: "from-slate-400/20 to-slate-500/5",
    borderColor: "border-slate-400/30",
  },
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
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-3">About Me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
            Passionate about <span className="text-gradient">building</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I'm a 17-year-old IT student from Jordan with a relentless drive for creating impactful software.
            From business automation platforms to AI-powered development tools, I love turning ideas into
            real products that solve real problems. My journey in competitive programming has sharpened my
            skills and fueled my ambition to keep pushing boundaries.
          </p>
        </motion.div>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.event}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`relative overflow-hidden rounded-xl border ${ach.borderColor} bg-gradient-to-br ${ach.color} p-6 cursor-default`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-background/50">{ach.icon}</div>
                <div>
                  <p className="text-xl font-bold text-foreground">{ach.place}</p>
                  <p className="text-base font-semibold text-gradient">{ach.event}</p>
                  <p className="text-sm text-muted-foreground mt-1">{ach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
