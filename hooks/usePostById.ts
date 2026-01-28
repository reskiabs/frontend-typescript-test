import { fetchPostById } from "@/services/postApi";
import type { Post } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

export function usePostById(postId?: number) {
  return useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId as number),
    enabled: typeof postId === "number",
    retry: false, // jangan retry untuk search ID
  });
}
