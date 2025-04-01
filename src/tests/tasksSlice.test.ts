import { tasksReducer, addTask, toggleTask } from "../features/tasksSlice";
import { TasksState } from "../Models/types";
describe("tasksSlice", () => {
  const initialState: TasksState = {
    tasks: [],
    filter: "all",
  };

  test("should add new task", () => {
    const task = { id: "1", text: "Test", completed: false };
    const action = addTask(task);
    const state = tasksReducer(initialState, action);
    expect(state.tasks).toHaveLength(1);
  });

  test("should toggle task", () => {
    const initialStateWithTask: TasksState = {
      tasks: [{ id: "1", text: "Test", completed: false }],
      filter: "all",
    };

    const action = toggleTask("1");
    const state = tasksReducer(initialStateWithTask, action);
    expect(state.tasks[0].completed).toBe(true);
  });
});
