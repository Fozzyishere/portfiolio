import React from "react";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto text-left">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">
          <Typewriter string="Quoc Huy Pham" typeSpeed={100} />
        </h1>
        <p className="text-l text-gray-600 mb-8">
          A guy trying to learn and build things.
        </p>
      </div>
    </div>
  );
};

export default Hero;
