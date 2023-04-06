import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillDelete } from "react-icons/ai";
import { ProductsCards } from "../products/product-cards/product-cards";

interface CartProps {
  onClose: () => void;
  showCanvas: boolean;
  products: any[];
  onAddToCart: () => void;
  removeProduct: () => void;
}

export const CartProducts: React.FC<CartProps> = ({
  products,
  removeProduct,
}) => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex mt-2 justify-content-between">
        {products.length > 0 ? (
          <p className="bold">
            {products.map((product) => (
              <div className="d-flex my-3 align-items-center justify-content-center">
                <img src={product.img} alt="" />
                <p
                  style={{
                    margin: 0,
                    width: 300,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product}
                </p>
                <AiFillDelete
                  className="ms-3 cursor-pointer"
                  onClick={removeProduct}
                  color="crimson"
                />
              </div>
            ))}
          </p>
        ) : (
          <span>Votre panier est vide</span>
        )}
        {/* <ProductsCards title={products.map((product) => product)} rating={0} count={0} withRating={false} /> */}
      </div>
      <hr />
    </div>
  );
};

export const Cart: React.FC<CartProps> = ({
  showCanvas,
  onClose,
  products,
  onAddToCart,
  removeProduct,
}) => {
  return (
    <Offcanvas show={showCanvas} placement="end" onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <strong>Votre panier</strong>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CartProducts
          onClose={onClose}
          showCanvas={false}
          products={products}
          onAddToCart={onAddToCart}
          removeProduct={removeProduct}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
};
