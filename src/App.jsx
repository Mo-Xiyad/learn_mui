import { Person } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple, yellow } from "@mui/material/colors";
import Navbar from "./components/Nav/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LeftBar from "./components/Nav/Leftbar";
import Home from "./components/Home/Index";
import CssBaseline from "@mui/material/CssBaseline";

const MainDiv = styled("div")(({ theme }) => ({
  // color: theme.palette.fontColor.optionOne,
  // backgroundColor: theme.palette.backgroundPrimary.main,
}));

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline>
        <Navbar />
        <LeftBar />
        <Home />
      </CssBaseline>
    </Box>
  );
}

export default App;
