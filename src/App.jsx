import { Person } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple, yellow } from "@mui/material/colors";
import Navbar from "./components/Nav/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LeftBar from "./components/Nav/Leftbar";
import Feed from "./components/Feed/Index";

const MainDiv = styled("div")(({ theme }) => ({
  color: theme.palette.fontColor.optionOne,
  // backgroundColor: theme.palette.backgroundPrimary.main,
}));

function App() {
  return (
    <MainDiv>
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          mt: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={0} md={2}>
            <LeftBar />
          </Grid>
          <Grid item xs={6} md={10}>
            <Feed />
          </Grid>
        </Grid>
      </Box>
    </MainDiv>
  );
}

export default App;
