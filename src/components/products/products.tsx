import React from "react";
import { filters } from "../filters/filters-array";
import { ProductsCards } from "../popular-products/popular-product-cards/product-cards";
import { ProductModal } from "./product-modal/product-modal";
import { Title } from "../title/title";
import { FilterLabels } from "./products-labels/products-labels";
import { ProductsPrices } from "./products-prices/products-prices";
import { ProductsRating } from "./products-rating/products-rating";

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // fetch("https://fakestoreapi.com/carts/5")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));

  const handleFetchClothing = async (sexe: string) => {
    await fetch(`https://fakestoreapi.com/products/category/${sexe}'s clothing`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  React.useEffect(() => {
    handleFetchClothing("men");
  }, []);

  return (
    <React.Fragment>
      <ProductModal
        onClose={() => handleClose()}
        show={open}
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
                    handleOpen();
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
