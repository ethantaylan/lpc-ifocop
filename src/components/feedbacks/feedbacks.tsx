import React from "react";
import { Title } from "../title/title";
import { FeedbackCard, FeedBackCardProps } from "./feedback-card/feedback-card";
import FeedbackImg from "../../assets/feedback.jpg";

export const Feedbacks = () => {
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
  ];

  return (
    <React.Fragment>
      <div className="d-flex align-items-top justify-content-center">
        <div className="d-flex me-5 flex-column">
          <Title h1 title={"Avis de nos clients"} className={"my-5 primary text-center"} />
          <div className="d-flex me-4 mb-4 flex-column w-100">
            {feedbacks.map((feedback: FeedBackCardProps, index: number) => (
              <FeedbackCard
                userName={feedback.userName}
                key={index}
                text={feedback.text}
                date={feedback.date}
                starValue={feedback.starValue}
                avatar={index + 1}
              />
            ))}
          </div>
        </div>
        <div className="w-100">
          <img width="100%" src={FeedbackImg} alt="" />
        </div>
      </div>
    </React.Fragment>
  );
};
