export type TodoFilter = "all" | "completed" | "pending";

export interface TodoState {
  items: Todo[];
  filter: TodoFilter;
}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
