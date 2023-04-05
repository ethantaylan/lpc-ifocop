import { Products } from "../components/products/products";
import { ProductsHero } from "../components/products/products-hero/products-hero";
import { Title } from "../components/title/title";

export const NosProduits = () => {
  return (
    <div className="w-100">
      <p className="text-center primary my-5">
        <Title h1 title={"Nos produits"} className="my-5" />
      </p>
      <ProductsHero />
      <Products />
    </div>
  );
};
