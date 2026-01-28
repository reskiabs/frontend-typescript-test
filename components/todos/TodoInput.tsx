"use client";

import { Input } from "@/components/ui/input";
import { useTodos } from "@/hooks/useTodos";
import { KeyboardEvent, useState } from "react";

export function TodoInput() {
  const [value, setValue] = useState("");
  const { addTodo } = useTodos();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!value.trim()) return;

    addTodo(value.trim());
    setValue("");
  };

  return (
    <Input
      placeholder="Add new task and press Enter"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
}
