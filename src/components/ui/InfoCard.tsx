import Card from "./Card";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface InfoCardProps {
  //Next image properties
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  //Text properties
  descText: string;
  techUsedText: string[];
}

const InfoCard: React.FC<InfoCardProps> = ({
  src,
  alt,
  width,
  height,
  descText,
  techUsedText,
}) => {
  return (
    <Card className="w-3xl flex flex-row">
      <div className="items-center justify-start">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-sm shadow-lg object-contain"
        />
      </div>
      <div className="ml-4 flex flex-col">
        <h2 className="text-xl font-semibold text-gruvbox-purple-dark mb-2">
          {alt}
        </h2>
        <p className="text-gruvbox-fg2 text-sm">{descText}</p>
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
  );
};

export default InfoCard;
