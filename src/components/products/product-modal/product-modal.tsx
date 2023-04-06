import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useGlobalContext } from "../../../context/context";
import { Badge, Chip } from "@mui/material";
import { CloseButton } from "react-bootstrap";
import { useMatches } from "../../../hooks/use-matches";

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
  onClick: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  title,
  description,
  show,
  onClose,
  img,
  price,
  onClick
}) => {
  const theme = useGlobalContext();
  const matches = useMatches();
  const [plus, setPlus] = React.useState<boolean>(false);

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            width: matches ? 300 : 600,
            p: 4,
          }}
        >
          <div className="d-flex w-100 justify-content-end">
            <CloseButton onClick={onClose} />
          </div>

          <div className="d-flex flex-wrap flex-column justify-content-center align-items-center">
            <div className="mb-5">
              <img
                style={{
                  objectFit: "cover",
                  borderRadius: 8,
                  width: matches ? 120 : 180,
                }}
                src={img}
              />
            </div>
            <div className="d-flex w-100 flex-column">
              <div className="w-100 d-flex justify-content-end"></div>
              <Typography
                className="w-100 b-5 mb-4 primary"
                id="modal-modal-title"
                variant="h5"
                component="h5"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </Typography>
              <p
                className="w-100"
                style={{
                  whiteSpace: plus ? "normal" : "nowrap",
                  overflow: plus ? "visible" : "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </p>
              <button
                onClick={() => setPlus(!plus)}
                className="btn btn-outline text-secondary"
              >
                {plus ? "Fermer" : "Description complète"}
              </button>
              <hr />
              <p className="bold primary" style={{ fontSize: 26 }}>
                {price?.toFixed(2)} €
              </p>
              <div className="d-flex flex-wrap">
                {Circles.map((circleColor: string, index: number) => (
                  <span
                    key={index}
                    style={circleStyle(circleColor, true)}
                    className="m-2 cursor-pointer"
                  />
                ))}
              </div>
              <div className="d-flex flex-wrap w-100 mb-2">
                {Sizes.map((size: string, index: number) => (
                  <Chip
                    key={index}
                    className="cursor-pointer m-2"
                    label={size}
                  />
                ))}
              </div>
              <Button
                onClick={onClick}
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
