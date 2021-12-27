import { Person } from "@mui/icons-material";
import Button from "@mui/material/Button";
// import { styled } from "@mui/system";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
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

function App() {
  return (
    <div>
      <ColorButton variant="contained">Custom CSS</ColorButton>
      <MyButton variant="contained" endIcon={<Person />}>
        Text
      </MyButton>
    </div>
  );
}

export default App;
