import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export interface FeedBackCardProps {
  avatar?: number;
  userName: string;
  text: string;
  fiveStars?: boolean;
  date: string;
}

export const FeedbackCard: React.FC<FeedBackCardProps> = ({
  text,
  userName,
  fiveStars,
  date,
  avatar,
}) => {
  return (
    <div className="mb-4 w-100">
      <div className="card" style={{ width: "18rem;" }}>
        <div className="card-body">
          <div className="d-flex mb-3 align-items-center justify-content-between w-100">
            <div className="d-flex align-items-center ">
              <img
                src={`https://mdbcdn.b-cdn.net/img/new/avatars/${avatar}.webp`}
                className="rounded-circle me-2"
                style={{ width: 30 }}
                alt="Avatar"
              />
              <h6 className="m-0 text-secondary">{`@${userName}`}</h6>
              <small className="ms-2 text-secondary">{date}</small>
            </div>

            <div className="d-flex">
              <AiFillStar color="#F7EF00" />
              <AiFillStar color="#F7EF00" />
              <AiFillStar color="#F7EF00" />
              <AiFillStar color="#F7EF00" />
              {fiveStars ? (
                <AiFillStar color="#F7EF00" />
              ) : (
                <AiOutlineStar color="darkgrey" />
              )}
            </div>
          </div>

          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};
