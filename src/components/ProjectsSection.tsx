import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import afaqPreview from "@/assets/afaq-preview.png";

interface Project {
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  videoPlaceholder?: boolean;
  previewImage?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    name: "Coordexa",
    tagline: "Business Automation & Execution OS",
    description:
      "An all-in-one platform for CEOs and founders to manage their business operations — from strategic planning and task execution to team coordination and AI-driven insights.",
    techStack: ["React", "TypeScript", "AI/ML", "Real-time", "Analytics"],
    videoPlaceholder: true,
  },
  {
    name: "Astrozen",
    tagline: "AI-Powered Software Development Platform",
    description:
      "A next-generation development platform that leverages artificial intelligence to streamline the entire software development lifecycle — from planning to deployment.",
    techStack: ["AI", "TypeScript", "Cloud", "DevOps", "React"],
    videoPlaceholder: true,
  },
  {
    name: "Noraizen",
    tagline: "Cross-Platform Productivity Platform",
    description:
      "A comprehensive productivity and organization platform designed to unify task management, notes, calendars, and collaboration across all your devices.",
    techStack: ["Cross-Platform", "React Native", "Sync", "AI", "TypeScript"],
    videoPlaceholder: true,
  },
  {
    name: "EcoLens",
    tagline: "Environmental Visualization Platform",
    description:
      "An interactive platform that visualizes environmental data to help users understand and monitor ecological changes through compelling data-driven experiences.",
    techStack: ["Data Viz", "React", "Maps", "APIs", "TypeScript"],
    videoPlaceholder: true,
  },
  {
    name: "AFAQ Dialogue",
    tagline: "Jordanian Legal Empowerment NGO",
    description:
      "A professional website for AFAQ Dialogue — a non-profit organization dedicated to youth capacity development, justice, transparency, and leadership in Jordan.",
    techStack: ["Web Design", "React", "Responsive", "Arabic RTL", "CMS"],
    previewImage: afaqPreview,
    liveUrl: "https://afaq-dialogue.org/",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl overflow-hidden glow-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
      >
        {/* Media area */}
        <div className="relative aspect-video bg-secondary/30 overflow-hidden">
          {project.previewImage ? (
            <img
              src={project.previewImage}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 text-muted-foreground"
              >
                <div className="w-14 h-14 rounded-full glow-border flex items-center justify-center bg-background/50">
                  <Play size={24} className="ml-1" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest">Video Coming Soon</span>
              </motion.div>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-primary/80 font-medium">{project.tagline}</p>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glow-border text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm font-mono tracking-widest uppercase text-primary mb-3">My Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
