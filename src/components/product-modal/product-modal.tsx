import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export interface ProductModalProps {
  show: boolean;
  onClose: () => void;
  title: string;
  description: string | undefined;
  img: any;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  title,
  description,
  show,
  onClose,
  img,
}) => {
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
                className="w-100"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                {title}
              </Typography>
              <p>price</p>
              <p>random desc</p>
              <small>size</small>
              <div className="d-flex">
                <strong>S M L XL 2XL </strong>
              </div>
              <div className="d-flex">
                <span className="me-2">circle</span>
                <span className="mx-2">circle</span>
                <span className="mx-2">circle</span>
              </div>
              <span>quantity</span>
              <button>add to cart</button>
              <button>buy now</button>
              <small>share</small>
            </div>
          </div>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
        </Box>
      </div>
    </Modal>
  );
};
