import Carousel from "react-bootstrap/Carousel";
import Product1 from "../../assets/products/1.jpg";
import Product2 from "../../assets/products/2.jpg";
import Product3 from "../../assets/products/3.jpg";
import Product4 from "../../assets/products/4.jpg";
import Product5 from "../../assets/products/5.jpg";
import Product6 from "../../assets/products/6.jpg";

export const ProductSlider = () => {
  return (
    <div className="d-flex">
      <Carousel variant="dark" indicators={false} style={{ width: "100%" }}>
        <Carousel.Item style={{ height: 300 }}>
          <img
            className="d-block"
            src={Product1}
            alt="First slide"
            width="100%"
            style={{ objectFit: "contain" }}
          />
        </Carousel.Item>
        <Carousel.Item style={{ height: 300 }}>
          <img
            className="d-block"
            src={Product2}
            alt="First slide"
            width="100%"
            style={{ objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
      <h1 className="w-100">test</h1>
    </div>
  );
};
