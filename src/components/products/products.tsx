import { createClient } from "pexels";
import React from "react";
import { getClothesPhotoFromPexels } from "../../core";
import { useAxios } from "../../hooks/use-axios";
import { FilterTab } from "../filters/filter-tab/filter-tab";
import { Filter, filters } from "../filters/filters-array";
import {
  ProductsCards,
  ProductsProps,
} from "../popular-products/popular-product-cards/product-cards";
import { ProductModal } from "../product-modal/product-modal";
import { Title } from "../title/title";
import { FilterLabels } from "./products-labels/products-labels";
import { ProductsPrices } from "./products-prices/products-prices";
import { ProductsRating } from "./products-rating/products-rating";

export const Products: React.FC = () => {
  const [products, setProducts] = React.useState([]);
  const [filterForQuery, setFilterForQuery] = React.useState("asos");
  const [productImg, setProductImg] = React.useState();
  const filterAnchorRef = React.useRef<NodeListOf<Element>>();

  const getProductsFetch = useAxios<any>(
    getClothesPhotoFromPexels(`${filterForQuery}`),
    true
  );

  React.useEffect(() => {
    filterAnchorRef.current = document.querySelectorAll("#filter-container");

    const handleClick = (event: any) => {
      event.preventDefault();
      const filter = event.target.textContent;
      setFilterForQuery(filter);
      getProductsFetch.executeFetch();
    };

    filterAnchorRef.current.forEach((element: any) => {
      element.removeEventListener("click", handleClick);
      element.addEventListener("click", handleClick);
    });
  }, [filterForQuery, products]);

  console.log(filterForQuery);

  React.useEffect(() => {
    setProducts(
      getProductsFetch.response?.photos.map((photo: any) => ({
        src: photo.src.medium,
        alt: photo.alt,
      }))
    );
  }, [getProductsFetch.response]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <ProductModal
        onClose={() => handleClose()}
        show={open}
        title={"test"}
        description={""}
        img={productImg}
        price={""}
        subDescription={""}
      />
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
          <div className="d-flex flex-wrap">
            {products &&
              products.map((jean: any) => (
                <ProductsCards
                  onClick={() => {
                    handleOpen();
                    setProductImg(jean.src);
                  }}
                  image={jean.src}
                  title={jean.alt}
                />
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
