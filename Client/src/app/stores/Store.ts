import { createContext, useContext } from "react";
import TodolistStore from "./TodoListStore";

interface Store {
  todolistStore: TodolistStore;
}

export const store: Store = {
    todolistStore:new TodolistStore()
};

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}
