import { Form } from "react-bootstrap";
import { MuiSlider } from "../../mui-slider/mui-slider";
import { Title } from "../../title/title";
import "./products-prices.scss";

export const ProductsPrices = () => {
  const ProductsPriceRange = ["0€ - 15€", "15€ - 30€", "30€ - 50€", "50€ + "];

  return (
    <div className="mt-5">
      <Title className="primary mb-4" h5 title={"Prix"} />
      <Form className="primary">
        {ProductsPriceRange.map((range, index: number) => (
          <Form.Check key={index} className="my-2" id="" label={range} />
        ))}
      </Form>
      <MuiSlider />
    </div>
  );
};
