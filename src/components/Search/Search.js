import React, { useState, useRef } from "react";
import SearchStyled from "./SearchStyled";
import Logo from "../Logo/Logo";

const Search = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const timeout = useRef(null);

  const setQueryTimeout = ({ target: { value } }) => {
    clearTimeout(timeout.current);
    setQuery(value);

    timeout.current = setTimeout(() => setSearch(value), 500);
  };

  return (
    <SearchStyled>
      <Logo />
      <input
        value={query}
        onChange={setQueryTimeout}
        style={{ display: "block" }}
      />
    </SearchStyled>
  );
};

export default Search;
