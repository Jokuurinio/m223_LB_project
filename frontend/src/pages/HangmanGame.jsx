import React, { useState, useEffect } from 'react';

// Hangman ASCII Art
const HANGMANPICS = [
  `
  +---+
  |   |
      |
      |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
      |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========
`,
  `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========
`
];

function HangmanGame() {
  const [word, setWord] = useState(''); // Das zu ratende Wort
  const [guessedLetters, setGuessedLetters] = useState([]); // Erratene Buchstaben
  const [wrongGuesses, setWrongGuesses] = useState(0); // Anzahl der falschen Buchstaben
  const [isGameOver, setIsGameOver] = useState(false); // Spielstatus
  const [isWinner, setIsWinner] = useState(false); // Status bei Gewinn

  // Funktion zum Abrufen eines zufälligen Worts aus MongoDB
  const fetchWord = async () => {
  try {
    const response = await fetch('http://localhost:8080/words/documents');
    if (!response.ok) {
      throw new Error(`HTTP-Fehler! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Daten vom Server:', data);

    // Überprüfe die Struktur der Daten
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Unerwartetes Datenformat oder leeres Array');
    }

    // Extrahiere die Wörter
    const wordsArray = data.map(doc => doc.content.word).filter(word => word); // Korrigierte Extraktion
    console.log('Wörter Array:', wordsArray);

    if (wordsArray.length === 0) {
      throw new Error('Keine Wörter gefunden');
    }

    const randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    setWord(randomWord.toUpperCase()); // Zufälliges Wort wählen
  } catch (error) {
    console.error('Fehler beim Abrufen der Wörter:', error);
  }
};


  // Abrufen des Worts beim Laden der Komponente
  useEffect(() => {
    fetchWord();
  }, []);

  // Überprüfen, ob der Buchstabe erraten wurde
  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || isGameOver || isWinner) return; // Doppeltes Erraten verhindern

    const updatedGuessedLetters = [...guessedLetters, letter];
    setGuessedLetters(updatedGuessedLetters);

    if (!word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1;
      setWrongGuesses(newWrongGuesses);

      if (newWrongGuesses >= HANGMANPICS.length - 1) {
        setIsGameOver(true); // Spiel verloren
      }
    } else {
      // Überprüfen, ob alle Buchstaben erraten wurden
      const allGuessed = word.split('').every((letter) => updatedGuessedLetters.includes(letter) || letter === ' ');
      if (allGuessed) {
        setIsWinner(true); // Spiel gewonnen
      }
    }
  };

  // Funktion, um den aktuellen Zustand des Worts anzuzeigen (erratene Buchstaben)
  const displayWord = () => {
    return word.split('').map(letter => (guessedLetters.includes(letter) ? letter : '_')).join(' ');
  };

  // Funktion, um das Spiel zurückzusetzen
  const resetGame = () => {
    setGuessedLetters([]);
    setWrongGuesses(0);
    setIsGameOver(false);
    setIsWinner(false); // Gewinnstatus zurücksetzen
    fetchWord(); // Neues Wort abrufen
  };

  return (
    <div>
      <h1>Hangman</h1>
      <pre>{HANGMANPICS[wrongGuesses]}</pre> {/* ASCII Hangman anzeigen */}
      {isGameOver ? (
        <div>
          <h2>Game Over! Das Wort war: {word}</h2>
          <button onClick={resetGame}>Neues Spiel</button>
        </div>
      ) : isWinner ? (
        <div>
          <h2>Herzlichen Glückwunsch! Du hast das Wort erraten: {word}</h2>
          <button onClick={resetGame}>Neues Spiel</button>
        </div>
      ) : (
        <div>
          <p>Falsche Versuche: {wrongGuesses} / {HANGMANPICS.length - 1}</p>
          <p>{displayWord()}</p>
          <div>
            {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
              <button
              className='keyboard'
              key={letter}
              onClick={() => handleGuess(letter)}
              disabled={guessedLetters.includes(letter)}
            >
              {letter}
            </button>
          ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HangmanGame;
