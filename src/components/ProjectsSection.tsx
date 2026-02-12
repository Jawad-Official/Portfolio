import { motion } from "framer-motion";
import { ExternalLink, Play, ArrowUpRight } from "lucide-react";
import afaqPreview from "@/assets/afaq-preview.png";

interface Project {
  name: string;
  tagline: string;
  description: string;
  techStack: string[];
  videoPlaceholder?: boolean;
  previewImage?: string;
  liveUrl?: string;
  featured?: boolean;
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
    featured: true,
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group ${isFeatured ? "md:col-span-2" : ""}`}
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`relative rounded-2xl overflow-hidden border border-border/60 bg-card/80 backdrop-blur-sm 
          hover:border-primary/40 transition-all duration-500 h-full
          hover:shadow-[0_8px_40px_-12px_hsl(215_100%_54%/0.25)]
          ${isFeatured ? "ring-1 ring-accent/20" : ""}`}
      >
        {/* Media area */}
        <div className={`relative overflow-hidden ${isFeatured ? "aspect-[2.2/1]" : "aspect-video"} bg-secondary/40`}>
          {project.previewImage ? (
            <img
              src={project.previewImage}
              alt={`${project.name} preview`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.04]" style={{
                backgroundImage: `radial-gradient(circle, hsl(215 100% 54%) 1px, transparent 1px)`,
                backgroundSize: "24px 24px"
              }} />
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 text-muted-foreground relative z-10"
              >
                <div className="w-16 h-16 rounded-2xl border border-border/80 flex items-center justify-center bg-background/50 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                  <Play size={22} className="ml-1 group-hover:text-primary transition-colors duration-300" />
                </div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/60">
                  Video Coming Soon
                </span>
              </motion.div>
            </div>
          )}

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />

          {/* Featured badge */}
          {isFeatured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] rounded-full bg-accent/15 text-accent border border-accent/25 backdrop-blur-sm">
                Live Project
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between mb-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-accent font-medium tracking-wide">{project.tagline}</p>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-border/60 text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 flex-shrink-0"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[11px] font-mono rounded-lg bg-secondary text-muted-foreground border border-border/40 group-hover:border-primary/20 group-hover:text-foreground/80 transition-all duration-300"
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

        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
