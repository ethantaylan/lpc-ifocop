import React from "react";
import { Councils } from "../components/council/councils";
import { Feedbacks } from "../components/feedbacks/feedbacks";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { PopularProducts } from "../components/popular-products/popular-products";
import { ProductSlider } from "../components/product-slider/product-slider";
import { Title } from "../components/title/title";
import { UnderHero } from "../components/under-hero/under-hero";

type Props = {};

export const Home: React.FC = (props: Props) => {
  return (
    <React.Fragment>
      <Hero />
      <UnderHero />
      <Councils />
      {/* <ProductSlider /> */}
      {/* <PopularProducts /> */}
      <Feedbacks />
    </React.Fragment>
  );
};
