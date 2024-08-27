import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./App";

test("renders the App", () => {
  render(<App />);

  const dbzLogo = screen.getByAltText("Debezium Logo");
  expect(dbzLogo).toBeInTheDocument();
});
