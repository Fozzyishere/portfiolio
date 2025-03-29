import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-gruvbox-bg0 text-gruvbox-fg4 flex flex-wrap items-center mx-auto p-4">
        <ul className="ml-auto flex flex-row">
          <li className="mr-6 hover:text-gruvbox-fg2">
            <a href="#projects">Projects</a>
          </li>
          <li className="mr-6 hover:text-gruvbox-fg2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
