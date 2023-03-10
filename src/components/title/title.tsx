import React from "react";

interface TitleProps {
  title: string;
  className?: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  span?: boolean;
}

export const Title: React.FC<TitleProps> = ({
  title,
  className,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
}) => {
  return (
    <React.Fragment>
      {h1 && <h1 className={`bold ${className}`}>{title}</h1>}
      {h2 && <h2 className={`bold ${className}`}>{title}</h2>}
      {h3 && <h3 className={`bold ${className}`}>{title}</h3>}
      {h4 && <h4 className={`bold ${className}`}>{title}</h4>}
      {h5 && <h5 className={`bold ${className}`}>{title}</h5>}
      {h6 && <h6 className={`bold ${className}`}>{title}</h6>}
      {span && <span className={`bold ${className}`}>{title}</span>}
    </React.Fragment>
  );
};
