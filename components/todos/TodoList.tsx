"use client";

import { TodoEmpty } from "./TodoEmpty";
import { TodoItem } from "./TodoItem";
import { useTodos } from "@/hooks/useTodos";

export function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return <TodoEmpty />;
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
