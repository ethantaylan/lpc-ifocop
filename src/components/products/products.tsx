import React from "react";
import { filters } from "../filters/filters-array";
import { ProductsCards } from "./product-cards/product-cards";
import { ProductModal } from "./product-modal/product-modal";
import { Title } from "../title/title";
import { FilterLabels } from "./products-labels/products-labels";
import { ProductsPrices } from "./products-prices/products-prices";
import { ProductsRating } from "./products-rating/products-rating";
import { OffCanvas } from "../offcanvas/offcanvas";
import { useGlobalContext, useGlobalDispatch } from "../../context/context";

export const Products: React.FC = () => {
  const [products, setProducts] = React.useState([]);
  const [productImg, setProductImg] = React.useState();
  const [productTitle, setProductTitle] = React.useState<string>("");
  const [productDescription, setProductDescription] = React.useState<string>();
  const [productPrice, setProductPrice] = React.useState<string>();
  const [category, setCategory] = React.useState<string>(
    "/category/men's clothing"
  );

  React.useEffect(() => {
    setCategory(category);
  }, [category]);

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleFetchClothing = async (sexe: string) => {
    await fetch(`https://fakestoreapi.com/products/category/${sexe}'s clothing`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  React.useEffect(() => {
    handleFetchClothing("men");
  }, []);

  const { showCart } = useGlobalContext();
  const dispatch = useGlobalDispatch();

  const handleCloseCanvas = () => {
    dispatch({
      type: showCart ? true : false,
      payload: null,
    });
  };

  return (
    <React.Fragment>
      <OffCanvas onClose={() => handleCloseCanvas()} showCanvas={showCart} />
      <ProductModal
        onClose={() => setOpenModal(false)}
        show={openModal}
        title={productTitle}
        description={productDescription}
        img={productImg}
        price={productPrice}
        subDescription={""}
      />
      <p className="text-center primary my-5">
        <Title h1 title={"Nos produits"} className="my-5" />
      </p>

      <div className="d-flex mt-5">
        <div className="d-flex w-25 flex-column">
          <FilterLabels
            fetchHommes={() => handleFetchClothing("men")}
            fetchFemmes={() => handleFetchClothing("women")}
            onClick={undefined}
            filters={filters}
          />
          <ProductsPrices />
          <ProductsRating />
        </div>
        <div className="d-flex"></div>
        <div className="ms-4 d-flex flex-column">
          <div className="d-flex w-100 flex-wrap">
            {products &&
              products.map((product: any) => (
                <ProductsCards
                  price={`${product.price.toFixed(2)} €`}
                  onClick={() => {
                    setOpenModal(true);
                    setProductImg(product.image);
                    setProductTitle(product.title);
                    setProductPrice(product.price);
                    setProductDescription(product.description);
                  }}
                  image={product.image}
                  title={product.title}
                  rating={product.rating.rate}
                  count={product.rating.count}
                  withRating={true}
                />
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
