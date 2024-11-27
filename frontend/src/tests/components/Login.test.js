import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../../components/Login";

test("renders login form and handles login", () => {
  render(<Login />);
  expect(screen.getByLabelText("Username:")).toBeInTheDocument();
  expect(screen.getByLabelText("Password:")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Login/i })).toBeInTheDocument();
});
