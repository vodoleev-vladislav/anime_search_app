import React, { useState, useRef } from "react";

const Search = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const timeout = useRef(null);

  const setQueryTimeout = ({ target: { value } }) => {
    clearTimeout(timeout.current);
    setQuery(value);

    timeout.current = setTimeout(() => setSearch(value), 500);
  };

  return (
    <input
      value={query}
      onChange={setQueryTimeout}
      style={{ display: "block" }}
    />
  );
};

export default Search;
