import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import ToDoApp from "../components/ui/Todo/Todo";

describe("ToDoApp", () => {
  test("renders and adds new task", async () => {
    render(
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    );

    const input = screen.getByPlaceholderText("What needs to be done ?");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyPress(input, { key: "Enter", code: "Enter" });

    expect(await screen.findByText("New Task")).toBeInTheDocument();
  });

  test("toggles task completion", async () => {
    render(
      <Provider store={store}>
        <ToDoApp />
      </Provider>
    );

    const checkbox = await screen.findByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
