import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Todo, TodoFilter } from "@/types/todo";

interface TodoState {
  items: Todo[];
  filter: TodoFilter;
}

const initialState: TodoState = {
  items: [
    { id: 1, title: "Learn Next.js", completed: false },
    { id: 2, title: "Setup shadcn/ui", completed: true },
    { id: 3, title: "Build Todo UI", completed: false },
  ],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.items.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<TodoFilter>) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
