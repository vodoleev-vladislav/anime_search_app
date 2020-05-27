import React, { useEffect } from "react";
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
  useEffect(() => {
    if (inView && !isNextPageLoading) loadNextPage();
  }, [inView, isNextPageLoading, loadNextPage]);

  return (
    <GridStyled>
      {items.map((item) => (
        <StyledLink to={`/title/${item.id}`} key={item.id}>
          <Item item={item} />
        </StyledLink>
      ))}
      {isNextPageLoading || <div ref={ref}>Loading...</div>}
    </GridStyled>
  );
};

export default CustomGrid;
