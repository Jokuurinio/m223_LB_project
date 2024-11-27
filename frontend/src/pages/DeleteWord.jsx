import React, { useState } from "react";
import axios from "axios";

export default function DeleteWord() {
  const [wordId, setWordId] = useState(""); // State für die Wort-ID
  const [message, setMessage] = useState(""); // Feedback-Meldung

  // Eingabe speichern
  const store = (e) => {
    setWordId(e.target.value);
  };

  // DELETE-Anfrage ausführen
  const handleDelete = async (event) => {
    event.preventDefault();

    // Eingabevalidierung
    if (!wordId.trim()) {
      alert("Bitte eine gültige ID eingeben.");
      return;
    }

    try {
      // Token aus localStorage abrufen
      const token = JSON.parse(localStorage.getItem("user"))?.token;

      if (!token) {
        alert("Sie sind nicht eingeloggt.");
        return;
      }

      // DELETE-Anfrage senden
      await axios.delete(`http://localhost:8080/words/${wordId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Erfolgsmeldung
      setMessage(`Wort mit der ID "${wordId}" wurde erfolgreich gelöscht.`);
      setWordId(""); // Eingabe zurücksetzen
    } catch (error) {
      // Fehlermeldung
      setMessage(
        error.response?.data?.message ||
          "Ein unerwarteter Fehler ist aufgetreten."
      );
      console.error("Fehler:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleDelete}>
        <h2>Wort löschen</h2>
        <div className="form-control">
          <label htmlFor="wordId">Wort ID:</label>
          <input
            type="text"
            id="wordId"
            name="wordId"
            value={wordId}
            onChange={store}
            placeholder="Gib die ID des zu löschenden Worts ein"
            required
          />
        </div>
        <button type="submit">Löschen</button>
      </form>
      {message && <p>{message}</p>} {/* Feedback anzeigen */}
    </div>
  );
}
