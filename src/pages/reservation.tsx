import React from "react";
import { BookingBanner } from "../components/booking-banner/booking-banner";
import { Title } from "../components/title/title";
import PersonnalShopperImg from "../assets/personnal-shopper.jpg";
import Avatar from "@mui/material/Avatar/Avatar";
import { useAxios } from "../hooks/use-axios";
import { getRandomUsers } from "../core";
import { Users, UsersProps } from "../components/coachs";

type Props = {};

export const Reservation = (props: Props) => {
  return (
    <div>
      <BookingBanner />
      <div className="d-flex text-left flex-row w-100 my-5 justify-content-center">
        <div className="d-flex flex-column w-100">
          <p className="w-100 pe-4">
            <Title
              h6
              className="primary mb-4"
              title="Prennez rendez-vous avec l'un de nos coach personnel shopper"
            />{" "}
            Notre équipe de{" "}
            <span className="bold">coachs personnels shoppers</span> est là pour
            vous aider à développer{" "}
            <span className="text-underline">votre style personnel</span> et à
            vous guider tout au long de votre processus d'achat. Que vous
            cherchiez à rafraîchir votre garde-robe, à trouver la tenue parfaite
            pour une occasion spéciale, ou simplement à explorer de nouveaux
            styles, nos coachs sont là pour vous aider. <br />
            <br /> Nous sommes impatients de travailler avec vous pour vous
            aider à atteindre vos objectifs de style et à vous sentir confiant
            et élégant dans toutes les situations. <br /> <br /> Réservez dès
            maintenant pour commencer votre voyage de style avec l'un de nos
            coachs personnels shoppers{" "}
            <span className="bold">compétents et passionnés</span>.
          </p>
        </div>
        <div className="d-flex w-100">
          {Users.map((user: UsersProps) => (
            <div className="cursor-pointer d-flex w-100 flex-column align-items-center">
              
              <img
                style={{
                  width: 60,
                  borderRadius: 100,
                  height: 60,
                  objectFit: "cover",
                }}
                src={user.imgSrc}
                alt="User Avatars"
              />
              <strong>{user.userName}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
