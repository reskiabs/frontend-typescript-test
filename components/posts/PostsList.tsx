import type { Post } from "@/types/post";

interface Props {
  posts: Post[];
}

export function PostsList({ posts }: Props) {
  return (
    <div className="space-y-3">
      {posts.slice(0, 10).map((post) => (
        <div key={post.id} className="space-y-1">
          <p className="text-sm font-medium">
            #{post.id} {post.title}
          </p>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
}
