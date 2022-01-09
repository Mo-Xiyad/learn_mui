import "./main.css";
import { useEffect } from "react";
import Navbar from "./components/Nav/Navbar";
import Box from "@mui/material/Box";
import Home from "./components/Home/Index";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Reports from "./components/Views/Reports";
import BookTables from "./components/Views/booking";
import { Copyright, useWindowWidth } from "./tools/index.js";
import { changeWidth, leftBarAction } from "./redux/actions";
import { useDispatch } from "react-redux";
import Registration from "./components/Views/New-Restaurant";

function App() {
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();
  useEffect(() => {
    if (windowWidth < 510) {
      // dispatch(leftBarAction(false));
      dispatch(changeWidth(windowWidth));
    }
  }, [windowWidth]);

  return (
    <Box xs={{ display: "flex" }}>
      <CssBaseline>
        <Navbar />
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/create-restaurant" exact element={<Registration />} />
          <Route path="/reports" exact element={<Reports />} />
          <Route path="/booktable" exact element={<BookTables />} />
        </Routes>
        <Copyright sx={{ pt: 4 }} />
      </CssBaseline>
    </Box>
  );
}

export default App;
