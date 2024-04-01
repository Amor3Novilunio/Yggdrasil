import { useState } from "react";
import { useStore } from "../../../app/stores/Store";

const AddListEventHandler = () => {
  const { todolistStore } = useStore();

  const [listEvent, setListEvent] = useState(false);
  const [ListValue, setListValue] = useState("");

  const onClickToInputHandler = () => {
    document.getElementById("AddListBtn")?.focus();
    setListEvent(true);
  };

  const closeInputHandler = () => {
    setListValue("");
    setListEvent(false);
  };

  const inputKeyUpHandler = (e: any) => {
    e.key === "Escape" && closeInputHandler();
    e.key === "Enter" && saveChanges();
  };

  const OnChangeInput = (e: any) => setListValue(e.target.value);

  const saveChanges = () => {
    closeInputHandler();
    todolistStore.createList(ListValue);
  };

  return {
    ListValue,
    listEvent,
    closeInputHandler,
    onClickToInputHandler,
    inputKeyUpHandler,
    saveChanges,
    OnChangeInput,
  };
};

const MenuEventHandler = () => {
  const [listHeight, setListHeight] = useState(false);

  const listHeightChecker = (list: any) =>
    list.length > 8 ? setListHeight(true) : setListHeight(false);

  return { listHeight, listHeightChecker };
};

const AddTaskEventHandler=()=>{
  return <></>
}

export default { AddTaskEventHandler, AddListEventHandler, MenuEventHandler };
