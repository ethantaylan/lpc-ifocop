import React from "react";
import { MapContainer } from "react-leaflet";
import { MapCards } from "../components/map-cards/map-cards";
import { SimpleMap } from "../components/simple-map/simple-map";
import { StoresInformations } from "../components/stores-informations";

export const NosPointsDeVentes = () => {

  const [markerPosition, setMarkerPosition] = React.useState<number[]>([
    51.505, -0.09,
  ]);
  
  return (
    <div className="w-100 d-flex justify-content-center align-items-center flex-column">
      <h1 className="bold primary">Nos points de ventes</h1>
      <input
        style={{
          width: "60%",
          border: "none",
          backgroundColor: "rgb(245,245,245)",
        }}
        type="text"
        placeholder="Entrer une location"
        className="text-center p-3 mt-4 mb-5"
      />
      <div className="d-flex my-4 w-100">
        <div className="w-100">
          <SimpleMap markerPosition={markerPosition} />
        </div>
        <div
          style={{
            backgroundColor: "rgba(240,238,230, 0.5)",
            height: 600,
            overflowY: "scroll",
          }}
          className="d-flex w-75 flex-column"
        >
          {StoresInformations.map((store) => (
            <MapCards
              city={store.city}
              adresse={store.adress}
              number={store.number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
