import React from "react";
import Item from "../Item/Item";

const NUM_COLUMNS = 2;

const ItemRenderer = ({ index, style, data }) => {
  // const index = rowIndex * NUM_COLUMNS + columnIndex;
  let content;
  if (index < data.length) {
    content = <Item item={data[index]} style={style} />;
  } else {
    content = <div style={style}>Loading ...</div>;
  }

  return <>{content}</>;
};

export default ItemRenderer;
