import { useEffect, useState } from "react";
import { useStore } from "../../../../../app/stores/Store";
import { useParams } from "react-router-dom";

export default function ListOverviewEvent() {
  const { todolistStore } = useStore();
  const [show, setShow] = useState<boolean | undefined>(undefined);
  const { id } = useParams();
  const taskStore = todolistStore.task;
  const listStore = todolistStore.list;
  const listItem = listStore.listItem;
  const taskArray = taskStore.taskArray;
  // Request ListItemByID
  const getListItem = () => {
    id && listStore.getRequestByListId(id);
  };

  // getTaskListOfThisId
  const getTaskList = () => {
    id && taskStore.getRequestTaskList(id);
  };

  //DeleteThisList
  const onClickDeleteList = () => {
    id && listStore.deleteRequestListItem(id);
  };

  // offSetFormHandler
  const setShowHandlerFalse = () => setShow(false);
  const setShowHandlerTrue = () => setShow(true);

  useEffect(() => {
    getListItem();
    getTaskList();
  }, [id]);

  return {
    taskArray,
    listItem,
    show,
    onClickDeleteList,
    setShowHandlerFalse,
    setShowHandlerTrue,
    getTaskList,
    getListItem,
  };
}
