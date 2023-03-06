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
      { title: "Berlin", url: "url", isImportant: true },
      { title: "Warranty", url: "url" },
      { title: "Warranty", url: "url" },
    ],
  },
  {
    title: "Aide",
    links: [
      { title: "Support", url: "url" },
      { title: "Support", url: "url" },
      { title: "Support", url: "url" },
      { title: "Support", url: "url" },
    ],
  },
];
