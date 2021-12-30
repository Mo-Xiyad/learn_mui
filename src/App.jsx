import { styled, useTheme } from "@mui/material/styles";
import Navbar from "./components/Nav/Navbar";
import Box from "@mui/material/Box";
import Home from "./components/Home/Index";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <Box xs={{ display: "flex" }}>
      <CssBaseline>
        <Navbar />
        <Home />
      </CssBaseline>
    </Box>
  );
}

export default App;
