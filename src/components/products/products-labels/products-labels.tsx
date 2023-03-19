import React from "react";
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

  return (
    <React.Fragment>
      <Breadcrumb className="mb-5" />
      <Title className="primary mb-4" h5 title={"Filtres"} />
      <div>
        {filters.map((filter: string, index: number) => (
          <React.Fragment key={index}>
              <Filters
                onClick={onClick}
                filter={filter}
              />
          </React.Fragment>
        ))}
      </div>
    </React.Fragment>
  );
};
