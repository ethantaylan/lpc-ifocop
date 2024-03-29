import React from "react";
import { BookingBanner } from "../components/booking-banner/booking-banner";
import { Title } from "../components/title/title";
import { Users, UsersProps } from "../components/users";
import { Button, TextField } from "@mui/material";
import DatePicker from "../components/date-picker/date-picker";
import BasicSelect from "../components/select/select";
import { useGlobalContext } from "../context/context";
import { PaymentSection } from "../components/payment-section/payment-section";
import { useMatches } from "../hooks/use-matches";

export const Reservation: React.FC = () => {
  const theme = useGlobalContext();

  const [activeIndex, setActiveIndex] = React.useState<number>();

  const handleHover = (index: number) => {
    setActiveIndex(index);
  };

  const matches = useMatches();

  return (
    <div>
      <BookingBanner />
      <div
        className={`d-flex ${
          matches && "flex-column"
        } text-left flex-row w-100 my-5 justify-content-center`}
      >
        <div className={`d-flex flex-column w-100 ${!matches && "pe-5"}`}>
          <p className="w-100 mb-5">
            <Title
              h6
              className="primary mb-4"
              title="Prennez rendez-vous avec l'un de nos coach personnal shopper"
            />{" "}
            Notre équipe de{" "}
            <span className="bold">coachs personnals shoppers</span> est là pour
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
            coachs personnals shoppers{" "}
            <span className="bold">compétents et passionnés</span>.
          </p>
          <div className="d-flex mb-4 justify-content-center flex-wrap">
            {Users.map((user: UsersProps, index: number) => (
              <div
                onMouseEnter={() => {
                  handleHover(index);
                }}
                onMouseLeave={() => setActiveIndex(undefined)}
                className={`d-flex me-4 ${
                  matches && "flex-wrap"
                } justify-content-center cursor-pointer flex-column align-items-center`}
              >
                <img
                  key={index}
                  style={{
                    transition: "0.2s",
                    width: 100,
                    height: 140,
                    objectFit: "cover",
                    borderRadius: "7px",
                    transform:
                      activeIndex === index ? "scale(1.04)" : "scale(1.0)",
                  }}
                  src={user.imgSrc}
                  alt="User Avatars"
                />
                <span>{user.userName}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="cursor-pointer mb-5 d-flex flex-column w-100 flex-row">
          <div className="d-flex flex-column w-100 justify-content-between">
            <TextField className="my-3" label="Nom" />
            <TextField className="my-3" label="Prénom" />
            <div className="my-3 w-100">
              <DatePicker />
            </div>
            <BasicSelect />
            <Button
              className="mt-5"
              style={{ backgroundColor: theme.primary }}
              color="primary"
              variant="contained"
            >
              Confirmer
            </Button>
          </div>
        </div>
      </div>
      <PaymentSection />
    </div>
  );
};
