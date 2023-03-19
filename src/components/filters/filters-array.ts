export interface Filter {
  label?: string;
  isAccessory?: boolean;
  accessories?: Accessory[];
}

export interface Accessory {
  label: string;
}

export const filters: string[] = [
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
  "Sacs",
];
