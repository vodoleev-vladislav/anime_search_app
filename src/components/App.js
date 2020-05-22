import React from "react";
import { useState, useEffect } from "react";
import { getPopularTitles } from "../services/anime";

const App = () => {
  const [animelist, setAnimelist] = useState([]);
  useEffect(() => {
    (async () => {
      setAnimelist(await getPopularTitles());
    })();
  }, []);
  return (
    <div>
      {animelist.map((anime) => (
        <div>
          <img src={anime.attributes.posterImage.large}></img>
          <p>
            {anime.attributes.titles.en}/{anime.attributes.titles.en_jp}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
