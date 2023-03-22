import React from "react";
import { Councils } from "../components/councils/councils";
import { Feedbacks } from "../components/feedbacks/feedbacks";
import { Hero } from "../components/hero/hero";
import { PaymentSection } from "../components/payment-section/payment-section";
import { UnderHero } from "../components/under-hero/under-hero";

type Props = {};

export const Accueil: React.FC = (props: Props) => {
  return (
    <React.Fragment>
      <Hero />
      <UnderHero />
      <Councils />
      <Feedbacks forHomePage={true} />
      <PaymentSection />
    </React.Fragment>
  );
};
