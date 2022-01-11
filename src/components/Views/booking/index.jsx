import React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import interact from "interactjs";
import "./Styles.css";
import { setRestaurantDataAction } from "../../../redux/actions";
import { useWindowWidth } from "../../../tools";
import ReservationForm from "./Form";

const drawerWidth = 240;
// target elements with the "draggable" class
interact(".draggable").draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
      // restriction: { top: 200, left: 1300, bottom: 700, right: 1850 },
      endOnly: true,
    }),
  ],
  // enable autoScroll
  autoScroll: true,

  listeners: {
    // call this function on every dragmove event
    move: dragMoveListener,

    // call this function on every dragend event
    end(event) {
      var textEl = event.target.querySelector("p");
      textEl &&
        (textEl.textContent =
          "moved a distance of " +
          Math.sqrt(
            (Math.pow(event.pageX - event.x0, 2) +
              Math.pow(event.pageY - event.y0, 2)) |
              0
          ).toFixed(2) +
          "px");
    },
  },
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

  // translate the element
  target.style.transform = "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

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

const BookingMainDiv = styled(Box, {
  shouldForwardProp: (prop) => prop !== "windowWidth" && prop !== "open",
})(({ theme, windowWidth, open }) => ({
  // display: "flex",
  marginLeft: "50px",
  marginTop: "4vh",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(windowWidth < 600 && {
    marginTop: "13vh",
    marginLeft: "30px",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const BookTables = () => {
  const open = useSelector((state) => {
    return state.leftSideBar.open;
  });
  const tables = useSelector((state) => {
    return state.restaurant.tables;
  });
  const windowWidth = useWindowWidth();
  const dispatch = useDispatch();
  const get_tables = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/restaurant`);
      if (res.ok) {
        let data = await res.json();
        console.log(data[0]);
        dispatch(
          setRestaurantDataAction({
            tables: data[0].tables,
            name: data[0].restaurant_name,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_tables();
  }, []);
  return (
    <BookingMainDiv
      component="main"
      sx={{ flexGrow: 1, pl: 0, pt: 2, pr: 2 }}
      open={open}
      windowWidth={windowWidth}
    >
      <GridCustom container windowWidth={windowWidth}>
        <Grid item xs={12} md={7} lg={7} pr={5}>
          <Typography variant="h4" component="div" gutterBottom>
            Book Tables
          </Typography>
          <ReservationForm />
        </Grid>
        <Grid item xs={12} md={4} lg={4} container spacing={3}>
          {tables?.map((table, i) => (
            <Grid key={i} item className="" xs={5}>
              <div className="drag-2 draggable">
                <div className="box-inside" style={{ paddingTop: "10px" }}>
                  <Typography variant="overline" sx={{ paddingLeft: 1 }}>
                    {table.table_name}
                  </Typography>{" "}
                </div>{" "}
              </div>
            </Grid>
          ))}
        </Grid>
      </GridCustom>
    </BookingMainDiv>
  );
};

export default BookTables;
