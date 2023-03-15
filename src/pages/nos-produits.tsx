import { Products } from "../components/products/products";
import { ProductsHero } from "../components/products/products-hero/products-hero";

export const NosProduits = () => {
  return (
    <div className="w-100">
      <ProductsHero />
      <Products />
    </div>
  );
};
