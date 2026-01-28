"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Todo } from "@/types/todo";
import { useTodos } from "@/hooks/useTodos";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodos();

  return (
    <Card className="flex items-center justify-between p-4">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => toggleTodo(todo.id)}
      >
        <span
          className={todo.completed ? "line-through text-muted-foreground" : ""}
        >
          {todo.title}
        </span>
        {todo.completed && <Badge>Done</Badge>}
      </div>

      <Button
        variant="destructive"
        size="sm"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </Button>
    </Card>
  );
}
