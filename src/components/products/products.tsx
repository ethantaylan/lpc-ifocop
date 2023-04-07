import React from "react";
import { filters } from "../filters/filters-array";
import { ProductsCards } from "./product-cards/product-cards";
import { ProductModal } from "./product-modal/product-modal";
import { FilterLabels } from "./products-labels/products-labels";
import { Cart } from "../cart/cart";
import { useMatches } from "../../hooks/use-matches";
import { BsFillCartFill } from "react-icons/bs";
import { useGlobalContext } from "../../context/context";
import Swal from "sweetalert2";

export const Products: React.FC = () => {
  const [products, setProducts] = React.useState([]);
  const [productImg, setProductImg] = React.useState();
  const [productTitle, setProductTitle] = React.useState<string>("");
  const [productDescription, setProductDescription] = React.useState<string>();
  const [productPrice, setProductPrice] = React.useState<string>();
  const [category, setCategory] = React.useState<string>(
    "/category/men's clothing"
  );
  const [isCartOpen, setIsCartOpen] = React.useState<boolean>(false);
  const [cart, setCart] = React.useState<any[]>([]);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const matches = useMatches();
  const theme = useGlobalContext();

  React.useEffect(() => {
    setCategory(category);
  }, [category]);

  const handleFetchClothing = async (sexe: string) => {
    await fetch(`https://fakestoreapi.com/products/category/${sexe}'s clothing`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  React.useEffect(() => {
    handleFetchClothing("men");
  }, []);

  const addToCartHandler = (product: any) => {
    setCart([
      ...cart,
      {
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        size: product.size,
      },
    ]);
    Swal.fire(
      "",
      `<strong>${product.title}</strong> a été ajouté au panier`,
      "success"
    );
  };

  const removeFromCartHandler = () => {
    const newCart = [...cart];
    newCart.shift();
    setCart(newCart);
  };

  return (
    <React.Fragment>
      <Cart
        removeProduct={() => removeFromCartHandler()}
        onClose={() => setIsCartOpen(false)}
        showCanvas={isCartOpen}
        products={cart}
        onAddToCart={(product) => addToCartHandler(product)}
      />
      <ProductModal
        onClose={() => setOpenModal(false)}
        show={openModal}
        title={productTitle}
        description={productDescription}
        img={productImg}
        price={productPrice}
        onClick={() => {
          addToCartHandler({
            title: productTitle,
            description: productDescription,
            price: productPrice,
            image: productImg,
          });
          setOpenModal(false);
        }}
      />

      <div className={`d-flex w-100 ${matches && "flex-column"} mt-5`}>
        <div
          style={{
            position: "fixed",
            right: matches ? 0 : 30,
            bottom: matches ? 0 : 60,
            backgroundColor: "white",
            borderRadius: matches ? 0 : 30,
            width: matches ? "100%" : 120,
            border: matches ? 0 : `1px solid ${theme.primary}`,
            boxShadow: matches ? "0px -5px 30px rgba(0,0,0, 0.3)" : "0",
            padding: matches ? "20px" : "7px 20px",
          }}
          className="d-flex cursor-pointer justify-content-center"
        >
          <h5
            className="m-0 position-relative primary d-flex align-items-center"
            onClick={() => setIsCartOpen(true)}
          >
            Panier <BsFillCartFill className="ms-3" />
            <span
              className="d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "whitesmoke",
                borderRadius: 100,
                width: 12,
                height: 12,
                position: "absolute",
                right: -7,
                fontSize: 12,
                top: 0,
              }}
            >
              {cart?.length}
            </span>
          </h5>
        </div>
        <div className={`d-flex ${matches ? "w-100" : "w-25"} flex-column`}>
          <FilterLabels
            fetchHommes={() => handleFetchClothing("men")}
            fetchFemmes={() => handleFetchClothing("women")}
            onClick={undefined}
            filters={filters}
          />
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex w-100 justify-content-center flex-wrap">
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
