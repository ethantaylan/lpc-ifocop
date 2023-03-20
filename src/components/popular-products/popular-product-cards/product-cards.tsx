import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

export interface ProductsProps {
  title: string;
  price?: string;
  onClick?: () => void;
  image?: string;
}

export const ProductsCards: React.FC<ProductsProps> = ({
  title,
  price,
  image,
  onClick,
}) => {
  return (
    <div
      style={{ borderRadius: 8 }}
      className="d-flex m-3 p-3 flex-column border"
    >
      <img
        style={{ objectFit: "cover", borderRadius: 8 }}
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
        className="bold mt-2"
      >
        {title}
      </span>
      <small className="mb-3">{price}</small>
      <p onClick={onClick} className="semi-bold cursor-pointer tertiary">
        See details <BsArrowRightShort size={22} />
      </p>
    </div>
  );
};
