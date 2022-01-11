import * as React from "react";

import {
  Typography,
  Paper,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import BasicDateTimePicker from "./DatePick";

export default function ReservationForm() {
  const onSubmit = (data) => console.log(data);

  return (
    <div style={{}}>
      {/* <CssBaseline /> */}
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Paper sx={{ padding: "20px", width: "100%" }}>
        <Typography variant="subtitle1" display="block" gutterBottom>
          Looking to boost your restaurant’s revenue, maximise retention and
          improve the guest experience? Tell us what you want to achieve with
          Happy and we’ll show you how. But first Let's start by creating a new
          restaurant.
        </Typography>
        <BasicDateTimePicker />
      </Paper>
    </div>
  );
}
