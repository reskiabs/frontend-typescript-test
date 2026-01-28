import { fetchCommentsByPostId } from "@/services/postApi";
import type { Comment } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

export function useComments(postId?: number) {
  return useQuery<Comment[]>({
    queryKey: ["comments", postId],
    queryFn: () => fetchCommentsByPostId(postId as number),
    enabled: typeof postId === "number",
  });
}
