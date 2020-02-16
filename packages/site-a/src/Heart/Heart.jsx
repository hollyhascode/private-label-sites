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

export const Heart = () => {
  const classes = useStyles();
  return (
    <pre className={clsx(classes.red)}>{`       .....           .....
  ,ad8PPPP88b,     ,d88PPPP8ba,
 d8P"      "Y8b, ,d8P"      "Y8b
dP'           "8a8"           \`Yd
8(              "              )8
I8                             8I
 Yb,                         ,dP
  "8a,                     ,a8"
    "8a,                 ,a8"
      "Yba             adP"
        \`Y8a         a8P'
          \`88,     ,88'
            "8b   d8"
             "8b d8"
              \`888'
                "
`}</pre>
  );
};
