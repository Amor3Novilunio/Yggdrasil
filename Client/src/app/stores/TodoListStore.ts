import { makeAutoObservable } from "mobx";
import Todolist_Request_List from "../api/Todolist/list";
import {Todo_List} from "../models/Todolist_List";

class TodolistStore {
  newListName = "";
  listData: Todo_List[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  
  // Request
  getList = async () => {
    await Todolist_Request_List.list().then((result)=>{
      this.listData = result;
    });
  }

  createList= async (value:string)=>
  {
    let Entry:Todo_List = {
      list_Title:value,
      created_By:"Amor"
    };
    await Todolist_Request_List.create(Entry).then(() => this.getList());
  }

}


export default TodolistStore;
