// index.js (in the routes folder)
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "../components/Navbar";

import BaseRoutes from "./BaseRoutes";
import EquipmentRoutes from "./EquipmentRoutes";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <BaseRoutes />
        <EquipmentRoutes />
      </div>
    </Router>
  );
};

export default Routes;
