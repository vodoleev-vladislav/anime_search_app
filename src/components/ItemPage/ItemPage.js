import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import displayTitleName from "../../services/displayTitleName";
import { getTitleById } from "../../services/anime";
import ItemPageStyled from "./ItemPageStyled";
import Item from "../Item/Item";
import StyledLink from "../Link/StyledLink";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Rating from "../Rating/Rating";

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

  console.log(details);
  if (!details) {
    return <div>Loading...</div>;
  } else {
    const startDate = new Date(details.attributes.startDate);
    const formattedDate = startDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
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
            <h3 className="details__title">
              {details.attributes.canonicalTitle}
            </h3>
            <p className="details__age-rating">
              <strong>Age Rating:</strong> {details.attributes.ageRating} -{" "}
              {details.attributes.ageRatingGuide}
            </p>
            <p>
              <strong>Start Date:</strong> {formattedDate}
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
