// src/App.js
import React from 'react'; // Importiere die React-Bibliothek
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importiere BrowserRouter und Routes aus react-router-dom
import HangmanGame from './components/HangmanGame'; // Importiere die HangmanGame-Komponente
import Impressum from './components/Impressum'; // Importiere die Impressum-Komponente
import Spielregeln from './components/Spielregeln'; // Importiere die Spielregeln-Komponente
import Navi from './components/Navi'; // Importiere die Navigations-Komponente
import CreateWord from './components/CreateWord'; //Importiere die CreateWord-Komponente
import DeleteWords from './components/DeleteWord';
import UpdateWords from './components/UpdateWord';
import './App.css';

function App() {
  return (
    <>
      <Navi />
      <Routes>
        <Route path="/" element={<h1>Willkommen zur Hangman App!</h1>} />
        <Route path="/game" element={<HangmanGame />} />
        <Route path="/rules" element={<Spielregeln />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/words" element={<CreateWord />} />
        <Route path="/delete" element={<DeleteWords />} />
        <Route path="/update" element={<UpdateWords/>} />
      </Routes>
    </>
  );
}

export default App;
