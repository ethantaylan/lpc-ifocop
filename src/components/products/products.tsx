import React from "react";
import { Title } from "../title/title";
import { ProductsLabels } from "./products-labels/products-labels";
import { ProductsPrices } from "./products-prices/products-prices";

export const Products = () => {
  return (
    <React.Fragment>
      <p className="text-center primary my-5">
        <Title h1 title={"Nos produits"} className="my-5" />
      </p>
      <div className="w-25">
      <ProductsLabels />
      <ProductsPrices />
      </div>

    </React.Fragment>
  );
};
