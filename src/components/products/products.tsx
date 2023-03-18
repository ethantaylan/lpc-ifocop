import React from "react";
import { filters } from "../filters/filter-card/filters";
import { FilterTab } from "../filters/filter-tab/filter-tab";
import { PopularProductsCards } from "../popular-products/popular-product-cards/popular-product-cards";
import { Title } from "../title/title";
import { ProductsLabels } from "./products-labels/products-labels";
import { ProductsPrices } from "./products-prices/products-prices";
import { ProductsRating } from "./products-rating/products-rating";

export const Products: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([]);
  const [filter, setFilter] = React.useState<string>();

  const addFilterHandler = (filter: any) => {
    setSelectedFilters((selectedFilters) => [...selectedFilters, filter]);
  };

  // React.useEffect(() => {
  // for (let index = 0; index < filters.length; index++) {
  //     setFilter(filters[index]);
  //   }
  // }, [filters]);

  console.log(selectedFilters);

  return (
    <React.Fragment>
      <p className="text-center primary my-5">
        <Title h1 title={"Nos produits"} className="my-5" />
      </p>
      <div className="d-flex mt-5">
        <div className="d-flex w-25 flex-column">
          <ProductsLabels
            onClick={() => addFilterHandler('filter')}
            filters={filters}
          />
          <ProductsPrices />
          <ProductsRating />
        </div>
        <div className="ms-4 d-flex flex-column">
          {selectedFilters.map((f: any, index: number) => (
            <FilterTab key={index} label={f} />
          ))}
          <div className="d-flex flex-wrap">
            <PopularProductsCards title={"test"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};