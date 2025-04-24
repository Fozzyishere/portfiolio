import React from "react";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className="bg-gruvbox-bg0 text-gruvbox-fg4 flex flex-wrap items-center mx-auto p-4">
        <ul className="ml-auto flex flex-row">
          <li className="mr-6 hover:text-gruvbox-fg2">
            <a href="#about-me" onClick={e => { e.preventDefault(); scrollToSection("about-me"); }}>
              About Me
            </a>
          </li>
          <li className="mr-6 hover:text-gruvbox-fg2">
            <a href="#projects" onClick={e => { e.preventDefault(); scrollToSection("projects"); }}>
              Projects
            </a>
          </li>
          <li className="mr-6 hover:text-gruvbox-fg2">
            <a href="#contact" onClick={e => { e.preventDefault(); scrollToSection("contact"); }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
