// src/components/Navbar.js
import { Link } from 'react-router-dom';

const Navi = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Startseite</Link></li>
        <li><Link to="/game">Hangman-Spiel</Link></li>
        <li><Link to="/rules">Spielregeln</Link></li>
        <li><Link to="/impressum">Impressum</Link></li>
        <li><Link to="/words">Wörter erstellen</Link></li>
        <li><Link to="/delete">Wörter löschen</Link></li>
        <li><Link to="/update">Wörter aktualisieren</Link></li>
      </ul>
    </nav>
  );
};

export default Navi;
