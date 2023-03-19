export interface ProductsProps {
  category: Categories[];
  colors: string[];
  size: string[];
  image: any;
}

export type Categories = [
  "T-shirts",
  "Vestes",
  "Manteaux",
  "Pulls",
  "Jeans",
  "Chaussures",
  "Robes",
  "Bonnets",
  "Casquettes",
  "Lunettes",
  "Montres",
  "Ceintures",
  "Sacs"
];

// export const Products: ProductsProps[] = [
//   {
//     category: [é"],
//     colors: ["Red", "Blue", "Orange"],
//     size: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
//     image: "",
//   },
// ];
