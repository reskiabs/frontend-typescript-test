"use client";

import { useTodos } from "@/hooks/useTodos";
import { TodoEmpty } from "./TodoEmpty";
import { TodoItem } from "./TodoItem";

export function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return <TodoEmpty />;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
