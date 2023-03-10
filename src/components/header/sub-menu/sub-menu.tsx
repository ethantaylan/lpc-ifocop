import React from "react";
import classNames from "classnames";

interface SubMenuProps {
  className?: string;
  firstLabel: string | React.ReactElement;
  secondLabel: string | React.ReactElement;
  thirdLabel: string | React.ReactElement;
}

const subMenuClasses = classNames(
  "navbar-nav",
  "d-flex",
  "flex-row",
  "mr-auto"
);

const liClasses = classNames("nav-item", "nav-link", "pe-3", "cursor-pointer");

export const SubMenu: React.FC<SubMenuProps> = ({
  className,
  firstLabel,
  secondLabel,
  thirdLabel,
}) => {
  return (
    <small>
      <ul className={`${subMenuClasses} ${className}`}>
        <li className={liClasses}>{firstLabel}</li>
        <li className={liClasses}>{secondLabel}</li>
        <li className={liClasses}>{thirdLabel}</li>
      </ul>
    </small>
  );
};
