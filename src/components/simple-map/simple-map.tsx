import React from "react";
import GoogleMapReact from "google-map-react";

export function NosPointsDeVentes({
  text,
}: {
  text: any;
  lat: number;
  lng: number;
}) {
  return <div>{text}</div>;
}
export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 47.142676,
      lng: 2.371812,
    },
    zoom: 7,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh" }}>
      <GoogleMapReact
      
        yesIWantToUseGoogleMapApiInternals
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <NosPointsDeVentes lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
