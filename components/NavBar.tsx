"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();

  const isTodos = pathname === "/";
  const isPosts = pathname.startsWith("/posts");

  return (
    <header className="border-b">
      <div className="container mx-auto max-w-2xl flex gap-6 py-3">
        <Link
          href="/"
          className={cn(
            "text-sm font-medium transition-colors",
            isTodos
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Todos
        </Link>

        <Link
          href="/posts"
          className={cn(
            "text-sm font-medium transition-colors",
            isPosts
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          Posts
        </Link>
      </div>
    </header>
  );
}
