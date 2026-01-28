import type { Post } from "@/types/post";

interface Props {
  post: Post;
}

export function PostDetail({ post }: Props) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-medium">
        #{post.id} {post.title}
      </h2>
      <p className="text-sm text-muted-foreground">{post.body}</p>
    </div>
  );
}
