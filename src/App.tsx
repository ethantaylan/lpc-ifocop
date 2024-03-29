import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Avis } from "./pages/avis";
import { Accueil } from "./pages/accueil";
import { LaBoutique } from "./pages/la-boutique";
import { NosPointsDeVentes } from "./pages/nos-points-de-ventes";
import { NosProduits } from "./pages/nos-produits";
import { Reservation } from "./pages/reservation";
import { Actualites } from "./pages/actualites";
import { AxiosRequestConfig } from "axios";
import { useAxios } from "./hooks/use-axios";
import React from "react";

interface Menus {
  title: string;
  url: string;
  haveDropDown?: boolean;
  dropdownUrl?: string;
}

export const menus: Menus[] = [
  { title: "Accueil", url: "/" },
  { title: "Nos Produits", url: "/nos-produits" },
  { title: "Points de vente", url: "/nos-points-de-ventes" },
  { title: "Réservation", url: "/reservation" },
  { title: "Avis", url: "/avis" },
  { title: "La boutique", url: "/la-boutique" },
  {
    title: "Actualités",
    url: "/actualites",
  },
];

export const App = () => {
  return (
    <div>
      <div className="App container mb-5">
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Accueil />} />
          <Route path="/nos-produits" element={<NosProduits />} />
          <Route path="/nos-points-de-ventes" element={<NosPointsDeVentes />} />
          <Route path="/avis" element={<Avis />} />
          <Route path="/la-boutique" element={<LaBoutique />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/actualites" element={<Actualites />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
