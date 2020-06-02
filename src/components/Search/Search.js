import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import SearchStyled from "./SearchStyled";
import Logo from "../Logo/Logo";
import { default as StyledLink } from "../Link/StyledLink";
import sprite from "../../sprite.svg";

const Search = ({ setSearch }) => {
  let history = useHistory();
  const [query, setQuery] = useState("");
  const timeout = useRef(null);

  const handleChange = ({ target: { value } }) => {
    clearTimeout(timeout.current);
    setQuery(value);

    timeout.current = setTimeout(() => setSearchQuery(value), 1000);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const { value } = event.target;
      clearTimeout(timeout.current);
      setQuery(value);
      setSearchQuery(value);
    }
  };

  const setSearchQuery = (value) => {
    setSearch(value);
    history.push("/");
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
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <svg className="icon">
          <use href={`${sprite}#icon-search`} />
        </svg>
      </div>
    </SearchStyled>
  );
};

export default Search;
