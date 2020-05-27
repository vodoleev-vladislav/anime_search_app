import React from "react";
import ItemStyled from "./ItemStyled";
import Rating from "../Rating/Rating";

const Item = ({ item }) => {
  return (
    <ItemStyled>
      <img src={item.attributes.posterImage.small} alt="anime"></img>
      <div className="info">
        <div className="info__title">{item.attributes.canonicalTitle}</div>
        <div className="info__bottom">
          <div className="info__details">
            <p>Show Type: {item.attributes.showType}</p>
            <p>
              Status:{" "}
              {item.attributes.status === "current"
                ? "ongoing"
                : item.attributes.status}
            </p>
            {item.attributes.episodeCount && (
              <p>Episodes: {item.attributes.episodeCount}</p>
            )}
            <p>Start Date: {item.attributes.startDate}</p>
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
