"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useTodos } from "@/hooks/useTodos";

export function TodoInput() {
  const [value, setValue] = useState("");
  const { addTodo } = useTodos();

  const handleAdd = () => {
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="flex gap-3">
      <Input
        placeholder="Add new task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
}
