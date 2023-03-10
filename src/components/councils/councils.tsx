import Councils2 from "../../assets/Councils-2.jpg";
import { useGlobalContext } from "../../context/context";
import { FaLeaf } from "react-icons/fa";


export interface CuncilProps {}

export const Councils: React.FC = () => {
  const theme = useGlobalContext();

  return (
    <div className="w-100 mt-5 mb-5 d-flex">
      <div className="w-100 position-relative">
        <img
          width="100%"
          style={{ objectPosition: "center", objectFit: "cover" }}
          src={Councils2}
          alt=""
        />{" "}
      </div>
      <div className=" d-flex w-100 flex-column">
        <h1
          className="primary m-0 text-center w-100 p-4 bold"
          style={{
            bottom: "0px",
            borderRadius: "0px",
          }}
        >
          Mission dressing pour le printemps <FaLeaf />
        </h1>
        <p className="p-5">
          <br />
          Le printemps est une saison de renouveau et de rafraîchissement, et
          cela se reflète dans la mode. Les vêtements printaniers sont légers,
          aérés et colorés, et ils vous aident à vous sentir frais et enjoué
          tout au long de la journée. <br /> <br />{" "}
          <span className="bold">
            Sur notre site, nous avons rassemblé une large sélection de
            vêtements pour vous aider à créer le look parfait pour le printemps.{" "}
          </span>
          <br /> <br /> Que vous cherchiez des robes légères, des jupes fluides,
          des pantalons amples, des blouses colorées, des t-shirts imprimés ou
          des vestes légères, vous trouverez tout ce dont vous avez besoin ici.{" "}
          <br /> <br /> Notre équipe de stylistes et d'experts de la mode est à
          votre disposition pour vous aider à choisir
          <span className="bold">
            {" "}
            les vêtements qui conviennent le mieux
          </span>{" "}
          à votre style et à votre silhouette. Nous sommes là pour répondre à
          toutes vos questions, vous donner des conseils sur les tendances de la
          saison, et vous aider à trouver les pièces qui feront de votre
          garde-robe de printemps un succès. Alors, n'hésitez plus et explorez
          notre site pour trouver les vêtements printaniers parfaits pour vous.{" "}
          <br /> <br />{" "}
          <span className="bold">
            Nous sommes impatients de vous accompagner dans votre mission
            dressing pour le printemps !
          </span>
        </p>
      </div>
    </div>
  );
};
