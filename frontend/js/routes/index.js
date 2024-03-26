// index.js (in the routes folder)
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


import Navbar from "../components/Navbar";
import EquipmentRoutes from "./EquipmentRoutes";
import HomeRoutes from "./HomeRoute";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <HomeRoutes />
        <EquipmentRoutes />
      </div>
    </Router>
  );
};

export default Routes;
