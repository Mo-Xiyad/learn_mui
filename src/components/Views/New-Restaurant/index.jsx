import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MainDiv } from "../../Home/Index";

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "Cabin",
  fontWeight: "bolder",
  lineHeight: "1.2em",
  letterSpacing: "0.07em",
}));

const Registration = () => {
  const open = useSelector((state) => {
    return state.leftSideBar.open;
  });
  return (
    <MainDiv
      component="main"
      sx={{ flexGrow: 1, pl: 5, pt: 2, pr: 2 }}
      open={open}
    >
      <CustomTypography variant="h5" gutterBottom>
        Register your restaurant.
      </CustomTypography>
    </MainDiv>
  );
};

export default Registration;
