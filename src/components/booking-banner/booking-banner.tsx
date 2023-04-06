import BookingBannerImg from "../../assets/councils-3.jpeg";

export const BookingBanner = () => {
  return (
    <div className="w-100 h-100">
      <p>
        <h1 className="bold primary text-center">Réservation</h1>
      </p>
      <img
        className=""
        style={{ objectFit: "cover" }}
        height={300}
        width="100%"
        src={BookingBannerImg}
        alt=""
      />
    </div>
  );
};
