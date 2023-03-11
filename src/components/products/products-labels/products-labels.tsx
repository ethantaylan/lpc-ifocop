import React from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { useGlobalContext } from "../../../context/context";
import { FilterCard } from "../../filters/filter-card/filter-card";
import { Filter, filters } from "../../filters/filter-card/filters";
import { Title } from "../../title/title";


export const ProductsLabels: React.FC = () => {
  const theme = useGlobalContext();

  const [accessories, setAccessories] = React.useState(false);

  return (
    <React.Fragment>
      {/* Filter Container */}
      <Title className="primary mb-4" h5 title={"Filtres"} />
      <div>
        {filters.map((filter: Filter, index: number) => (
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
    </React.Fragment>
  );
};
