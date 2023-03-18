export interface FilterProps {
  label?: string;
  isAccessory?: boolean;
  accessories?: Accessory[];
}

export interface Accessory {
  label: string;
}

export const filters: FilterProps[] = [
  {
    label: "T-shirts",
     
  },
  {
    label: "Vestes",
  },
  {
    label: "Manteaux",
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
