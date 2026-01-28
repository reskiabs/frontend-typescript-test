import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

import type { RootState, AppDispatch } from "@/store";
import type { TodoFilter } from "@/types/todo";
import { addTodo, toggleTodo, deleteTodo, setFilter } from "@/store/todoSlice";

export function useTodos() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, filter } = useSelector((state: RootState) => state.todos);

  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return items.filter((t) => t.completed);
    }
    if (filter === "pending") {
      return items.filter((t) => !t.completed);
    }
    return items;
  }, [items, filter]);

  return {
    todos: filteredTodos,
    filter,
    addTodo: (title: string) => dispatch(addTodo(title)),
    toggleTodo: (id: number) => dispatch(toggleTodo(id)),
    deleteTodo: (id: number) => dispatch(deleteTodo(id)),
    setFilter: (filter: TodoFilter) => dispatch(setFilter(filter)),
  };
}
