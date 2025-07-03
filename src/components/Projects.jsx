export default function Projects() {
  const projects = [
    {
      title: "AI-Powered Automotive Dashboard",
      description:
        "I developed an AI-powered automotive dashboard using React and TypeScript to showcase the future of connected vehicle software. The project featured real-time predictive maintenance algorithms powered by machine learning, which helped reduce potential vehicle downtime by up to 40%. I also integrated a voice-controlled assistant using speech recognition and natural language processing to enable fully hands-free control for improved usability and safety. Alongside this, I built an intelligent navigation system that optimized traffic routes and fuel efficiency, demonstrating strong problem-solving skills within the automotive space.",
      tech: ["React.js", "TypeScript", "Machine Learning", "Natural Language Processing", "Speech Recognition APIs", "Git"],
      img: "ai.png",
      link: "https://github.com/Nagatarun25/iot-device",
    },
    {
      title: "Battery Monitor Project",
      description:
        "I engineered a modular C++ battery monitoring system modeled after a converted Simulink design for a Formula 1 racecar. The software managed state transitions through complex logic involving precharge sequencing, contactor control, and fault-handling overrides. I created unit tests using the Google Test framework to verify system behavior across 20+ scenarios, including transitions from initialization to startup, relay failures, low state-of-charge, and thermal faults. These tests helped ensure each subsystem responded safely and predictably under edge conditions, and I further validated performance by visualizing command vs. feedback signals over time using Matplotlib.",
      tech: ["C++", "Simulink", "STM32", "Google Test", "Matplotlib", "FSM", "Git"],
      img: "battery.png",
      link: "https://github.com/macformula/racecar/pull/380",
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <h2 className="text-4xl font-bold text-blue-600 mb-16 border-b-4 border-blue-300 inline-block pb-2">
        Projects
      </h2>

      <div className="flex flex-col gap-12">
        {projects.map(({ title, description, img, tech, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card group"
          >
            <img
              src={img}
              alt={title}
              className="project-img group-hover:scale-105 transition-transform duration-300"
            />
            <div className="project-info">
              <h3 className="text-2xl font-semibold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-gray-700 mb-4 break-words">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tech.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
