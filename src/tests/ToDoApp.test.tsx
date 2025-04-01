import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { mockStore } from "./mockStore";
import ToDoApp from "../components/ui/Todo/Todo";

describe("ToDoApp", () => {
  test("adds and displays new task", async () => {
    render(
      <Provider store={mockStore}>
        <ToDoApp />
      </Provider>
    );

    const input = screen.getByPlaceholderText("What needs to be done ?");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(await screen.findByText("New Task")).toBeInTheDocument();
  });

  test("toggles task status", async () => {
    render(
      <Provider store={mockStore}>
        <ToDoApp />
      </Provider>
    );

    const checkboxes = await screen.findAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);

    expect(checkboxes[0]).toBeChecked();
  });
});
