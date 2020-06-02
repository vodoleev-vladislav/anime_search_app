import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#812fff",
    primaryDark: "#3b0096",
    secondary: "#45ff2f",
  },
  fontSizes: {
    small: "2rem",
    medium: "2.5rem",
    large: "3rem",
  },
  breakpoints: {
    large: "103em",
    medium: "69em",
    mediumSmall: "56em",
    small: "42em",
  },
  heights: {
    header: "6rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
