import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#812fff",
    primaryDark: "#3b0096",
    secondary: "#45ff2f",
  },
  fontSizes: {
    small: "1.5rem",
    medium: "2rem",
    large: "3rem",
  },
  breakpoints: {
    large: "1550px",
    medium: "1100px",
    mediumSmall: "800px",
    small: "630px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
