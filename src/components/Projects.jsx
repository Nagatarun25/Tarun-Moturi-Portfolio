export default function Projects() {
  const projects = [
    {
      title: "Embedded IoT Device",
      description:
        "Low-power sensor hub with real-time monitoring and cloud sync. Add as much descriptive text here as you want — the card height will grow automatically to fit it.",
      tech: ["C++", "STM32", "FreeRTOS"],
      img: "/projects/iot.jpg",
      link: "https://github.com/Nagatarun25/iot-device",
    },
    {
      title: "Battery Management System",
      description:
        "CAN-based BMS with live cell monitoring and error detection. This text is longer to show how the card grows dynamically with content.",
      tech: ["C++", "CAN", "STM32"],
      img: "/projects/bms.jpg",
      link: "https://github.com/Nagatarun25/bms",
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
