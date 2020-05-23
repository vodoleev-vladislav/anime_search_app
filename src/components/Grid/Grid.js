import React from "react";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

const Grid = ({ hasNextPage, isNextPageLoading, items, loadNextPage }) => {
  const itemCount = hasNextPage ? items.length + 1 : items.length;
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
  const isItemLoaded = (index) => !hasNextPage || index < items.length;

  const Item = ({ index, style }) => {
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
    <>
      <InfiniteLoader
        isItemLoaded={isItemLoaded}
        itemCount={itemCount}
        loadMoreItems={loadMoreItems}
      >
        {({ onItemsRendered, ref }) => (
          <List
            itemCount={itemCount}
            onItemsRendered={onItemsRendered}
            ref={ref}
            height={800}
            itemSize={800}
          >
            {Item}
          </List>
        )}
      </InfiniteLoader>
    </>
  );
};

export default Grid;
