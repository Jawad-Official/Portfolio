import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      style={{
        background: "#000",
        color: "#fff",
        borderTop: "3px solid #000",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            style={{
              background: "#FFD93D",
              border: "2px solid #fff",
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: 14,
              color: "#000",
              fontFamily: "Space Grotesk, sans-serif",
            }}
          >
            JA
          </div>
          <p
            className="text-sm"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Built by{" "}
            <span className="font-bold" style={{ color: "#FFD93D" }}>
              Jawad Alarman
            </span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Jawad-Official"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              border: "2px solid #fff",
              padding: 8,
              display: "flex",
              color: "#fff",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#FFD93D";
              (e.currentTarget as HTMLAnchorElement).style.color = "#000";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#FFD93D";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
            }}
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jawad-alarman-6194453a9"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              border: "2px solid #fff",
              padding: 8,
              display: "flex",
              color: "#fff",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#66D9EF";
              (e.currentTarget as HTMLAnchorElement).style.color = "#000";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#66D9EF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#fff";
            }}
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
