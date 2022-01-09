import "./main.css";
import { useEffect } from "react";
import Navbar from "./components/Nav/Navbar";
import Box from "@mui/material/Box";
import Home from "./components/Home/Index";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Reports from "./components/Views/Reports";
import BookTables from "./components/Views/booking";
import { useWindowWidth } from "./tools/windowWidth";
import { changeWidth, leftBarAction } from "./redux/actions";
import { useDispatch } from "react-redux";
import Registration from "./components/Registration";

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
    }
  }, [windowWidth]);

  return (
    <Box xs={{ display: "flex" }}>
      <CssBaseline>
        <Navbar />
        <Routes>
          {/* {["/home", "/reports", "/booktable"].map((path) => (
            <Route path={path} exact element={<Navbar />} />
          ))} */}
          <Route path="/" exact element={<Registration />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/reports" exact element={<Reports />} />
          <Route path="/booktable" exact element={<BookTables />} />
        </Routes>
        <Copyright sx={{ pt: 4 }} />
      </CssBaseline>
    </Box>
  );
}

export default App;
