import { useStore } from "../../../app/stores/Store";

export default function TodolistEvents() {
  const { todolistStore } = useStore();
  const listStore = todolistStore.list;

  const getList = async () => await listStore.getRequestList();

  return { getList, listStore };
}
