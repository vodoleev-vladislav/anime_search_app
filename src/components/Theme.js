import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#812fff",
    primaryDark: "#3b0096",
    secondary: "#45ff2f",
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
