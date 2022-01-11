import React from "react";
import Typography from "@mui/material/Typography";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useWindowWidth } from "../../../tools";
import { Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";

export const Div = styled(Box, {
  shouldForwardProp: (prop) => prop !== "windowWidth",
})(({ theme, windowWidth }) => ({
  display: "flex",
  // marginLeft: "-18px",
  marginTop: "10vh",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(windowWidth < 600 && {
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
  padding: "50px",
  transition: theme.transitions.create(["width", "marginTop"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(windowWidth < 600 && {
    width: "98vw",
    marginTop: "0vh",
    paddingTop: "5px",
    paddingLeft: theme.spacing(7),
    // paddingRight: theme.spacing(5),
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
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 1,
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

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Div
        component="main"
        sx={{ flexGrow: 1, pl: 0, pt: 2, pr: 2 }}
        windowWidth={windowWidth}
      >
        <GridCustom container windowWidth={windowWidth}>
          <Grid item xs={12} md={6} lg={7} pr={5}>
            <CustomTypography
              variant={windowWidth < 600 ? "h5" : "h3"}
              gutterBottom
              mb={5}
            >
              Register your restaurant.
            </CustomTypography>
            <Typography variant="subtitle1" display="block" gutterBottom>
              Looking to boost your restaurant’s revenue, maximise retention and
              improve the guest experience? Tell us what you want to achieve
              with Happy and we’ll show you how. But first Let's start by
              creating a new restaurant.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
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
                  helperText="Please enter number of tables you have in your restaurant!"
                  label="Number of tables  "
                  required
                  type="number"
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 2);
                  }}
                  min={0}
                  variant="outlined"
                  defaultValue=""
                  id="validation-outlined-input"
                />
              </FormControl>
              <FormControl variant="standard">
                <ValidationTextField
                  helperText="Please enter contact email address of the restaurant!"
                  label="Restaurant email"
                  variant="outlined"
                  defaultValue=""
                  id="validation-outlined-input"
                />
              </FormControl>
              <FormControl variant="standard">
                <ValidationTextField
                  helperText="Please enter phone number of the restaurant!"
                  label="Phone number"
                  variant="outlined"
                  defaultValue=""
                  id="validation-outlined-input"
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography variant="subtitle2" display="block" gutterBottom>
                    Get Happy news, updates and offers delivered right to your
                    inbox.
                  </Typography>
                }
              />
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  xs={{ color: "primary" }}
                  onClick={handleSubmit}
                >
                  submit
                </Button>
              </div>
            </Box>
          </Grid>
        </GridCustom>
      </Div>

      <Grid
        container
        spacing={1}
        sx={{ marginTop: "25px", padding: "50px", backgroundColor: "#E8E8E8" }}
      >
        <Grid item xs={12} md={5} lg={6} sx={{ marginTop: "0px" }}>
          <img
            src={`https://upserve.com/media/sites/2/Featured-image_stock_restaurant-staff-tablet-1024x683.jpg?w=164&h=164&fit=crop&auto=format`}
            alt="register-view"
            loading="register-view"
            style={{ maxHeight: "100%", maxWidth: "90%" }}
          />
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={6} lg={5}>
          <Typography sx={{ color: "#191919" }} variant="h4">
            One step closer to the future.
          </Typography>
          <br />
          <Typography variant="body1">
            Sign up for a free demo and discover how our all-in-one Guest
            Experience Management platform can take your restaurant, bistro or
            bar to a whole new level.
          </Typography>
          <br />
          <Typography variant="body1">
            No memorised scripts or generic sales pitches. Just a conversation
            with a product expert and actionable advice that gives you the power
            to turn your passion into growth.
          </Typography>
          <Box container sx={{ marginTop: "70px" }}>
            <Button variant="outlined">Get your free demo</Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Registration;
