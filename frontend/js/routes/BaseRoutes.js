// EquipmentRoutes.js
import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

const BaseRoutes = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={SignIn} path="/sign-in" />
    </Switch>
  );
};

export default BaseRoutes;
