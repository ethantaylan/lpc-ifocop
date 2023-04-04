import React from "react";
import { EvenementCards } from "./evenements-cards/evenements-cards";
import Event1 from "../../assets/events/event-1.jpg";
import Event2 from "../../assets/events/event-2.jpg";
import Event3 from "../../assets/events/event-3.jpg";

export interface EventsProps {
  img: any;
  description: string;
  title: string;
  moreInfos: string;
  index: number;
  objectPosition?: string;
}

const Events: EventsProps[] = [
  {
    title: "Ouverture de la boutique",
    img: Event1,
    description:
      "L'événement d'ouverture de la boutique 'Le Petit Commerce' a eu lieu lors d'une soirée élégante et conviviale, qui a laissé des souvenirs inoubliables pour tous les invités présents. Le champagne cocktail a été offert dès l'arrivée, offrant une touche festive pour célébrer l'ouverture de la boutique.",
    moreInfos:
      "Les invités ont été enchantés de découvrir les produits proposés par la boutique, et ont été accueillis avec chaleur et professionnalisme par les propriétaires et les représentants de la boutique. Une ambiance musicale élégante a ajouté à l'atmosphère de la soirée, tandis que des mets légers ont été servis pour satisfaire les papilles gustatives des convives. Dans l'ensemble, la soirée d'ouverture de la 'boutique Le Petit Commerce' a été un succès retentissant, offrant une soirée mémorable à tous ceux qui y ont assisté et marquant le début d'une nouvelle aventure pour les propriétaires de la boutique.",
    index: 0,
  },
  {
    title: "Vintage March",
    img: Event2,
    description:
      "Notre boutique de vêtements a récemment organisé un événement shopping vintage qui a été un véritable succès. Les clients ont été ravis de découvrir notre collection de vêtements et d'accessoires vintage soigneusement sélectionnés pour l'occasion.",
    moreInfos:
      "Nous avons créé une ambiance vintage unique en décorant notre boutique avec des accessoires rétro et en diffusant de la musique de l'époque. Les clients ont pu se plonger dans l'univers vintage tout en faisant du shopping. Nous avons également offert des rafraîchissements, ce qui a ajouté à l'ambiance festive de l'événement. Dans l'ensemble, notre événement shopping vintage a été un véritable succès, offrant à nos clients une expérience de shopping mémorable et unique.",
    index: 1,
  },
  {
    title: "Black Friday",
    img: Event3,
    description:
      "La semaine dernière, notre boutique de vêtements a organisé un événement exceptionnel à l'occasion du Black Friday. Les clients ont eu la chance de bénéficier de réductions incroyables sur une large sélection de nos produits.",
    moreInfos:
      "Le jour du Black Friday a été marqué par une affluence record dans notre boutique, et notre équipe était prête à accueillir les clients et à répondre à toutes leurs questions. Les clients ont pu découvrir notre collection de vêtements de qualité supérieure et profiter des réductions exceptionnelles sur une variété de produits Notre équipe a travaillé dur pour offrir aux clients une expérience de shopping exceptionnelle, en s'assurant que tous les clients bénéficient d'une assistance et d'un service de qualité tout au long de leur visite. Dans l'ensemble, notre événement Black Friday a été un véritable succès, offrant à nos clients l'opportunité de bénéficier de réductions incroyables sur nos produits de qualité supérieure. Nous sommes ravis d'avoir pu offrir une expérience de shopping mémorable à nos clients et espérons les accueillir à nouveau dans notre boutique très bientôt.",
    index: 2,
    objectPosition: "50% 70%",
  },
];

export const Evenements: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>();

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? undefined : index);
  };

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-start">
      {Events.map((event: EventsProps, index) => (
        <EvenementCards
          key={index}
          label={"Plus d'infos"}
          description={event.description}
          img={event.img}
          title={event.title}
          className={"m-3 w-25"}
          moreInfos={event.moreInfos}
          showMoreInfos={activeIndex === index}
          onClick={() => handleClick(index)}
          objectPosition={event.objectPosition}
          withoutButton={true}
        />
      ))}
    </div>
  );
};
