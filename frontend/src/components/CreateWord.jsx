import { useState } from "react";

export default function CreateWord() {
    const [entries, setEntries] = useState({});
    const [error, setError] = useState('');

    // Funktion zum Aktualisieren des Zustands basierend auf Benutzereingaben
    const store = (e) => {
        setEntries({ ...entries, [e.target.name]: e.target.value });
    };

    // Funktion zum Absenden des Formulars
    const submit = (e) => {
        e.preventDefault();

        // Validierung der Eingaben
        const word = entries.nw?.trim(); // Entferne führende und nachfolgende Leerzeichen
        if (!word || /\d/.test(word)) { // Überprüfe, ob das Wort leer ist oder eine Zahl enthält
            setError('Das Wort darf nicht leer sein und darf keine Zahlen enthalten.');
            return; // Beende die Funktion, wenn die Validierung fehlschlägt
        }

        // Daten vorbereiten, die an die API gesendet werden
        const submitData = {
            content: {
                word: word // Neuen Eintrag unter "word" speichern
            }
        };

        // API-Request zum Hinzufügen eines neuen Dokuments
        fetch("http://localhost:8080/words/documents", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // JSON-Daten senden
            },
            body: JSON.stringify(submitData) // Daten in JSON-Format senden
        })
        .then(response => response.json()) // Antwort als JSON parsen
        .then(data => {
            console.log("Wort erfolgreich hinzugefügt:", data);
            setEntries({}); // Eingaben zurücksetzen
            setError(''); // Fehler zurücksetzen
        })
        .catch(error => {
            console.error("Fehler beim Hinzufügen des Worts:", error);
            setError('Fehler beim Hinzufügen des Worts.');
        });
    };

    return (
        <form onSubmit={submit}>
            <div className="form-control">
                <label htmlFor="nw">Neues Wort hinzufügen: </label>
                <input type="text" name="nw" onChange={store} placeholder="Neues Wort" value={entries.nw || ''} />
            </div>
            <button type="submit">Submit/Absenden</button>
            {error && <p className="error">{error}</p>} {/* Zeige die Fehlermeldung an */}
        </form>
    );
}
