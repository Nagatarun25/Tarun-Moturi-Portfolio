// Navbar.jsx
const links = ["home", "work-experience", "projects", "skills","resume", "contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 select-none cursor-default">Tarun Moturi</h1>
        <ul className="flex gap-8 font-semibold text-slate-700 uppercase tracking-wide">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="hover:text-blue-600 transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
