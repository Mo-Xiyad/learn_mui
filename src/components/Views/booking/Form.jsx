import * as React from "react";

import {
  Typography,
  Paper,
  Box,
  Grid,
  Checkbox,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
  TextField,
} from "@mui/material";
import BasicDateTimePicker from "./DatePick";

export default function ReservationForm() {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      {/* <CssBaseline /> */}
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Paper sx={{ padding: "20px", width: "100%" }} elevation={5}>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gap: 3,
          }}
        >
          <FormControl variant="standard">
            <TextField
              helperText="Please enter name of the restaurant!"
              label="Restaurant name"
              required
              variant="outlined"
              defaultValue=""
              id="validation-outlined-input"
            />
          </FormControl>
          <FormControl variant="standard">
            <TextField
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
            <TextField
              helperText="Please enter contact email address of the restaurant!"
              label="Restaurant email"
              variant="outlined"
              defaultValue=""
              id="validation-outlined-input"
            />
          </FormControl>
          <FormControl variant="standard">
            <TextField
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
            <Button type="submit" variant="contained" xs={{ color: "primary" }}>
              submit
            </Button>
          </div>
        </Box>
      </Paper>
    </div>
  );
}
