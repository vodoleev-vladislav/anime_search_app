import React from "react";
import ItemStyled from "./ItemStyled";
import Rating from "../Rating/Rating";

const Item = ({ item }) => {
  const startDate = new Date(item.attributes.startDate);
  const formattedDate = startDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <ItemStyled>
      <img src={item.attributes.posterImage.small} alt="anime"></img>
      <div className="info">
        <div className="info__title">{item.attributes.canonicalTitle}</div>
        <div className="info__bottom">
          <div className="info__details">
            <p>
              <strong>Show Type: </strong>
              {item.attributes.showType}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {item.attributes.status === "current"
                ? "ongoing"
                : item.attributes.status}
            </p>
            {item.attributes.episodeCount && (
              <p>
                <strong>Episodes:</strong> {item.attributes.episodeCount}
              </p>
            )}
            <p>
              <strong>Age Rating:</strong> {item.attributes.ageRating}
            </p>
            <p>
              <strong>Start:</strong> {formattedDate}
            </p>
          </div>
          <div className="info__rating-box">
            {/* <p className="info__rating-text">
              User
              <br />
              score
            </p> */}
            <Rating rating={item.attributes.averageRating} />
          </div>
        </div>
      </div>
    </ItemStyled>
  );
};

export default Item;
