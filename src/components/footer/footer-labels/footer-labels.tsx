import React from "react";

interface FooterLabelsProps {


}

export const FooterLabels: React.FC<FooterLabelsProps> = () => {
  return (
    <div>
      <ul className="nav w-25 d-flex flex-column">
        <span className="bold">Info</span>
        <small>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </small>
      </ul>
    </div>
  );
};
