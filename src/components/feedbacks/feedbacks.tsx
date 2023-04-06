import React from "react";
import { Title } from "../title/title";
import { FeedbackCard, FeedBackCardProps } from "./feedback-card/feedback-card";

export interface FeedbacksProps {
  forHomePage: boolean;
}
export const Feedbacks: React.FC<FeedbacksProps> = ({ forHomePage }) => {
  const feedbacks: FeedBackCardProps[] = [
    {
      userName: "Hugo. C",
      text: "J'aime beaucoup ce site pour sa grande variété de vêtements tendances. Les descriptions des articles sont très précises !",
      starValue: 5,
      date: "01/12/2022",
    },
    {
      userName: "Thomas. F",
      text: "Service rapide et efficace !",
      starValue: 4,
      date: "18/11/2022",
    },
    {
      userName: "Alexandre. F",
      text: "J'adore ce site ! Les vêtements sont magnifiques et de très bonne qualité !",
      starValue: 5,
      date: "20/10/2022",
    },
    {
      userName: "Emma. E",
      text: "Très satisfaite du service client !",
      starValue: 5,
      date: "14/09/2022",
    },
    {
      userName: "Angelique. T",
      text: "J'ai commandé plusieurs articles sur ce site et j'ai été impressionné par la qualité des produits !",
      starValue: 4,
      date: "02/08/2022",
    },
    {
      userName: "Sophie. L",
      text: "Je suis une cliente fidèle depuis plusieurs années, et je n'ai jamais été déçue !",
      starValue: 5,
      date: "25/07/2022",
    },
    {
      userName: "Jean. M",
      text: "Livraison rapide et articles de qualité, que demander de plus ?",
      starValue: 5,
      date: "19/06/2022",
    },
    {
      userName: "Laure. B",
      text: "Le service client est très réactif et a su répondre à toutes mes questions.",
      starValue: 4,
      date: "09/05/2022",
    },
    {
      userName: "Olivier. D",
      text: "Je recommande vivement ce site à tous mes amis !",
      starValue: 5,
      date: "02/04/2022",
    },
    {
      userName: "Marie. P",
      text: "Les prix sont très compétitifs, et la qualité est au rendez-vous !",
      starValue: 4,
      date: "24/03/2022",
    },
    {
      userName: "Luc. G",
      text: "Je suis très satisfait de mes achats sur ce site, je reviendrai !",
      starValue: 5,
      date: "17/03/2022",
    },
    {
      userName: "Julie. T",
      text: "Les vêtements sont conformes aux descriptions, et la livraison est rapide.",
      starValue: 4,
      date: "12/03/2022",
    },
    {
      userName: "Romain. S",
      text: "Je suis impressionné par la qualité des articles, surtout à ce prix !",
      starValue: 5,
      date: "06/03/2022",
    },
    {
      userName: "Laura. M",
      text: "Le site est très facile à naviguer, et les commandes sont simples à passer.",
      starValue: 4,
      date: "28/02/2022",
    },
    {
      userName: "Marc. D",
      text: "Je suis très content de mes achats, et je recommande ce site à tous les amateurs de mode !",
      starValue: 5,
      date: "21/02/2022",
    },
  ];
  const displayFeedbacks = forHomePage ? feedbacks.splice(0, 5) : feedbacks;

  return (
    <React.Fragment>
      <div className="d-flex align-items-top justify-content-center">
        <div className="d-flex flex-column">
          <Title
            h1
            title={`${forHomePage ? "Avis récents" : "Avis de nos clients"}`}
            className={"primary text-center"}
          />
          <div className="d-flex me-4 mb-4 justify-content-center flex-row flex-wrap w-100">
            {displayFeedbacks.map(
              (feedback: FeedBackCardProps, index: number) => (
                <FeedbackCard
                  userName={feedback.userName}
                  key={index}
                  text={feedback.text}
                  date={feedback.date}
                  starValue={feedback.starValue}
                  avatar={index + 1}
                />
              )
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
