import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <LogoStyled>
      <span className="first-word">Anime</span>
      <span className="second-word">Search</span>
    </LogoStyled>
  );
};

const LogoStyled = styled.h1`
  font-size: 5rem;
  font-family: "Permanent Marker", cursive;
  margin-left: 2rem;

  .first-word {
    color: ${(props) => props.theme.colors.secondary};
  }

  .second-word {
    color: white;
  }
`;

export default Logo;
