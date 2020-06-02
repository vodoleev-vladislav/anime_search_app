import React, { useState, useRef } from "react";
import SearchStyled from "./SearchStyled";
import Logo from "../Logo/Logo";
import { default as StyledLink } from "../Link/StyledLink";
import sprite from "../../sprite.svg";

const Search = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const timeout = useRef(null);

  const setQueryTimeout = ({ target: { value } }) => {
    clearTimeout(timeout.current);
    setQuery(value);

    timeout.current = setTimeout(() => setSearch(value), 1000);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const { value } = event.target;
      clearTimeout(timeout.current);
      setQuery(value);
      setSearch(value);
    }
  };

  return (
    <SearchStyled>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
      <div className="query__container">
        <input
          className="query"
          value={query}
          onChange={setQueryTimeout}
          onKeyPress={handleKeyPress}
        ></input>
        <svg className="icon">
          <use href={`${sprite}#icon-search`} />
        </svg>
      </div>
    </SearchStyled>
  );
};

export default Search;
