import { useNavigate } from "react-router-dom";
import HeroImg from "../../assets/hero.jpg";
import { useGlobalContext } from "../../context/context";
import { useMatches } from "../../hooks/use-matches";

export const Hero = () => {
  const { secondary, primary } = useGlobalContext();

  const matches = useMatches();
  const navigate = useNavigate();

  return (
    <div className={`d-flex ${matches && "flex-column"}`}>
      <div
        style={{ backgroundColor: secondary }}
        className="d-flex flex-column primary justify-content-center align-items-center w-100"
      >
        <h1 className={`bold ${matches ? "mt-4" : ""}`}>Soldes d'Hiver</h1>
        <h2>Jusqu'à 40%</h2>
        <button
          onClick={() => navigate("/nos-produits")}
          style={{ backgroundColor: primary }}
          className={`${matches ? "m-4" : "mt-5"} btn text-white`}
        >
          Voir les offres
        </button>
      </div>

      <div className="w-100 h-100">
        <img
          src={HeroImg}
          width="100%"
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
    </div>
  );
};
