import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import afaqPreview from "@/assets/afaq-preview.png";

interface Project {
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  previewImage?: string;
  liveUrl?: string;
  accentColor?: string;
}

const projects: Project[] = [
  {
    name: "Coordexa",
    tagline: "Business Automation & Execution OS",
    description:
      "An all-in-one platform for CEOs and founders to manage their business operations — from strategic planning and task execution to team coordination and AI-driven insights.",
    techStack: ["React", "TypeScript", "AI/ML", "Real-time", "Analytics"],
    liveUrl: "https://coordexa.com/",
    accentColor: "#FFD93D",
  },
  {
    name: "Astrozen",
    tagline: "AI-Powered Software Development Platform",
    description:
      "A next-generation development platform that leverages artificial intelligence to streamline the entire software development lifecycle — from planning to deployment.",
    techStack: ["AI", "TypeScript", "Cloud", "DevOps", "React"],
    previewImage: "/Astrozen.png",
    accentColor: "#66D9EF",
  },
  {
    name: "Noraizen",
    tagline: "Cross-Platform Productivity Platform",
    description:
      "A comprehensive productivity and organization platform designed to unify task management, notes, calendars, and collaboration across all your devices.",
    techStack: ["Cross-Platform", "React Native", "Sync", "AI", "TypeScript"],
    liveUrl: "https://noraizen.onrender.com/",
    accentColor: "#6BCB77",
  },
  {
    name: "EcoLens",
    tagline: "Environmental Visualization Platform",
    description:
      "An interactive platform that visualizes environmental data to help users understand and monitor ecological changes through compelling data-driven experiences.",
    techStack: ["Data Viz", "React", "Maps", "APIs", "TypeScript"],
    accentColor: "#FF6B9D",
  },
  {
    name: "AFAQ Dialogue",
    tagline: "Jordanian Legal Empowerment NGO",
    description:
      "A professional website for AFAQ Dialogue — a non-profit organization dedicated to youth capacity development, justice, transparency, and leadership in Jordan.",
    techStack: ["Web Design", "React", "Responsive", "Arabic RTL", "CMS"],
    previewImage: afaqPreview,
    liveUrl: "https://afaq-dialogue.org/",
    accentColor: "#FFD93D",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -5, x: -2 }}
      className="neo-card overflow-hidden group cursor-default"
    >
      {/* Top color bar */}
      <div
        style={{
          height: 8,
          background: project.accentColor || "#FFD93D",
          borderBottom: "2px solid #000",
        }}
      />

      {/* Media area */}
      {(project.previewImage || project.liveUrl) && (
        <div
          style={{
            height: 160,
            overflow: "hidden",
            borderBottom: "2px solid #000",
            background: "#f0f0f0",
            position: "relative",
          }}
        >
          {project.previewImage ? (
            <img
              src={project.previewImage}
              alt={`${project.name} preview`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                transition: "transform 0.4s",
              }}
              className="group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full relative overflow-hidden">
              <iframe
                src={project.liveUrl}
                className="w-[125%] h-[125%] origin-top-left scale-[0.8] border-none pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                title={`${project.name} preview`}
                loading="lazy"
              />
            </div>
          )}
          {project.liveUrl && (
            <div
              style={{
                position: "absolute",
                top: 8,
                left: 8,
                background: "#6BCB77",
                border: "2px solid #000",
                padding: "2px 10px",
                fontSize: 11,
                fontWeight: 700,
                fontFamily: "Space Mono, monospace",
              }}
            >
              LIVE
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3
              className="text-xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {project.name}
            </h3>
            <p
              className="text-sm font-semibold mt-0.5"
              style={{ color: "#66D9EF" }}
            >
              {project.tagline}
            </p>
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn p-2 flex-shrink-0"
              style={{ background: project.accentColor || "#FFD93D" }}
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                border: "2px solid #000",
                padding: "2px 10px",
                fontSize: 11,
                fontWeight: 600,
                fontFamily: "Space Mono, monospace",
                background: "#f0f0f0",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 relative"
      style={{ background: "#fff" }}
    >
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
            // my work
          </p>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="highlight-yellow px-1">PROJECTS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
