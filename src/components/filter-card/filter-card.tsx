import React, { useState } from "react";
import { useGlobalContext } from "../../context/context";

export interface FilterCardProps {
  filterLabel: string;
  isAccessory?: boolean | null;
  children?: React.ReactElement;
  onClick?: () => void;
}

export const FilterCard: React.FC<FilterCardProps> = ({
  filterLabel,
  children,
  onClick,
}) => {
  const theme = useGlobalContext();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={children && onClick}
      className="w-100"
      style={{
        backgroundColor: isHovered ? theme.secondary : "transparent",
        color: theme.primary,
        padding: "1rem",
        cursor: "pointer",
        transition: "0.3s",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bold m-0 d-flex align-items-center"
        style={{ whiteSpace: "nowrap" }}
      >
        <h6 className={`m-0 ${children && "semi-bold me-3"}`}>
          {filterLabel}
          <span className="ms-2">{children}</span>
        </h6>
      </div>
    </div>
  );
};
