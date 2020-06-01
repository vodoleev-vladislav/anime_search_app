import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import GridStyled from "./GridStyled";
import { default as StyledLink } from "../Link/StyledLink";
import { useInView, InView } from "react-intersection-observer";

const CustomGrid = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
}) => {
  // const [ref, inView] = useInView({ threshold: 0.1 });
  const [bg, setBg] = useState(null);
  const fetchItems = (inView) => {
    if (inView && !isNextPageLoading) loadNextPage();
  };

  // useEffect(() => {
  //   if (inView && !isNextPageLoading) loadNextPage();
  // }, [inView, isNextPageLoading, loadNextPage]);

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
      {items.map((item, index) => {
        if (index === items.length - 1) {
          return (
            <InView as="div" onChange={(inView, entry) => fetchItems(inView)}>
              <StyledLink to={`/anime/${item.id}`} key={item.id}>
                <Item item={item} />
              </StyledLink>
            </InView>
          );
        }
        return (
          <StyledLink to={`/anime/${item.id}`} key={item.id}>
            <Item item={item} />
          </StyledLink>
        );
      })}
      {(isNextPageLoading || items.length === 0) && (
        <InView as="div" onChange={(inView, entry) => fetchItems(inView)}>
          <Item />
        </InView>
      )}
    </GridStyled>
  );
};

export default CustomGrid;
