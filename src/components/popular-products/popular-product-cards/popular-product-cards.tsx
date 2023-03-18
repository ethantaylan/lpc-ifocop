import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export interface ProductsProps {
  title: string;
  price?: string;
  onClick?: () => void;
  image?: string;
}

export const PopularProductsCards: React.FC<ProductsProps> = ({
  title,
  price,
  image,
  onClick,
}) => {
  return (
    <div className="d-flex m-3 flex-column">
      <img
        style={{ objectFit: "cover" }}
        width={200}
        height={200}
        src={image}
      ></img>
      <span className="bold mt-2">{title}</span>
      <small className="mb-3">{price}</small>
      <p onClick={onClick} className="semi-bold cursor-pointer tertiary">
        See details <BsArrowRightShort size={22} />
      </p>
    </div>
  );
};
