import meImage from "@/assets/me.jpg";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/contact";

const mono: React.CSSProperties = {
  fontFamily: "'Martian Mono', ui-monospace, monospace",
};

const HeroSection = () => {
  return (
    <div
      id="top"
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "clamp(48px,9vw,104px) clamp(20px,5vw,64px) clamp(36px,5vw,64px)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px 24px",
          justifyContent: "space-between",
          ...mono,
          fontSize: 10,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#67625A",
          paddingBottom: "clamp(28px,4vw,52px)",
        }}
      >
        <div>Portfolio / 2026</div>
        <div>Amman, Jordan &nbsp;&middot;&nbsp; Open to work</div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(28px,4vw,56px)", alignItems: "flex-end" }}>
        <div style={{ flex: "3 1 min(100%,420px)" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px,8.4vw,94px)",
              fontWeight: 500,
              letterSpacing: "-0.035em",
              lineHeight: 0.94,
            }}
          >
            Jawad Alarman
          </h1>
          <p
            style={{
              margin: "clamp(20px,2.5vw,30px) 0 0",
              maxWidth: 640,
              fontSize: "clamp(18px,2.05vw,25px)",
              fontWeight: 400,
              lineHeight: 1.45,
              color: "#302D28",
            }}
          >
            I'm an AI engineer studying BSc AI and Data Science.
          </p>
          <p
            style={{
              margin: "2px 0 0",
              maxWidth: 640,
              fontSize: "clamp(16px,1.7vw,19px)",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#4A463F",
            }}
          >
            I live in the gap between the paper and the product. Research tells us what's possible;
            engineering decides whether anyone ever touches it. I care about both ends, the idea on the
            page and the thing running in production at 3am.
          </p>
          <p
            style={{
              margin: "2px 0 0",
              maxWidth: 640,
              fontSize: "clamp(16px,1.7vw,19px)",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "#4A463F",
            }}
          >
            Right now I'm building, reading, and turning interesting results into systems people can
            actually use.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 18px",
              marginTop: "clamp(24px,3vw,34px)",
              ...mono,
              fontSize: 10,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#67625A",
            }}
          >
            <div>BSc AI &amp; Data Science, HTU</div>
            <div style={{ color: "#C8C1B5" }}>/</div>
            <div>1st place, JoHackathon 2025</div>
            <div style={{ color: "#C8C1B5" }}>/</div>
            <div>Amman or remote</div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px 24px",
              marginTop: "clamp(26px,3vw,36px)",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            <a href={CONTACT_EMAIL_HREF} style={{ borderBottom: "1px solid #2A46C8", paddingBottom: 2 }}>
              {CONTACT_EMAIL}
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
              style={{ color: "#1A1815" }}
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-link"
              style={{ color: "#1A1815" }}
            >
              LinkedIn
            </a>
            <a href={CV_URL} target="_blank" rel="noopener" className="underline-link" style={{ color: "#1A1815" }}>
              Download CV
            </a>
          </div>
        </div>

        <div style={{ flex: "1 1 min(100%,220px)", maxWidth: 300 }}>
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "4/5",
              border: "1px solid #DFDAD0",
              background: "#F2EEE7",
              overflow: "hidden",
            }}
          >
            <img
              src={meImage}
              alt="Jawad Alarman"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block" }}
            />
          </div>
          <div
            style={{
              marginTop: 10,
              ...mono,
              fontSize: 9.5,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#67625A",
            }}
          >
            Fig. 0 &middot; portrait
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
