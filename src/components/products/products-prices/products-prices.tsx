import React, { useState } from "react";
import { Checkbox, CheckboxChangeEvent } from "primereact/checkbox";
import { Form } from "react-bootstrap";
import "./products-prices.scss";
import { Title } from "../../title/title";

export const ProductsPrices = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);

  return (
    <React.Fragment>
      <Title className="primary mb-4" h5 title={"Prix"} />
      <Form className="primary">
        <Form.Check className="" id="" label="0€ - 15€" />
        <Form.Check id="" label="15€ - 30€" />
        <Form.Check id="" label="30€ - 50€" />
        <Form.Check id="" label="50€ + " />
      </Form>
    </React.Fragment>
  );
};
