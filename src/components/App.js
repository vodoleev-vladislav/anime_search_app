import React, { useState, useEffect } from "react";
import Search from "./Search/Search";
import Grid from "./Grid/Grid";
import { getPopularTitles } from "../services/anime";

const App = () => {
  const [search, setSearch] = useState("");
  const [animelist, setAnimelist] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);

  const loadNextPage = async () => {
    setIsNextPageLoading(true);
    const response = await getPopularTitles(offset);
    (() => {
      setOffset(offset + 1);
      setIsNextPageLoading(false);
      setAnimelist([...animelist, ...response.animelist]);
      setHasNextPage(response.hasNextPage);
    })();
  };

  return (
    <div>
      <Search setSearch={setSearch} />
      <Grid
        hasNextPage={hasNextPage}
        isNextPageLoadinh={isNextPageLoading}
        items={animelist}
        loadNextPage={loadNextPage}
      />
    </div>
  );
};

export default App;
