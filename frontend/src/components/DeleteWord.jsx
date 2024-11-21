import React, { useState } from "react";

export default function DeleteWords() {
    const [wordId, setWordId] = useState(''); // ID des zu löschenden Worts

    const handleDelete = (e) => {
        e.preventDefault();

        // Überprüfen, ob die ID eingegeben wurde
        if (!wordId) {
            console.error("Keine ID eingegeben.");
            return;
        }

        fetch(`http://localhost:8080/words/documents/${wordId}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                console.log("Wort erfolgreich gelöscht.");
            } else {
                console.error("Fehler beim Löschen des Worts. Status:", response.status);
            }
        })
        .catch(error => console.error("Fehler:", error));
    };

    return (
        <div>
            <h2>Wort löschen</h2>
            <form onSubmit={handleDelete}>
                <div>
                    <label htmlFor="wordId">Wort ID: </label>
                    <input
                        type="text"
                        id="wordId"
                        value={wordId}
                        onChange={(e) => setWordId(e.target.value)}
                        placeholder="Gib die ID des zu löschenden Worts ein"
                    />
                </div>
                <button type="submit">Löschen</button>
            </form>
        </div>
    );
}
