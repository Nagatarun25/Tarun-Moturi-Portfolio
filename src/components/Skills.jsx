// Skills.jsx
export default function Skills() {
  const skills = [
    "C++", "Embedded Systems", "IoT Development", "React.js",
    "Tailwind CSS", "Git & GitHub", "Linux", "FreeRTOS", "Python"
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
