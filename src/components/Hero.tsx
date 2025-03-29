import React from "react";
import Typewriter from "./ui/Typewriter";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto text-left">
        <h1 className="flex flex-row text-5xl font-bold mb-4 text-gruvbox-aqua-dark">
          <FaChevronRight className="text-gruvbox-gray-dark transform-[scale(0.75)]" />
          <Typewriter string="Quoc Huy Pham" typeSpeed={60} />
        </h1>
        <p className="p-3 text-l text-gruvbox-fg1 mb-4 mt-4 leading-10">
          A mere sand in the ocean trying to earn the chance to be unique.
        </p>
      </div>
    </div>
  );
};

export default Hero;
