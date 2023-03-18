import {
  PopularProductsCards,
  ProductsProps,
} from "./popular-product-cards/product-cards";
import Product1 from "../../assets/products/1.jpg";
import Product2 from "../../assets/products/2.jpg";
import Product3 from "../../assets/products/3.jpg";
import Product4 from "../../assets/products/4.jpg";
import Product5 from "../../assets/products/5.jpg";
import Product6 from "../../assets/products/6.jpg";
import { useGlobalContext } from "../../context/context";
import { Title } from "../title/title";
import React from "react";

export const PopularProducts: React.FC = () => {
  const { primary, secondary } = useGlobalContext();

  const products: ProductsProps[] = [
    {
      title: "test",
      price: "23e",
      image: Product1,
    },
    {
      title: "test",
      price: "23e",
      image: Product2,
    },
    {
      title: "test",
      price: "23e",
      image: Product3,
    },
    {
      title: "test",
      price: "23e",
      image: Product4,
    },
    {
      title: "test",
      price: "23e",
      image: Product5,
    },
    {
      title: "test",
      price: "23e",
      image: Product6,
    },
  ];

  return (
    <React.Fragment>
      <Title title={"Nos produits populaires"} className={"my-5"} />
      <div className="d-flex justify-content-start flex-wrap">
        {products.map((product: any, index: number) => (
          <PopularProductsCards
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
        <div className="m-3 h-100 justify-content-end d-flex">
          <div
            style={{ backgroundColor: secondary, height: 200, width: 200 }}
            className="tertiary d-flex align-items-center px-4 py-2 semi-bold"
          >
            Voir tout les produits
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
