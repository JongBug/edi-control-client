import React from "react";

import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import PsiReport from "../reports/PsiReport";
import Schedule from "../schedules/Schedule";
import { Container } from "react-materialize";
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main className="main">
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/psireport" component={PsiReport} />
        <Route path="/na" component={Schedule} />
      </Switch>
    </Container>
  </main>
);

export default Main;
