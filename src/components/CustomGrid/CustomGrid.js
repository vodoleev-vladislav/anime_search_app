import React, { useEffect, useRef } from "react";
import Item from "../Item/Item";
import CustomGridStyled from "./CustomGridStyled";
import { useInView } from "react-intersection-observer";

const CustomGrid = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
}) => {
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView && !isNextPageLoading) loadNextPage();
  }, [inView, isNextPageLoading, loadNextPage]);

  return (
    <CustomGridStyled>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      {isNextPageLoading || (
        <div style={{ height: "50vh" }} ref={ref}>
          Loading...
        </div>
      )}
    </CustomGridStyled>
  );
};

export default CustomGrid;
