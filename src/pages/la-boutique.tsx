import { Title } from "../components/title/title";
import Video1 from "../assets/video2.mp4";
import { PaymentSection } from "../components/payment-section/payment-section";
import { Button, Input, Rating, TextField } from "@mui/material";
import { useGlobalContext } from "../context/context";
import { Form } from "react-router-dom";

type Props = {};

export const LaBoutique = (props: Props) => {
  const theme = useGlobalContext();

  return (
    <div className="w-100">
      <Title h1 className="my-5 text-center primary" title="La boutique" />
      <video
        height={600}
        className="w-100 position-relative"
        autoPlay={true}
        loop={true}
        style={{ objectFit: "cover", borderRadius: 20 }}
      >
        <source src={Video1} />
      </video>
      <div className="d-flex flex-column w-100 justify-content-center">
        <Title h5 className="my-5" title="Qui somme nous ?" />
        <div className="w-75 d-flex justify-content-center flex-column align-items-center">
          <p>
            <span className="bold">
              {" "}
              Le petit Commerce, votre destination de choix pour les vêtements
              tendance et de qualité.
            </span>{" "}
            <br /> <br /> Nous sommes une entreprise spécialisée dans la vente
            de vêtements en ligne ainsi que dans l'exploitation d'un réseau de
            boutiques physiques situées dans plusieurs grandes villes.
          </p>

          <p>
            Nous sommes passionnés par la mode et notre mission est de fournir à
            nos clients{" "}
            <span className="bold">
              des vêtements élégants, confortables et abordables
            </span>{" "}
            qui reflètent leur style personnel. Nous nous efforçons de proposer
            une sélection de vêtements pour hommes et femmes qui conviennent à
            tous les goûts et à toutes les occasions, du quotidien au plus
            formel.
          </p>

          <p>
            Notre équipe est composée de professionnels de la mode, du marketing
            et de la vente, qui travaillent ensemble pour offrir à nos clients
            une expérience d'achat en ligne et en magasin exceptionnelle. Nous
            sommes fiers de proposer un service clientèle de qualité, ainsi que
            des prix compétitifs sur tous nos articles.
          </p>
          <p>
            Chez nous, nous croyons en la durabilité et nous nous engageons à{" "}
            <span className="bold">
              minimiser notre impact sur l'environnement.
            </span>{" "}
            Nous travaillons avec des fournisseurs et des partenaires qui
            partagent nos valeurs et qui cherchent également à minimiser leur
            empreinte écologique.
          </p>
          <p>
            Nous espérons que vous apprécierez notre sélection de vêtements en
            ligne et dans nos boutiques, et que vous découvrirez des pièces qui
            deviendront des incontournables de votre garde-robe. <br /> <br />
            <span className="bold">
              Merci de nous faire confiance pour vos achats de vêtements et de
              nous soutenir dans notre engagement en faveur de la mode éthique
              et durable.
            </span>
          </p>
        </div>
      </div>
      <Title h5 className="my-5" title="Contact" />
      <div className="w-75">
        <div className="d-flex flex-column w-100 mt-5 justify-content-center">
          <div className="d-flex mb-4 w-100">
            <Input className="p-2 my-3 me-5 w-100" placeholder="Nom" />
            <Input className="p-2 my-3 w-100"placeholder="Prénom" />
          </div>
          <div className="d-flex mb-4 w-100">
            <Input className="p-2 my-3 me-5 w-100"placeholder="Email" />
            <Input className="p-2 my-3 w-100"placeholder="Entreprise" />
          </div>
          <div className="d-flex w-100">
            {" "}
            <Input className="w-25 mb-4 p-2" placeholder="Pays" />
          </div>
        </div>
        <div className="d-flex flex-column">
        <Input className="p-2 mb-5 w-25"placeholder="Sujet" />

          <TextField
            className="my-4 w-100"
            id="filled-basic"
            label="Votre message"
            variant="filled"
          />
          <Button
            className="w-25"
            style={{ backgroundColor: theme.primary, color: "white" }}
          >
            Envoyer
          </Button>
        </div>
      </div>
      <PaymentSection />
    </div>
  );
};
