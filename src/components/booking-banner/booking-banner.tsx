import React from "react";
import BookingBannerImg from "../../assets/Councils-3.jpeg";

type Props = {};

export const BookingBanner = (props: Props) => {
  return (
    <div className="w-100">
      <img
        className=""
        style={{ objectFit: "cover" }}
        height={450}
        width="100%"
        src={BookingBannerImg}
        alt=""
      />
      <h1
        className="bold m-0"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%)",
          color: "white",
          fontSize: "120px",
        }}
      >
        Réservation
      </h1>
    </div>
  );
};
