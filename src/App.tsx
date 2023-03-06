import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home";

export const App = () => {
  return (
    <>
      <div className="App container">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
