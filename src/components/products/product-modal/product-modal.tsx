import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useGlobalContext } from "../../../context/context";
import { Badge, Chip } from "@mui/material";
import { CloseButton } from "react-bootstrap";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function circleStyle(bgcolor: string, isWhite?: boolean) {
  return {
    borderRadius: "100px",
    backgroundColor: bgcolor,
    height: "20px",
    width: "20px",
    border: isWhite ? "2px solid rgb(200,200,200)" : "",
  };
}

export interface ProductsProps {
  colors: string[];
  size: string[];
  image: any;
}

export const Products: ProductsProps[] = [
  {
    colors: ["Red", "Blue", "Orange"],
    size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    image: "",
  },
];

export const Sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
export const Circles = ["red", "beige", "white", "salmon", "maroon"];

export interface ProductModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  description: string | undefined;
  img: any;
  price: any;
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
          <div className="d-flex justify-content-center align-items-center">
            <div className="me-5">
              <img
                style={{ objectFit: "cover", borderRadius: 8, width: 200 }}
                src={img}
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <div className="w-100 d-flex justify-content-end">
                <CloseButton onClick={onClose} />
              </div>
              <Typography
                className="w-100 b-5 mb-4 primary"
                id="modal-modal-title"
                variant="h5"
                component="h5"
                style={{ whiteSpace: "nowrap" }}
              >
                {title}
              </Typography>
              <p>{description}</p>
              <p>{price?.toFixed(2)} €</p>
              <p>{subDescription}</p>
              <div className="d-flex flex-wrap">
                {Circles.map((circleColor: string, index: number) => (
                  <span
                    key={index}
                    style={circleStyle(circleColor, true)}
                    className="m-2 cursor-pointer"
                  />
                ))}
              </div>
              <div className="d-flex my-5 w-100 mb-5">
                {Sizes.map((size: string, index: number) => (
                  <Chip
                    key={index}
                    className="cursor-pointer m-2"
                    label={size}
                  />
                ))}
              </div>
              <Button
                className="w-100"
                style={{ backgroundColor: theme.primary, color: "white" }}
              >
                Ajouter au panier
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </Modal>
  );
};
