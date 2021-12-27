import { createTheme } from "@mui/material/styles";
import { teal, cyan, deepPurple } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: cyan[600],
    },
    secondary: {
      main: teal[600],
    },
  },
  myCustomButton: {
    color: deepPurple[700],
    backgroundColor: cyan[700],
    border: teal[200],
  },
});
