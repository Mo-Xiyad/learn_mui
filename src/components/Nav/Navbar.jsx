import react from "react";
import { AppBar, createStyles, Toolbar, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Notifications } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
const useStyles = makeStyles((theme) =>
  createStyles({
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    // logoSm: {
    //   display: "block",
    //   [theme.breakpoints.up("sm")]: {
    //     display: "none",
    //   },
    // },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: "5px",
      width: "50%",
    },
    input: {
      color: "white",
      marginLeft: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Happy
        </Typography>
        {/* <Typography variant="h6" className={classes.logoSm}>
          Happy
        </Typography> */}
        <div className={classes.search}>
          <SearchIcon />
          <InputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            className={classes.input}
          />
        </div>
        <div>
          {" "}
          <Badge badgeContent={4} color="notification">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="notification">
            <Notifications color="action" />
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
