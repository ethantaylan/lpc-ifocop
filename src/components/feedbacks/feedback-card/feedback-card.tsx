import { Rating } from "@mui/material";
import React from "react";
import "./feedback-card.scss";
import { useMatches } from "../../../hooks/use-matches";

export interface FeedBackCardProps {
  avatar?: number;
  userName: string;
  text: string;
  date: string;
  starValue: number;
}

export const FeedbackCard: React.FC<FeedBackCardProps> = ({
  text,
  userName,
  date,
  avatar,
  starValue,
}) => {
  const matches = useMatches();

  return (
    <div style={{ width: matches ? 300 : 380 }} className="m-4">
      <div className="card">
        <div
          style={{
            height: matches ? "auto" : 180,
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          className="card-body"
        >
          <div
            className={`d-flex ${matches ? "flex-column" : ""} mb-3 ${
              matches && "align-items-center"
            } justify-content-between w-100`}
          >
            <div className="d-flex align-items-center ">
              <img
                src={`https://mdbcdn.b-cdn.net/img/new/avatars/${avatar}.webp`}
                className="rounded-circle me-2"
                style={{ width: 40 }}
                alt="Avatar"
              />
              <h6 className="m-0 text-secondary">{`@${userName}`}</h6>
              <small className="ms-2 text-secondary">{date}</small>
            </div>

            <div className="d-flex">
              <Rating
                size="small"
                name="read-only"
                className="my-1"
                value={starValue}
                readOnly
              />
            </div>
          </div>

          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};
