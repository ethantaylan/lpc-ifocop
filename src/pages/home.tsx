import React from "react";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";

type Props = {};

export const Home: React.FC = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
    </React.Fragment>
  );
};
