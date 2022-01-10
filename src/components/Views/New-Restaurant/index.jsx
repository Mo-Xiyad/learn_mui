import React from "react";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowWidth } from "../../../tools";
import { Grid } from "@mui/material";

const Div = styled(Box, {
  shouldForwardProp: (prop) => prop !== "windowWidth",
})(({ theme, windowWidth }) => ({
  display: "flex",
  // display: "grid",
  marginLeft: "-18px",
  marginTop: "15vh",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(windowWidth < 510 && {
    justifyContent: "center",
    marginTop: "13vh",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const GridCustom = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "windowWidth",
})(({ theme, windowWidth }) => ({
  width: "95vw",
  marginTop: "3vh",
  padding: theme.spacing(10),
  transition: theme.transitions.create(["width", "marginTop"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(windowWidth < 510 && {
    width: "98vw",
    marginTop: "0vh",
    // justifyContent: "center",
    padding: theme.spacing(1),
    transition: theme.transitions.create(["width", "marginTop"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  color: theme.palette.primary.main,
  fontFamily: "Cabin",
  fontWeight: "bolder",
  lineHeight: "1.2em",
  letterSpacing: "0.07em",
  fontsize: "300px",
}));

const ValidationTextField = styled(TextField)({
  // width: "90%",
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    borderColor: "gray",
    padding: "4px !important", // override inline-style
  },
});

const Registration = () => {
  const windowWidth = useWindowWidth();
  return (
    <Div
      component="main"
      sx={{ flexGrow: 1, pl: 5, pt: 2, pr: 2 }}
      windowWidth={windowWidth}
    >
      <GridCustom container windowWidth={windowWidth}>
        <Grid item xs={12} md={5} lg={7} pr={2}>
          <CustomTypography
            variant={windowWidth < 510 ? "h5" : "h3"}
            gutterBottom
            mb={5}
          >
            Register your restaurant.
          </CustomTypography>
          <Typography variant="subtitle1" display="block" gutterBottom>
            Looking to boost your restaurant’s revenue, maximise retention and
            improve the guest experience? Tell us what you want to achieve with
            Happy and we’ll show you how. But first Let's start by creating a
            new restaurant.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={7}
          lg={4}
          sx={{
            marginTop: "25px",
            justifyContent: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gap: 3,
            }}
          >
            <FormControl variant="standard">
              <ValidationTextField
                helperText="Please enter name of the restaurant!"
                label="Restaurant name"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
              />
            </FormControl>
            <FormControl variant="standard">
              <ValidationTextField
                helperText="Please enter how many tables you have in your restaurant!"
                label="Number of tables  "
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
              />
            </FormControl>
            {/* delete rest */}
            <FormControl variant="standard">
              <ValidationTextField
                helperText="Please enter contact email address of the restaurant!"
                label="Restaurant email"
                variant="outlined"
                required
                defaultValue=""
                id="validation-outlined-input"
              />
            </FormControl>
            <FormControl variant="standard">
              <ValidationTextField
                helperText="Please enter phone number of the restaurant!"
                label="Phone number"
                required
                variant="outlined"
                defaultValue=""
                id="validation-outlined-input"
              />
            </FormControl>
          </Box>
        </Grid>
      </GridCustom>
    </Div>
  );
};

export default Registration;
