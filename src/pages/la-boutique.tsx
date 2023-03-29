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

export const LaBoutique: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>();

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const theme = useGlobalContext();

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
      <Title h1 className="my-5 text-center primary" title="La boutique" />

      <video
        height={600}
        className="w-100 position-relative"
        autoPlay={true}
        loop={true}
        style={{ objectFit: "cover", borderRadius: 0 }}
      >
        <source src={Video1} />
      </video>

      <WhoWeAreSection />
      <div className="w-100 my-5 text-secondary justify-content-center d-flex">
        {subMenus.map((subMenu: subMenusProps, index: number) => (
          <Button
            key={index}
            onClick={() => handleClick(index)}
            className="mx-3"
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
      <PaymentSection />
    </div>
  );
};
