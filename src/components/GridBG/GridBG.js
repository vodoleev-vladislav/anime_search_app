import React from "react";
import styled from "styled-components";

const GridBG = ({
  item: {
    attributes: { coverImage },
  },
}) => {
  console.log(coverImage.large);
  return <GridBGStyled background={coverImage.large}></GridBGStyled>;
};

const GridBGStyled = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.background || ""});
  background-size: cover;
  /* background-position: center; */
`;

export default GridBG;
