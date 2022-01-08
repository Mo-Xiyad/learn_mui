import { styled, useTheme } from "@mui/material/styles";
import "./main.css";
import { useEffect } from "react";
import Navbar from "./components/Nav/Navbar";
import Box from "@mui/material/Box";
import Home from "./components/Home/Index";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Reports from "./components/Views/Reports";
import BookTables from "./components/Views/booking";
import { useWindowWidth } from "./tools/windowWidth";
import { changeWidth, leftBarAction } from "./redux/actions";
import { useDispatch } from "react-redux";

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
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (windowWidth < 510) {
      // dispatch(leftBarAction(false));
      dispatch(changeWidth(windowWidth));
      console.log(windowWidth);
    }
  }, [windowWidth]);

  return (
    <Box xs={{ display: "flex" }}>
      <CssBaseline>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/reports" exact element={<Reports />} />
          <Route path="/booktable" exact element={<BookTables />} />
        </Routes>
        <Copyright sx={{ pt: 4 }} />
      </CssBaseline>
    </Box>
  );
}

export default App;
