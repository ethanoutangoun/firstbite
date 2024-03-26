// EquipmentRoutes.js
import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";

const HomeRoutes = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
    </Switch>
  );
};

export default HomeRoutes;
