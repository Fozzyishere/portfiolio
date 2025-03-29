import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="bg-gruvbox-bg1 rounded-sm shadow-md p-4">{children}</div>
  );
};

export default Card;
