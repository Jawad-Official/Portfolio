const entries = [
  {
    date: "2026-2030",
    title: "BSc, AI & Data Science",
    text: "Al-Hussein Technical University (HTU), Amman. Taken alongside client and part-time engineering work.",
  },
  {
    date: "Since 2025",
    title: "Web development intern",
    text: "Afaq Dialogue for Youth Capacity Development, Amman.",
  },
  {
    date: "2026",
    title: "IT trainee",
    text: "Joswe Medical, Amman. One-month industry placement: data visualisation, cybersecurity, and role and access management.",
  },
  {
    date: "2025",
    title: "1st place, JoHackathon",
    text: "Jordan's national hackathon. First place against the country's top young developers.",
  },
  {
    date: "2024",
    title: "2nd place, JoHackathon",
    text: "Second place, the year before taking first.",
  },
];

const RecordSection = () => {
  return (
    <div
      id="record"
      style={{
        maxWidth: 1240,
        margin: "clamp(48px,6vw,88px) auto 0",
        padding: "clamp(40px,5vw,64px) clamp(20px,5vw,64px)",
        borderTop: "1px solid #DFDAD0",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px,3vw,48px)" }}>
        <div
          style={{
            flex: "0 0 140px",
            fontFamily: "'Martian Mono', ui-monospace, monospace",
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#67625A",
            paddingTop: 5,
          }}
        >
          Record
        </div>
        <div style={{ flex: "1 1 min(100%,340px)", maxWidth: 860, display: "flex", flexDirection: "column" }}>
          {entries.map((entry, i) => (
            <div
              key={entry.title}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 28px",
                padding: i === 0 ? "0 0 20px" : i === entries.length - 1 ? "20px 0 0" : "20px 0",
                borderTop: i === 0 ? undefined : "1px solid #DFDAD0",
              }}
            >
              <div
                style={{
                  flex: "0 0 108px",
                  fontFamily: "'Martian Mono', ui-monospace, monospace",
                  fontSize: 11,
                  letterSpacing: "0.08em",
                  color: "#67625A",
                  paddingTop: 5,
                }}
              >
                {entry.date}
              </div>
              <div style={{ flex: "0 0 min(100%,190px)", fontSize: 19, fontWeight: 500, letterSpacing: "-0.01em" }}>
                {entry.title}
              </div>
              <div style={{ flex: "1 1 min(100%,260px)", fontSize: 15.5, lineHeight: 1.65, color: "#55514A" }}>
                {entry.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecordSection;
