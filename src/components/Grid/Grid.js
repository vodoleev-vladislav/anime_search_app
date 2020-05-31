import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import GridStyled from "./GridStyled";
import GridBG from "../GridBG/GridBG";
import { default as StyledLink } from "../Link/StyledLink";
import { useInView } from "react-intersection-observer";

const CustomGrid = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
}) => {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [bg, setBg] = useState(null);

  useEffect(() => {
    if (inView && !isNextPageLoading) loadNextPage();
  }, [inView, isNextPageLoading, loadNextPage]);

  useEffect(() => {
    if (!bg && items.length !== 0) {
      const posters = items.reduce(
        (result, item) =>
          item.attributes.coverImage
            ? [...result, item.attributes.coverImage.original]
            : result,
        []
      );
      if (posters.length !== 0) {
        const randomPoster =
          posters[Math.floor(Math.random() * posters.length)];
        setBg(randomPoster);
      } else {
        setBg(null);
      }
    }
    if (items.length === 0) {
      setBg(null);
    }
  }, [items, bg]);

  return (
    <GridStyled background={bg}>
      {items.map((item) => (
        <StyledLink to={`/anime/${item.id}`} key={item.id}>
          <Item item={item} />
        </StyledLink>
      ))}
      {!isNextPageLoading && (
        <div style={{ height: "25vh", backgroundColor: "orangered" }} ref={ref}>
          Loading...
        </div>
      )}
      {/* {items.length !== 0 && (
        <GridBG item={items[Math.round(Math.random() * items.length)]} />
      )} */}
    </GridStyled>
  );
};

export default CustomGrid;
