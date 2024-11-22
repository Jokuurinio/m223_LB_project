import { useState } from "react";
import axios from "axios";

export default function addWord() {
  const [entries, setEntries] = useState({ nw: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Funktion zum Aktualisieren des Zustands basierend auf Benutzereingaben
  const store = (e) => {
    setEntries({ ...entries, [e.target.name]: e.target.value });
  };

  // Funktion zum Absenden des Formulars
  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validierung der Eingaben
    const word = entries.nw?.trim(); // Entferne führende und nachfolgende Leerzeichen
    if (!word || /\d/.test(word)) {
      // Überprüfe, ob das Wort leer ist oder eine Zahl enthält
      setError(
        "Das Wort darf nicht leer sein und darf keine Zahlen enthalten."
      );
      return; // Beende die Funktion, wenn die Validierung fehlschlägt
    }

    try {
      // Token und Rolle des Benutzers abrufen
      const user = JSON.parse(localStorage.getItem("user")); // Annahme: "user" enthält Token und Rolle
      const { token, role } = user || {};

      if (!token || role !== "admin") {
        setError("Nur Admins dürfen neue Wörter hinzufügen.");
        return;
      }

      // API-Aufruf zum Hinzufügen eines neuen Worts
      const response = await axios.post(
        "http://localhost:8080/words",
        {
          content: { word }, // Daten im Body
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Authentifizierung über JWT
            "Content-Type": "application/json", // Content-Type
          },
        }
      );
      setSuccess(
        `Wort "${response.data.content.word}" erfolgreich hinzugefügt!`
      );
      setEntries({ nw: "" }); // Eingabefeld leeren
    } catch (error) {
      console.error("Fehler beim Hinzufügen des Worts:", error);
      setError(
        error.response?.data?.message || "Fehler beim Hinzufügen des Worts."
      );
    }
  };

  return (
    <form onSubmit={submit}>
      <div className="form-control">
        <label htmlFor="nw">Neues Wort hinzufügen: </label>
        <input
          type="text"
          name="nw"
          onChange={store}
          placeholder="Neues Wort"
          value={entries.nw || ""}
        />
      </div>
      <button type="submit">Submit/Absenden</button>
      {error && <p className="error">{error}</p>}{" "}
      {/* Zeige die Fehlermeldung */}
      {success && <p className="success">{success}</p>}{" "}
      {/* Zeige die Erfolgsmeldung */}
    </form>
  );
}
