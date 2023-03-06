import HeroImg from "../../assets/hero.jpg";
import { useGlobalContext } from "../../context/context";

export const Hero = () => {
  const { secondary, primary } = useGlobalContext();
  return (
    <div className="d-flex p-5">
      <div
        style={{ backgroundColor: secondary }}
        className="d-flex flex-column primary justify-content-center align-items-center w-100"
      >
        <h1 className={`bold`}>Soldes d'Hiver</h1>
        <h2>Jusqu'à 40%</h2>
        <button
          style={{ backgroundColor: primary }}
          className=" mt-5 btn text-white"
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
