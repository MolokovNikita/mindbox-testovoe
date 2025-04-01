import { tasksReducer, addTask, toggleTask } from "../features/tasksSlice";
import { TasksState } from "../Models/types";

describe("tasksSlice", () => {
  const initialState: TasksState = {
    tasks: [],
    filter: "all",
  };

  test("should add new task", () => {
    const task = { 
      id: "1", 
      text: "Test", 
      completed: false 
    };
    const nextState = tasksReducer(initialState, addTask(task));
    expect(nextState.tasks).toHaveLength(1);
  });

  test("should toggle task", () => {
    const state: TasksState = {
      tasks: [{ id: "1", text: "Test", completed: false }],
      filter: "all",
    };
    
    const nextState = tasksReducer(state, toggleTask("1"));
    expect(nextState.tasks[0].completed).toBe(true);
  });
});