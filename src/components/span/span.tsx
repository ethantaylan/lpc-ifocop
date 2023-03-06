import React, { PropsWithChildren } from "react";
import { useGlobalContext } from "../../context/context";

interface SpanProps {
  children: any;
  className?: string;
  style?: any;
  id?: string;
  onClick?: () => void;
}

export const Span: React.FC<SpanProps> = ({
  children,
  className,
  style,
  id,
  onClick,
}) => {
  const { darkMode, textPrimary } = useGlobalContext();

  return (
    <span onClick={onClick} id={id} style={style} className={`${className}`}>
      {children}
    </span>
  );
};
