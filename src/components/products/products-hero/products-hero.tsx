import Casquettes from "../../../assets/products/Casquettes.jpeg";

export const ProductsHero = () => {
  return (
      <div className="w-100 position-relative">
        <img
          src={Casquettes}
          style={{ objectFit: "cover", opacity: 1, }}
          width={"100%"}
          height={500}
          alt=""
        />
      </div>
  );
};
