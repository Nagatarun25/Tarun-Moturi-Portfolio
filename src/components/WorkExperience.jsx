import React from "react";

const experiences = [
  {
    role: "Firmware & Software Engineering Intern",
    company: "Mac Formula Electric",
    companyLogo:
      "f1.jpg",
    location: "Hamilton, ON",
    date: "Jan 2024 – Present",
    details: [
      "I am currently working with the Mac Formula Electric team as an Embedded Firmware Developer, where I’m building real-time embedded systems using C++, MATLAB, and STM32 microcontrollers to optimize motor control and improve vehicle efficiency. A major part of my role involves converting Simulink-based battery management system models into embedded code that integrates smoothly with our vehicle’s low-level firmware. I collaborate with the battery integration team to design and test safety-critical features that enhance system reliability and ensure compliance with engineering standards. I also developed a modular interrupt hook system to enable responsive, event-driven behavior across the firmware, which plays a key role in improving the reliability and safety of our electric vehicle systems.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Brightsparks Academy",
    companyLogo: "image.png",
    location: "Cupertino, CA",
    date: "June 2024 – August 2024",
    details: [
      "At BrightSparks Academy, I worked as a Software Developer Intern where I was responsible for implementing front-end features using React.js to improve the user experience and interface across multiple educational platforms. I contributed to the back-end architecture by developing and managing APIs using Firebase and Firestore, ensuring seamless communication between the front and client sides. I also played a key role in developing and maintaining cross-platform mobile applications using React Native, supporting both Android and iOS devices. This involved contributing to the entire app development lifecycle, from early-stage conceptualization to deployment on the app stores, helping deliver polished and functional learning tools to end users.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: "1000px",
        margin: "3rem auto",
        padding: "0 1rem",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "2.75rem",
          fontWeight: "bold",
          color: "#2563eb",
          borderBottom: "4px solid #60a5fa",
          display: "inline-block",
          marginBottom: "2rem",
          userSelect: "none",
        }}
      >
        Work Experience
      </h2>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "2rem",
          paddingBottom: "1rem",
          scrollbarWidth: "thin",
          scrollbarColor: "#60a5fa #e0e7ff",
        }}
        className="work-experience-scroll"
      >
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{
              flex: "0 0 320px",
              backgroundColor: "#f9fbff",
              borderRadius: "20px",
              padding: "2rem 1.5rem 2.5rem",
              boxShadow:
                "0 10px 20px rgba(37, 99, 235, 0.15), 0 6px 6px rgba(37, 99, 235, 0.1)",
              scrollSnapAlign: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "default",
              userSelect: "none",
              perspective: "600px",
            }}
            className="experience-card"
            onMouseMove={(e) => {
              const card = e.currentTarget;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${
                -y * 0.05
              }deg) scale(1.03)`;
              card.style.boxShadow = "0 20px 40px rgba(37, 99, 235, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(37, 99, 235, 0.15), 0 6px 6px rgba(37, 99, 235, 0.1)";
            }}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                margin: "0 auto 1.5rem",
                borderRadius: "50%",
                backgroundColor: "#2563eb",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 6px 12px rgba(37, 99, 235, 0.3)",
                overflow: "hidden",
              }}
            >
              <img
                src={exp.companyLogo}
                alt={`${exp.company} logo`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>

            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#2563eb",
                marginBottom: "0.5rem",
                textAlign: "center",
              }}
            >
              {exp.role}
            </h3>

            <p
              style={{
                fontWeight: "500",
                color: "#555",
                marginBottom: "0.25rem",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              @ {exp.company}
            </p>

            <p
              style={{
                fontStyle: "italic",
                color: "#777",
                fontSize: "0.9rem",
                marginBottom: "1.25rem",
                textAlign: "center",
                userSelect: "none",
              }}
            >
              {exp.location} | {exp.date}
            </p>

            <ul
              style={{
                color: "#444",
                paddingLeft: "1rem",
                lineHeight: "1.4",
              }}
            >
              {exp.details.map((detail, i) => (
                <li key={i} style={{ marginBottom: "0.6rem" }}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <style>{`
        /* Scrollbar for Webkit */
        .work-experience-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .work-experience-scroll::-webkit-scrollbar-track {
          background: #e0e7ff;
          border-radius: 10px;
        }
        .work-experience-scroll::-webkit-scrollbar-thumb {
          background-color: #60a5fa;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
}
