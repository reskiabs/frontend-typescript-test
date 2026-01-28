import { TodoInput } from "@/components/todos/TodoInput";
import { TodoFilter } from "@/components/todos/TodoFilter";
import { TodoList } from "@/components/todos/TodoList";

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-2xl py-12 space-y-6">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold">Todos</h1>
        <p className="text-muted-foreground">Simple todo list with filter</p>
      </div>

      <div className="flex gap-3">
        <TodoInput />
        <TodoFilter />
      </div>

      <TodoList />
    </main>
  );
}
