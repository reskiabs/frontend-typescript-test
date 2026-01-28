import type { Todo, TodoFilter } from "@/types/todo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  items: Todo[];
  filter: TodoFilter;
}

const initialState: TodoState = {
  items: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    hydrateTodos(state, action: PayloadAction<Todo[]>) {
      state.items = action.payload;
    },
    addTodo(state, action: PayloadAction<string>) {
      state.items.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.items = state.items.filter((t) => t.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<TodoFilter>) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, setFilter, hydrateTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
