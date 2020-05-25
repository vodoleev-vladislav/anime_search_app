import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getTitleById } from "../../services/anime";
import ItemPageStyled from "./ItemPageStyled";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

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

  if (!details) {
    return <div>Loading...</div>;
  } else {
    return (
      <ItemPageStyled>
        <img
          className="img"
          src={details.attributes.posterImage.medium}
          alt="poster"
        />
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
