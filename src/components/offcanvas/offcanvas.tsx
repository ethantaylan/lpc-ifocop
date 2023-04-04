import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartImg from "../../assets/cart.jpg";

interface OffCanvas {
  onClose: () => void;
  showCanvas: boolean;
}

export const CartProducts = () => {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="d-flex align-items-center justify-content-center">
        <img
          height={140}
          style={{ objectFit: "cover" }}
          width={"100%"}
          src={CartImg}
          alt=""
        />
      </div>
      <div className="d-flex mt-2 justify-content-between">
        <span className="bold">Product title</span>
        <span className="text-danger">Supprimer</span>
      </div>
      <hr />
    </div>
  );
};

export const OffCanvas: React.FC<OffCanvas> = ({ showCanvas, onClose }) => {
  return (
    <Offcanvas show={showCanvas} placement="end" onHide={onClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <strong>Votre panier</strong>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <CartProducts />
      </Offcanvas.Body>
    </Offcanvas>
  );
};
