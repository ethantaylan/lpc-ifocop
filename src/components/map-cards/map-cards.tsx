import React from "react";
import { useGlobalContext } from "../../context/context";

interface MapCardsProps {
  city: string;
  adresse: string;
  number: string;
  postcode?: number;
  onClick?: () => void;
}
export const MapCards: React.FC<MapCardsProps> = ({
  city,
  adresse,
  number,
  onClick,
}) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const theme = useGlobalContext();

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? "rgb(245, 240,240)" : "white",
        borderBottom: "1px solid beige",
      }}
      className="cursor-pointer w-100 d-flex p-4"
    >
      <div className="d-flex flex-column justify-content-center">
        <h5 className="primary">
          <span className="bold">{city}</span>
        </h5>
        <span className="primary">
          {adresse}, {city}
          <br />
          <small>
            <strong className="d-flex my-3">{number}</strong>
          </small>
        </span>
      </div>
    </div>
  );
};
