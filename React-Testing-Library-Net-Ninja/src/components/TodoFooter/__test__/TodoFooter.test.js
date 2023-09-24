import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter as Router } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <Router>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </Router>
  );
};

it("render correct amount of incomplete tasks", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const numberElement = screen.getByText(/5 tasks left/i);
  expect(numberElement).toBeInTheDocument();
});

it("render correct amount of incomplete task", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const numberElement = screen.getByText(/1 task left/i);
  expect(numberElement).toBeInTheDocument();
});

it("check visibility", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const numberElement = screen.getByText(/5 tasks left/i);
  expect(numberElement).toBeVisible();
});

it("check for element", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const numberElement = screen.getByText(/5 tasks left/i);
  expect(numberElement).toContainHTML("p");
});

it("check text content", async () => {
  render(<MockTodoFooter numberOfIncompleteTasks={1} />);
  const numberElement = screen.getByText(/1 task left/i);
  expect(numberElement).toHaveTextContent("1 task left");
});
