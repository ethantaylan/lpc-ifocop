import { RatingList } from "../../rating-list/rating-list";
import { Title } from "../../title/title";

export const ProductsRating = () => {
  return (
    <div className="mt-5">
      <Title className="primary mb-4" h5 title={"Avis"} />
      <RatingList />
    </div>
  );
};
