import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillDelete } from "react-icons/ai";
import { useGlobalContext } from "../../context/context";
import { Checkbox } from "@mui/material";

interface CartProps {
  onClose: () => void;
  showCanvas: boolean;
  products: any;
  onAddToCart: (product: any) => void;
  removeProduct: () => void;
}

export const CartProducts: React.FC<CartProps> = ({
  products,
  removeProduct,
}) => {
  const total = products.reduce((acc: any, curr: any) => acc + curr.price, 0);

  const theme = useGlobalContext();

  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex mt-2 align-items-center w-100 justify-content-center">
        {products.length > 0 ? (
          <p className="">
            {products.map((product: any) => (
              <>
                <div className="d-flex my-3 align-items-center justify-content-center">
                  <div className="border p-2 me-2 d-flex align-items-center justify-content-center">
                    <img src={product.image} width={40} alt="" />
                  </div>
                  <p
                    style={{
                      margin: 0,
                      width: 225,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.title}
                  </p>

                  <AiFillDelete
                    className="ms-3 cursor-pointer"
                    onClick={removeProduct}
                    color="crimson"
                    size={20}
                  />
                </div>
                <p className="w-100 d-flex text-end" style={{ fontSize: 20 }}>
                  {product.price.toFixed(2)} €
                </p>
                <div className="d-flex align-items-center">
                  <span
                    style={{
                      backgroundColor: "beige",
                      width: 20,
                      height: 20,
                      borderRadius: 100,
                      border: "1px solid grey",
                    }}
                    className="d-flex cursor-pointer me-3"
                  />
                  <span style={{}} className="d-flex cursor-pointer semi-bold">
                    Taille: M
                  </span>
                </div>
                <hr />
              </>
            ))}
            <h3>Total : {total.toFixed(2)} €</h3>
            <div className="d-flex align-items-center">
              <Checkbox />
              <small>
                Accepter les conditions générales de ventes
              </small>
            </div>

            <button
              style={{ backgroundColor: theme.primary }}
              className="btn w-100 mt-3 text-white btn-primary"
            >
              Paiement
            </button>
          </p>
        ) : (
          <span>Votre panier est vide</span>
        )}{" "}
      </div>
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
