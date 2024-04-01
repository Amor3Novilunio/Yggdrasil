import { Todo_List } from "../../models/Todolist_List";
import request from "../Agent";

const Todolist_Request_List = {
  list: () => request.get<Todo_List[]>("/Todolist/List"),

  getById: (id: string) => request.get<Todo_List>(`/Todolist/List/${id}`),

  create: (Todo_List: Todo_List) =>
    request.post<void>("/Todolist/List", Todo_List),

  update: (Todo_List: Todo_List) =>
    request.put<void>(`/Todolist/List/${Todo_List.id}`, Todo_List),

  delete: (id: string) => request.del<void>(`/Todolist/List/${id}`),
};

export default Todolist_Request_List;
