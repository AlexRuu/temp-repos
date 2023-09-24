import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("renders text", async () => {
  render(<Header title="My Header" />);
  const headerElement = screen.getByRole("heading", { name: /my header/i });
  expect(headerElement).toBeInTheDocument();
});
