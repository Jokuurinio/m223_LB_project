import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HangmanGame from "../../pages/HangmanGame";

test("renders HangmanGame with basic elements", () => {
  render(<HangmanGame />);

  // Überprüfe, ob der Titel angezeigt wird
  expect(screen.getByText("Hangman")).toBeInTheDocument();

  // Überprüfe, ob ein Grundelement der Komponente gerendert wird (z. B. Keyboard oder Fehlermeldung)
  expect(
    screen.getByText("Benutzer nicht authentifiziert.")
  ).toBeInTheDocument();
});
