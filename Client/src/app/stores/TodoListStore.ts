import List from "./Todolist/ListStore";
import Task from "./Todolist/TaskStore";

class TodolistStore {
  task = new Task();
  list = new List();
}

export default TodolistStore;
