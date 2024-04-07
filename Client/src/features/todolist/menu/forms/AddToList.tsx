import { FaCheck, FaPlus } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import AddToListEvent from "../events/AddToListEvents";

export default function AddToList() {

  const {
    showTextInput,
    listValue,
    inputKeyUpHandler,
    closeInputHandler,
    OnChangeInput,
    onClickToInputHandler,
    saveList,
  } = AddToListEvent();

  return !showTextInput ? (
    <>
      <div
        className="flex space-x-3 items-center ml-2 cursor-pointer"
        onClick={onClickToInputHandler}
      >
        <FaPlus />
        <p>Add New List</p>
      </div>
    </>
  ) : (
    <>
      <div className="flex space-x-1">
        <input
          autoFocus
          id="AddListBtn"
          type="text"
          name="listName"
          placeholder="New List Name"
          value={listValue}
          onChange={OnChangeInput}
          className="p-2 bg-slate-100 shadow-inner rounded w-full outline-none"
          onKeyUp={inputKeyUpHandler}
        />
        <button className="p-2 shadow-lg rounded" onClick={saveList}>
          <FaCheck />
        </button>
        <button className="p-2 shadow-lg rounded" onClick={closeInputHandler}>
          <FaX />
        </button>
      </div>
    </>
  );
};