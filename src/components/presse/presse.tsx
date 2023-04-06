import React from "react";
import {
  EvenementCards,
  EvenementCardsProps,
} from "../evenements/evenements-cards/evenements-cards";
import { EventsProps } from "../evenements/evenements";
import Press1 from "../../assets/press/1.jpeg";
import Press2 from "../../assets/press/2.jpeg";
import { useMatches } from "../../hooks/use-matches";

export const PresseArray: EventsProps[] = [
  {
    title: "Nouvelle collection printemps-été",
    img: Press1,
    description:
      "La boutique de vêtements 'Le Petit Commerce' est fière de présenter sa nouvelle collection printemps-été. Cette collection offre des designs modernes et tendance pour les femmes et les hommes, avec une sélection de vêtements confortables pour le quotidien et des tenues élégantes pour les occasions spéciales. La nouvelle collection est disponible dès maintenant en magasin et en ligne, offrant une expérience de shopping facile et agréable pour tous les clients.",
    moreInfos:
      "La nouvelle collection printemps-été a été conçue avec soin pour répondre aux besoins de la clientèle de 'Le Petit Commerce'. Les designs sont inspirés des dernières tendances de la mode, tout en offrant des vêtements confortables et pratiques pour le quotidien. Les matières utilisées sont de qualité supérieure, pour garantir une tenue durable et résistante. Les clients peuvent découvrir la nouvelle collection en magasin ou en ligne, et bénéficier de conseils personnalisés pour trouver les tenues qui leur conviennent le mieux.",
    index: 1,
  },
  {
    title: "Partenariat avec un designer local",
    img: Press2,
    description:
      "La boutique de vêtements 'Le Petit Commerce' est fière d'annoncer son partenariat avec un designer local pour sa prochaine collection. Le designer, connu pour ses créations innovantes et durables, travaillera en étroite collaboration avec les propriétaires de la boutique pour créer une collection exclusive de vêtements pour femmes et hommes. Cette collaboration est une occasion unique de promouvoir le talent local et d'offrir des designs uniques et originaux à la clientèle de 'Le Petit Commerce'.",
    moreInfos:
      "Le partenariat avec le designer local est une étape importante pour 'Le Petit Commerce'. En travaillant avec un talent local, la boutique contribue à promouvoir l'industrie de la mode locale et à offrir des designs uniques et innovants à sa clientèle. La collection exclusive créée dans le cadre de ce partenariat sera disponible en magasin et en ligne, offrant une expérience de shopping unique et mémorable pour les clients. Les propriétaires de la boutique sont ravis de cette collaboration et espèrent offrir de nouvelles opportunités pour promouvoir le talent local dans le futur.",
    index: 2,
  },
];

export const Presse: React.FC = () => {
  const matches = useMatches();

  const [activeIndex, setActiveIndex] = React.useState<number>();

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? undefined : index);
  };

  return (
    <div className="w-100">
      <div
        className={`w-100 d-flex flex-${
          matches ? "column" : "row"
        } justify-content-center align-items-center`}
      >
        {PresseArray.map((press: any, index: number) => (
          <EvenementCards
            key={index}
            label={"Voir plus"}
            description={press.description}
            img={press.img}
            title={press.title}
            moreInfos={press.moreInfos}
            showMoreInfos={activeIndex === index}
            onClick={() => handleClick(index)}
            className="m-3"
            withoutButton={true}
          />
        ))}
      </div>
    </div>
  );
};
