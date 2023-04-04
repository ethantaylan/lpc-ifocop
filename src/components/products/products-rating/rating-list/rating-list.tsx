import Rating from "@mui/material/Rating";
import React from "react";

export interface RatingListProps {
  starsValue: number;
  numbersOrRating: number;
}

const RatingListArray: RatingListProps[] = [
  {
    starsValue: 5,
    numbersOrRating: 85,
  },
  {
    starsValue: 4,
    numbersOrRating: 28,
  },
  {
    starsValue: 3,
    numbersOrRating: 25,
  },
  {
    starsValue: 2,
    numbersOrRating: 9,
  },
  {
    starsValue: 1,
    numbersOrRating: 8,
  },
];

export const RatingList: React.FC = () => {
  return (
    <div className="d-flex flex-column">
      {RatingListArray.map((rating: RatingListProps, index: number) => (
        <div key={index} className="d-flex align-items-center">
          <Rating
            size="medium"
            name="read-only"
            className="my-1"
            value={rating.starsValue}
            readOnly
          />
          <small className="primary ms-2">({rating.numbersOrRating})</small>
        </div>
      ))}{" "}
    </div>
  );
};
