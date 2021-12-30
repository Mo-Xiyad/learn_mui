import { styled, useTheme } from "@mui/material/styles";
import Navbar from "./components/Nav/Navbar";
import Box from "@mui/material/Box";
import Home from "./components/Home/Index";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Reports from "./components/Views/Reports";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        happy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  return (
    <Box xs={{ display: "flex" }}>
      <CssBaseline>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/reports" exact element={<Reports />} />
        </Routes>
        <Copyright sx={{ pt: 4 }} />
      </CssBaseline>
    </Box>
  );
}

export default App;
