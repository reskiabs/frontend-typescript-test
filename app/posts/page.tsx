import { Suspense } from "react";
import PostsPageClient from "./PostsPageClient";

export default function PostsPage() {
  return (
    <Suspense fallback={null}>
      <PostsPageClient />
    </Suspense>
  );
}
