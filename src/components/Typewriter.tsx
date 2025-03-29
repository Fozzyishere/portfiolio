'use client'

import { ReactTyped } from "react-typed";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

interface TypewriterProps {
  string: string;
  typeSpeed: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ string, typeSpeed }) => {
  return (
    <div className="flex items-center flex-row">
      <FaChevronRight className="text-blue-800 transform-[scale(0.6)]"/>
      <ReactTyped strings={[string]} typeSpeed={typeSpeed}></ReactTyped>
    </div>
  );
};

export default Typewriter;
