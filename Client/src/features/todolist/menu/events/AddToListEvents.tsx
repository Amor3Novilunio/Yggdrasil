import { useState } from "react";
import { useStore } from "../../../../app/stores/Store";
import { Todo_List } from "../../../../app/models/Todolist_List";

export default function AddToListEvent() {
  const { todolistStore } = useStore();

  const [showTextInput, setShowTextInput] = useState(false);
  const [listValue, setListValue] = useState("");

  const onClickToInputHandler = () => {
    document.getElementById("AddListBtn")?.focus();
    setShowTextInput(true);
  };

  const closeInputHandler = () => {
    setListValue("");
    setShowTextInput(false);
  };

  const inputKeyUpHandler = (e: any) => {
    e.key === "Escape" && closeInputHandler();
    e.key === "Enter" && saveList();
  };

  const OnChangeInput = (e: any) => setListValue(e.target.value);

  const saveList = () => {
    closeInputHandler();
    let Entry: Todo_List = {
      list_Title: listValue,
    };
    todolistStore.list.createRequestList(Entry);
  };

  return {
    listValue,
    showTextInput,
    closeInputHandler,
    onClickToInputHandler,
    inputKeyUpHandler,
    saveList,
    OnChangeInput,
  };
};
