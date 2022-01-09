import react from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Oreders";
import { MainDiv } from "../../Home/Index";

const drawerWidth = 240;

const Reports = () => {
  const open = useSelector((state) => {
    return state.leftSideBar.open;
  });
  const theme = useTheme();
  return (
    <MainDiv
      component="main"
      sx={{ flexGrow: 1, pl: 5, pt: 2, pr: 2 }}
      open={open}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </MainDiv>
  );
};

export default Reports;
