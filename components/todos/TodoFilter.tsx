"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTodos } from "@/hooks/useTodos";
import type { TodoFilter as FilterType } from "@/types/todo";

export function TodoFilter() {
  const { filter, setFilter } = useTodos();

  return (
    <Select
      value={filter}
      onValueChange={(value) => setFilter(value as FilterType)}
    >
      <SelectTrigger className="w-40">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="completed">Completed</SelectItem>
        <SelectItem value="pending">Pending</SelectItem>
      </SelectContent>
    </Select>
  );
}
