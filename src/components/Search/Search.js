import React, { useState, useRef } from "react";
import SearchStyled from "./SearchStyled";
import Logo from "../Logo/Logo";
import { default as StyledLink } from "../Link/StyledLink";

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
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      {/* <input
        value={query}
        onChange={setQueryTimeout}
        style={{ display: "block" }}
      /> */}
    </SearchStyled>
  );
};

export default Search;
