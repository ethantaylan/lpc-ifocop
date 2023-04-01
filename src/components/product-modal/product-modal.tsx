import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useGlobalContext } from "../../context/context";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export interface ProductsProps {
  category: Categories[];
  colors: string[];
  size: string[];
  image: any;
}

export const Products: ProductsProps[] = [
  {
    category: [""],
    colors: ["Red", "Blue", "Orange"],
    size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    image: "",
  },
];

export interface ProductModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  description: string | undefined;
  img: any;
  price: string;
  subDescription: string;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  title,
  description,
  show,
  onClose,
  img,
  price,
  subDescription,
}) => {
  const theme = useGlobalContext();

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box sx={style}>
          <div className="d-flex w-100 h-100">
            <img
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain", borderRadius: 8 }}
              src={img}
            />
            <div className="d-flex w-100 flex-column">
              <Typography
                className="w-100 primary"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                {title}
              </Typography>
              <p>{price}</p>
              <p>{subDescription}</p>
              <small></small>
              <div className="d-flex">
                <strong>S M L XL 2XL </strong>
              </div>
              <div className="d-flex">
                <span className="me-2">circle</span>
                <span className="mx-2">circle</span>
                <span className="mx-2">circle</span>
              </div>
              <span>quantity 1</span>
              <div className="d-flex"> </div>
              <small>share</small>
              <Button
                className="w-100"
                style={{ backgroundColor: theme.primary, color: "white" }}
              >
                Ajouter au panier
              </Button>{" "}
            </div>
          </div>
        </Box>
      </div>
    </Modal>
  );
};
