import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Typewriter({ text, speed = 120 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1
      className="text-5xl font-extrabold leading-tight whitespace-nowrap select-none"
      style={{ overflow: "visible" }}
    >
      {displayed}
      <span className="blinking-cursor">|</span>
    </h1>
  );
}

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-wrap items-center justify-center gap-16 min-h-[90vh] px-6 relative z-10"
    >
      <div className="max-w-md text-center sm:text-left flex-shrink-0">
        <Typewriter text="Naga Tarun Moturi" speed={120} />
        <p className="text-xl font-semibold text-blue-600 mb-3">
          Automation Engineering Student
        </p>
        <p className="text-gray-700 mb-6 max-w-sm">
          McMaster University • Second Year
          <br />
          Embedded Systems | IoT | Software Engineering
        </p>
        <div className="flex space-x-8 justify-center sm:justify-start text-blue-600 text-3xl">
          <a
            href="https://linkedin.com/in/tarun-moturi"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Nagatarun25"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-800 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:nagatarunmoturi@gmail.com"
            aria-label="Email"
            className="hover:text-blue-800 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <img
        src="profile pic.jpg"
        alt="Tarun Moturi"
        className="w-80 h-80 rounded-full border-8 border-blue-400 object-cover shadow-lg animate-floatUpDown flex-shrink-0"
        style={{ boxShadow: "0 10px 30px rgba(37, 99, 235, 0.7)" }}
      />
    </section>
  );
}
