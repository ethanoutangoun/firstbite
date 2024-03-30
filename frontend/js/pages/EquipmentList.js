/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import "../../sass/pages/equipmentList.scss";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import EquipmentListSkeleton from "../components/EquipmentListSkeleton";

const EquipmentList = () => {
  const history = useHistory();
  const [equipmentList, setEquipmentList] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listView, setListView] = useState(false);
  const [showing, setShowing] = useState(0);
  const [total, setTotal] = useState(0);

  const fetchEquipment = async (url) => {
    try {
      const response = await axios.get(url);
      const { results, next, previous } = response.data;
      setEquipmentList(results);
      setNextPage(next);
      setPreviousPage(previous);
      setShowing(results.length);
      setTotal(response.data.count);
      console.log("Fetched equipment data:", response.data);
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch to get the first page of equipment
    fetchEquipment("http://localhost:8000/api/equipment/");
  }, []);

  const handleNextPage = () => {
    if (!nextPage) {
      return;
    }
    setLoading(true);
    fetchEquipment(nextPage);
  };

  const handlePreviousPage = () => {
    if (!previousPage) {
      return;
    }
    setLoading(true);
    fetchEquipment(previousPage);
  };

  // Render the list of equipment
  const renderEquipmentList = (listView) => {
    return (
      <div className={!listView ? "grid-container" : "list-container"}>
        {equipmentList.map((equipment) => (
          <div
            key={equipment.id}
            className={
              !listView ? "item-container" : "item-container-list-view"
            }
            onClick={() => history.push(`/equipment/${equipment.id}`)}
          >
            {!listView && (
              <div className="image-container">
                {equipment.imageUrl ? (
                  <img alt={equipment.name} src={equipment.imageUrl} />
                ) : (
                  <img
                    alt="Blank"
                    src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
                  />
                )}
              </div>
            )}
            <h3>{equipment.name}</h3>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      {!loading && (
        <div className="equipment-list-header">
          <div className="left-header">
            <h2>Equipment List</h2>
            <p>
              Showing {showing} out of {total} results
            </p>
          </div>

          <button type="button" onClick={() => setListView(!listView)}>
            {!listView ? "List View" : "Grid View"}
          </button>
        </div>
      )}

      {!loading ? renderEquipmentList(listView) : <EquipmentListSkeleton />}

      {!loading && (
        <div className="pagination-container">
          <button
            className="pagination-button"
            disabled={!previousPage}
            type="button"
            onClick={handlePreviousPage}
          >
            Prev
          </button>
          <button
            className="pagination-button"
            disabled={!nextPage}
            type="button"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EquipmentList;
