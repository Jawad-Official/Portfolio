import { motion } from "framer-motion";
import { Github, Linkedin, Code2, Terminal, HardDrive } from "lucide-react";
import meImage from "@/assets/me.jpg";

const techPills = [
  { name: "React", icon: "⚛" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "Next.js", icon: "▲" },
  { name: "AI/ML", icon: "🤖" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "FastAPI", icon: "⚡" },
];

const FloatingIcon = ({
  children,
  style,
  delay = 0,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-8, 8, -8] }}
    transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    style={{
      position: "absolute",
      border: "2px solid #000",
      boxShadow: "4px 4px 0 #000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      ...style,
    }}
  >
    {children}
  </motion.div>
);

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden"
      style={{ background: "#f0f0f0" }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-caveat text-2xl sm:text-3xl mb-3"
              style={{ color: "#66D9EF", fontWeight: 700 }}
            >
              Hi there! 👋
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              I'm Jawad Alarman.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-700 mb-6 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              17-year-old IT Student & Hackathon Champion from Jordan. I love
              building AI-powered tools, full-stack platforms, and solving
              real-world problems at scale.
            </motion.p>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 justify-center lg:justify-start mb-6"
            >
              <a
                href="https://github.com/Jawad-Official"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn p-2.5"
                style={{ background: "#fff" }}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jawad-alarman-6194453a9"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn p-2.5"
                style={{ background: "#fff" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="neo-btn inline-flex items-center gap-2 px-6 py-3 text-base font-bold"
                style={{ background: "#66D9EF" }}
              >
                Get In Touch!
              </a>
            </motion.div>
          </div>

          {/* Right: Avatar with floating decorations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative flex-shrink-0 flex items-center justify-center"
            style={{ width: 320, height: 340 }}
          >
            {/* Main avatar box */}
            <div
              style={{
                position: "relative",
                width: 240,
                height: 260,
                border: "3px solid #000",
                boxShadow: "6px 6px 0 #000",
                background: "#66D9EF",
                overflow: "hidden",
              }}
            >
              <img
                src={meImage}
                alt="Jawad Alarman"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 20%",
                  display: "block",
                }}
              />
              {/* "Full-Stack Builder" badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: -2,
                  background: "#6BCB77",
                  border: "2px solid #000",
                  padding: "4px 10px",
                  fontWeight: 700,
                  fontSize: 12,
                  whiteSpace: "nowrap",
                }}
              >
                Still discovering the world ✨
              </div>
            </div>

            {/* Floating decorative elements */}
            <FloatingIcon
              delay={0}
              style={{
                top: 0,
                left: 10,
                width: 52,
                height: 52,
                background: "#FFD93D",
                fontSize: 22,
              }}
            >
              <Code2 size={24} />
            </FloatingIcon>

            <FloatingIcon
              delay={0.5}
              style={{
                top: 10,
                right: 0,
                width: 52,
                height: 52,
                background: "#FFD93D",
                fontSize: 22,
              }}
            >
              <Terminal size={22} />
            </FloatingIcon>

            <FloatingIcon
              delay={1}
              style={{
                bottom: 30,
                left: 0,
                width: 48,
                height: 48,
                background: "#FF6B9D",
                fontSize: 18,
              }}
            >
              <HardDrive size={20} />
            </FloatingIcon>
          </motion.div>
        </div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap gap-3 justify-center lg:justify-start"
        >
          {techPills.map((pill, i) => (
            <motion.div
              key={pill.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.05 }}
              whileHover={{ y: -3 }}
              className="neo-btn flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white cursor-default"
            >
              <span className="font-mono text-xs">{pill.icon}</span>
              {pill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
