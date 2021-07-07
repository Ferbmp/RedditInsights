import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TrendingList from "./Components/TrendingList/component";

function AppRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/new" />
      </Route>
      <Route path="/:topic" exact>
        <TrendingList />
      </Route>
    </Switch>
  );
}

export default AppRouter;
