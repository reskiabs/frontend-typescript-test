"use client";

import { KeyboardEvent, useState } from "react";

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
  const [searchId, setSearchId] = useState<number | undefined>();

  const postsQuery = usePosts();
  const postQuery = usePostById(searchId);
  const commentsQuery = useComments(searchId);

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const value = Number(e.currentTarget.value);
    if (!value) return;

    setSearchId(value);
  };

  return (
    <main className="container mx-auto max-w-3xl py-12 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
        <p className="text-sm text-muted-foreground">
          Browse posts and inspect details by ID
        </p>
      </div>

      {/* Search */}
      <Input
        placeholder="Search post by ID and press Enter"
        onKeyDown={handleSearch}
      />

      {/* Error State */}
      {postsQuery.isError && <PostsError message="Failed to load posts" />}

      {/* Posts List */}
      {postsQuery.isSuccess && <PostsList posts={postsQuery.data} />}

      {/* Detail Section */}
      {searchId && (
        <>
          <Separator />

          {postQuery.isError && <PostsError message="Post not found" />}

          {postQuery.isSuccess && (
            <>
              <PostDetail post={postQuery.data} />

              <CommentsList
                isLoading={commentsQuery.isLoading}
                comments={commentsQuery.data}
              />
            </>
          )}
        </>
      )}

      {/* Empty State */}
      {!searchId && <PostsEmpty />}
    </main>
  );
}
