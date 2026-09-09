import { GITHUB_URL } from "@/lib/contact";

const mono = (overrides: React.CSSProperties = {}): React.CSSProperties => ({
  fontFamily: "'Martian Mono', ui-monospace, monospace",
  fontSize: 9.5,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#67625A",
  paddingBottom: 8,
  ...overrides,
});

interface Field {
  label: string;
  value: string;
}

interface Link {
  label: string;
  url: string;
}

interface Project {
  number: string;
  name: string;
  tagline: string;
  links: Link[];
  image?: { src: string; alt: string; aspect: string; caption: string };
  fields: Field[];
  outcome?: string;
  stack: string;
}

const projects: Project[] = [
  {
    number: "01",
    name: "EcoLens",
    tagline: "Earth-health observatory",
    links: [{ label: "GitHub", url: "https://github.com/Jawad-Official/EcoLens" }],
    image: {
      src: "/dashboard-3d.png",
      alt: "EcoLens globe dashboard screenshot",
      aspect: "4/3",
      caption: "Fig. 1 · seven live data layers on a 3D Cesium globe",
    },
    fields: [
      {
        label: "Problem",
        value:
          "Environmental signals such as fires, air quality, weather and natural events are spread across separate public APIs with no single view.",
      },
      {
        label: "What I built",
        value:
          "A full-stack Earth-health observatory aggregating seven live data layers, rendered as both a 3D Cesium globe and a 2D MapLibre map.",
      },
      {
        label: "My role",
        value: "Sole developer. Backend API aggregation and caching, plus the 3D globe and 2D map front end.",
      },
    ],
    outcome: "Outcome: 1st place, JoHackathon 2025.",
    stack: "Next.js 15 · TypeScript · CesiumJS · MapLibre GL · TanStack Query · FastAPI · Pydantic · httpx (async) · SQLite caching",
  },
  {
    number: "02",
    name: "Astrozen",
    tagline: "AI “vibe planning” platform",
    links: [
      { label: "Website", url: "https://astrozen.netlify.app" },
      { label: "GitHub", url: "https://github.com/Jawad-Official/Astrozen" },
    ],
    image: {
      src: "/Astrozen.png",
      alt: "Astrozen issue-board screenshot",
      aspect: "16/9",
      caption: "Fig. 2 · generated features, issues and milestones",
    },
    fields: [
      {
        label: "Problem",
        value: "Turning a rough app idea into structured documentation, a build plan, and trackable issues is manual and slow.",
      },
      {
        label: "What I built",
        value:
          "An AI planning tool that turns a raw product idea into documentation (PRD, backend schema, and more) plus an architecture blueprint, from which issues and tickets can be generated. Aimed at “vibe coders” and others without formal planning skills.",
      },
      {
        label: "My role",
        value:
          "Designed the generation pipeline over Gemini, along with the data model, scheduling and auth underneath it. The front end and UI was AI-generated.",
      },
    ],
    stack: "Python · FastAPI · SQLAlchemy · Alembic · Pydantic · PostgreSQL · Gemini API · APScheduler · React · TypeScript · Vite",
  },
  {
    number: "03",
    name: "Taqa e-store",
    tagline: "E-commerce platform · client work",
    links: [{ label: "Website", url: "https://taqa-shop.com/" }],
    image: {
      src: "/taqa.png",
      alt: "Taqa storefront screenshot",
      aspect: "16/9",
      caption: "Fig. 3 · Arabic-first storefront, multi-market",
    },
    fields: [
      {
        label: "What I built",
        value: "An e-commerce platform built from the ground up, serving markets across more than one country.",
      },
      {
        label: "My role",
        value: "Sole developer on a client engagement. Backend, database and storefront.",
      },
    ],
    stack: "Python · FastAPI · Next.js · React · PostgreSQL",
  },
  {
    number: "04",
    name: "Fraud detection model",
    tagline: "Applied ML · published write-up",
    links: [{ label: "GitHub", url: GITHUB_URL }],
    fields: [
      {
        label: "Problem",
        value:
          "Fraud labels are rare. The core challenges were class imbalance and choosing an evaluation metric that stayed meaningful once the classes were that skewed.",
      },
      {
        label: "What I built",
        value: "A logistic regression model for fraud detection, with the code and the write-up published publicly.",
      },
      {
        label: "My role",
        value: "Sole author. Data preparation, model training, and the evaluation write-up.",
      },
    ],
    stack: "Python · pandas · scikit-learn · logistic regression · precision / recall evaluation",
  },
];

const alsoBuilt = [
  {
    name: "De-Board",
    url: "https://github.com/Jawad-Official/De-Board",
    line:
      "A local-first markdown knowledge base with a detective crime-board interface, arranging notes on a visual corkboard with link visualisation.",
    status: "In development",
  },
  {
    name: "AFAQ Dialogue",
    url: "https://afaq-dialogue.org/",
    line: "Website for a Jordanian non-profit working on youth capacity development and legal empowerment.",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div style={{ borderTop: "1px solid #1A1815", paddingTop: 26, marginBottom: "clamp(56px,7vw,88px)" }}>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px 32px", justifyContent: "space-between", alignItems: "baseline" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", alignItems: "baseline" }}>
        <div style={{ fontFamily: "'Martian Mono', ui-monospace, monospace", fontSize: 11, letterSpacing: "0.1em", color: "#67625A" }}>
          {project.number}
        </div>
        <h3 style={{ margin: 0, fontSize: "clamp(26px,3.4vw,40px)", fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05 }}>
          {project.name}
        </h3>
        <div
          style={{
            fontFamily: "'Martian Mono', ui-monospace, monospace",
            fontSize: 10,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#2A46C8",
          }}
        >
          {project.tagline}
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 20px", fontSize: 14, fontWeight: 500 }}>
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link"
            style={{ color: "#1A1815" }}
          >
            {link.label} &#8599;
          </a>
        ))}
      </div>
    </div>

    <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px,3vw,40px)", marginTop: 26, alignItems: "flex-start" }}>
      {project.image && (
        <div style={{ flex: "1 1 min(100%,280px)", maxWidth: 400 }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: project.image.aspect, border: "1px solid #DFDAD0", background: "#F2EEE7" }}>
            <img
              src={project.image.src}
              alt={project.image.alt}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={mono({ paddingBottom: 0, marginTop: 10, fontSize: 9.5 })}>{project.image.caption}</div>
        </div>
      )}
      <div
        style={{
          flex: project.image ? "1.4 1 min(100%,300px)" : "1 1 100%",
          display: "flex",
          flexWrap: project.image ? "nowrap" : "wrap",
          flexDirection: project.image ? "column" : undefined,
          gap: project.image ? 18 : "18px clamp(20px,3vw,40px)",
        }}
      >
        {project.fields.map((field) => (
          <div key={field.label} style={project.image ? undefined : { flex: "1 1 min(100%,240px)", maxWidth: 360 }}>
            <div style={mono()}>{field.label}</div>
            <div style={{ fontSize: 15.5, lineHeight: 1.65, color: "#38352F" }}>{field.value}</div>
            {field.label === "My role" && project.outcome && (
              <div style={{ marginTop: 14, fontSize: 15.5, lineHeight: 1.65, color: "#2A46C8", fontWeight: 500 }}>
                {project.outcome}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "6px 16px",
        marginTop: "clamp(24px,3vw,34px)",
        paddingTop: 16,
        borderTop: "1px solid #DFDAD0",
      }}
    >
      <div style={mono({ flex: "0 0 74px", paddingBottom: 0, paddingTop: 3 })}>Stack</div>
      <div style={{ flex: "1 1 min(100%,300px)", fontSize: 15, lineHeight: 1.7, color: "#55514A" }}>{project.stack}</div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <>
      <div
        id="work"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "clamp(48px,6vw,88px) clamp(20px,5vw,64px) clamp(20px,3vw,32px)",
          borderTop: "1px solid #DFDAD0",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 24px", alignItems: "baseline", justifyContent: "space-between" }}>
          <h2 style={{ margin: 0, fontSize: "clamp(30px,4.6vw,54px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1 }}>
            Selected work
          </h2>
          <div
            style={{
              fontFamily: "'Martian Mono', ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#67625A",
            }}
          >
            Four of six
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(20px,5vw,64px)" }}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}

        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px,3vw,48px)", paddingTop: "clamp(20px,3vw,32px)", borderTop: "1px solid #DFDAD0" }}>
          <div
            style={{
              flex: "0 0 140px",
              fontFamily: "'Martian Mono', ui-monospace, monospace",
              fontSize: 10,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#67625A",
              paddingTop: 4,
            }}
          >
            Also built
          </div>
          <div style={{ flex: "1 1 min(100%,340px)", maxWidth: 860, display: "flex", flexDirection: "column" }}>
            {alsoBuilt.map((item, i) => (
              <div
                key={item.name}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px 28px",
                  padding: i === 0 ? "0 0 18px" : "18px 0 0",
                  borderTop: i === 0 ? undefined : "1px solid #DFDAD0",
                }}
              >
                <div style={{ flex: "0 0 min(100%,190px)", fontSize: 17, fontWeight: 500 }}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-link"
                    style={{ color: "#1A1815" }}
                  >
                    {item.name} &#8599;
                  </a>
                </div>
                <div style={{ flex: "1 1 min(100%,300px)", fontSize: 15.5, lineHeight: 1.65, color: "#55514A" }}>
                  {item.line}
                  {item.status && (
                    <span
                      style={{
                        marginLeft: 8,
                        fontFamily: "'Martian Mono', ui-monospace, monospace",
                        fontSize: 9.5,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#2A46C8",
                      }}
                    >
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection;
