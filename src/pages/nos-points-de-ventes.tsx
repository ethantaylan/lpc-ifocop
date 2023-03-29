import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { MapContainer } from "react-leaflet";
import { MapCards } from "../components/map-cards/map-cards";
import { PaymentSection } from "../components/payment-section/payment-section";
import { SimpleMap } from "../components/simple-map/simple-map";
import { StoresInformations } from "../components/stores-informations";

export const NosPointsDeVentes = () => {
  const [markerPosition, setMarkerPosition] = React.useState<number[]>([
    51.505, -0.09,
  ]);
  

  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column">
      <h1 className="bold my-5 primary">Nos points de ventes</h1>
      <input
        style={{
          width: "70%",
          border: "none",
          backgroundColor: "rgb(245,245,245)",
        }}
        type="text"
        placeholder="Entrer une location"
        className="text-center p-2 mb-2"
      />
      <div className="d-flex my-4 w-100">
        <div className="w-75">
          <SimpleMap markerPosition={markerPosition} />
        </div>
        <div className="d-flex flex-column">
          <div
            style={{
              backgroundColor: "rgba(240,238,230, 0.5)",
              height: 600,
              overflowY: "scroll",
            }}
            className="d-flex w-100 flex-column"
          >
            {StoresInformations.map((store) => (
              <MapCards
                city={store.city}
                adresse={store.adress}
                number={store.number}
              />
            ))}{" "}
          </div>
          <h1 className="text-center primary">
            <BsChevronDown size={20} />
          </h1>
        </div>
      </div>
      <p className="text-start w-100">
        Nos boutiques sont ouvertes du {" "}
        <span className="bold">
          lundi au samedi de 9h à 12h et de 14h à 19h30.{" "}
        </span>
        <p className="mt-2">
          Venez découvrir notre gamme de produits de qualité à des prix
          compétitifs. Nos équipes sont prêtes à vous accueillir et à
          répondre à toutes vos questions. <br />
          <span className="bold mt-4 d-flex">
            {" "}
            Nous espérons vous voir bientôt dans nos boutiques !
          </span>
        </p>
      </p>
      <PaymentSection />
    </div>
  );
};
