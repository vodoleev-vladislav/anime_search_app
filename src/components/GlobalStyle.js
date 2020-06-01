import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;

  @media (max-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 50%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mediumSmall}) {
    font-size: 43.75%;
  }
}
`;

export default GlobalStyle;
