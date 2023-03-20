import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { StoresInformations } from "../stores-informations";

interface SimpleMapProps {
  markerPosition: number[];
}

interface MarkerProps {
  position: any;
  adress: any;
}

const MarkersPositions: MarkerProps[] = StoresInformations.map((store) => ({
  position: store.position,
  adress: store.adress,
}));

export const SimpleMap: React.FC<SimpleMapProps> = () => {
  const mapRef: any = useRef();

  return (
    <MapContainer
      ref={mapRef}
      style={{ width: "100%", height: 600 }}
      center={[47.073024, 2.434364]}
      zoom={6}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution=""
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {MarkersPositions.map((marker: MarkerProps) => (
        <Marker position={marker.position}>
          <Popup>{marker.adress}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
