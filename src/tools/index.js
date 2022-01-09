import * as React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useLayoutEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
};

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        happy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
