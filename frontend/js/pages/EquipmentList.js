/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "../../sass/pages/equipmentList.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import DjangoImgSrc from "../../assets/images/django-logo-negative.png";

const EquipmentList = () => {
  const history = useHistory();
  const [equipmentList, setEquipmentList] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchEquipment = async (url) => {
    try {
      const response = await axios.get(url);
      const { results, next, previous } = response.data;
      setEquipmentList(results);
      setNextPage(next);
      setPreviousPage(previous);
      console.log("Fetched equipment data:", results);
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch to get the first page of equipment
    fetchEquipment("http://localhost:8000/equipment/");
  }, []);

  const handleNextPage = () => {
    if (!nextPage) {
      return;
    }
    fetchEquipment(nextPage);
  };

  const handlePreviousPage = () => {
    if (!previousPage) {
      return;
    }

    fetchEquipment(previousPage);
  };

  // Render the list of equipment
  const renderEquipmentList = () => {
    return (
      <div className="grid-container">
        {equipmentList.map((equipment) => (
          <div
            key={equipment.id}
            className="item-container"
            onClick={() => history.push(`/equipment/${equipment.id}`)}
          >
            <div className="image-container">
              {equipment.imageUrl && (
                <img alt={equipment.name} src={equipment.imageUrl} />
              )}
            </div>
            <h3>{equipment.name}</h3>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h2>Equipment List</h2>

      {!loading && renderEquipmentList()}
      {loading && <p>Loading...</p>}

      <button type="button" onClick={handlePreviousPage}>
        Previous
      </button>
      <button type="button" onClick={handleNextPage}>
        Next
      </button>

      <button type="button" onClick={() => console.log(equipmentList)}>
        Log Equipment
      </button>

      <button type="button" onClick={() => history.push("/equipment/new")}>
        Add Equipment
      </button>
    </div>
  );
};

export default EquipmentList;
