import React from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { useGlobalContext } from "../../../context/context";
import { Breadcrumb } from "../../breadcrumb/breadcrumb";
import { Filters } from "../../filters/filters";
import { Title } from "../../title/title";

interface ProductsLabelsProps {
  filters: any;
  onClick: any;
}

export const FilterLabels: React.FC<ProductsLabelsProps> = ({
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
                <Filters
                  onClick={() => {
                    setAccessories(!accessories);
                    onClick;
                  }}
                  filter={filter.label}
                >
                  {!accessories ? <BsCaretDownFill /> : <BsCaretUpFill />}
                </Filters>
              </div>
            )}
            {!filter.isAccessory && (
              <Filters
                
                onClick={onClick}
                filter={filter.label}
                isAccessory={filter.isAccessory || null}
              />
            )}
            {filter.isAccessory &&
              accessories &&
              filter.accessories?.map((accessory: any, index: number) => (
                <Filters
                  onClick={onClick}
                  key={index}
                  filter={accessory.label}
                  isAccessory={true}
                />
              ))}
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};
