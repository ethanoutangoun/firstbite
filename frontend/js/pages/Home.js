import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchRestCheck } from "../store/rest_check";

import EquipmentList from "./EquipmentList";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchRestCheck();
    dispatch(action);
  }, [dispatch]);

  return <EquipmentList />;
};

export default Home;
