import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-white text-blue-700 flex flex-wrap items-center mx-auto p-4">
        <ul className="ml-auto flex flex-row">
          <li className="p-2">About</li>
          <li className="p-2">Projects</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
