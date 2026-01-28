import { cn } from "@/lib/utils";
import Link from "next/link";

export function AppHeader({ active }: { active: "todos" | "posts" }) {
  return (
    <div className="border-b">
      <div className="container mx-auto max-w-2xl flex gap-4 py-3">
        <Link
          href="/"
          className={cn(
            "text-sm font-medium",
            active === "todos"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Todos
        </Link>

        <Link
          href="/posts"
          className={cn(
            "text-sm font-medium",
            active === "posts"
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Posts
        </Link>
      </div>
    </div>
  );
}
