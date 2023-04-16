import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render Rick and Morty title", () => {
  render(<App />);
  const linkElement = screen.getByText("Rick and Morty");
  expect(linkElement).toBeInTheDocument();
});
