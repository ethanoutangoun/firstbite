/* eslint-disable no-console */
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "../../sass/pages/equipmentView.scss";

const EquipmentView = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [equipment, setEquipment] = useState({});
  const [restaurants, setRestaurants] = useState([]);
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
      console.log("Fetched restaurant data:", response.data);
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
    <>
      <div className="equipment-view-container">
        <div className="equipment-view-left">
          {loading && <p>Loading equipment details...</p>}

          {!loading && (
            <div>
              <h2>{equipment.name}</h2>
              <p>Serial: {equipment.serialNumber}</p>
              <img
                alt={equipment.name}
                className="equipment-image"
                src={equipment.imageUrl}
              />
            </div>
          )}
        </div>
        <div className="equipment-view-right">
          <div className="restaurant-list">
            <h2>Owned By</h2>
            <ul>
              {restaurants.map((restaurant) => (
                <li key={restaurant.id}>{restaurant.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="equipment-description">
        <p>{equipment.description}</p>
        {equipment.price && <p>Price: {equipment.price}</p>}
      </div>
    </>
  );
};

export default EquipmentView;
