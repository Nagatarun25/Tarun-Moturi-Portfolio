// Skills.jsx
// Make sure you installed:
// npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCubes,
  faScrewdriverWrench,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: faCode,
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "HTML/CSS",
        "C++",
        "C#",
        "TypeScript",
        "SQL",
        "MATLAB",
        "Bash",
        "Allen-Bradley PLC",
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: faCubes,
      skills: [
        "NodeJS",
        "ReactJS",
        "Flask",
        "PyTorch",
        "TensorFlow",
        "Matplotlib",
        "NumPy",
      ],
    },
    {
      title: "Tools",
      icon: faScrewdriverWrench,
      skills: [
        "PlatformIO",
        "SOLIDWORKS",
        "AutoCAD",
        "Git",
        "GitHub",
        "Linux",
        "Docker",
        "Simulink",
        "CMake",
        "Firebase",
        "AWS",
        "FreeRTOS",
        "CAN",
        "EasyEDA",
      ],
    },
    {
      title: "Hardware",
      icon: faMicrochip,
      skills: [
        "H-bridges",
        "HC-05 Bluetooth Module",
        "ESP32",
        "Raspberry Pi 3",
        "STM32",
        "Arduino",
        "Analog Discovery 3",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      {/* Header styled like your Projects header */}
      <div className="sectionHeader">
        <h2 className="sectionTitle">Skills</h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skills-row">
            <div className="skills-labelBox">
              <div className="skills-labelText">{cat.title}</div>
              <FontAwesomeIcon icon={cat.icon} className="skills-labelIcon" />
            </div>

            <ul className="skills-list">
              {cat.skills.map((s) => (
                <li key={s} className="skill-pill">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
