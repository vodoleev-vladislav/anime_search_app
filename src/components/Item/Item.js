import React from "react";
import ItemStyled from "./ItemStyled";

const Item = ({ item }) => {
  return (
    <ItemStyled>
      <img src={item.attributes.posterImage.small} alt="anime"></img>
      <p>{item.attributes.titles.en_jp}</p>
    </ItemStyled>
  );
};

export default Item;
