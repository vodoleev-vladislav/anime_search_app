import React from "react";
import { FixedSizeGrid as Grid } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

const NUM_COLUMNS = 2;

const InfiniteGrid = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage,
}) => {
  const itemCount = hasNextPage ? items.length + 10 : items.length;
  const rowCount = itemCount / 2;
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  const Item = ({ columnIndex, rowIndex, style }) => {
    const index = rowIndex * NUM_COLUMNS + columnIndex;
    let content;
    if (isItemLoaded(index)) {
      content = (
        <img
          style={style}
          src={items[index].attributes.posterImage.medium}
        ></img>
      );
    } else {
      content = <div style={style}>Loading ...</div>;
    }

    return <>{content}</>;
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <AutoSizer style={{ height: "92vh", width: "95vw" }}>
          {({ height, width }) => (
            <Grid
              itemData={items}
              onItemsRendered={(gridProps) => {
                onItemsRendered({
                  overscanStartIndex:
                    gridProps.overscanRowStartIndex * NUM_COLUMNS,
                  overscanStopIndex:
                    gridProps.overscanRowStopIndex * NUM_COLUMNS,
                  visibleStartIndex:
                    gridProps.visibleRowStartIndex * NUM_COLUMNS,
                  visibleStopIndex: gridProps.visibleRowStopIndex * NUM_COLUMNS,
                });
              }}
              ref={ref}
              width={width}
              height={height}
              columnWidth={(0.98 * width) / NUM_COLUMNS}
              columnCount={NUM_COLUMNS}
              rowCount={rowCount}
              rowHeight={height / NUM_COLUMNS}
            >
              {Item}
            </Grid>
          )}
        </AutoSizer>
      )}
    </InfiniteLoader>
  );
};

export default InfiniteGrid;
