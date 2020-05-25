import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import Item from "../Item/Item";
import RowStyled from "./RowStyled";

const COLUMNS = 3;
const ROWS = 3;

const InfiniteGrid = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
}) => {
  const itemCount = hasNextPage ? items.length + 12 : items.length;
  const rowCount = itemCount / COLUMNS;
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
  // const isRowLoaded = (index) => !hasNextPage || index < items.length / 2;
  const isRowLoaded = (index) => index < items.length / 2;
  const Row = ({ index, style }) => {
    if (!items[index]) return <div>Loading...</div>;
    return (
      <RowStyled styles={style}>
        {/* <img src={items[index].attributes.posterImage.small}></img> */}
        {items.slice(index * COLUMNS, index * COLUMNS + COLUMNS).map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </RowStyled>
    );
  };

  return (
    <InfiniteLoader
      isItemLoaded={isRowLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <AutoSizer style={{ height: "95vh", width: "100%" }}>
          {({ height, width }) => (
            <List
              itemData={items}
              onItemsRendered={onItemsRendered}
              ref={ref}
              width={width}
              height={height}
              itemCount={rowCount}
              itemSize={height / ROWS}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
};

export default InfiniteGrid;
