const groups = [
  {
    title: "Languages & frameworks",
    text: "Python · TypeScript · FastAPI · Next.js · React · React Native",
  },
  {
    title: "Data & ML",
    text: "pandas · scikit-learn · LLM orchestration · logistic regression · class imbalance · model evaluation",
  },
  {
    title: "Systems",
    text: "PostgreSQL · Redis · Celery · SQL · async / asyncio · REST API design",
  },
  {
    title: "Practices",
    text: "Typed Python · pytest · AI engineering · data visualisation · system design · Git",
  },
];

const StackSection = () => {
  return (
    <div
      id="stack"
      style={{
        maxWidth: 1240,
        margin: "0 auto",
        padding: "clamp(40px,5vw,64px) clamp(20px,5vw,64px) clamp(56px,7vw,96px)",
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
          Stack
        </div>
        <div style={{ flex: "1 1 min(100%,340px)", maxWidth: 860, display: "flex", flexDirection: "column" }}>
          {groups.map((group, i) => (
            <div
              key={group.title}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px 28px",
                padding: i === 0 ? "0 0 18px" : i === groups.length - 1 ? "18px 0 0" : "18px 0",
                borderTop: i === 0 ? undefined : "1px solid #DFDAD0",
              }}
            >
              <div style={{ flex: "0 0 min(100%,150px)", fontSize: 17, fontWeight: 500 }}>{group.title}</div>
              <div style={{ flex: "1 1 min(100%,300px)", fontSize: 15.5, lineHeight: 1.7, color: "#55514A" }}>
                {group.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StackSection;
