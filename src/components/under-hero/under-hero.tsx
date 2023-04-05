import React from "react";
import { Badge } from "../badge/badge";
import { SlBadge } from "react-icons/sl";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdSpeed } from "react-icons/md";
import { useMatches } from "../../hooks/use-matches";

export const UnderHero: React.FC = () => {
  const matches = useMatches();

  return (
    <div className="d-flex flex-column">
      <div className="py-5 d-flex tertiary flex-row justify-content-around align-items-center">
        <Badge
          icon={<SlBadge size={matches ? 20 : 30} />}
          label={"Produits originaux"}
        />
        <Badge
          icon={<AiOutlineCheckCircle size={matches ? 20 : 30} />}
          label={"Garantie à vie"}
        />
        <Badge
          icon={<MdSpeed size={matches ? 20 : 30} />}
          label={"Livraison rapide"}
        />
      </div>
    </div>
  );
};
