import React from "react";

export default function Resume() {
  return (
    <section
      id="resume"
      style={{
        padding: "5rem 1rem",
        maxWidth: "960px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#2563eb",
          borderBottom: "4px solid #60a5fa",
          display: "inline-block",
          marginBottom: "2rem",
        }}
      >
        Resume
      </h2>

      {/* Embedded resume as image */}
      <div
        style={{
          width: "100%",
          borderRadius: "1rem",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          marginBottom: "2rem",
        }}
      >
        <img
          src="Naga_Tarun_Moturi_Resume-1.png"
          alt="Resume Preview"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Download button */}
      <a
        href="/resume.pdf"
        download="Naga_Tarun_Moturi_Resume.pdf"
        style={{
          display: "inline-block",
          backgroundColor: "#2563eb",
          color: "white",
          padding: "0.75rem 2rem",
          borderRadius: "9999px",
          fontWeight: "bold",
          textDecoration: "none",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#3b82f6")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#2563eb")}
      >
        Download Full PDF
      </a>
    </section>
  );
}
