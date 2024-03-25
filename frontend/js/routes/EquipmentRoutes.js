// EquipmentRoutes.js
import React from "react";
import { Route, Switch } from "react-router-dom";

import EquipmentEntry from "../pages/EquipmentEntry";
import EquipmentListView from "../pages/EquipmentListView";
import EquipmentView from "../pages/EquipmentView";

import Home from "../pages/Home";

const EquipmentRoutes = () => {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={EquipmentListView} exact path="/equipment" />
      <Route component={EquipmentView} exact path="/equipment/:id" />
      <Route component={EquipmentEntry} exact path="/equipment/new" />
    </Switch>
  );
};

export default EquipmentRoutes;
