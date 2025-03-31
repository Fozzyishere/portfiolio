import Card from "./Card";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface InfoCardProps {
  //Next image properties
  src: StaticImageData;
  alt: string;
  //Text properties
  descText: string;
  techUsedText: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({
  src,
  alt,
  descText,
  techUsedText,
}) => {
  return (
    <div className="mt-10 flex flex-row items-center justify-cente w-full mx-5">
      <Card className="flex flex-row w-2/3">
        <div className="relative overflow-hidden rounded-sm content-center">
          <Image src={src} alt={alt} width={500} height={500} />
        </div>
        <div className="ml-4 flex flex-col w-3/4 h-64">
          <h2 className="text-xl font-semibold text-gruvbox-purple-dark mb-2 mt-4">
            {alt}
          </h2>
          <p className="text-gruvbox-fg1 text-sm">{descText}</p>
          <div className="mt-3 flex gap-2">
            {techUsedText.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gruvbox-bg2 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InfoCard;
