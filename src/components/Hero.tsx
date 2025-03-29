import React from "react";
import Typewriter from "./Typewriter";
import { FaChevronRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto text-left">
        <h1 className="flex flex-row text-5xl font-bold mb-4 text-gruvbox-aqua-dark">
          <FaChevronRight className="text-gruvbox-yellow-dark transform-[scale(0.6)]" />
          <Typewriter string="Quoc Huy Pham" typeSpeed={100} />
        </h1>
        <p className="text-l text-gruvbox-fg1 mb-4 mt-4">
          A guy trying to learn and build things.
        </p>
      </div>
    </div>
  );
};

export default Hero;
