import React from "react";
import { useGlobalContext } from "../../context/context";
import { useMatches } from "../../hooks/use-matches";

export interface BadgeProps {
  icon: React.ReactElement;
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ icon, label }) => {
  const matches = useMatches();

  return (
    <div className="d-flex flex-column align-items-center">
      <div
        style={{
          backgroundColor: "rgba(234, 223, 216, 0.4)",
          borderRadius: "100%",
        }}
        className="p-4 mb-4"
      >
        <span className="mb-3">{icon}</span>
      </div>
      <h6 className="semi-bold text-center mx-2">{label}</h6>
    </div>
  );
};
