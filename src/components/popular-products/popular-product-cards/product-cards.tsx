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
}

export const ProductsCards: React.FC<ProductsProps> = ({
  title,
  price,
  image,
  onClick,
  rating,
  count,
}) => {
  return (
    <div
      style={{ borderRadius: 8 }}
      className="d-flex m-3 p-3 flex-column border"
    >
      <img
        style={{ objectFit: "contain", borderRadius: 8 }}
        width={200}
        height={200}
        src={image}
      />
      <span
        style={{
          width: 150,
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
        className="bold mt-2 mb-2"
      >
        {title}
      </span>
      <small style={{fontSize: 16}} className="mb-3">{price}</small>
      <div className="d-flex mb-3 align-items-center">
        <Rating size="small" readOnly value={rating} />
        <small className="ms-1 text-secondary">({count})</small>
      </div>
      <p onClick={onClick} className="m-0 semi-bold cursor-pointer tertiary">
        See details <BsArrowRightShort size={22} />
      </p>
    </div>
  );
};
