import styled from "styled-components";

const GridStyled = styled.div`
  /* position: relative; */
  min-height: 95vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  justify-items: center;
  padding: 4rem;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${(props) => props.background || ""});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${(props) => props.theme.breakpoints.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    padding: 2rem;
    grid-gap: 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mediumSmall}) {
    padding: 0;
    padding-top: 1rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.small}) {
    grid-template-columns: 1fr;
  }
`;

export default GridStyled;
