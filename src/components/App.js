import React, { useState, useEffect } from "react";
import { getPopularTitles, getTitlesByQuery } from "../services/anime";
import Search from "./Search/Search";

const App = () => {
  const [search, setSearch] = useState("");
  const [animelist, setAnimelist] = useState([]);
  useEffect(() => {
    (async () => {
      if (search) {
        setAnimelist(await getTitlesByQuery(search));
      } else {
        setAnimelist(await getPopularTitles());
      }
    })();
  }, [search]);

  return (
    <div>
      <Search setSearch={setSearch} />
      {animelist.map((anime) => (
        <div style={{ display: "inline-block" }}>
          <img src={anime.attributes.posterImage.small}></img>
          <p>
            {anime.attributes.titles.en}/{anime.attributes.titles.en_jp}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
