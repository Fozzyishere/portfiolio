import React from "react";
import Typewriter from "./ui/Typewriter";
import InfoCard from "./ui/InfoCard";
import PortfolioImg from "../img/portfolio.png";
import VivaMQ from "../img/vivamq.png";

export const Projects = () => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-2xl text-gruvbox-purple-dark mb-4 italic ">
        <Typewriter string="Projects" typeSpeed={60} />
      </h1>
      <h3 className="text-gruvbox-fg0">
        Some cool stuff I did throughout my journey so far
      </h3>
      <div className="flex flex-col">
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
      </div>
      <h3 className="text-gruvbox-fg0 pt-10">
        Smaller projects can be found on my{" "}
        <span className="text-gruvbox-red-dark hover:text-gruvbox-red-light">
          Resume
        </span>
      </h3>
    </div>
  );
};
