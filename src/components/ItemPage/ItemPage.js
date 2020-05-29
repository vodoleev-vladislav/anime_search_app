import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import displayTitleName from "../../services/displayTitleName";
import { getTitleById } from "../../services/anime";
import ItemPageStyled from "./ItemPageStyled";
import Item from "../Item/Item";
import StyledLink from "../Link/StyledLink";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Rating from "../Rating/Rating";

const getAltTitles = ({ titles, canonicalTitle }) => {
  const altTitles = Object.keys(titles).reduce((result, key) => {
    if (titles[key] === canonicalTitle || key.includes("ja")) {
      return result;
    }
    return result.concat(key);
  }, []);
  return altTitles;
};

const ItemPage = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    (async () => {
      // const item = props.items.find((item) => item.id === id);
      // if (!item) {
      console.log("fetching from api");
      const response = await getTitleById(id);
      setDetails(response);
      // } else {
      //   console.log("getting from state");
      //   setDetails(item);
      // }
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
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ItemPageStyled
          background={
            details.attributes.coverImage &&
            details.attributes.coverImage.original
          }
        >
          <img
            className="poster"
            src={details.attributes.posterImage.medium}
            alt="poster"
          />
          <div className="details">
            <div className="details__title">
              <h3 className="details__title-main">
                {details.attributes.canonicalTitle}
              </h3>
              <ul className="details__title-alts">
                {altTitles &&
                  altTitles.map((key) => (
                    <li key={key} className="details__title-alt">
                      <strong>{key.toUpperCase()}: </strong>
                      {details.attributes.titles[key]}
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
              <strong>End Date:</strong>{" "}
              {formatDate(details.attributes.endDate)}
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
        {/* <div style={{ display: "flex" }}>
          {props.items.slice(0, 3).map((item) => (
            <StyledLink
              to={`/title/${item.id}`}
              key={item.id}
              onClick={() => setDetails(null)}
            >
              <Item item={item} />
            </StyledLink>
          ))}
        </div> */}
      </>
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
