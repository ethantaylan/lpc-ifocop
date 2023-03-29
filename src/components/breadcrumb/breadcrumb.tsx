import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";

interface BreadcrumbProps {
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Breadcrumbs
      className={className}
      separator={<span>/</span>}
      aria-label="breadcrumb"
    >
      <span
        onClick={() => handleClick(0)}
        className={` ${activeIndex === 0 && "primary bold"} cursor-pointer`}
      >
        Homme
      </span>
      <span
        onClick={() => handleClick(1)}
        className={` ${activeIndex === 1 && "primary bold"} cursor-pointer`}
      >
        Femme
      </span>
    </Breadcrumbs>
  );
};
