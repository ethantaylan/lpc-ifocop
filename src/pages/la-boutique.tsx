import { Title } from "../components/title/title";
import Video1 from "../assets/video2.mp4";
import { PaymentSection } from "../components/payment-section/payment-section";
import { useGlobalContext } from "../context/context";
import { ContactSection } from "../components/contact-section/contact-section";
import { WhoWeAreSection } from "../components/who-we-are-section/who-we-are-section";
import { RecruitmentSection } from "../components/recruitment/recruitment-section";
import React from "react";
import { Button } from "@mui/material";
import { Evenements } from "../components/evenements/evenements";
import { Presse } from "../components/presse/presse";
import { useMatches } from "../hooks/use-matches";

export const LaBoutique: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>();

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const theme = useGlobalContext();

  const matches = useMatches();

  interface subMenusProps {
    title: string;
  }
  const subMenus: subMenusProps[] = [
    { title: "Contact" },
    { title: "Recrutement" },
    { title: "Evenements" },
    { title: "Presse" },
  ];

  return (
    <div className="w-100">
      <p>
        {" "}
        <Title h1 className="text-center primary" title="La boutique" />
      </p>
      <video
        height={matches ? 300 : 600}
        className="w-100 position-relative"
        autoPlay={true}
        loop={true}
        style={{ objectFit: "cover", borderRadius: 0 }}
      >
        <source src={Video1} />
      </video>

      <WhoWeAreSection />
      <div
        className={`w-100 my-5 text-secondary justify-content-center d-flex ${
          matches && "flex-column"
        }`}
      >
        {subMenus.map((subMenu: subMenusProps, index: number) => (
          <Button
            key={index}
            onClick={() => handleClick(index)}
            className={`${matches ? "my-3" : "mx-3 w-100"} `}
            style={{ backgroundColor: theme.primary }}
            color="primary"
            variant="contained"
          >
            {subMenu.title}
          </Button>
        ))}
      </div>
      {activeIndex === 0 && <ContactSection />}
      {activeIndex === 1 && <RecruitmentSection />}
      {activeIndex === 2 && <Evenements />}
      {activeIndex === 3 && <Presse />}
    </div>
  );
};
