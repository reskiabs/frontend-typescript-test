import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import "@/__tests__/postsPage.mocks";
import "@/test-utils/nextNavigationMock";

import PostsPage from "@/app/posts/page";
import { pushMock } from "@/test-utils/nextNavigationMock";
import { renderWithQuery } from "@/test-utils/renderWithProviders";

describe("PostsPage - user behavior", () => {
  it("shows posts list by default", () => {
    renderWithQuery(<PostsPage />);

    expect(screen.getByText(/post one/i)).toBeInTheDocument();
    expect(screen.getByText(/post two/i)).toBeInTheDocument();
  });

  it("searches post by ID on Enter", async () => {
    const user = userEvent.setup();
    renderWithQuery(<PostsPage />);

    const input = screen.getByPlaceholderText(/search post by id/i);

    await user.type(input, "1{enter}");

    expect(pushMock).toHaveBeenCalledWith("/posts?postId=1");
  });

  it("clears search when input is empty and Enter is pressed", async () => {
    const user = userEvent.setup();
    renderWithQuery(<PostsPage />);

    const input = screen.getByPlaceholderText(/search post by id/i);

    await user.clear(input);
    await user.type(input, "{enter}");

    expect(pushMock).toHaveBeenCalledWith("/posts");
  });
});
