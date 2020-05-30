import React, { useEffect } from "react";
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
  useEffect(() => {
    if (inView && !isNextPageLoading) loadNextPage();
  }, [inView, isNextPageLoading, loadNextPage]);

  console.log(items[Math.round(Math.random() * items.length)]);

  return (
    <GridStyled
      background={
        items.length !== 0
          ? items[Math.round(Math.random() * items.length)].attributes
              .coverImage.original
          : null
      }
    >
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
