"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#e59a05",
      // light: "#808191",
    },
    secondary: {
      main: "#1a8fe9",
      dark: "#1578c2",
    },
    // warning: {
    //   main: "#ff754c",
    // },
  },
});

// const theme = {
//   main: "#11142d",
//   light: "#808191",
//   second: "#438ced",
//   accent: "#ff754c",
// };

export default theme;
