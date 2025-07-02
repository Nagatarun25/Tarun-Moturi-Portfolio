// App.jsx
import Navbar from "./components/Navbar";
import BackgroundShapes from "./components/BackgroundShapes";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <BackgroundShapes />
      <main>
        <Home />
        <WorkExperience />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
    </>
  );
}
