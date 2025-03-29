import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white text-blue-700 flex flex-wrap items-center mx-auto p-4">
        <ul className="ml-auto flex flex-row">
          <li className="mr-6 hover:text-blue-800">
            <a href="#projects">Projects</a>
          </li>
          <li className="mr-6 hover:text-blue-800">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
