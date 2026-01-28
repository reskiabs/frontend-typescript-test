import { vi } from "vitest";

vi.mock("@/hooks/usePosts", () => ({
  usePosts: () => ({
    isLoading: false,
    isError: false,
    isSuccess: true,
    data: [
      { id: 1, title: "Post One", body: "Body one" },
      { id: 2, title: "Post Two", body: "Body two" },
    ],
  }),
}));

vi.mock("@/hooks/usePostById", () => ({
  usePostById: (id?: number) => ({
    isLoading: false,
    isError: !id,
    isSuccess: Boolean(id),
    data: id ? { id, title: "Post Detail", body: "Post body" } : undefined,
  }),
}));

vi.mock("@/hooks/useComments", () => ({
  useComments: (id?: number) => ({
    isLoading: false,
    isSuccess: Boolean(id),
    data: id
      ? [
          {
            id: 1,
            name: "John Doe",
            email: "john@mail.com",
            body: "Nice post",
          },
        ]
      : [],
  }),
}));
