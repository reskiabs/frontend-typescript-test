import { fetchPosts } from "@/services/postApi";
import type { Post } from "@/types/post";
import { useQuery } from "@tanstack/react-query";

export function usePosts() {
  return useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5,
  });
}
