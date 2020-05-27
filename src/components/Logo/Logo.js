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
  font-size: 3rem;
  font-family: "Permanent Marker", cursive;
  margin-left: 1rem;
  margin-right: 30vw;

  .first-word {
    color: ${(props) => props.theme.colors.secondary};
  }

  .second-word {
    color: white;
  }
`;

export default Logo;
