import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        background: "#FAF8F3",
        color: "#1A1815",
        fontFamily: "Archivo, 'Helvetica Neue', Helvetica, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "'Martian Mono', ui-monospace, monospace",
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#67625A",
            marginBottom: 16,
          }}
        >
          404
        </p>
        <h1 style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
          This page doesn't exist.
        </h1>
        <a href="/" style={{ color: "#2A46C8", borderBottom: "1px solid #2A46C8", paddingBottom: 2 }}>
          Return to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
