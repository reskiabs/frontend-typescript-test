import { TodoFilter } from "@/components/todos/TodoFilter";
import { TodoInput } from "@/components/todos/TodoInput";
import { TodoList } from "@/components/todos/TodoList";

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-2xl py-12 space-y-6 px-8 md:px-0">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Todos</h1>
        <p className="text-sm text-muted-foreground">
          Manage your tasks and stay focused
        </p>
      </div>

      <div className="flex gap-3">
        <TodoInput />
        <TodoFilter />
      </div>

      <TodoList />
    </main>
  );
}
