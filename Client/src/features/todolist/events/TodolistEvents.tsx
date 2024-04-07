import { useEffect } from "react";
import { useStore } from "../../../app/stores/Store";
import { useNavigate } from "react-router-dom";

export default function TodolistEvents() {
  const { todolistStore } = useStore();
  const listStore = todolistStore.list;
  const navigation = useNavigate();
  const getList = async () => await listStore.getRequestList();
  // Re-render when List is Active
  useEffect(() => {
    getList();
  }, [listStore]);
  // 
  useEffect(()=>{
    navigation("/Todolist/Dashboard");
  },[])
  return { getList, listStore };
}
