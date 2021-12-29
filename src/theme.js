import { createTheme } from "@mui/material/styles";
import { teal, cyan, deepPurple, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#204A46",
    },
    secondary: {
      main: teal[600],
    },
    backgroundPrimary: {
      main: "#EBEEF0",
    },
    notification: {
      main: red[400],
    },
    fontColor: {
      main: "#EBEEF0",
      optionOne: "#242424",
    },
  },
  myCustomButton: {
    color: deepPurple[700],
    backgroundColor: cyan[700],
    border: teal[200],
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
  // AppFonts: {
  //   font-family: Cabin, sans-serif,
  // },
  typography: {
    fontFamily: "Cabin, sans-serif",
  },
});
