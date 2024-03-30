/* eslint-disable no-console */
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../../sass/pages/equipmentView.scss";

const EquipmentView = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [equipment, setEquipment] = useState({});
  const [restaurants, setRestaurants] = useState(null);
  const history = useHistory();
  const fetchEquipment = async (url) => {
    try {
      const response = await axios.get(url);
      setEquipment(response.data);
    } catch (error) {
      console.error("Error fetching equipment data:", error);
      history.push("/");
    } finally {
      setLoading(false);
    }
  };

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api${location.pathname}/restaurants/`,
      );
      setRestaurants(response.data);
      // console.log("Fetched restaurant data:", response.data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };

  useEffect(() => {
    // Initial fetch to get the first page of equipment
    fetchEquipment(`http://localhost:8000/api${location.pathname}/`);
    fetchRestaurants();
  }, []);

  return (
    !loading &&
    restaurants && (
      <>
        <div className="equipment-view-header">
          <h2>{equipment.name}</h2>
          <p>Serial: {equipment.serialNumber}</p>
        </div>
        <div className="equipment-view-container">
          <div className="equipment-view-left">
            {loading && <p>Loading equipment details...</p>}

            {!loading && (
              <div>
                <img
                  alt={equipment.name}
                  className="equipment-image"
                  src={equipment.imageUrl}
                />
              </div>
            )}
          </div>
          <div className="equipment-view-right">
            <h2>Used By</h2>
            {restaurants.length === 0 && <p>No restaurants found</p>}
            <div className="restaurant-list">
              <ul>
                {restaurants.map((restaurant) => (
                  <li key={restaurant.id}>{restaurant.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default EquipmentView;
