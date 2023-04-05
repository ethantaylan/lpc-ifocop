import React from "react";
import { Breadcrumb } from "../../breadcrumb/breadcrumb";
import { Filters } from "../../filters/filters";
import { Title } from "../../title/title";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useMatches } from "../../../hooks/use-matches";
import { ProductsPrices } from "../products-prices/products-prices";
import { ProductsRating } from "../products-rating/products-rating";

interface ProductsLabelsProps {
  filters: any;
  onClick: any;
  fetchHommes: () => void;
  fetchFemmes: () => void;
}

export const FilterLabels: React.FC<ProductsLabelsProps> = ({
  filters,
  onClick,
  fetchHommes,
  fetchFemmes,
}) => {
  const [showFilters, setShowFilters] = React.useState<boolean>();
  const matches = useMatches();

  React.useEffect(() => {
    if (!matches) {
      setShowFilters(true);
    } else {
      setShowFilters(false);
    }
  }, [matches]);

  return (
    <React.Fragment>
      <Breadcrumb
        fetchFemmes={fetchFemmes}
        fetchHommes={fetchHommes}
        className="mb-5"
      />
      <div
        className="d-flex align-items-center cursor-pointer justify-content-between"
        onClick={() => {
          setShowFilters(!showFilters);
        }}
      >
        <Title className={`primary m-0`} h5 title={"Filtres"} />
        {showFilters ? (
          <AiFillCaretUp size={20} className="primary" />
        ) : (
          <AiFillCaretDown size={20} className="primary" />
        )}
      </div>
      {showFilters && (
        <div className="mt-3">
          {filters.map((filter: string, index: number) => (
            <React.Fragment key={index}>
              <Filters
                onClick={() => {
                  setShowFilters(false);
                  onClick;
                }}
                filter={filter}
              />
            </React.Fragment>
          ))}
          <ProductsPrices />
          <ProductsRating />
        </div>
      )}
    </React.Fragment>
  );
};
