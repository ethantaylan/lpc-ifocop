import React from "react";
import { Title } from "../title/title";

export const WhoWeAreSection = () => {
  return (
    <div className="d-flex flex-column w-100 justify-content-center">
      <Title h5 className="my-5" title="Qui sommes-nous ?" />
      <div className="w-100 d-flex justify-content-center flex-column align-items-center">
        <p>
          <span className="bold">
            {" "}
            Le petit Commerce, votre destination de choix pour les vêtements
            tendance et de qualité.
          </span>{" "}
          <br /> <br /> Nous sommes une entreprise spécialisée dans la vente de
          vêtements en ligne ainsi que dans l'exploitation d'un réseau de
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
          tous les goûts et à toutes les occasions, du quotidien au plus formel.
        </p>

        <p>
          Notre équipe est composée de professionnels de la mode, du marketing
          et de la vente, qui travaillent ensemble pour offrir à nos clients une
          expérience d'achat en ligne et en magasin exceptionnelle. Nous sommes
          fiers de proposer un service clientèle de qualité, ainsi que des prix
          compétitifs sur tous nos articles.
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
            nous soutenir dans notre engagement en faveur de la mode éthique et
            durable.
          </span>
        </p>
      </div>
    </div>
  );
};
