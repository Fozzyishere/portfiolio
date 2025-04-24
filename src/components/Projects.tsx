import React from "react";
import Typewriter from "./ui/Typewriter";
import InfoCard from "./ui/InfoCard";
import PortfolioImg from "../img/portfolio.png";
import VivaMQ from "../img/vivamq.png";
import ImageConverter from "../img/image-converter.png";

export const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center w-full h-full py-10 md:py-20"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl text-gruvbox-blue-light mb-2 sm:mb-4 italic">
        <Typewriter string="Projects" typeSpeed={60} />
      </h1>
      <h3 className="text-sm sm:text-base md:text-lg text-gruvbox-fg0 text-center mb-6">
        Some cool stuff I made.
      </h3>
      <div className="flex flex-col w-full max-w-4xl gap-6 md:gap-8">
        <InfoCard
          src={PortfolioImg}
          alt="Portfolio"
          descText="My personal portfolio website built with Next.js and Tailwind CSS."
          techUsedText={["Next.js", "Tailwind"]}
        />
        <InfoCard
          src={VivaMQ}
          alt="VivaMQ"
          descText="VivaMQ is an AI-based question generator for the Viva exam in Maquarie University. I worked on the project as a front-end technical lead."
          techUsedText={["Next.js", "Tailwind", "Shadcn", "Zustand"]}
        />
        <InfoCard
          src={ImageConverter}
          alt="Image Converter"
          descText="Since all free image converter are filled with ads, I decided to build my own. It utilises FFmpeg to efficiently convert images to different formats."
          techUsedText={["React Native", "Tailwind", "FFmpeg"]}
        />
      </div>
      <h3 className="text-sm sm:text-base md:text-lg text-gruvbox-fg0 pt-6 md:pt-10 text-center">
        Smaller projects can be found on my{" "}
        <a
          href="../public/resume.pdf"
          className="text-gruvbox-red-dark hover:text-gruvbox-red-light"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </h3>
    </div>
  );
};
