import * as React from "react";
import "./Styles.css";
import {
  styled,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import LayersIcon from "@mui/icons-material/Layers";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import { useSelector, useDispatch } from "react-redux";
import { leftBarAction } from "../../redux/actions";
import { Button } from "@mui/material";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  heigh: "100vh",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Drawer = styled(MuiDrawer, {
  heigh: "100vh",
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LeftBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const open = useSelector((state) => {
    return state.leftSideBar.open;
  });

  const handleDrawerOpen = () => {
    dispatch(leftBarAction(true));
  };

  const handleDrawerClose = () => {
    dispatch(leftBarAction(false));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ backgroundColor: "rgba(255,255,255)" }}
      >
        <DrawerHeader
          sx={{
            ...(open ? { display: "block", mt: 4 } : { display: "none" }),
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            ...(open
              ? { display: "none" }
              : { display: "block", mt: 5, pt: 5 }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <BookOnlineIcon />
            </ListItemIcon>
            <ListItemText primary={"Book Table"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FactCheckOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Reservations"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <StyleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Menu Options"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem button>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MonetizationOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={"Revenue"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
};

export default LeftBar;
