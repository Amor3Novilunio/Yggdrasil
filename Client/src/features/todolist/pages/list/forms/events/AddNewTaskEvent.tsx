import { useEffect, useState } from "react";
import { useStore } from "../../../../../../app/stores/Store";
import { Todo_Task } from "../../../../../../app/models/Todolist_Task";
import { useParams } from "react-router-dom";

export default function AddNewTaskEvent() {
  const { todolistStore } = useStore();
  const taskStore = todolistStore.task;
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const { id } = useParams();

  const onChangeCalendarHandler = (val: Date) => {
    setDueDate(val);
  };

  const taskNameInputHandler = (e: any) => setTaskName(e.target.value);

  const taskDescriptionInputHandler = (e: any) =>
    setTaskDescription(e.target.value);

  const deleteTask = () => {
    taskStore.taskItem?.id &&
      todolistStore.task
        .deleteRequestTaskItem(taskStore.taskItem?.id)
        .then(() => clearInputFields());
  };

  const clearInputFields = () => {
    setTaskDescription("");
    setTaskName("");
    setDueDate(new Date());
    taskStore.clearTaskItem();
  };

  // Save Task and Clear Empty
  const SaveTask = () => {
    let listId = id;
    if (listId && taskName) {
      let Entry: Todo_Task = {
        list_ID: listId,
        task_Name: taskName,
        task_Description: taskDescription,
        due_Date: new Date(dueDate).toISOString().split("T")[0],
      };
      taskStore.createRequestTask(Entry).then(() => clearInputFields());
    }
  };

  const updateTask = () => {
    let listId = id;
    if (listId && taskName) {
      let Entry: Todo_Task = {
        id: taskStore.taskItem?.id,
        list_ID: listId,
        task_Name: taskName,
        task_Description: taskDescription,
        due_Date: new Date(dueDate).toISOString().split("T")[0],
      };
      taskStore.updateRequestTask(Entry).then(() => clearInputFields());
    }
  };

  // if taskItem is not Empty Update Data
  useEffect(() => {
    if (taskStore.taskItem) {
      setTaskDescription(taskStore.taskItem.task_Description ?? "");
      setTaskName(taskStore.taskItem.task_Name);
      setDueDate(new Date(taskStore.taskItem.due_Date));
    }
  }, [taskStore.taskItem]);

  return {
    taskStore,
    dueDate,
    setDueDate,
    onChangeCalendarHandler,
    taskName,
    taskDescription,
    taskNameInputHandler,
    taskDescriptionInputHandler,
    deleteTask,
    clearInputFields,
    SaveTask,
    updateTask,
  };
}
