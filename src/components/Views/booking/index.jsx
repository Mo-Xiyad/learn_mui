import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import interact from "interactjs";
import "./Styles.css";
import { MainDiv } from "../../Home/Index";

// target elements with the "draggable" class
interact(".draggable").draggable({
  // enable inertial throwing
  inertia: true,
  // keep the element within the area of it's parent
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "parent",
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

const BookTables = () => {
  const open = useSelector((state) => {
    return state.leftSideBar.open;
  });
  const [tables, setTables] = useState();
  const get_tables = async () => {
    try {
      const res = await fetch("http://localhost:3002/restaurant");
      if (res.ok) {
        let data = await res.json();
        console.log(data[0].tables);
        setTables(data[0].tables);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_tables();
  }, []);
  return (
    <MainDiv
      component="main"
      sx={{ flexGrow: 1, pl: 5, pt: 2, pr: 2 }}
      open={open}
    >
      <Typography variant="h1" component="div" gutterBottom>
        Tables
      </Typography>
      {/* <Grid item xs={12} md={8} lg={9}>
        {tables?.map((table, i) => (
          <div key={i} id="drag-1" className="draggable">
            <p> {table.table_name} </p>
          </div>
        ))}
      </Grid> */}
      {/* <div> */}
      <Grid id="top-row" container spacing={2}>
        {tables?.map((table, i) => (
          <Grid key={i} item className="draggable" xs={4}>
            <div className="drag-2">
              <div className="box-inside">{table.table_name} </div>{" "}
            </div>
          </Grid>
        ))}
      </Grid>
      {/* </div> */}
    </MainDiv>
  );
};

export default BookTables;
