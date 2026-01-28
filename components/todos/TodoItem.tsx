"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

import { useTodos } from "@/hooks/useTodos";
import type { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
        />

        <span
          className={`text-sm transition ${
            todo.completed
              ? "line-through text-muted-foreground"
              : "text-foreground"
          }`}
        >
          {todo.title}
        </span>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete todo"
      >
        <Trash2 className="h-4 w-4 text-muted-foreground hover:text-destructive" />
      </Button>
    </div>
  );
}
