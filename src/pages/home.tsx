import React from "react";
import { Feedbacks } from "../components/feedbacks/feedbacks";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { PopularProducts } from "../components/popular-products/popular-products";
import { Title } from "../components/title/title";
import { UnderHero } from "../components/under-hero/under-hero";

type Props = {};

export const Home: React.FC = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <UnderHero />
      <Feedbacks />
      <Title title={"Nos produits populaires"} className={"my-5"} />
      <PopularProducts />
    </React.Fragment>
  );
};
