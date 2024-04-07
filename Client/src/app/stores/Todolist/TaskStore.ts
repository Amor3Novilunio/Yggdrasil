import { makeAutoObservable, runInAction } from "mobx";
import { Todo_Task } from "../../models/Todolist_Task";
import Todolist_Request_Task from "../../api/Todolist/Tasks";

export default class Task {
    taskArray: Todo_Task[] = [];
    taskItem: Todo_Task | undefined;
    constructor() {
        makeAutoObservable(this);
    }

    getRequestTaskList = async (id: string) => {
        await Todolist_Request_Task.list().then((request) =>
            runInAction(() => {
                this.taskArray = request.filter((value: Todo_Task) => value.list_ID === id);
            })
        );
    }

    deleteRequestTaskItem = async (id: string) => {
        await Todolist_Request_Task.delete(id)
        this.taskItem?.list_ID && this.getRequestTaskList(this.taskItem?.list_ID);
    }

    getRequestTaskById = async (id: string) => {
        await Todolist_Request_Task.getById(id).then((request) => runInAction(() => this.taskItem = request))
    }

    createRequestTask = async (Entry: Todo_Task) => {
        if (Entry) {
            Entry.created_By = "Amor";
            Entry.date_Created = new Date();
            await Todolist_Request_Task.create(Entry)
            this.getRequestTaskList(Entry.list_ID);
        }
    }

    updateRequestTask = async (Entry: Todo_Task) => {
        if (Entry) {
            Entry.date_Modified = new Date();
            await Todolist_Request_Task.update(Entry);
            this.getRequestTaskList(Entry.list_ID);
        }
    }

    clearTaskItem = () => this.taskItem = undefined;
}
