import react from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple, yellow } from "@mui/material/colors";

const ContainerDiv = styled("div")(({ theme }) => ({
  color: theme.palette.fontColor.optionOne,
  // backgroundColor: theme.palette.backgroundPrimary.main,
  // height: "100vh",
}));
const NewButton = styled(Button)(({ theme }) => ({
  ...theme.myCustomButton,
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));

const MyButton = styled(Button, {
  name: "MyButton",
  slot: "Wrapper",
})`
  color: pink;
  backgroundcolor: yellow;
  font-size: 20px;
`;

const Feed = () => {
  return (
    <ContainerDiv>
      {" "}
      xs=6 md=8ssdsadsdsdsdsdsdsdsddsdsdsdsdsdsds sdasdsdsdsdsdsdsdsdsdsdssa
      sdasdsadsdsdsdsdsdsdsds sdasdsdsdsdsdsdsdsdsdsdssa sdasdsadsdsdsdsdsdsdsds
      sdasdsdsdsdsdsdsdsdsdsdssa sdasdsadsdsdsdsdsdsdsds asddsadsddasdsdsdsdsds
    </ContainerDiv>
  );
};

export default Feed;
