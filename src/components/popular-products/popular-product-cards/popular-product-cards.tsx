import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {};

export const PopularProductsCards = (props: Props) => {
  return (
    <div className="d-flex flex-column">
      <
      <h5>MODEL NAME</h5>
      <h6>Price</h6>
      <p>
        See details <BsArrowRightShort size={22} />{" "}
      </p>
    </div>
  );
};
