import Casquettes from "../../../assets/products/casquettes.jpeg";

export const ProductsHero = () => {
  return (
      <div className="w-100 position-relative">
        <img
          src={Casquettes}
          style={{ objectFit: "cover", opacity: 1, }}
          width={"100%"}
          height={300}
          alt="Hero"
        />
      </div>
  );
};
