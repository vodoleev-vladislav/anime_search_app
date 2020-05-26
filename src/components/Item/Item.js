import React from "react";
import ItemStyled from "./ItemStyled";
import Rating from "../Rating/Rating";

const Item = ({ item }) => {
  return (
    <ItemStyled>
      <img src={item.attributes.posterImage.small} alt="anime"></img>
      <p>{item.attributes.titles.en_jp}</p>
      <Rating rating={item.attributes.averageRating} />
    </ItemStyled>
  );
};

export default Item;
