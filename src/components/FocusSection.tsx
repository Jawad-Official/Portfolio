const rows = [
  {
    title: "AI engineering",
    text: "Taking a model from prompt and pipeline through to a running product: the generation layer, the service around it, and the checks that keep the output usable.",
  },
  {
    title: "LLM pipelines",
    text: "Structured output, retrieval over private corpora, and evaluation harnesses: the Gemini pipeline behind Astrozen, taken further.",
  },
  {
    title: "Applied ML",
    text: "Tabular modelling with pandas and scikit-learn: logistic regression, class imbalance, evaluation that survives scrutiny.",
  },
];

const FocusSection = () => {
  return (
    <div
      id="focus"
      style={{
        maxWidth: 1240,
        margin: "0 auto",
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
          Current focus
        </div>
        <div style={{ flex: "1 1 min(100%,340px)", maxWidth: 860, display: "flex", flexDirection: "column" }}>
          {rows.map((row, i) => (
            <div
              key={row.title}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px 32px",
                padding: i === 0 ? "0 0 20px" : "20px 0",
                borderTop: i === 0 ? undefined : "1px solid #DFDAD0",
              }}
            >
              <div style={{ flex: "0 0 min(100%,260px)", fontSize: 19, fontWeight: 500, letterSpacing: "-0.01em" }}>
                {row.title}
              </div>
              <div style={{ flex: "1 1 min(100%,300px)", fontSize: 16, lineHeight: 1.65, color: "#55514A" }}>
                {row.text}
              </div>
            </div>
          ))}
          <div
            style={{
              marginTop: 28,
              padding: "16px 18px",
              background: "#EDEFFA",
              fontSize: 15,
              lineHeight: 1.6,
              color: "#1A2E9E",
            }}
          >
            Open to research, ML/AI engineering, product and data roles: internships, fellowships or
            part-time work. Amman or remote.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
