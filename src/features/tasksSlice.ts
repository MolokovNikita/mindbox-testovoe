import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksState, Task } from "../Models/types";

const initialState: TasksState = {
  tasks: [],
  filter: "all",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    toggleTask(state, action: PayloadAction<string>) {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    removeCompletedTasks(state) {
      state.tasks = state.tasks.filter((task) => !task.completed);
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const {
  setTasks,
  addTask,
  toggleTask,
  removeCompletedTasks,
  setFilter,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
