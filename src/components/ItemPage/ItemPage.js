import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTitleById } from "../../services/anime";
import { getAltTitles, formatDate } from "../../services/utility";
import ItemPageStyled from "./ItemPageStyled";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Rating from "../Rating/Rating";
import Loader from "../Loader/Loader";

const ItemPage = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    (async () => {
      const item = props.items.find((item) => item.id === id);
      if (!item) {
        const response = await getTitleById(id);
        setDetails(response);
      } else {
        setDetails(item);
      }
    })();
  }, [id, props.items]);

  const altTitles = details ? getAltTitles(details.attributes) : null;

  if (!details) {
    return (
      <ItemPageStyled>
        <Loader />
      </ItemPageStyled>
    );
  } else {
    return (
      <ItemPageStyled
        background={
          details.attributes.coverImage &&
          details.attributes.coverImage.original
        }
      >
        <div className="poster__container">
          <img
            className="poster"
            src={details.attributes.posterImage.medium}
            alt="poster"
          />
        </div>

        <div className="details">
          <div className="details__title">
            <h3 className="details__title-main">
              {details.attributes.canonicalTitle}
            </h3>
            <ul className="details__title-alts">
              {altTitles &&
                altTitles.map((item) => (
                  <li key={item.lang} className="details__title-alt">
                    <strong>{item.lang.toUpperCase()}: </strong>
                    {item.title}
                  </li>
                ))}
            </ul>
          </div>

          <p>
            <strong>Show Type: </strong>
            {details.attributes.showType}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {details.attributes.status === "current"
              ? "ongoing"
              : details.attributes.status}
          </p>

          {details.attributes.episodeCount && (
            <p>
              <strong>Episodes:</strong> {details.attributes.episodeCount}
            </p>
          )}

          <p className="details__age-rating">
            <strong>Age Rating:</strong> {details.attributes.ageRating} -{" "}
            {details.attributes.ageRatingGuide}
          </p>
          <p>
            <strong>Start Date:</strong>{" "}
            {formatDate(details.attributes.startDate)}
          </p>
          <p>
            <strong>End Date:</strong> {formatDate(details.attributes.endDate)}
          </p>
          <div className="details__rating-box">
            <Rating rating={details.attributes.averageRating} />
            <p className="details__rating-text">
              User
              <br />
              Score
            </p>
          </div>
          <p className="details__overview">Overview</p>
          <p>{details.attributes.synopsis}</p>
        </div>
      </ItemPageStyled>
    );
  }
};

export default function ItemPageWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <ItemPage {...props} />
    </ErrorBoundary>
  );
}
