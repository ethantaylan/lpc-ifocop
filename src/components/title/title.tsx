import React from "react";

interface TitleProps {
  title: string;
  className: string;
}

export const Title: React.FC<TitleProps> = ({ title, className }) => {
  return (
    <p className={`text-center primary ${className}`}>
      <h1 className="bold">{title}</h1>
    </p>
  );
};
