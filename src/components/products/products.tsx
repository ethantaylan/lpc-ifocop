import React from "react";
import { FilterTab } from "../filters/filter-tab/filter-tab";
import { Filter, filters } from "../filters/filters-array";
import { ProductsCards } from "../popular-products/popular-product-cards/product-cards";
import { Title } from "../title/title";
import { FilterLabels } from "./products-labels/products-labels";
import { ProductsPrices } from "./products-prices/products-prices";
import { ProductsRating } from "./products-rating/products-rating";

export const Products: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<Filter[]>(
    []
  );
  const filterAnchorRef = React.useRef<NodeListOf<Element>>();

  React.useEffect(() => {
    filterAnchorRef.current = document.querySelectorAll("#filter-container");

    const handleClick = (event: any) => {
      const filter = event.target.textContent;
      if (!selectedFilters.includes(filter)) {
        setSelectedFilters([...selectedFilters, filter]);
      }
    };

    filterAnchorRef.current.forEach((element: any) => {
      element.removeEventListener("click", handleClick);
      element.addEventListener("click", handleClick);
    });

    console.log(filterAnchorRef.current)

    return () => {
      filterAnchorRef.current?.forEach((element: any) => {
        element.removeEventListener("click", handleClick);
      });
    };
  }, [selectedFilters, filterAnchorRef.current]);

  const removeFilterHandler = (filter: Filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(
        selectedFilters.filter((element: Filter) => element !== filter)
      );
    }
  };

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
          <div className="d-flex">
            {selectedFilters.map((filter: any, index: number) => (
              <FilterTab
                ref={filterAnchorRef}
                key={index}
                filter={filter}
                onDelete={() => removeFilterHandler(filter)}
              />
            ))}
          </div>
          <div className="d-flex flex-wrap">
            <ProductsCards title={"Jeans"} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
