import { Skeleton } from "@/components/ui/skeleton";

export function CommentsSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-32" />

      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
          <Skeleton className="h-4 w-full" />
        </div>
      ))}
    </div>
  );
}
