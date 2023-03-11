export interface Filter {
  label: string;
  isAccessory?: boolean;
  accessories?: Accessory[];
}

export interface Accessory {
  label: string;
}

export const filters: Filter[] = [
  {
    label: "T-shirts",
  },
  {
    label: "Vestes",
  },
  {
    label: "Meantaux",
  },
  {
    label: "Pulls",
  },
  {
    label: "Jeans",
  },
  {
    label: "Chaussures",
  },
  {
    label: "Robes",
  },
  {
    label: "Accessoires",
    isAccessory: true,
    accessories: [
      { label: "Bonnets" },
      { label: "Casquettes" },
      { label: "Lunettes" },
      { label: "Montres" },
      { label: "Ceintures" },
      { label: "Sacs" },
    ],
  },
];
