/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import axios from "axios";
import { useState, useContext } from "react";
import "../../sass/pages/equipmentEntry.scss";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../utils/AuthContext";

const EquipmentEntry = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const history = useHistory();
  const { authenticated, loading } = useContext(AuthContext);

  if (!authenticated && !loading) {
    history.push("/sign-in");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Prepare the data object to send in the POST request
    const formData = {
      name,
      description,
      price,
      serialNumber,
      imageUrl,
    };

    try {
      const response = await axios.post("/api/equipment/", formData);
      const { id } = response.data;
      // console.log("Equipment added:", response.data);
      history.push(`/equipment/${id}`);
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };

  return (
    authenticated && (
      <div className="equipment-entry-wrapper">
        <h2>Add New Equipment</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <label htmlFor="serialNumber">Serial Number:</label>
          <input
            id="serialNumber"
            name="serialNumber"
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
          />

          <label htmlFor="imageUrl">Image URL:</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  );
};

export default EquipmentEntry;
