import { Rating } from "@mui/material";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export interface ProductsProps {
  title: string;
  price?: string;
  onClick?: () => void;
  image?: string;
  rating: number;
  count: number;
  withRating: boolean;
}

export const ProductsCards: React.FC<ProductsProps> = ({
  title,
  price,
  image,
  onClick,
  rating,
  withRating,
  count,
}) => {
  return (
    <div
      style={{ borderRadius: 8 }}
      className="d-flex m-3 p-3 flex-column  border"
    >
      <img
        style={{ objectFit: "contain", borderRadius: 8 }}
        width={300}
        height={200}
        src={image}
      />
      <span
        style={{
          width: 260,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
        className="bold mt-5 mb-2"
      >
        {title}
      </span>
      <small style={{ fontSize: 16 }} className="mb-3">
        {price}
      </small>
      <div className="d-flex mb-3 align-items-center">
        {withRating && <Rating size="small" readOnly value={rating} />}
        {withRating && <small className="ms-1 text-secondary">({count})</small>}
      </div>
      <p onClick={onClick} className="m-0 semi-bold cursor-pointer tertiary">
        Plus de détails <BsArrowRightShort size={22} />
      </p>
    </div>
  );
};
