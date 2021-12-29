import react, { useState } from "react";
import { AppBar, createStyles, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Cancel, Notifications } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
const useStyles = makeStyles((theme) =>
  createStyles({
    logoLg: {
      display: "none",
      color: theme.palette.fontColor.main,
      fontFamily: theme.typography,
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      fontFamily: theme.typography,
      display: "block",
      color: theme.palette.fontColor.main,
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    search: {
      display: "flex",
      alignItems: "center",
      color: theme.palette.fontColor.main,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: "5px",
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        display: (props) => (props.showSearch ? "flex" : "none"),
      },
    },
    input: {
      color: theme.palette.fontColor.main,
      marginLeft: theme.spacing(2),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        // width: "20ch",
      },
    },
    icons: {
      alignItems: "center",
      color: theme.palette.fontColor.main,
      display: (props) => (props.showSearch ? "none" : "flex"),
    },
    badge: {
      marginRight: theme.spacing(1),
    },
    searchButton: {
      marginRight: theme.spacing(2),
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const classes = useStyles({ showSearch });
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Happy
        </Typography>
        <Typography variant="subtitle2" className={classes.logoSm}>
          HAPPY
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            className={classes.input}
          />
          <Cancel
            onClick={() => setShowSearch(false)}
            sx={{
              marginRight: (theme) => theme.spacing(1),
              "@media screen and (min-width: 450px)": {
                display: "none",
              },
            }}
          />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            sx={{
              marginRight: (theme) => theme.spacing(2),
              "@media screen and (min-width: 450px)": {
                display: "none",
              },
            }}
            onClick={() => setShowSearch(true)}
          />
          <Badge
            badgeContent={4}
            color="notification"
            className={classes.badge}
          >
            <MailIcon />
          </Badge>
          <Badge
            badgeContent={4}
            color="notification"
            className={classes.badge}
          >
            <Notifications />
          </Badge>
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <Avatar
              alt="Remy Sharp"
              src={
                "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              }
            />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
