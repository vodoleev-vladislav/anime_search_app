import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import displayTitleName from "../../services/displayTitleName";
import { getTitleById } from "../../services/anime";
import ItemPageStyled from "./ItemPageStyled";
import Item from "../Item/Item";
import StyledLink from "../Link/StyledLink";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Rating from "../Rating/Rating";
import Loader from "../Loader/Loader";

const getAltTitles = ({ titles, canonicalTitle }) => {
  const altTitles = Object.keys(titles).reduce((result, key) => {
    if (
      titles[key] === canonicalTitle ||
      key.includes("ja") ||
      result.map((item) => item.title).includes(titles[key])
    ) {
      return result;
    }
    return result.concat({ lang: key, title: titles[key] });
  }, []);
  console.log(altTitles);
  return altTitles;
};

const ItemPage = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    (async () => {
      const item = props.items.find((item) => item.id === id);
      if (!item) {
        console.log("fetching from api");
        const response = await getTitleById(id);
        setDetails(response);
      } else {
        console.log("getting from state");
        setDetails(item);
      }
    })();
  }, [id, props.items]);

  const altTitles = details ? getAltTitles(details.attributes) : null;
  const formatDate = (date) => {
    const startDate = new Date(date);
    const formattedDate = startDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };

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
