import { useMap } from "react-leaflet";

export interface StoresInformationsProps {
  city: string;
  adress: string;
  number: string;
  postcode?: number;
  zoomTo?: () => void;
  position: any;
}

export const StoresInformations: StoresInformationsProps[] = [
  {
    city: "Paris",
    adress: "99 rue John Doe",
    number: "+331 23 45 67 89",
    postcode: 18,
    position: [48.892156, 2.331827],
  },
  {
    city: "Montpellier",
    adress: "15 avenue des Myrtilles",
    number: "+331 23 45 67 89",
    postcode: 34000,
    position: [43.627300, 3.847045],
  },
  {
    city: "Saint-Malo",
    adress: "91 rue des rosiers",
    number: "+331 23 45 67 89",
    postcode: 35400,
    position: [48.652828, -1.999470],
  },
  {
    city: "Saint-Barthélemy-d'Anjou",
    adress: "204 avenue des Brillants",
    number: "+331 23 45 67 89",
    postcode: 49124,
    position: [47.476451, -0.499497],
  },
  {
    city: "Orléans",
    adress: "25 rue des Buissons",
    number: "+331 23 45 67 89",
    postcode: 45000,
    position: [47.908302, 1.896720],
  },
  {
    city: "Châlons-en-Champagne",
    adress: "16 cour d'Ormesson",
    number: "+331 23 45 67 89",
    postcode: 51000,
    position: [48.967171, 4.359249],
  }
];
