import React from "react";
import { Title } from "../title/title";
import { FeedbackCard, FeedBackCardProps } from "./feedback-card/feedback-card";
import FeedbackImg from "../../assets/feedback.jpg";
import { AiFillStar } from "react-icons/ai";

export const Feedbacks = () => {
  const feedbacks: FeedBackCardProps[] = [
    {
      userName: "Hugo. C",
      text: "J'aime beaucoup ce site pour sa grande variété de vêtements tendances. Les descriptions des articles sont très précises !",
      fiveStars: false,
      date: "01/12/2022",
    },
    {
      userName: "Thomas. F",
      text: "Service rapide et efficace !",
      fiveStars: true,
      date: "18/11/2022",
    },
    {
      userName: "Alexandre. F",
      text: "J'adore ce site ! Les vêtements sont magnifiques et de très bonne qualité !",
      fiveStars: false,
      date: "20/10/2022",
    },
    {
      userName: "Emma. E",
      text: "Très satisfaite du service client !",
      fiveStars: true,
      date: "14/09/2022",
    },
    {
      userName: "Angelique. T",
      text: "J'ai commandé plusieurs articles sur ce site et j'ai été impressionné par la qualité des produits !",
      fiveStars: true,
      date: "02/08/2022",
    },
  ];

  return (
    <React.Fragment>
      <Title title={"Avis de nos clients"} className={"my-5"} />

      <div className="d-flex align-items-top justify-content-center">
        <div className="w-100">
          <img
            width="100%"
            style={{ borderRadius: "12px" }}
            src={FeedbackImg}
            alt=""
          />
        </div>
        <div className="d-flex ms-4 mb-4 flex-column w-100">
          {feedbacks.map((feedback: FeedBackCardProps, index: number) => (
            <FeedbackCard
              userName={feedback.userName}
              key={index}
              text={feedback.text}
              date={feedback.date}
              fiveStars={feedback.fiveStars}
              avatar={index + 1}
            />
          ))}
          <div className="mb-5 w-100 d-flex flex-column">
            <h5 className="primary">Laisser le votre !</h5>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Prénom, Nom"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text" id="basic-addon1">
                <AiFillStar color="#F7EF00" />
                <AiFillStar color="#F7EF00" />
                <AiFillStar color="#F7EF00" />
                <AiFillStar color="#F7EF00" />
                <AiFillStar color="#F7EF00" />
              </span>
            </div>
            <textarea
              placeholder="Votre message..."
              className="form-control"
            ></textarea>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
