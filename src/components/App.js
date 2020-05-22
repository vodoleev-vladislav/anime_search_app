import React, { useState, useEffect } from "react";
import { getPopularTitles, getTitlesByQuery } from "../services/anime";
import Search from "./Search/Search";

const App = () => {
  const [search, setSearch] = useState("");
  const [animelist, setAnimelist] = useState([]);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    (async () => {
      setOffset(0);
      if (search) {
        setAnimelist(await getTitlesByQuery(search, offset));
      } else {
        setAnimelist(await getPopularTitles(offset));
      }
    })();
  }, [search]);

  const loadMoreTitles = async () => {
    setOffset(offset + 1);
    if (search) {
      const nextTitles = await getTitlesByQuery(search, offset + 1);
      setAnimelist([...animelist, ...nextTitles]);
    } else {
      const nextTitles = await getPopularTitles(offset + 1);
      setAnimelist([...animelist, ...nextTitles]);
    }
  };

  console.log(animelist);

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
      <button onClick={loadMoreTitles}>Load more</button>
    </div>
  );
};

export default App;
