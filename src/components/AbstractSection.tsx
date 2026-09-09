const AbstractSection = () => {
  return (
    <div
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
          Abstract
        </div>
        <div style={{ flex: "1 1 min(100%,340px)", maxWidth: 760 }}>
          <p style={{ margin: 0, fontSize: "clamp(16.5px,1.55vw,18.5px)", lineHeight: 1.7, color: "#26241F" }}>
            My work sits where a model meets a product: deciding what the model is actually asked to do,
            wiring it into the app around it, and working out how to tell whether the output is good
            enough to ship. The niche I keep coming back to is language models doing structured work,
            turning a rough idea into documentation, plans or analysis a person can act on directly,
            rather than chat for its own sake. Right now that means the AI layer inside a
            language-learning platform for an English school in Amman.
          </p>
          <p style={{ margin: "18px 0 0", fontSize: "clamp(16.5px,1.55vw,18.5px)", lineHeight: 1.7, color: "#26241F" }}>
            I also work on applied ML with messy tabular data, where the real problem is class imbalance
            and picking an evaluation metric that stays honest once the classes are skewed. I'm studying
            AI and Data Science at Al-Hussein Technical University and building outside it: hackathon
            projects (<span style={{ color: "#2A46C8", fontWeight: 500 }}>1st place, JoHackathon 2025</span>),
            client work, and models I write up publicly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbstractSection;
