import { MdOutlineConstruction } from "react-icons/md";
import { PaymentSection } from "../components/payment-section/payment-section";

export const Actualites = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      {/* <h1>L'overview des actualités</h1>
      <h3>Recrutements</h3>
      <h3>Évenements à venir</h3>
      <h3>Presse</h3> */}
      <div className="d-flex p-5 flex-column justify-content-center align-items-center">
        {" "}
        <MdOutlineConstruction size={100} />
        <h1 className="mt-5 text-center">This page is under construct</h1>
        <hr />
      </div>
      <PaymentSection />
    </div>
  );
};
