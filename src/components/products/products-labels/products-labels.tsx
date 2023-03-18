import React from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { useGlobalContext } from "../../../context/context";
import { Breadcrumb } from "../../breadcrumb/breadcrumb";
import { FilterCard } from "../../filters/filter-card/filter-card";
import { Title } from "../../title/title";

interface ProductsLabelsProps {
  filters: string[];
  onClick: any;
}

export const ProductsLabels: React.FC<ProductsLabelsProps> = ({
  filters,
  onClick,
}) => {
  const theme = useGlobalContext();

  const [accessories, setAccessories] = React.useState(false);

  return (
    <React.Fragment>
      <Breadcrumb className="mb-5" />
      <Title className="primary mb-4" h5 title={"Filtres"} />
      <div>
        {filters.map((filter: any, index: number) => (
          <React.Fragment key={index}>
            {filter.isAccessory && filter.label === "Accessoires" && (
              <div className="d-flex justify-content-between align-items-center">
                <FilterCard
                  onClick={() => {
                    setAccessories(!accessories);
                    onClick;
                  }}
                  filterLabel={filter.label}
                >
                  {!accessories ? <BsCaretDownFill /> : <BsCaretUpFill />}
                </FilterCard>
              </div>
            )}
            {!filter.isAccessory && (
              <FilterCard
                onClick={onClick}
                filterLabel={filter.label}
                isAccessory={filter.isAccessory || null}
              />
            )}
            {filter.isAccessory &&
              accessories &&
              filter.accessories?.map((accessory: any, index: number) => (
                <FilterCard
                  onClick={onClick}
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
