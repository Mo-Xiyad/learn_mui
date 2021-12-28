import { createTheme } from "@mui/material/styles";
import { teal, cyan, deepPurple, red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: cyan[600],
    },
    secondary: {
      main: teal[600],
    },
    notification: {
      main: red[300],
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
});
