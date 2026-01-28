import reducer, {
  addTodo,
  deleteTodo,
  hydrateTodos,
  setFilter,
  toggleTodo,
} from "@/store/todoSlice";

import type { Todo } from "@/types/todo";

const initialState = {
  items: [],
  filter: "all",
};

describe("todoSlice - hydrateTodos", () => {
  it("should hydrate todos from payload", () => {
    const todos: Todo[] = [{ id: 1, title: "Test Todo", completed: false }];

    const state = reducer(initialState, hydrateTodos(todos));

    expect(state.items).toHaveLength(1);
    expect(state.items[0].title).toBe("Test Todo");
  });
});

describe("todoSlice - addTodo", () => {
  it("should add a new todo", () => {
    const state = reducer(initialState, addTodo("Learn Vitest"));

    expect(state.items).toHaveLength(1);
    expect(state.items[0]).toMatchObject({
      title: "Learn Vitest",
      completed: false,
    });
  });
});

describe("todoSlice - toggleTodo", () => {
  it("should toggle completed state", () => {
    const populatedState = {
      items: [{ id: 1, title: "Task", completed: false }],
      filter: "all",
    };

    const state = reducer(populatedState, toggleTodo(1));

    expect(state.items[0].completed).toBe(true);
  });
});

describe("todoSlice - deleteTodo", () => {
  it("should remove todo by id", () => {
    const populatedState = {
      items: [{ id: 1, title: "Task", completed: false }],
      filter: "all",
    };

    const state = reducer(populatedState, deleteTodo(1));

    expect(state.items).toHaveLength(0);
  });
});

describe("todoSlice - setFilter", () => {
  it("should update filter", () => {
    const state = reducer(initialState, setFilter("completed"));

    expect(state.filter).toBe("completed");
  });
});
