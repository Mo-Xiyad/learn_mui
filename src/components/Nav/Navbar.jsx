import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LeftBar from "./Leftbar";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.fontColor.main,
  fontFamily: "Cabin",
  fontSize: "50px",
  fontWeight: "bolder",
  lineHeight: "1.2em",
  letterSpacing: "0.07em",
  "&:hover": {
    // backgroundColor: purple[700],
  },
}));

const Navbar = () => {
  const open = useSelector((state) => {
    return state.leftSideBar.open;
  });
  const restaurant = useSelector((state) => {
    return state.restaurant;
  });
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        sx={{ display: "flex" }}
        theme={theme}
      >
        <Toolbar>
          <CustomTypography
            noWrap
            component="div"
            className="navText"
            onClick={() => navigate("/")}
          >
            happy
          </CustomTypography>
        </Toolbar>
      </AppBar>
      {restaurant?.name && restaurant?.tables ? (
        <>
          <LeftBar />{" "}
        </>
      ) : (
        <></>
      )}
    </Box>
  );
};
export default Navbar;
