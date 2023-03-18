import React from "react";
import { FilterTab } from "../filters/filter-tab/filter-tab";
import { FilterProps, filters } from "../filters/filters-array";
import { ProductsCards } from "../popular-products/popular-product-cards/product-cards";
import { Title } from "../title/title";
import { FilterLabels } from "./products-labels/products-labels";
import { ProductsPrices } from "./products-prices/products-prices";
import { ProductsRating } from "./products-rating/products-rating";

export const Products: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<FilterProps[]>(
    []
  );

  React.useEffect(() => {
    const filterAnchor = document.querySelectorAll("#filter-container");
  
    const handleClick = (event: any) => {
      setSelectedFilters([...selectedFilters, event.target.textContent]);
    };
  
    filterAnchor.forEach((element: any) => {
      element.removeEventListener("click", handleClick);
      element.addEventListener("click", handleClick);
    });
  
    return () => {
      filterAnchor.forEach((element: any) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, [selectedFilters]);
  

  return (
    <React.Fragment>
      <p className="text-center primary my-5">
        <Title h1 title={"Nos produits"} className="my-5" />
      </p>

      <div className="d-flex mt-5">
        <div className="d-flex w-25 flex-column">
          <FilterLabels onClick={undefined} filters={filters} />

          <ProductsPrices />
          <ProductsRating />
        </div>
        <div className="ms-4 d-flex flex-column">
          {selectedFilters.map((filter: any, index: number) => (
            <FilterTab  key={index} filter={filter} />
          ))}

          <div className="d-flex flex-wrap">
            <ProductsCards title={"Pantalon"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
