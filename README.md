# Frontend TypeScript Test

A frontend application built with **Next.js (App Router)** and **TypeScript**, focusing on clean architecture, user-centric UX, predictable state management, data fetching, and testing best practices.

This project implements **Todos** and **Posts** features while demonstrating how to structure a modern frontend codebase that is maintainable, scalable, and reviewer-friendly.

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Redux Toolkit** – state management for Todos
- **TanStack React Query** – data fetching & caching for Posts and Comments
- **Vitest + Testing Library** – unit & integration tests

---

## Project Structure (High Level)

```
src/
├─ app/
│  ├─ page.tsx            # Todos page
│  └─ posts/
│     └─ page.tsx         # Posts page
│
├─ components/
│  ├─ todos/
│  ├─ posts/
│  └─ ui/
│
├─ hooks/
│  ├─ useTodos.ts
│  ├─ usePosts.ts
│  ├─ usePostById.ts
│  └─ useComments.ts
│
├─ store/
│  └─ todoSlice.ts
│
├─ providers/
│  ├─ ReduxProvider.tsx
│  └─ ReactQueryProvider.tsx
│
├─ services/
├─ types/
├─ utils/
└─ __tests__/
```

---

## Features

### Todos

- Add todo using **Enter key** (keyboard-friendly UX)
- Toggle completed state with checkbox
- Delete todo
- Filter todos by:
  - All
  - Completed
  - Pending

- Persist todos using **localStorage**
- Redux Toolkit used as a single source of truth

### Posts

- Fetch posts from:

  ```
  https://jsonplaceholder.typicode.com/posts
  ```

- Search post by **ID**
- Search state stored in **URL query parameters**

  ```
  /posts?postId=1
  ```

- Fetch comments for selected post:

  ```
  https://jsonplaceholder.typicode.com/comments?postId=1
  ```

- Conditional UI behavior:
  - **Browse mode** → posts list
  - **Search mode** → post detail + comments only

- Skeleton loading for:
  - Posts list
  - Post detail
  - Comments

---

## UI / UX Decisions

- Minimal top navigation (**Todos | Posts**)
- URL used as the **single source of truth** for search state
- No unnecessary routing complexity (search handled in-page)
- Skeleton loading used instead of spinners for better perceived performance
- Flat, simple UI focusing on clarity and usability

---

## State Management Strategy

### Todos

- Managed using **Redux Toolkit**
- Logic separated into a custom hook (`useTodos`)
- State persisted manually to `localStorage`
- Hydration handled safely on the client to avoid SSR issues

### Posts

- Managed using **React Query**
- Data fetching logic isolated in custom hooks
- Caching and background updates handled automatically
- Queries enabled conditionally based on URL parameters

---

## Testing Strategy

This project uses a **two-layer testing approach** to ensure correctness and maintainability.

### 1. Unit Tests (Business Logic)

- Redux **todoSlice** is tested in isolation
- Tests cover:
  - Hydrating todos from persisted data
  - Adding a todo
  - Toggling completed state
  - Deleting a todo
  - Updating filter state

- These tests ensure state transitions are predictable and type-safe

### 2. Component & Behavior Tests (User-Centric)

- Components are tested using **@testing-library/react**
- Tests focus on **what the user can do and see**, not implementation details
- Examples:
  - User can browse posts
  - User can search a post by ID using Enter
  - Clearing the search resets the page state

This approach balances **fast, deterministic unit tests** with **realistic UI behavior coverage**.

---

## Setup & Installation

### Prerequisites

- Node.js **v18+**
- npm or yarn

### Install dependencies

```bash
npm install
```

---

## Running the Project Locally

```bash
npm run dev
```

Then open:

```
http://localhost:3000
```

---

## Running Tests

```bash
npm run test
```

---

## Deployment

The project is deployed using **Vercel**.

- Vercel handles build and deployment automatically
- GitHub Actions is used as a **quality gate** (linting & tests)
