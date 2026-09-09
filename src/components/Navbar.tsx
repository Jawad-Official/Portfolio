const navItems = [
  { label: "Work", href: "#work" },
  { label: "Focus", href: "#focus" },
  { label: "Record", href: "#record" },
  { label: "Stack", href: "#stack" },
];

const Navbar = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "rgba(250,248,243,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid #DFDAD0",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "13px clamp(20px,5vw,64px)",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px 28px",
          alignItems: "baseline",
          justifyContent: "space-between",
          fontFamily: "'Martian Mono', ui-monospace, monospace",
          fontSize: 10,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        <a href="#top" style={{ color: "#1A1815" }}>
          Jawad Alarman
        </a>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 22px", color: "#67625A" }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} style={{ color: "#67625A" }}>
              {item.label}
            </a>
          ))}
          <a href="#contact" style={{ color: "#2A46C8" }}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
