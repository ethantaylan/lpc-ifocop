import React from "react";
import { FilterTabs } from "../filters/filter-tabs/filter-tabs";
import { Title } from "../title/title";
import { ProductsLabels } from "./products-labels/products-labels";
import { ProductsPrices } from "./products-prices/products-prices";
import { ProductsRating } from "./products-rating/products-rating";

export const Products: React.FC = () => {
  return (
    <React.Fragment>
      <p className="text-center primary my-5">
        <Title h1 title={"Nos produits"} className="my-5" />
      </p>
      <div className="d-flex mt-5">
        <div className="d-flex w-25 flex-column">
          <ProductsLabels />
          <ProductsPrices />
          <ProductsRating />
        </div>
        <FilterTabs />
      </div>
    </React.Fragment>
  );
};
