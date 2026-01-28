"use client";

import { store } from "@/store";
import { hydrateTodos } from "@/store/todoSlice";
import { loadTodos } from "@/utils/todoStorage";
import { useEffect } from "react";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export function ReduxProvider({ children }: Props) {
  useEffect(() => {
    const todos = loadTodos();
    store.dispatch(hydrateTodos(todos));
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
