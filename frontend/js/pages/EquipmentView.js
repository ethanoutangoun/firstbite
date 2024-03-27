/* eslint-disable no-console */
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EquipmentView = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [equipment, setEquipment] = useState({});
  const fetchEquipment = async (url) => {
    try {
      const response = await axios.get(url);
      setEquipment(response.data);
    } catch (error) {
      console.error("Error fetching equipment data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch to get the first page of equipment
    fetchEquipment(`http://localhost:8000/api${location.pathname}/`);
  }, []);

  return (
    <div>
      <h2>Equipment Details</h2>
      {loading && <p>Loading equipment details...</p>}

      {!loading && (
        <div>
          <h3>{equipment.name}</h3>
          <img alt={equipment.name} src={equipment.imageUrl} />
          <p>{equipment.description}</p>
          {equipment.price && <p>Price: {equipment.price}</p>}
        </div>
      )}
    </div>
  );
};

export default EquipmentView;
