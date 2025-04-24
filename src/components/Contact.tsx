import React from "react";
import Typewriter from "./ui/Typewriter";

export const Contact = () => {
  return (
    <div id="contact" className="text-gruvbox-fg1 flex flex-col items-center justify-center py-10 md:py-20">
      <h1 className="text-2xl text-gruvbox-blue-light mb-4 italic">
        <Typewriter string="Contact info" typeSpeed={60} />
      </h1>
      <div>
        <ul className="list-disc list-inside mt-2">
          <li>
            Email:{" "}
            <a
              href="mailto:danielpham13092002@gmail.com"
              className="text-gruvbox-gray-light underline"
            >
              danielpham13092002@gmail.com
            </a>
          </li>
          <li>
            Github:{" "}
            <a
              href="https://github.com/Fozzyishere"
              className="text-gruvbox-gray-light underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fozzyishere
            </a>
          </li>
          <li>
            Resume:{" "}
            <a
              href="../public/QUOCHUY_PHAM_Resume_4.pdf"
              className="text-gruvbox-gray-light underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
