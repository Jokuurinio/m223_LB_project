import { render, screen } from "@testing-library/react"; // Importiere render und screen für die Tests
import "@testing-library/jest-dom"; // Für zusätzliche Matcher wie .toBeInTheDocument()
import App from "../App"; // Importiere die App-Komponente
import { MemoryRouter } from "react-router-dom"; // Importiere MemoryRouter für das Testen von Routen

// Mocke die Komponenten, die in der App verwendet werden
jest.mock("../pages/HangmanGame", () => () => <div>GameSession-Mock</div>);
jest.mock("../pages/Spielregeln", () => () => <div>Rules-Mock</div>);
jest.mock("../pages/Impressum", () => () => <div>Impressum-Mock</div>);
jest.mock("../pages/AddWord", () => () => <div>AddWord-Mock</div>);
jest.mock("../pages/DeleteWord", () => () => <div>DeleteWord-Mock</div>);
jest.mock("../pages/UpdateWord", () => () => <div>UpdateWord-Mock</div>);

test("renders home page with welcome message", () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  // ASSERT
  expect(screen.getByText("Willkommen zur Hangman App!")).toBeInTheDocument();
});

test("renders HangmanGame component for /game route", () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/game"]}>
      <App />
    </MemoryRouter>
  );

  // ASSERT
  expect(screen.getByText("GameSession-Mock")).toBeInTheDocument();
});

test("renders Spielregeln component for /rules route", () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/rules"]}>
      <App />
    </MemoryRouter>
  );

  // ASSERT
  expect(screen.getByText("Rules-Mock")).toBeInTheDocument();
});

test("renders Impressum component for /impressum route", () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/impressum"]}>
      <App />
    </MemoryRouter>
  );

  // ASSERT
  expect(screen.getByText("Impressum-Mock")).toBeInTheDocument();
});

test("renders AddWord component for /words route", () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/words"]}>
      <App />
    </MemoryRouter>
  );

  // ASSERT
  expect(screen.getByText("AddWord-Mock")).toBeInTheDocument();
});

test("renders DeleteWords component for /delete route", () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/delete"]}>
      <App />
    </MemoryRouter>
  );

  // ASSERT
  expect(screen.getByText("DeleteWord-Mock")).toBeInTheDocument();
});

test("renders UpdateWords component for /update route", () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/update"]}>
      <App />
    </MemoryRouter>
  );

  // ASSERT
  expect(screen.getByText("UpdateWord-Mock")).toBeInTheDocument();
});
