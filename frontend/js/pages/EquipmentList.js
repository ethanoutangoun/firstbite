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
      // console.log("Fetched equipment data:", response.data);
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
                    src="https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.png?h=260&iar=0&mh=260&mw=380&w=380&hash=01CB2D77A5A7FCCDF87DF2ED968048A2"
                  />
                )}
              </div>
            )}

            <div className={listView ? "list-view-flex" : "grid-view-flex"}>
              <h3>{equipment.name}</h3>
              <p>{equipment.serialNumber}</p>
            </div>
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

          <div className="toggle-list-view">
            <button
              className={!listView ? "toggled-on" : "toggled-off"}
              type="button"
              onClick={() => setListView(false)}
            >
              <svg
                fill="none"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5.6C14 5.03995 14 4.75992 14.109 4.54601C14.2049 4.35785 14.3578 4.20487 14.546 4.10899C14.7599 4 15.0399 4 15.6 4H18.4C18.9601 4 19.2401 4 19.454 4.10899C19.6422 4.20487 19.7951 4.35785 19.891 4.54601C20 4.75992 20 5.03995 20 5.6V8.4C20 8.96005 20 9.24008 19.891 9.45399C19.7951 9.64215 19.6422 9.79513 19.454 9.89101C19.2401 10 18.9601 10 18.4 10H15.6C15.0399 10 14.7599 10 14.546 9.89101C14.3578 9.79513 14.2049 9.64215 14.109 9.45399C14 9.24008 14 8.96005 14 8.4V5.6Z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <path
                  d="M4 5.6C4 5.03995 4 4.75992 4.10899 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.10899C4.75992 4 5.03995 4 5.6 4H8.4C8.96005 4 9.24008 4 9.45399 4.10899C9.64215 4.20487 9.79513 4.35785 9.89101 4.54601C10 4.75992 10 5.03995 10 5.6V8.4C10 8.96005 10 9.24008 9.89101 9.45399C9.79513 9.64215 9.64215 9.79513 9.45399 9.89101C9.24008 10 8.96005 10 8.4 10H5.6C5.03995 10 4.75992 10 4.54601 9.89101C4.35785 9.79513 4.20487 9.64215 4.10899 9.45399C4 9.24008 4 8.96005 4 8.4V5.6Z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <path
                  d="M4 15.6C4 15.0399 4 14.7599 4.10899 14.546C4.20487 14.3578 4.35785 14.2049 4.54601 14.109C4.75992 14 5.03995 14 5.6 14H8.4C8.96005 14 9.24008 14 9.45399 14.109C9.64215 14.2049 9.79513 14.3578 9.89101 14.546C10 14.7599 10 15.0399 10 15.6V18.4C10 18.9601 10 19.2401 9.89101 19.454C9.79513 19.6422 9.64215 19.7951 9.45399 19.891C9.24008 20 8.96005 20 8.4 20H5.6C5.03995 20 4.75992 20 4.54601 19.891C4.35785 19.7951 4.20487 19.6422 4.10899 19.454C4 19.2401 4 18.9601 4 18.4V15.6Z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
                <path
                  d="M14 15.6C14 15.0399 14 14.7599 14.109 14.546C14.2049 14.3578 14.3578 14.2049 14.546 14.109C14.7599 14 15.0399 14 15.6 14H18.4C18.9601 14 19.2401 14 19.454 14.109C19.6422 14.2049 19.7951 14.3578 19.891 14.546C20 14.7599 20 15.0399 20 15.6V18.4C20 18.9601 20 19.2401 19.891 19.454C19.7951 19.6422 19.6422 19.7951 19.454 19.891C19.2401 20 18.9601 20 18.4 20H15.6C15.0399 20 14.7599 20 14.546 19.891C14.3578 19.7951 14.2049 19.6422 14.109 19.454C14 19.2401 14 18.9601 14 18.4V15.6Z"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                />
              </svg>
            </button>

            <button
              className={listView ? "toggled-on" : "toggled-off"}
              type="button"
              onClick={() => setListView(true)}
            >
              {" "}
              <svg
                fill="none"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7L4 7"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
                <path
                  d="M15 12L4 12"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
                <path
                  d="M9 17H4"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="1"
                />
              </svg>
            </button>
          </div>
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
