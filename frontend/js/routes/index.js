// index.js (in the routes folder)
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EquipmentRoutes from "./EquipmentRoutes";

const Routes = () => {
  return (
    <Router>
      <div>
        <EquipmentRoutes />
      </div>
    </Router>
  );
};

export default Routes;
