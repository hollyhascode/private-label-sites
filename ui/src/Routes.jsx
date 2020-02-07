import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { CategorySelection } from "./CategorySelection";
import { Home } from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/category-selection">
        <CategorySelection />
      </Route>
    </Switch>
  );
};

export default Routes;
