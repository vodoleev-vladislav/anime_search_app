import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import GridStyled from "./GridStyled";
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
  // const fetchItems = (inView) => {
  //   if (inView && !isNextPageLoading) loadNextPage();
  // };

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

  const renderGridContent = () => {
    if (items.length === 0) {
      return (
        <div ref={ref}>
          <Item />
        </div>
      );
    }
    return items.map((item, index) => {
      if (index === items.length - 1) {
        return (
          <div ref={ref}>
            <StyledLink to={`/anime/${item.id}`} key={item.id}>
              <Item item={item} />
            </StyledLink>
          </div>
        );
      }
      return (
        <StyledLink to={`/anime/${item.id}`} key={item.id}>
          <Item item={item} />
        </StyledLink>
      );
    });
  };

  return (
    <GridStyled background={bg}>
      {renderGridContent()}
      {isNextPageLoading && items.length !== 0 && <Item />}
    </GridStyled>
  );
};

export default CustomGrid;
