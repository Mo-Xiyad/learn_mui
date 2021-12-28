import react from "react";
import { AppBar, createStyles, Toolbar, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) =>
  createStyles({
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" className={classes.logoLg}>
          Happy Service Management Tool
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          Happy
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
