
export default function Skills() {
  const skills = [
    "Python", "Java", "JavaScript", "HTML/CSS", "React.js", "C++", "C#", "TypeScript", "SQL", "NoSQL", "CMake", "MATLAB",
    "NumPy", "Arduino", "Node.js", "Embedded Firmware (STM32, AVR)", "Git", "GitHub", "CAD", "Electronics", "Linux", "Bash", "Simulink", "ESP32", "Raspberry Pi 3"
  ];
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
}
