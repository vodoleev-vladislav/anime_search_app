import React from "react";
import { shortenTitle, formatDate } from "../../services/utility";
import ItemStyled from "./ItemStyled";
import Rating from "../Rating/Rating";
import Loader from "../Loader/Loader";

const Item = ({ item }) => {
  if (!item) {
    return (
      <ItemStyled>
        <Loader />
      </ItemStyled>
    );
  }

  return (
    <ItemStyled>
      <img src={item.attributes.posterImage.small} alt="anime"></img>
      <div className="info">
        <div className="info__title">
          {shortenTitle(item.attributes.canonicalTitle)}
        </div>
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
              <strong>Start:</strong> {formatDate(item.attributes.startDate)}
            </p>
          </div>
          <div className="info__rating-box">
            <Rating rating={item.attributes.averageRating} />
          </div>
        </div>
      </div>
    </ItemStyled>
  );
};

export default Item;
