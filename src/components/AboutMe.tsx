import React from "react";
import Typewriter from "./ui/Typewriter";

export const AboutMe = () => {
  return (
    <div className="about-me text-gruvbox-fg1 flex flex-col items-center justify-center pt-25">
      <h1 className="text-2xl text-gruvbox-purple-dark mb-4 italic ">
        <Typewriter string="About me" typeSpeed={60} />
      </h1>
      <div className="w-1/2">
        <p>
          My name is{" "}
          <span className="text-gruvbox-green-light">Quoc Huy Pham</span>. I
          also used to go by Daniel back in high school but rarely uses it
          nowadays.
        </p>
        <p className="mt-10">
          I am currently a{" "}
          <span className="text-gruvbox-green-light">final year student</span> @{" "}
          <span className="text-gruvbox-green-light">Macquarie University</span>{" "}
          doing Software Engineering.
        </p>
        <p className="mt-10">
          Hobbies isn&apos;t something I&apos;m rich at but I do enjoy playing{" "}
          <span className="text-gruvbox-green-light">video games</span>,
          especially those with a good story. The only sport that I enjoy is{" "}
          <span className="ttext-gruvbox-green-light">badminton</span>, but
          since moving to Sydney, I haven&apos;t had the chance to play it yet.
        </p>
        <p className="mt-10">
          I am also a huge fan of{" "}
          <span className="text-gruvbox-green-light">programming</span> and{" "}
          <span className="text-gruvbox-green-light">technology</span>. I love
          to learn new things and I am always up for a challenge. I am currently
          looking for an internship to gain some real-world experience.
        </p>
        <p className="mt-10">
          My <span className="text-gruvbox-green-light">skillset</span> so far
          includes:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Java</li>
          <li>Python</li>
          <li>git</li>
          <li>C / Assembly (in game hacking)</li>
        </ul>
        No Backend experience yet, but I am looking forward to learning it in
        the near future :D
      </div>
    </div>
  );
};
