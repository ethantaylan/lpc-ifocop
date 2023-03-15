import React from "react";
import { FilterTabs } from "../filters/filter-tabs/filter-tabs";
import { PopularProductsCards } from "../popular-products/popular-product-cards/popular-product-cards";
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
        <div className="ms-4 d-flex flex-column">
          <FilterTabs />
          <div className="d-flex flex-wrap">
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
            <PopularProductsCards title={"test"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
