import { useEffect, useState } from "react";
import { useStore } from "../../../../../../app/stores/Store";
import { Todo_Task } from "../../../../../../app/models/Todolist_Task";
import { useParams } from "react-router-dom";
import { IAddNewTask } from "../interface/Forms";

export default function AddNewTaskEvent() {
  const { todolistStore } = useStore();
  const taskStore = todolistStore.task;
  const [formInputs, setFormInputs] = useState<IAddNewTask>({
    name: "",
    description: "",
  });
  // TBRemove
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const { id } = useParams();

  const onChangeCalendarHandler = (val: Date) => {
    setDueDate(val);
  };

  const FormInputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const deleteTask = () => {
    taskStore.taskItem?.id &&
      todolistStore.task
        .deleteRequestTaskItem(taskStore.taskItem?.id)
        .then(() => clearInputFields());
  };

  const clearInputFields = () => {
    setFormInputs({ name: "", description: "" });
    setDueDate(new Date());
    taskStore.clearTaskItem();
  };

  // Save Task and Clear Empty
  const SaveTask = () => {
    let listId = id;
    if (listId) {
      let Entry: Todo_Task = {
        list_ID: listId,
        task_Name: formInputs.name,
        task_Description: formInputs.description,
        due_Date: new Date(dueDate).toISOString().split("T")[0],
      };
      taskStore.createRequestTask(Entry).then(() => clearInputFields());
    }
  };

  const updateTask = () => {
    let listId = id;
    if (listId) {
      let Entry: Todo_Task = {
        id: taskStore.taskItem?.id,
        list_ID: listId,
        task_Name: formInputs.name,
        task_Description: formInputs.description,
        due_Date: new Date(dueDate).toISOString().split("T")[0],
      };
      taskStore.updateRequestTask(Entry).then(() => clearInputFields());
    }
  };

  // if taskItem is not Empty Update Data
  useEffect(() => {
    if (taskStore.taskItem) {
      setFormInputs({
        name:taskStore.taskItem.task_Name,
        description:taskStore.taskItem.task_Description ?? ""
      })
      setDueDate(new Date(taskStore.taskItem.due_Date));
    }
  }, [taskStore.taskItem]);

  return {
    taskStore,
    dueDate,
    setDueDate,
    onChangeCalendarHandler,
    formInputs,
    FormInputHandler,
    deleteTask,
    clearInputFields,
    SaveTask,
    updateTask,
  };
}
