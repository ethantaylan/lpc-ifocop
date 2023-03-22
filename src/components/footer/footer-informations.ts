export interface FooterInformationsProps {
  title: string;
  links: FooterInformationsLinksProps[];
}

export interface FooterInformationsLinksProps {
  title: string;
  url: string;
  isImportant?: boolean;
}

export const FooterInformations: FooterInformationsProps[] = [
  {
    title: "Informations",
    links: [
      { title: "Livraison", url: "url" },
      { title: "Garantie", url: "url" },
      { title: "Support", url: "url" },
      { title: "Plans du site", url: "url" },
      { title: "Politique privée", url: "url" },
      { title: "Termes et conditions", url: "url" },
    ],
  },
  {
    title: "Boutiques",
    links: [
      { title: "Paris", url: "url", isImportant: true },
      { title: "Montpellier", url: "url", isImportant: true },
      { title: "Saint-Malo", url: "url", isImportant: true },
      { title: "Saint-Barthélemy-d'Anjou", url: "url", isImportant: true },
      { title: "Orléans", url: "url", isImportant: true },
      { title: "Châlons-en-Champagne", url: "url", isImportant: true },
    ],
  },
  {
    title: "Aide",
    links: [
      {
        title: "hi@lepetitcommerce.com",
        url: "mailto: hi@lepetitcommerce.com ",
      },
      { title: "+331 23 45 67 89", url: "url" },
      { title: "", url: "url" },
      { title: "Support", url: "url" },
    ],
  },
];
