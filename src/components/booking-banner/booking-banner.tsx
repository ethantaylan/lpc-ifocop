import React from "react";
import BookingBannerImg from "../../assets/councils-3.jpeg";

type Props = {};

export const BookingBanner = (props: Props) => {
  return (
    <div className="w-100 h-100">
      <img
        className=""
        style={{ objectFit: "cover" }}
        height={300}
        width="100%"
        src={BookingBannerImg}
        alt=""
      />
      <h1
        className="bold primary my-5 text-center m-0"
        style={{
          // position: "absolute",
          // top: "50%",
          // left: "50%",
          // transform: "translate(-50%)",
        }}
      >
        Réservation
      </h1>
    </div>
  );
};
