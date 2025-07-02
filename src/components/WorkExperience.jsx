import React from "react";

// Sample logos URLs (replace with your real logo image URLs)
const experiences = [
  {
    role: "Software Developer Intern",
    company: "Brightsparks Academy",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Facebook_Logo_2023.png/120px-Facebook_Logo_2023.png", // replace with actual logo URL
    location: "Hamilton, ON",
    date: "June 2024 – August 2024",
    details: [
      "Implemented front-end features using React.js.",
      "Contributed to back-end APIs with Firebase & Firestore.",
      "Developed Android and iOS features using React Native.",
    ],
  },
  {
    role: "Engineering Intern",
    company: "Mac Formula Electric",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Microsoft_logo_%282012%29.svg/120px-Microsoft_logo_%282012%29.svg.png", // replace with actual logo URL
    location: "Hamilton, ON",
    date: "Jan 2024 – April 2024",
    details: [
      "Worked on battery monitoring system firmware using C++.",
      "Integrated Simulink models with embedded software.",
      "Tested state machine behaviors with Google Test.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "2rem",
        position: "relative",
        zIndex: 10,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#2563eb",
          borderBottom: "4px solid #60a5fa",
          display: "inline-block",
          marginBottom: "3rem",
        }}
      >
        Work Experience
      </h2>

      <div
        style={{
          position: "relative",
          paddingLeft: "70px",
          borderLeft: "4px solid #60a5fa",
        }}
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: "3rem",
              position: "relative",
              paddingLeft: "3rem",
              paddingRight: "1rem",
              backgroundColor: "#f0f4f8",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(37, 99, 235, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(37, 99, 235, 0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.1)";
            }}
          >
            {/* Timeline Dot with company logo */}
            <div
              style={{
                position: "absolute",
                left: "-70px",
                top: "20px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "4px solid #60a5fa",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <img
                src={exp.companyLogo}
                alt={`${exp.company} logo`}
                style={{ maxWidth: "80%", maxHeight: "80%" }}
                onError={(e) => {
                  e.target.style.display = "none"; // hide if broken image link
                }}
              />
            </div>

            <h3
              style={{
                fontSize: "1.6rem",
                fontWeight: "600",
                color: "#2563eb",
                marginBottom: "0.25rem",
              }}
            >
              {exp.role}{" "}
              <span style={{ fontWeight: "normal", color: "#555" }}>
                @ {exp.company}
              </span>
            </h3>
            <p
              style={{
                fontStyle: "italic",
                color: "#777",
                marginBottom: "1rem",
                userSelect: "none",
              }}
            >
              {exp.location} | {exp.date}
            </p>
            <ul style={{ paddingLeft: "1.25rem", color: "#444" }}>
              {exp.details.map((detail, i) => (
                <li key={i} style={{ marginBottom: "0.5rem" }}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

