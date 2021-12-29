import react from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple, yellow } from "@mui/material/colors";

const ContainerDiv = styled("div")(({ theme }) => ({
  color: theme.palette.fontColor.optionOne,
  // backgroundColor: theme.palette.backgroundPrimary.main,
  // height: "100vh",
}));

const LeftBar = () => {
  return (
    <ContainerDiv
      sx={{
        pl: 3,
      }}
    >
      Left bar
    </ContainerDiv>
  );
};

export default LeftBar;
