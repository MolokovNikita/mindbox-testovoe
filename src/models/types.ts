export interface Task {
  id: string;
  text: string;
  completed: boolean;
}
export interface TasksState {
  tasks: Task[];
  filter: string;
}

export type FilterType = "all" | "active" | "completed";