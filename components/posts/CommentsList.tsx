import type { Comment } from "@/types/post";

interface Props {
  comments?: Comment[];
  isLoading: boolean;
}

export function CommentsList({ comments, isLoading }: Props) {
  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading comments...</p>;
  }

  if (!comments || comments.length === 0) {
    return <p className="text-sm text-muted-foreground">No comments found</p>;
  }

  return (
    <div className="space-y-4">
      <p className="text-sm font-medium">Comments</p>

      {comments.map((comment) => (
        <div key={comment.id} className="space-y-1">
          <p className="text-sm font-medium">{comment.name}</p>
          <p className="text-xs text-muted-foreground">{comment.email}</p>
          <p className="text-sm text-muted-foreground">{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
