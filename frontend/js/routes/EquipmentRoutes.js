// EquipmentRoutes.js
import React from "react";
import { Route, Switch } from "react-router-dom";

import EquipmentEntry from "../pages/EquipmentEntry";
import EquipmentView from "../pages/EquipmentView";

const EquipmentRoutes = () => {
  return (
    <Switch>
      <Route component={EquipmentEntry} exact path="/equipment/new" />
      <Route component={EquipmentView} exact path="/equipment/:id" />
    </Switch>
  );
};

export default EquipmentRoutes;
