import { useStore } from "../../../../../../app/stores/Store";

export default function TaskEvent() {
  const { todolistStore } = useStore();
  const taskStore = todolistStore.task;
  const setTaskItem = (id: string | undefined) =>
    id && taskStore.getRequestTaskById(id);
  return { setTaskItem };
}
