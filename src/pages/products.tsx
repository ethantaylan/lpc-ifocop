import React from "react";
import { Title } from "../components/title/title";
import HeroImg from "../assets/products/1.jpg";
import { FilterCard } from "../components/filter-card/filter-card";
import { Filter, filters } from "../components/filter-card/filters";
import { Hero } from "../components/hero/hero";
import { useGlobalContext } from "../context/context";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

export const Products = () => {
  const theme = useGlobalContext();

  const [accessories, setAccessories] = React.useState(false);

  return (
    <div className="w-100">
      <Hero />
      <p className="text-center primary my-5">
        <Title h1 title={"Nos produits"} className="my-5" />
      </p>
      <div
        className="w-25"
        style={{ borderRight: `1px solid ${theme.secondary}` }}
      >
        {/* Filter Container */}
        <Title className="primary mb-4" h5 title={"Filtres"} />
        <div>
          {filters.map((filter: Filter, index) => (
            <React.Fragment key={index}>
              {filter.isAccessory && filter.label === "Accessoires" && (
                <div className="d-flex justify-content-between align-items-center">
                  <FilterCard
                    onClick={() => {
                      setAccessories(!accessories);
                    }}
                    filterLabel={filter.label}
                  >
                    {!accessories ? <BsCaretDownFill /> : <BsCaretUpFill />}
                  </FilterCard>
                </div>
              )}
              {!filter.isAccessory && (
                <FilterCard
                  filterLabel={filter.label}
                  isAccessory={filter.isAccessory || null}
                />
              )}
              {filter.isAccessory &&
                accessories &&
                filter.accessories?.map((accessory, index) => (
                  <FilterCard
                    key={index}
                    filterLabel={accessory.label}
                    isAccessory={true}
                  />
                ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
