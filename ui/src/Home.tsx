import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: "30%"
  },
  button: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));

export const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>I'm Serious As A Heart Attack</h1>
          <Button
            className="classes.button"
            variant="contained"
            color="primary"
          >
            Get Started, Dumb Ass
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
