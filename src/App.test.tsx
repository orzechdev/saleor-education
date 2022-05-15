import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders education link", () => {
  render(<App />);
  const linkElement = screen.getByText(/education/i);
  expect(linkElement).toBeInTheDocument();
});
