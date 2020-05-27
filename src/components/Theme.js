import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#812fff",
    primaryDark: "#5900e2",
    secondary: "#adff2f",
  },
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
