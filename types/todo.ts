export type TodoFilter = "all" | "completed" | "pending";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
