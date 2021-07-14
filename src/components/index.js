import React from "react";
import Cover from "./cover";
import TopHeadder from "./topHeadders";
import Bottom from "./bottom";
import Food from "./food";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <TopHeadder />
        <Switch>
          <Route exact path="/">
            <Cover />
          </Route>
          <Route path="/food">
            <Food />
          </Route>
        </Switch>
        <Bottom />
      </Router>
    </>
  );
}
