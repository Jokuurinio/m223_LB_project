import React, { useState } from "react";
import axios from "axios";

export default function AddItems() {
  const [entries, setEntries] = useState({ item: "" });
  const API_URL = "http://localhost:8080/items";

  // Store input in state
  const store = (e) => {
    setEntries({ ...entries, [e.target.name]: e.target.value });
  };

  // Submit handler to send a post request
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = JSON.parse(localStorage.getItem("user")).token;
      // Post request to add the item
      const response = await axios.post(
        API_URL,
        { item: entries.item },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Item erfolgreich hinzugefügt:", response.data);
      // Reload the page after successful submission
      window.location.reload();
    } catch (error) {
      console.error("Item konnte nicht hinzugefügt werden:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Neues Item hinzufügen</h2>
        <div className="add-item">
          <label htmlFor="item">Neues Item hinzufügen:</label>
          <input
            type="text"
            id="item"
            name="item"
            value={entries.item}
            onChange={store}
            required
          />
        </div>
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
  );
}
