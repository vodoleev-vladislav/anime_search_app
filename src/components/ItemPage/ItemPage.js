import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import displayTitleName from "../../services/displayTitleName";
import { getTitleById } from "../../services/anime";
import ItemPageStyled from "./ItemPageStyled";
import Item from "../Item/Item";
import StyledLink from "../Link/StyledLink";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

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
          <div className="description">
            <h3 className="description__title">
              {details.attributes.canonicalTitle}
            </h3>
          </div>
        </ItemPageStyled>
        <div style={{ display: "flex" }}>
          {props.items.slice(0, 3).map((item) => (
            <StyledLink
              to={`/title/${item.id}`}
              key={item.id}
              onClick={() => setDetails(null)}
            >
              <Item item={item} />
            </StyledLink>
          ))}
        </div>
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
