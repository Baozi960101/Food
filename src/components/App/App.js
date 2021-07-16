import React from "react";
import Cover from "../../Page/Home";
import TopHeadder from "../Header";
import Bottom from "../Bottom";
import Food from "../../Page/Food";
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
