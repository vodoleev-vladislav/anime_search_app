import React, { useEffect } from "react";
import Item from "../Item/Item";
import CustomGridStyled from "./CustomGridStyled";

const CustomGrid = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.innerHeight, window.scrollY, document.body.offsetHeight);
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
        loadNextPage();
    };
    window.addEventListener("scroll", handleScroll);
  }, [loadNextPage]);

  return (
    <CustomGridStyled>
      {items.map((item) => (
        <Item item={item} />
      ))}
      {isNextPageLoading || <div style={{ height: "50vh" }}>Loading...</div>}
    </CustomGridStyled>
  );
};

export default CustomGrid;
