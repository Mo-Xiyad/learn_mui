import react from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple, yellow } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
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
  return <div></div>;
};

export default Feed;
