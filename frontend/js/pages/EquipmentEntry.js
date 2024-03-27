/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import axios from "axios";
import { useState } from "react";

const EquipmentEntry = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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
      // Send a POST request to your backend API endpoint
      await axios.post("/api/equipment/", formData);

      // Optionally, clear the form fields after successful submission
      setName("");
      setDescription("");
      setPrice("");
      setSerialNumber("");
      setImageUrl("");
    } catch (error) {
      console.error("Error adding equipment:", error);
    }
  };

  return (
    <div>
      <h2>Add New Equipment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name:</label>
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
  );
};

export default EquipmentEntry;
