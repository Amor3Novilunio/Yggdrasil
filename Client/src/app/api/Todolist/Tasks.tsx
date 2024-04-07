import { Todo_Task } from "../../models/Todolist_Task";
import request from "../Agent";

const Todolist_Request_Task = {
  list: () => request.get<Todo_Task[]>("/Todolist/Task"),

  getById: (id: string) => request.get<Todo_Task>(`/Todolist/Task/${id}`),

  create: (Todo_Task: Todo_Task) =>
    request.post<void>("/Todolist/Task", Todo_Task),

  update: (Todo_Task: Todo_Task) =>
    request.put<void>(`/Todolist/Task/${Todo_Task.id}`, Todo_Task),

  delete: (id: string) => request.del<void>(`/Todolist/Task/${id}`),
};

export default Todolist_Request_Task;
