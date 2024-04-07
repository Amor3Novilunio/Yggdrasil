import { makeAutoObservable, runInAction } from "mobx";
import Todolist_Request_List from "../../api/Todolist/List";
import { Todo_List } from "../../models/Todolist_List";

export default class List {
    newListName = "";
    listArray: Todo_List[] = [];
    listItem: Todo_List | undefined;

    constructor() {
        makeAutoObservable(this);
    }

    // Request
    getRequestList = async () => {
        await Todolist_Request_List.list().then((request) =>
            runInAction(() => this.listArray = request)
        );
    }

    getRequestByListId = async (id: string) => {
        await Todolist_Request_List.getById(id).then((request) =>
            runInAction(() => this.listItem = request)
        );
    }

    createRequestList = async (Entry: Todo_List) => {
        if (Entry) {
            Entry.created_By = "Amor";
            await Todolist_Request_List.create(Entry).then(() => this.getRequestList());
        }
    }

    deleteRequestListItem = async (id: string) => {
        await Todolist_Request_List.delete(id).then(() => {
            this.getRequestList()
        });
    }
}