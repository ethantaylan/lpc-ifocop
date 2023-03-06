import React from "react";
import { Badge } from "../badge/badge";
import { SlBadge } from "react-icons/sl";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import { MdSpeed } from "react-icons/md";
import {
  FeedbackCard,
  FeedBackCardProps,
} from "../feedbacks/feedback-card/feedback-card";
import { Title } from "../title/title";



export const UnderHero: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      <div className="py-5 d-flex tertiary flex-row justify-content-around align-items-center">
        <Badge icon={<SlBadge size={30} />} label={"Produits originaux"} />
        <Badge
          icon={<AiOutlineCheckCircle size={30} />}
          label={"Garantie à vie"}
        />
        <Badge icon={<MdSpeed size={30} />} label={"Livraison rapide"} />
      </div>
    </div>
  );
};
