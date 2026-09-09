import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, CV_URL, GITHUB_URL, LINKEDIN_URL } from "@/lib/contact";

const ContactSection = () => {
  return (
    <div id="contact" style={{ background: "#1A1815", color: "#FAF8F3" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "clamp(56px,8vw,112px) clamp(20px,5vw,64px) clamp(28px,4vw,44px)" }}>
        <div
          style={{
            fontFamily: "'Martian Mono', ui-monospace, monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#A39C90",
            paddingBottom: "clamp(24px,3vw,36px)",
          }}
        >
          Get in touch
        </div>
        <a
          href={CONTACT_EMAIL_HREF}
          style={{
            display: "inline-block",
            color: "#FAF8F3",
            fontSize: "clamp(24px,4.4vw,52px)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            borderBottom: "1px solid #4A463F",
            paddingBottom: 8,
            wordBreak: "break-word",
          }}
          className="contact-email-link"
        >
          {CONTACT_EMAIL}
        </a>
        <p style={{ margin: "clamp(24px,3vw,34px) 0 0", maxWidth: 560, fontSize: "clamp(16px,1.7vw,19px)", lineHeight: 1.6, color: "#C9C3B8" }}>
          I'm looking for part-time and internship engineering work, in Amman or remote. Email is fastest.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 26px", marginTop: "clamp(28px,3vw,40px)", fontSize: 15, fontWeight: 500 }}>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-dark-link"
            style={{ color: "#FAF8F3", borderBottom: "1px solid #4A463F", paddingBottom: 2 }}
          >
            GitHub &#8599;
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-dark-link"
            style={{ color: "#FAF8F3", borderBottom: "1px solid #4A463F", paddingBottom: 2 }}
          >
            LinkedIn &#8599;
          </a>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener"
            className="contact-dark-link"
            style={{ color: "#FAF8F3", borderBottom: "1px solid #4A463F", paddingBottom: 2 }}
          >
            Download CV &#8599;
          </a>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "20px clamp(20px,5vw,64px) clamp(28px,4vw,44px)",
          borderTop: "1px solid #33302B",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px 24px",
          justifyContent: "space-between",
          fontFamily: "'Martian Mono', ui-monospace, monospace",
          fontSize: 9.5,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#8A8479",
        }}
      >
        <div>Jawad Alarman &middot; Amman, Jordan</div>
        <div>Built by Jawad Alarman &middot; 2026</div>
      </div>
    </div>
  );
};

export default ContactSection;
