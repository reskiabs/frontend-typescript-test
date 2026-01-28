import type { Comment, Post } from "@/types/post";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/posts`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function fetchPostById(id: number): Promise<Post> {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Post not found");
  return res.json();
}

export async function fetchCommentsByPostId(
  postId: number,
): Promise<Comment[]> {
  const res = await fetch(`${BASE_URL}/comments?postId=${postId}`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}
