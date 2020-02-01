import Button from "@material-ui/core/Button";
import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";

const browserHistory = createBrowserHistory();

const useStyles = makeStyles(theme => ({}));

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Container>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </Container>
  );
};
