import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";
import Item from "../Item/Item";
import RowStyled from "./RowStyled";

const NUM_COLUMNS = 2;

const InfiniteGrid = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
}) => {
  const itemCount = hasNextPage ? items.length + 10 : items.length;
  const rowCount = itemCount / NUM_COLUMNS;
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
  const isItemLoaded = (index) => !hasNextPage || index < items.length;
  const Row = ({ index, style }) => {
    if (!items[index]) return <div>Loading...</div>;
    return (
      <RowStyled styles={style}>
        {/* <img src={items[index].attributes.posterImage.small}></img> */}
        {items
          .slice(index * NUM_COLUMNS, index * NUM_COLUMNS + NUM_COLUMNS)
          .map((item) => (
            <Item item={item} key={item.id} />
          ))}
      </RowStyled>
    );
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
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
              columnWidth={width / NUM_COLUMNS}
              columnCount={NUM_COLUMNS}
              itemCount={rowCount}
              rowHeight={height / NUM_COLUMNS}
              outerElementType={"div"}
              itemSize={height / NUM_COLUMNS}
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
