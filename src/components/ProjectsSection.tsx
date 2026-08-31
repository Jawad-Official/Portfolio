import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CaseStudy {
  name: string;
  tagline: string;
  accentColor: string;
  previewImage?: string;
  /** Every field below is optional. Unanswered ones are omitted rather than filled in. */
  problem?: string;
  built?: string;
  stack?: string[];
  outcome?: string;
  role?: string;
  links: { label: string; url: string }[];
}

interface AlsoBuilt {
  name: string;
  line?: string;
  status?: string;
  url?: string;
}

// TODO(jawad): EcoLens or EchoLens? The repo says EcoLens, but dashboard-3d.png reads
// "EchoLens" in the UI. Pick one, rename everywhere, and retake the screenshot.

// TODO(jawad): permission to name the client publicly? If not, use "a regional online retailer".

const caseStudies: CaseStudy[] = [
  {
    name: "EcoLens",
    tagline: "Earth-health observatory",
    accentColor: "#FF6B9D",
    previewImage: "/dashboard-3d.png",
    problem:
      "Environmental signals such as fires, air quality, weather and natural events are spread across separate public APIs with no single view.",
    built:
      "A full-stack Earth-health observatory aggregating seven live data layers, rendered as both a 3D Cesium globe and a 2D MapLibre map.",
    stack: [
      "Next.js 16",
      "TypeScript",
      "CesiumJS",
      "MapLibre GL",
      "TanStack Query",
      "FastAPI",
      "Pydantic",
      "httpx (async)",
      "SQLite caching",
    ],
    outcome: "1st place, JoHackathon 2025.",
    role: "Sole developer. Backend API aggregation and caching, plus the 3D globe and 2D map front end.",
    // TODO(jawad): add a live demo or short walkthrough video. A repo alone is not quick to verify.
    links: [
      { label: "GitHub", url: "https://github.com/Jawad-Official/EcoLens" },
    ],
  },
  {
    name: "Astrozen",
    tagline: "AI planning tool for software projects",
    accentColor: "#66D9EF",
    previewImage: "/Astrozen.png",
    problem:
      "Turning a rough app idea into structured documentation, a build plan, and trackable issues is manual and slow.",
    built:
      "An AI planning tool that turns a raw idea into validation, architecture blueprints and technical docs, then tracks the work as projects, features, issues and milestones.",
    stack: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "PostgreSQL",
      "OpenRouter",
      "APScheduler",
      "React",
      "TypeScript",
      "Vite",
    ],
    role: "Backend, data model, auth and the AI generation pipeline. The front-end UI was AI-generated.",
    links: [
      { label: "Website", url: "https://astrozen.netlify.app" },
      { label: "GitHub", url: "https://github.com/Jawad-Official/Astrozen" },
    ],
  },
  {
    name: "Taqa e-store",
    tagline: "E-commerce platform",
    accentColor: "#FF9F43",
    previewImage: "/taqa.png",
    built:
      "An e-commerce platform built from the ground up, serving markets across more than one country.",
    stack: ["Python", "FastAPI", "Next.js", "React", "PostgreSQL"],
    // TODO(jawad): confirm this role breakdown. It is inferred from the stack you gave me.
    role: "Sole developer on a client engagement. Backend, database and storefront.",
    links: [{ label: "Website", url: "https://taqa-shop.com/" }],
  },
];

const alsoBuilt: AlsoBuilt[] = [
  {
    name: "De-Board",
    line: "A local-first markdown knowledge base with a detective crime-board interface, arranging notes on a visual corkboard with link visualization.",
    status: "In development",
    url: "https://github.com/Jawad-Official/De-Board",
  },
  {
    name: "AFAQ Dialogue",
    line: "Website for a Jordanian non-profit working on youth capacity development and legal empowerment.",
    url: "https://afaq-dialogue.org/",
  },
];

/** Renders nothing when the field has no answer yet, rather than showing a placeholder. */
const Field = ({
  label,
  value,
  className,
}: {
  label: string;
  value?: string;
  className?: string;
}) => {
  if (!value) return null;
  return (
    <div className={className}>
      <p
        className="font-mono text-[11px] uppercase tracking-widest mb-1"
        style={{ color: "#000", opacity: 0.45 }}
      >
        {label}
      </p>
      <p className="text-sm text-gray-700 leading-relaxed">{value}</p>
    </div>
  );
};

const CaseStudyCard = ({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay: index * 0.08 }}
    className="neo-card overflow-hidden"
  >
    {/* Top color bar */}
    <div
      style={{
        height: 8,
        background: study.accentColor,
        borderBottom: "2px solid #000",
      }}
    />

    <div className="grid lg:grid-cols-5">
      {/* Media: static screenshot, or a flat accent block when none exists */}
      <div
        className="lg:col-span-2"
        style={{ background: "#f0f0f0", position: "relative", minHeight: 200 }}
      >
        {study.previewImage ? (
          <img
            src={study.previewImage}
            alt={`${study.name} screenshot`}
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{ background: study.accentColor, width: "100%", height: "100%" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="lg:col-span-3 p-6 border-t-2 lg:border-t-0 lg:border-l-2 border-black">
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              {study.name}
            </h3>
            <p className="text-sm font-semibold mt-0.5" style={{ color: "#66D9EF" }}>
              {study.tagline}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {study.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn flex items-center gap-1.5 px-3 py-2 text-xs font-bold flex-shrink-0"
                style={{ background: study.accentColor }}
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4 mb-5">
          <Field
            label="Problem"
            value={study.problem}
            className="sm:col-span-2"
          />
          <Field
            label="What I built"
            value={study.built}
            className="sm:col-span-2"
          />
          <Field label="Outcome" value={study.outcome} />
          <Field label="My role" value={study.role} />
        </div>

        {study.stack && study.stack.length > 0 && (
          <>
            <p
              className="font-mono text-[11px] uppercase tracking-widest mb-2"
              style={{ color: "#000", opacity: 0.45 }}
            >
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((tech) => (
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
          </>
        )}
      </div>
    </div>
  </motion.article>
);

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

        {/* Tier 1: case studies */}
        <div className="flex flex-col gap-8">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.name} study={study} index={i} />
          ))}
        </div>

        {/* Tier 2: also built */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3
            className="text-lg font-bold mb-5"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            <span className="highlight-cyan px-1">Also built</span>
          </h3>
          <ul className="flex flex-col divide-y-2 divide-black border-t-2 border-b-2 border-black">
            {alsoBuilt.map((item) => (
              <li
                key={item.name}
                className="py-3 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
              >
                <span className="font-bold text-sm sm:w-40 flex-shrink-0">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 underline underline-offset-4 decoration-2"
                    >
                      {item.name}
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    item.name
                  )}
                </span>
                <span className="text-sm text-gray-600 leading-relaxed">
                  {item.line}
                  {item.status && (
                    <span
                      className="ml-2 align-middle whitespace-nowrap"
                      style={{
                        border: "2px solid #000",
                        padding: "1px 8px",
                        fontSize: 10,
                        fontWeight: 700,
                        fontFamily: "Space Mono, monospace",
                        background: "#f0f0f0",
                        color: "#000",
                      }}
                    >
                      {item.status}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
