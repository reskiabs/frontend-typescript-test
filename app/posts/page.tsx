"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { KeyboardEvent } from "react";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useComments } from "@/hooks/useComments";
import { usePostById } from "@/hooks/usePostById";
import { usePosts } from "@/hooks/usePosts";

import { CommentsList } from "@/components/posts/CommentsList";
import { PostDetail } from "@/components/posts/PostDetail";
import { PostsEmpty } from "@/components/posts/PostsEmpty";
import { PostsError } from "@/components/posts/PostsError";
import { PostsList } from "@/components/posts/PostsList";

export default function PostsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const postIdParam = searchParams.get("postId");
  const postId = postIdParam ? Number(postIdParam) : undefined;

  const postsQuery = usePosts();
  const postQuery = usePostById(postId);
  const commentsQuery = useComments(postId);

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const rawValue = e.currentTarget.value.trim();

    if (!rawValue) {
      router.push("/posts");
      return;
    }

    const value = Number(rawValue);

    if (Number.isNaN(value)) return;

    router.push(`/posts?postId=${value}`);
  };

  return (
    <main className="container mx-auto max-w-3xl py-12 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
        <p className="text-sm text-muted-foreground">
          Browse posts or inspect a post by ID
        </p>
      </div>

      {/* Search */}
      <Input
        defaultValue={postIdParam ?? ""}
        placeholder="Search post by ID and press Enter"
        onKeyDown={handleSearch}
      />

      {/* SEARCH MODE */}
      {postId ? (
        <>
          {postQuery.isError && <PostsError message="Post not found" />}

          {postQuery.isSuccess && (
            <>
              <PostDetail post={postQuery.data} />
              <Separator />
              <CommentsList
                isLoading={commentsQuery.isLoading}
                comments={commentsQuery.data}
              />
            </>
          )}
        </>
      ) : (
        <>
          {/* BROWSE MODE */}
          {postsQuery.isError && <PostsError message="Failed to load posts" />}

          {postsQuery.isSuccess && <PostsList posts={postsQuery.data} />}

          <PostsEmpty />
        </>
      )}
    </main>
  );
}
