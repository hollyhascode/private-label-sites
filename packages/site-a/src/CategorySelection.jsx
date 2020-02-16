import React from "react";
import { createUseStyles } from "react-jss";
import clsx from "clsx";

const useStyles = createUseStyles({
  trafficLight: {
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    border: "black solid 1px",
    backgroundColor: "white",
    display: "inline-block",
    fontFamily: "monospace",
  },
  red: { color: "red" },
});

export const CategorySelection = () => {
  const classes = useStyles();
  return <div>Category Selections</div>;
};
