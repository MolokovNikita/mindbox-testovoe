import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { Task } from "../../../Models/types";
import { RootState } from "../../../store/store";
import {
  addTask,
  toggleTask,
  removeCompletedTasks,
  setFilter,
} from "../../../features/tasksSlice";
import styles from "./todo.module.scss";
import CustomCheckbox from "../Checkbox/CustomCheckbox";

const ToDoApp: React.FC = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state: RootState) => state.tasks.tasks);
  const filter = useAppSelector((state: RootState) => state.tasks.filter);
  const [input, setInput] = useState("");

  const addNewTask = () => {
    if (input.trim()) {
      dispatch(addTask({ id: uuidv4(), text: input, completed: false }));
      setInput("");
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addNewTask();
    }
  };

  const clearCompleted = () => {
    dispatch(removeCompletedTasks());
  };

  const filteredTasks = tasks.filter((task: Task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>todos</h2>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="What needs to be done ?"
        fullWidth
        className={styles.input}
        disableUnderline={true}
        sx={{
          padding: "8px 12px",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderBottom: "1px solid rgba(185, 184, 184, 0.7)",

          color: "#000",
          "&::placeholder": {
            fontStyle: "italic",
          },
          "&:before": {
            borderBottom: "0",
          },
        }}
      />

      <ul className={styles.taskList}>
        {filteredTasks.map((task: Task) => (
          <li
            key={task.id}
            className={styles.taskItem}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            <CustomCheckbox
              checked={task.completed}
              onChange={() => dispatch(toggleTask(task.id))}
            />

            <span className={task.completed ? styles.completedTask : ""}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>

      <div className={styles.filterButtons}>
        <p className={styles.taskCounter}>
          {tasks.filter((task: Task) => !task.completed).length} items left
        </p>
        <Button
          onClick={() => dispatch(setFilter("all"))}
          variant={filter === "all" ? "outlined" : "text"}
          sx={{
            fontSize: "11px",
            margin: "0",
            padding: "0 5px",
            minWidth: "unset",
            height: "30px",
            border:
              filter === "all" ? "1px solid #d9d9d9" : "1px solid transparent",
            color: filter === "all" ? "#4d4d4d" : "#777",
            "&:hover": {
              border: "1px solid #d9d9d9",
              backgroundColor: "transparent",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          disableRipple
        >
          All
        </Button>
        <Button
          onClick={() => dispatch(setFilter("active"))}
          variant={filter === "active" ? "outlined" : "text"}
          sx={{
            fontSize: "11px",
            margin: "0",
            padding: "0 5px",
            minWidth: "unset",
            height: "30px",
            border:
              filter === "active"
                ? "1px solid #d9d9d9"
                : "1px solid transparent",
            color: filter === "active" ? "#4d4d4d" : "#777",

            "&:hover": {
              border: "1px solid #d9d9d9",
              backgroundColor: "transparent",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          disableRipple
        >
          Active
        </Button>
        <Button
          onClick={() => dispatch(setFilter("completed"))}
          variant={filter === "completed" ? "outlined" : "text"}
          sx={{
            fontSize: "11px",
            margin: "0",
            padding: "0 5px",
            minWidth: "unset",
            height: "30px",
            border:
              filter === "completed"
                ? "1px solid #d9d9d9"
                : "1px solid transparent",
            color: filter === "completed" ? "#4d4d4d" : "#777",
            "&:hover": {
              border: "1px solid #d9d9d9",
              backgroundColor: "transparent",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          disableRipple
        >
          Completed
        </Button>
        <Button
          onClick={clearCompleted}
          variant="text"
          sx={{
            fontSize: "11px",
            padding: "0",
            marginRight: "20px",
            color: "#777",
            "&:hover": {
              textDecoration: "underline",
              backgroundColor: "transparent",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          disableRipple
        >
          Clear completed
        </Button>
      </div>
    </div>
  );
};

export default ToDoApp;
