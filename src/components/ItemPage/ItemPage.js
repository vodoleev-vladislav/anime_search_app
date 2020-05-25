import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemPageStyled from "./ItemPageStyled";

const ItemPage = (props) => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  useEffect(() => {
    const item = props.items.find((item) => item.id === id);
    if (item) setDetails(item);
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

export default ItemPage;
