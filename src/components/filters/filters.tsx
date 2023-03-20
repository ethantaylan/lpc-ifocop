import React from "react";
import { useGlobalContext } from "../../context/context";

export interface FiltersProps {
  filter: string | null;
  isAccessory?: boolean | null;
  children?: React.ReactElement;
  onClick?: () => void;
  ref?: any;
}

export const Filters: React.FC<FiltersProps> = ({
  filter,
  children,
  onClick,
  ref,
}) => {
  const theme = useGlobalContext();
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      className="w-100 p-2"
      id="filter-container"
      ref={ref}
      style={{
        backgroundColor: isHovered ? theme.secondary : "transparent",
        color: theme.primary,
        cursor: "pointer",
        transition: "0.3s",
        borderRadius: 6,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="bold m-0 d-flex align-items-center"
        style={{ whiteSpace: "nowrap" }}
      >
        <h6 id="filter" className={`m-0 ${children && "semi-bold me-3"}`}>
          {filter}
        </h6>
        <span className="ms-2">{children}</span>
      </div>
    </div>
  );
};
