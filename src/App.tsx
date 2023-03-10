import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Home } from "./pages/home";
import { OurProducts } from "./pages/our-products";

export const App = () => {
  return (
    <>
      <div className="App container mb-5">
        <Header />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<OurProducts />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
